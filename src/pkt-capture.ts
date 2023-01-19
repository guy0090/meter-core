import cap from "cap";
import { isIPv4 } from "net";
import { TypedEmitter } from "tiny-typed-emitter";
import { TCPTracker, TCPSession, ListenOptions } from "./tcp_tracker";
import { execSync } from "child_process";
import type { Logger } from "winston";

const { findDevice, deviceList } = cap.Cap;
const { Ethernet, PROTOCOL, IPV4, TCP } = cap.decoders;

export { findDevice, deviceList };

var logger: Console | Logger = console;
export const setLogger = (l: Console | Logger) => !l ? logger = console : logger = l;

interface IPktCapture {
  tcpTracker: TCPTracker;
  device: string;
  port: number;
  //device must be an ip for RawSocket or device path for Pcap
  constructor(device: string, port: number): void;
  listen(): void;
  close(): void;
}
interface PktCapture extends IPktCapture {}
interface PktCaptureEvents {
  packet: (buf: Buffer) => void;
}
abstract class PktCapture extends TypedEmitter<PktCaptureEvents> implements IPktCapture {
  tcpTracker: TCPTracker;
  device: string;
  port: number;
  constructor(device: string, listen_options: ListenOptions) {
    super();

    this.device = device;
    this.port = listen_options.port;
    this.tcpTracker = new TCPTracker(listen_options);
    this.tcpTracker.on("session", (session: TCPSession) => {
      logger.info(
        `[meter-core/pkt-capture] - New session ${session.src}->${session.dst} ${
          session.is_ignored ? "(ingored) " : ""
        }(Total: ${Object.keys(this.tcpTracker.sessions).length})`
      );
      session.on("payload_recv", (data: Buffer) => {
        this.emit("packet", data);
      });
    });
  }
  dispatchPacket(packet: Buffer): void {
    const ethernet = Ethernet(packet);
    if (ethernet.info.type === PROTOCOL.ETHERNET.IPV4) {
      const ipv4 = IPV4(packet, ethernet.offset);
      if (ipv4.info.protocol === PROTOCOL.IP.TCP) {
        const tcp = TCP(packet, ipv4.offset);
        this.tcpTracker.track_packet(packet, ipv4, tcp);
      }
    }
  }
}
class PcapCapture extends PktCapture {
  c: cap.Cap;
  #buffer: Buffer;
  constructor(device: string, listen_options: ListenOptions) {
    //TODO: check device format (must be device path)
    super(device, listen_options); //Sets TCPTracker
    this.c = new cap.Cap();
    this.#buffer = Buffer.alloc(65535);
  }
  override listen(): void {
    const linkType = this.c.open(
      this.device,
      `tcp and (src port ${this.port} or dst port ${this.port})`,
      10 * 1024 * 1024,
      this.#buffer
    );
    if (this.c.setMinBytes) this.c.setMinBytes(54); // pkt header size
    this.c.on("packet", (nbytes: number, truncated: boolean) => {
      if (linkType === "ETHERNET") {
        this.dispatchPacket(this.#buffer);
      } else if (linkType === "NULL" && this.device === "\\Device\\NPF_Loopback") {
        const type = this.#buffer.readUInt32LE();
        //IP header loopback
        if (type !== 2) return;
        this.dispatchPacket(this.#buffer.subarray(4));
      }
    });
  }
  override close() {
    this.c.close();
  }
}

interface PktCaptureAllEvents {
  packet: (buf: Buffer, deviceName: string) => void;
}
export enum PktCaptureMode {
  MODE_PCAP,
}

export class PktCaptureAll extends TypedEmitter<PktCaptureAllEvents> {
  captures: Map<string, PktCapture>;

  constructor(mode: PktCaptureMode) {
    super();
    this.captures = new Map();
    if (!adminRelauncher(mode)) {
      logger.warn(
        "[meter-core/PktCaptureAll] - Couldn't restart as admin, fallback to pcap mode, consider starting as admin yourself."
      );
      mode = PktCaptureMode.MODE_PCAP;
    }

    if (mode === PktCaptureMode.MODE_PCAP) {
      for (const device of deviceList()) {
        for (const address of device.addresses) {
          if (address.addr && address.netmask && isIPv4(address.addr!)) {
            try {
              const pcapc = new PcapCapture(device.name, {
                ip: address.addr,
                mask: address.netmask,
                port: 6040,
              });
              // re-emit
              pcapc.on("packet", (buf) => this.emit("packet", buf, device.name));
              this.captures.set(device.name, pcapc);
              pcapc.listen();
            } catch (e) {
              logger.error(`[meter-core/PktCaptureAll] ${e}`);
            }
          }
        }
      }
    } else {
      //Unknown PktCaptureMode, ignoring
    }
  }

  close() {
    for (const cap of this.captures.values()) cap.close();
  }
}

function updateFirewall(): void {
  const command = `netsh advfirewall firewall delete rule name="lost-ark-dev" & netsh advfirewall firewall add rule name="lost-ark-dev" dir=in action=allow program="${process.argv[0]}"`;
  execSync(command, {
    stdio: "inherit",
  });
}

function getArgList(args: string[]): string {
  const filtered = args.filter((a) => a !== "");
  if (filtered.length === 0) return "'-relaunch'";
  return "'" + filtered.join("','") + "','-relaunch'";
}
function isAdmin(): boolean {
  //Made sync from https://github.com/sindresorhus/is-admin/blob/main/index.js
  try {
    execSync(`fsutil dirty query ${process.env["systemdrive"] ?? "c:"}`);
  } catch {
    return false;
  }
  return true;
}
/**
 *
 * @returns False if we have to fall back to pcap, process exit if not, True if already in admin state
 */
export function adminRelauncher(mode: PktCaptureMode): boolean {
  if (mode == PktCaptureMode.MODE_PCAP) return true;
  //Check if we started our process with the -relaunch paramater (which means that it failed, and we want to fall back to pcap instead)

  if (process.argv.includes("-relaunch")) return true; // We assume that we already relaunched successfully earlier, so we don't need to check admin again
  if (isAdmin()) return true;
  //TODO: maybe implement another way with Elevate.exe that is shipped with electron (for ppl that doesn't have powershell installed)
  const command = `cmd /c "powershell -Command Start-Process -FilePath '${
    process.argv[0]
  }' -Verb RunAs -ArgumentList ${getArgList(process.argv.splice(1))}"`;

  try {
    execSync(command, {
      stdio: "inherit",
    });
  } catch (e) {
    logger.info(`[meter-core/pkt-capture] - ${e}`);
    return false;
  }
  process.exit(0);
}
