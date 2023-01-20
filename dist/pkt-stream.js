"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name41 in all)
    __defProp(target, name41, { get: all[name41], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/pkt-stream.ts
var pkt_stream_exports = {};
__export(pkt_stream_exports, {
  PKT: () => PKT,
  PKTStream: () => PKTStream
});
module.exports = __toCommonJS(pkt_stream_exports);
var import_tiny_typed_emitter = require("tiny-typed-emitter");

// src/packets/stream.ts
var Read = class {
  b;
  o;
  constructor(buf) {
    this.b = buf;
    this.o = 0;
  }
  skip(length = 0) {
    this.o += length;
  }
  bool() {
    return this.u8() === 1;
  }
  u8() {
    return this.b.readUint8(this.o++);
  }
  i8() {
    return this.b.readInt8(this.o++);
  }
  u16() {
    const value = this.b.readUint16LE(this.o);
    this.o += 2;
    return value;
  }
  i16() {
    const value = this.b.readInt16LE(this.o);
    this.o += 2;
    return value;
  }
  u32() {
    const value = this.b.readUint32LE(this.o);
    this.o += 4;
    return value;
  }
  i32() {
    const value = this.b.readInt32LE(this.o);
    this.o += 4;
    return value;
  }
  f32() {
    const value = this.b.readFloatLE(this.o);
    this.o += 4;
    return value;
  }
  u64() {
    const value = this.b.readBigUint64LE(this.o);
    this.o += 8;
    return value;
  }
  i64() {
    const value = this.b.readBigInt64LE(this.o);
    this.o += 8;
    return value;
  }
  string(maxLength) {
    let length = this.u16();
    if (length <= maxLength) {
      length = length * 2;
      const value = this.b.toString("utf16le", this.o, this.o + length);
      this.o += length;
      return value;
    }
    return "";
  }
  bytes(length = 0, maxLength, multiplier) {
    if (maxLength && length > maxLength)
      return Buffer.alloc(0);
    if (multiplier)
      length = length * multiplier;
    const value = Buffer.from(this.b.subarray(this.o, this.o + length));
    this.o += length;
    return value;
  }
  array(length, callbackfn, maxLength) {
    if (maxLength && length > maxLength)
      return [];
    return new Array(length).fill(void 0).map(callbackfn);
  }
};

// src/packets/generated/structures/AbilityData.ts
function read(reader) {
  const data = {};
  data.Level = reader.u8();
  data.Id = reader.u32();
  data.Points = reader.u16();
  return data;
}

// src/packets/generated/definitions/PKTAbilityChangeNotify.ts
function read2(buf) {
  const reader = new Read(buf);
  const data = {};
  data.abilityDataList = reader.array(reader.u16(), () => read(reader), 100);
  return data;
}
var name = "PKTAbilityChangeNotify";
var opcode = 16300;

// src/packets/generated/structures/ActiveAbility.ts
function read3(reader) {
  const data = {};
  data.FeatureType = reader.u16();
  data.Level = reader.u32();
  return data;
}

// src/packets/generated/definitions/PKTActiveAbilityNotify.ts
function read4(buf) {
  const reader = new Read(buf);
  const data = {};
  data.activeAbilityList = reader.array(reader.u16(), () => read3(reader), 60);
  data.ObjectId = reader.u64();
  return data;
}
var name2 = "PKTActiveAbilityNotify";
var opcode2 = 29688;

// src/packets/generated/definitions/PKTAddonSkillFeatureChangeNotify.ts
function read5(buf) {
  const reader = new Read(buf);
  const data = {};
  data.ObjectId = reader.u64();
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const c = {};
      c.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      c.SkillId = reader.u32();
      return c;
    },
    200
  );
  data.struct_115 = reader.bytes(reader.u16(), 200, 4);
  return data;
}
var name3 = "PKTAddonSkillFeatureChangeNotify";
var opcode3 = 14375;

// src/packets/generated/definitions/PKTAuthTokenResult.ts
function read6(buf) {
  const reader = new Read(buf);
  const data = {};
  data.PacketResultCode = reader.u32();
  data.Unk1_m = reader.bytes(reader.u32(), 688);
  return data;
}
var name4 = "PKTAuthTokenResult";
var opcode4 = 35847;

// src/packets/generated/definitions/PKTBlockSkillStateNotify.ts
function read7(buf) {
  const reader = new Read(buf);
  const data = {};
  data.ObjectId = reader.u64();
  data.Type = reader.u8();
  data.ParalyzationMaxPoint = reader.u32();
  reader.skip(1);
  data.ParalyzationPoint = reader.u32();
  return data;
}
var name5 = "PKTBlockSkillStateNotify";
var opcode5 = 23429;

// src/packets/generated/definitions/PKTCounterAttackNotify.ts
function read8(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(2);
  data.SourceId = reader.u64();
  data.Type = reader.u32();
  data.TargetId = reader.u64();
  reader.skip(1);
  return data;
}
var name6 = "PKTCounterAttackNotify";
var opcode6 = 22606;

// src/packets/generated/definitions/PKTDeathNotify.ts
function read9(buf) {
  const reader = new Read(buf);
  const data = {};
  data.TargetId = reader.u64();
  data.Unk1 = reader.u32();
  data.Unk2 = reader.u32();
  data.Unk3 = reader.u64();
  data.Unk4 = reader.u8();
  data.SourceId = reader.u64();
  if (reader.bool())
    data.Unk6_0 = reader.u8();
  data.Unk7 = reader.u16();
  if (reader.bool())
    data.Unk8_0 = reader.u8();
  if (reader.bool())
    data.Unk9_0 = reader.u8();
  return data;
}
var name7 = "PKTDeathNotify";
var opcode7 = 21574;

// src/packets/generated/definitions/PKTInitAbility.ts
function read10(buf) {
  const reader = new Read(buf);
  const data = {};
  data.abilityDataList = reader.array(reader.u16(), () => read(reader), 100);
  data.struct_120 = reader.bytes(reader.u16(), 346, 48);
  return data;
}
var name8 = "PKTInitAbility";
var opcode8 = 29820;

// src/packets/common/LostArkDateTime.ts
var daysInMonths = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function IsLeapYear(y) {
  return !(y % 4 || !(y % 100) && y % 400);
}
function isValidDate(year, month, day) {
  if (year > 99) {
    if (year < 1752 || year == 1752 && (month < 9 || month == 9 && day << 14)) {
      return false;
    }
  } else {
    year += 1900;
  }
  return day > 0 && month <= 12 && (day <= daysInMonths[month] || day == 29 && month == 2 && IsLeapYear(year));
}
function bigintToDate(value) {
  let LODWORD = Number(value & 0xffffffffn);
  let HIDWORD = Number(value >> 32n & 0xffffffffn);
  let year = LODWORD & 4095;
  let month = (LODWORD & 65535) >> 12;
  let day = LODWORD >> 16 & 31;
  if (isValidDate(year, month, day)) {
  } else {
    year = month = day = 0;
  }
  let h = LODWORD >> 21 & 31;
  let m = LODWORD >> 26 & 63;
  let s = HIDWORD & 63;
  let ms = HIDWORD >> 6 & 16383;
  if (h < 24 && m < 60 && s < 60 && ms < 1e3) {
  } else {
    h = 24;
    m = s = ms = 0;
  }
  return new Date(Date.UTC(year <= 99 ? year + 1900 : year, month - 1, day, h, m, s, ms));
}
function read11(reader) {
  const s = reader.u16();
  if ((s & 4095) < 2079) {
    reader.o -= 2;
    return bigintToDate(reader.i64());
  } else {
    return bigintToDate(BigInt(s) & 0xfffn | 0x11000n);
  }
}

// src/packets/generated/definitions/PKTInitEnv.ts
function read12(buf) {
  const reader = new Read(buf);
  const data = {};
  data.lostArkDateTime = read11(reader);
  data.Unk1 = reader.u8();
  data.PlayerId = reader.u64();
  data.Unk3 = reader.u64();
  data.Unk4 = reader.u32();
  data.struct_541 = reader.string(128);
  data.Unk6 = reader.u32();
  data.struct_25 = reader.array(
    reader.u16(),
    () => {
      const g = {};
      g.struct_529 = reader.string(32);
      g.versionString = reader.string(64);
      g.struct_541 = reader.string(128);
      return g;
    },
    64
  );
  return data;
}
var name9 = "PKTInitEnv";
var opcode9 = 43353;

// src/packets/common/ReadNBytesInt64.ts
function bytesToInt64(value) {
  if (value.length === 0)
    return 0n;
  if (value.length > 8)
    throw new Error("Value is too large");
  const buf = Buffer.alloc(8);
  value.copy(buf);
  return buf.readBigInt64LE();
}
function read13(reader) {
  const flag = reader.u8();
  const bytes = reader.bytes(flag >> 1 & 7);
  const result = bytesToInt64(bytes) << 4n | BigInt(flag >> 4);
  return (flag & 1) === 0 ? result : -result;
}

// src/packets/generated/structures/StatusEffectData.ts
function read14(reader) {
  const data = {};
  data.SourceId = reader.u64();
  data.StatusEffectId = reader.u32();
  if (reader.bool())
    data.Value = reader.bytes(16);
  data.lostArkDateTime = read11(reader);
  data.struct_420 = reader.bytes(reader.u16(), 8, 7);
  data.InstanceId = reader.u64();
  data.EffectInstanceId = reader.u32();
  data.Unk7 = reader.u8();
  data.Unk8 = reader.u32();
  if (reader.bool())
    data.Unk9_0 = reader.u64();
  data.SkillLevel = reader.u8();
  return data;
}

// src/packets/generated/structures/Struct_674.ts
function read15(reader) {
  const data = {};
  data.Unk0 = reader.u8();
  data.Unk1 = reader.u8();
  data.Unk2 = reader.u8();
  data.Unk3 = reader.u64();
  data.Unk4 = read13(reader);
  data.Unk5 = read13(reader);
  data.Unk6 = reader.u16();
  return data;
}

// src/packets/generated/definitions/PKTInitPC.ts
function read16(buf) {
  const reader = new Read(buf);
  const data = {};
  data.struct_313 = reader.string(7);
  if (reader.bool())
    data.Unk1_0 = reader.u32();
  data.Unk2 = reader.u32();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const h = {};
      h.StatType = reader.u8();
      h.Value = read13(reader);
      return h;
    },
    152
  );
  data.Unk4 = reader.u8();
  data.Unk5 = reader.u32();
  data.Unk6 = reader.u8();
  data.GearLevel = reader.u32();
  data.Unk8 = reader.u8();
  data.Unk9 = reader.u32();
  data.Unk10 = reader.u32();
  data.Unk11 = reader.u64();
  data.Unk12 = reader.u8();
  data.Unk13 = reader.u32();
  data.statusEffectDatas = reader.array(reader.u16(), () => read14(reader), 80);
  data.Unk15 = reader.u8();
  data.Unk16 = reader.u8();
  data.Unk17 = reader.u8();
  data.PlayerId = reader.u64();
  data.CharacterId = reader.u64();
  data.Unk20 = reader.u8();
  data.Unk21 = reader.u8();
  data.Unk22 = reader.u8();
  data.Unk23 = reader.u16();
  data.Unk24 = reader.u32();
  data.Unk25 = reader.u8();
  data.Unk26 = reader.u8();
  data.Unk27 = reader.u16();
  data.Unk28 = reader.bytes(112);
  data.struct_366 = reader.array(reader.u16(), () => read15(reader), 5);
  data.Unk30 = reader.u16();
  data.Level = reader.u16();
  data.Unk32 = reader.u32();
  data.Unk33 = reader.u64();
  data.Unk34 = reader.u32();
  data.Unk35 = reader.u8();
  data.Unk36 = reader.u32();
  data.Unk37 = reader.bytes(25);
  data.Unk38 = reader.bytes(35);
  data.Unk39 = reader.u8();
  data.Unk40 = reader.u8();
  data.Unk41 = reader.u32();
  data.Unk42 = reader.u8();
  data.Unk43 = reader.u8();
  data.Unk44 = reader.u8();
  data.ClassId = reader.u16();
  data.Unk46 = reader.u8();
  data.Name = reader.string(20);
  data.Unk48 = reader.u64();
  data.Unk49 = reader.u32();
  data.Unk50 = reader.u64();
  data.struct_210 = reader.bytes(reader.u16(), 3, 17);
  data.Unk52 = reader.u8();
  data.struct_90 = reader.bytes(reader.u16(), 57);
  data.Unk54 = reader.u32();
  data.Unk55 = reader.u16();
  data.struct_319 = reader.bytes(reader.u16(), 104, 30);
  return data;
}
var name10 = "PKTInitPC";
var opcode10 = 399;

// src/packets/generated/structures/Struct_691.ts
function read17(reader) {
  const data = {};
  data.Unk0 = reader.u32();
  data.Unk1 = reader.u32();
  data.Unk2 = reader.u32();
  if (reader.bool())
    data.Unk3_0 = reader.bytes(9);
  if (reader.bool())
    data.Unk4_0 = reader.u32();
  return data;
}

// src/packets/generated/definitions/PKTInitLocal.ts
function read18(buf) {
  const reader = new Read(buf);
  const data = {};
  data.struct_400 = reader.array(reader.u16(), () => read17(reader), 300);
  data.Unk1 = reader.u64();
  data.struct_115 = reader.bytes(reader.u16(), 200, 4);
  data.Unk3 = reader.u32();
  data.Unk4 = reader.u8();
  data.struct_319 = reader.bytes(reader.u16(), 104, 30);
  data.Unk6 = reader.u64();
  data.struct_210 = reader.bytes(reader.u16(), 3, 17);
  data.Unk8 = reader.u8();
  data.struct_120 = reader.bytes(reader.u16(), 346, 48);
  data.Unk10 = reader.u8();
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const l = {};
      l.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      l.SkillId = reader.u32();
      return l;
    },
    200
  );
  data.statusEffectDatas = reader.array(reader.u16(), () => read14(reader), 80);
  if (reader.bool())
    data.Unk13_0 = reader.u32();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const p = {};
      p.StatType = reader.u8();
      p.Value = read13(reader);
      return p;
    },
    152
  );
  data.abilityDataList = reader.array(reader.u16(), () => read(reader), 100);
  return data;
}
var name11 = "PKTInitLocal";
var opcode11 = 25609;

// src/packets/generated/structures/Struct_636.ts
function read19(reader) {
  const data = {};
  data.struct_425 = reader.bytes(reader.u16(), 3, 14);
  data.Unk1 = reader.u16();
  data.lostArkDateTime = read11(reader);
  data.Unk3 = reader.u16();
  data.Unk4 = reader.u32();
  if (reader.bool())
    data.Unk5_0 = reader.u8();
  return data;
}

// src/packets/generated/structures/Struct_671.ts
function read20(reader) {
  const data = {};
  data.Unk0 = reader.u64();
  data.Unk1 = reader.u16();
  data.lostArkString = reader.string(20);
  data.struct_83 = reader.bytes(reader.u32(), 512);
  data.Unk4 = reader.u8();
  data.Unk5 = reader.u8();
  data.struct_297 = reader.array(reader.u16(), () => read19(reader), 30);
  data.Unk7 = reader.u8();
  return data;
}

// src/packets/common/Vector3F.ts
function i21(n) {
  if (n >> 20 === 1)
    return -((~n >>> 0) + 1 & 2097151);
  return n;
}
function read21(reader) {
  let b = reader.u64();
  return {
    x: i21(Number(b & 0x1fffffn)),
    y: i21(Number(b >> 21n & 0x1fffffn)),
    z: i21(Number(b >> 42n & 0x1fffffn))
  };
}

// src/packets/common/Angle.ts
function read22(reader) {
  return reader.u16() * (2 * Math.PI) / 65536;
}

// src/packets/generated/structures/NpcData.ts
function read23(reader) {
  const data = {};
  data.struct_366 = reader.array(reader.u16(), () => read15(reader), 5);
  data.Unk1 = reader.u8();
  data.SpawnIndex = reader.i32();
  if (reader.bool())
    data.Unk3_0 = reader.u8();
  if (reader.bool())
    data.Unk4_0 = reader.u16();
  if (reader.bool())
    data.Unk5_0 = reader.u64();
  data.Position = read21(reader);
  if (reader.bool())
    data.struct_671 = read20(reader);
  if (reader.bool())
    data.TransitIndex = reader.u32();
  data.statusEffectDatas = reader.array(reader.u16(), () => read14(reader), 80);
  if (reader.bool())
    data.Unk10_0 = reader.u32();
  data.Unk11 = reader.u8();
  if (reader.bool())
    data.Unk12_0 = reader.u8();
  if (reader.bool())
    data.Unk13_0 = reader.u8();
  if (reader.bool())
    data.Unk14_0 = reader.u8();
  if (reader.bool())
    data.struct_314 = reader.bytes(reader.u16(), 11, 9);
  if (reader.bool())
    data.Unk16_0 = reader.u8();
  data.DirectionYaw = read22(reader);
  if (reader.bool())
    data.Unk18_0 = reader.u8();
  if (reader.bool())
    data.Unk19_0 = reader.u32();
  data.ObjectId = reader.u64();
  data.Unk21 = reader.u16();
  data.Unk22 = reader.u8();
  if (reader.bool())
    data.Unk23_0 = reader.u8();
  data.Unk24 = reader.u8();
  if (reader.bool())
    data.Unk25_0 = reader.u16();
  data.TypeId = reader.u32();
  if (reader.bool())
    data.Unk27_0 = reader.u32();
  data.Unk28 = reader.u8();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const x = {};
      x.StatType = reader.u8();
      x.Value = read13(reader);
      return x;
    },
    152
  );
  if (reader.bool())
    data.struct_250 = reader.bytes(reader.u16(), 12, 12);
  data.Unk31 = reader.u8();
  if (reader.bool())
    data.Unk32_0 = reader.u32();
  return data;
}

// src/packets/generated/definitions/PKTNewNpc.ts
function read24(buf) {
  const reader = new Read(buf);
  const data = {};
  if (reader.bool()) {
    data.Unk0_0 = reader.string(20);
    data.Unk0_1 = reader.string(20);
  }
  data.Unk1 = reader.u8();
  data.NpcStruct = read23(reader);
  if (reader.bool())
    data.Unk3_0 = reader.u64();
  if (reader.bool())
    data.Unk4_0 = reader.u8();
  return data;
}
var name12 = "PKTNewNpc";
var opcode12 = 32635;

// src/packets/generated/definitions/PKTNewNpcSummon.ts
function read25(buf) {
  const reader = new Read(buf);
  const data = {};
  data.PublishReason = reader.u8();
  data.NpcData = read23(reader);
  reader.skip(22);
  data.OwnerId = reader.u64();
  reader.skip(9);
  return data;
}
var name13 = "PKTNewNpcSummon";
var opcode13 = 26596;

// src/packets/generated/structures/TrackMoveInfo.ts
function read26(reader) {
  const data = {};
  data.Unk0 = reader.u32();
  data.Unk1 = reader.u32();
  data.Unk2 = reader.bytes(12);
  if (reader.bool())
    data.Unk3_0 = reader.bytes(12);
  return data;
}

// src/packets/generated/structures/PCStruct.ts
function read27(reader) {
  const data = {};
  data.Unk0 = reader.u8();
  data.Unk1 = reader.u8();
  data.Unk2 = reader.u32();
  data.Unk3 = reader.u64();
  data.struct_83 = reader.bytes(reader.u32(), 512);
  data.Unk5 = reader.u32();
  data.Unk6 = reader.u8();
  data.Level = reader.u16();
  data.Unk8 = reader.u32();
  data.Unk9 = reader.u8();
  data.struct_297 = reader.array(reader.u16(), () => read19(reader), 30);
  data.statusEffectDatas = reader.array(reader.u16(), () => read14(reader), 80);
  data.PlayerId = reader.u64();
  data.Unk13 = reader.string(20);
  data.Unk14 = reader.bytes(25);
  data.Unk15 = reader.u32();
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const B = {};
      B.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      B.SkillId = reader.u32();
      return B;
    },
    200
  );
  data.ClassId = reader.u16();
  data.Unk18 = reader.u32();
  data.Unk19 = reader.u16();
  if (reader.bool())
    data.Unk20_0 = reader.bytes(12);
  data.Unk21 = reader.u8();
  data.Unk22 = reader.u8();
  data.Unk23 = reader.u8();
  data.Unk24 = reader.u32();
  data.struct_296 = reader.array(reader.u16(), () => read19(reader), 9);
  data.Heading = read22(reader);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const F = {};
      F.StatType = reader.u8();
      F.Value = read13(reader);
      return F;
    },
    152
  );
  data.Unk28 = reader.u16();
  data.Unk29 = reader.u8();
  data.struct_366 = reader.array(reader.u16(), () => read15(reader), 5);
  data.GearLevel = reader.u32();
  data.Unk32 = reader.u32();
  data.Unk33 = reader.u8();
  data.Unk34 = reader.u16();
  data.Unk35 = reader.u8();
  data.Unk36 = reader.u8();
  data.Name = reader.string(20);
  data.Unk5_m = reader.u32();
  data.Unk39 = reader.u8();
  data.CharacterId = reader.u64();
  data.Unk41 = reader.u32();
  data.Unk42 = reader.bytes(5);
  data.struct_115 = reader.bytes(reader.u16(), 200, 4);
  return data;
}

// src/packets/generated/definitions/PKTNewPC.ts
function read28(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk2_m = reader.u8();
  if (reader.bool())
    data.Unk4_0_m = reader.bytes(12);
  if (reader.bool())
    data.Unk3_0_m = reader.u32();
  if (reader.bool())
    data.Unk5_0_m = reader.bytes(20);
  if (reader.bool())
    data.TrackMoveInfo = read26(reader);
  data.PCStruct = read27(reader);
  data.Unk0_m = reader.u8();
  return data;
}
var name14 = "PKTNewPC";
var opcode14 = 58123;

// src/packets/common/TripodIndex.ts
function read29(reader) {
  return {
    first: reader.u8(),
    second: reader.u8(),
    third: reader.u8()
  };
}

// src/packets/common/TripodLevel.ts
function read30(reader) {
  return {
    first: reader.u16(),
    second: reader.u16(),
    third: reader.u16()
  };
}

// src/packets/generated/structures/ProjectileInfo.ts
function read31(reader) {
  const data = {};
  data.Unk0 = reader.u64();
  if (reader.bool())
    data.Unk1_0 = reader.u64();
  data.Unk2 = reader.u16();
  if (reader.bool())
    data.struct_314 = reader.bytes(reader.u16(), 11, 9);
  data.Unk4 = reader.u64();
  data.Unk5 = reader.u8();
  data.Unk6 = reader.u64();
  data.Unk7 = reader.u8();
  data.ProjectileId = reader.u64();
  data.tripodIndex = read29(reader);
  data.Unk10 = reader.u32();
  data.Unk11 = reader.u32();
  data.Unk12 = reader.u16();
  data.Unk13 = reader.u32();
  data.SkillLevel = reader.u8();
  if (reader.bool())
    data.Unk15_0 = reader.u32();
  data.tripodLevel = read30(reader);
  data.SkillId = reader.u32();
  data.SkillEffect = reader.u32();
  data.OwnerId = reader.u64();
  data.Unk20 = reader.u32();
  return data;
}

// src/packets/generated/definitions/PKTNewProjectile.ts
function read32(buf) {
  const reader = new Read(buf);
  const data = {};
  data.projectileInfo = read31(reader);
  return data;
}
var name15 = "PKTNewProjectile";
var opcode15 = 45143;

// src/packets/generated/definitions/PKTParalyzationStateNotify.ts
function read33(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(1);
  data.Enable = reader.bool();
  data.ParalyzationMaxPoint = reader.u32();
  reader.skip(1);
  data.DecreasePoint = reader.u32();
  data.HitCheckTime = reader.u32();
  data.ParalyzationPoint = reader.u32();
  data.ObjectId = reader.u64();
  reader.skip(1);
  data.NoHitCheckTime = reader.u32();
  return data;
}
var name16 = "PKTParalyzationStateNotify";
var opcode16 = 10632;

// src/packets/generated/structures/PartyMemberData.ts
function read34(reader) {
  const data = {};
  data.Unk0 = reader.u32();
  data.Unk1 = reader.u64();
  data.Unk2 = reader.u8();
  data.Unk3 = reader.u64();
  data.Unk4 = reader.u16();
  data.CharacterId = reader.u64();
  data.Unk6 = reader.u8();
  data.Unk7 = read13(reader);
  data.PartyMemberNumber = reader.u8();
  data.Unk9 = reader.u32();
  data.Unk10 = reader.u8();
  data.Unk11 = reader.u32();
  data.Unk12 = reader.u8();
  data.Name = reader.string(20);
  data.Unk14 = reader.u8();
  data.CharacterLevel = reader.u16();
  data.Unk16 = reader.u16();
  data.Unk17 = reader.u8();
  data.Unk18 = read13(reader);
  data.Unk19 = reader.u8();
  return data;
}

// src/packets/generated/definitions/PKTPartyInfo.ts
function read35(buf) {
  const reader = new Read(buf);
  const data = {};
  data.PartyType = reader.u8();
  data.MemberDatas = reader.array(reader.u16(), () => read34(reader), 40);
  data.LootGrade = reader.u32();
  data.PartyInstanceId = reader.u32();
  data.PartyLootType = reader.u8();
  data.RaidInstanceId = reader.u32();
  return data;
}
var name17 = "PKTPartyInfo";
var opcode17 = 8616;

// src/packets/generated/definitions/PKTPartyLeaveResult.ts
function read36(buf) {
  const reader = new Read(buf);
  const data = {};
  data.PartyInstanceId = reader.u32();
  data.Name = reader.string(20);
  data.PartyLeaveType = reader.u8();
  return data;
}
var name18 = "PKTPartyLeaveResult";
var opcode18 = 56943;

// src/packets/generated/definitions/PKTPartyPassiveStatusEffectAddNotify.ts
function read37(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk0_m = reader.u8();
  data.ObjectId = reader.u64();
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
var name19 = "PKTPartyPassiveStatusEffectAddNotify";
var opcode19 = 24702;

// src/packets/generated/definitions/PKTPartyPassiveStatusEffectRemoveNotify.ts
function read38(buf) {
  const reader = new Read(buf);
  const data = {};
  data.ObjectId = reader.u64();
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
var name20 = "PKTPartyPassiveStatusEffectRemoveNotify";
var opcode20 = 59968;

// src/packets/generated/definitions/PKTPartyStatusEffectAddNotify.ts
function read39(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk0 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => read14(reader), 80);
  data.CharacterId = reader.u64();
  data.Unk3 = reader.u64();
  data.PlayerIdOnRefresh = reader.u64();
  return data;
}
var name21 = "PKTPartyStatusEffectAddNotify";
var opcode21 = 5853;

// src/packets/generated/definitions/PKTPartyStatusEffectRemoveNotify.ts
function read40(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk0 = reader.u8();
  data.CharacterId = reader.u64();
  data.Unk2 = reader.u64();
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  return data;
}
var name22 = "PKTPartyStatusEffectRemoveNotify";
var opcode22 = 15434;

// src/packets/generated/definitions/PKTPartyStatusEffectResultNotify.ts
function read41(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(1);
  data.PartyInstanceId = reader.u32();
  reader.skip(20);
  data.RaidInstanceId = reader.u32();
  reader.skip(5);
  data.CharacterId = reader.u64();
  return data;
}
var name23 = "PKTPartyStatusEffectResultNotify";
var opcode23 = 57506;

// src/packets/generated/definitions/PKTPassiveStatusEffectAddNotify.ts
function read42(buf) {
  const reader = new Read(buf);
  const data = {};
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
var name24 = "PKTPassiveStatusEffectAddNotify";
var opcode24 = 6905;

// src/packets/generated/definitions/PKTPassiveStatusEffectRemoveNotify.ts
function read43(buf) {
  const reader = new Read(buf);
  const data = {};
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
var name25 = "PKTPassiveStatusEffectRemoveNotify";
var opcode25 = 50847;

// src/packets/generated/definitions/PKTRaidBossKillNotify.ts
function read44(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk0 = reader.bytes(7);
  return data;
}
var name26 = "PKTRaidBossKillNotify";
var opcode26 = 34040;

// src/packets/generated/definitions/PKTRaidResult.ts
function read45(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk0 = reader.u8();
  data.Unk1 = reader.u64();
  data.Unk2 = reader.u64();
  data.Unk3 = reader.u8();
  data.Unk4 = reader.u64();
  data.Unk5 = reader.u64();
  data.Unk6 = reader.u8();
  data.struct_43 = reader.array(
    reader.u16(),
    () => {
      const O = {};
      O.struct_494 = reader.bytes(reader.u16(), 3);
      O.Unk0_0_1 = read13(reader);
      O.Unk0_0_2 = read13(reader);
      O.Unk0_0_3 = reader.u32();
      return O;
    },
    3
  );
  return data;
}
var name27 = "PKTRaidResult";
var opcode27 = 13462;

// src/packets/generated/structures/UnpublishObject.ts
function read46(reader) {
  const data = {};
  data.ObjectId = reader.u64();
  data.UnpublishReason = reader.u8();
  return data;
}

// src/packets/generated/definitions/PKTRemoveObject.ts
function read47(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unpublishedObjects = reader.array(reader.u16(), () => read46(reader), 200);
  return data;
}
var name28 = "PKTRemoveObject";
var opcode28 = 29821;

// src/packets/generated/structures/SkillDamageEvent.ts
function read48(reader) {
  const data = {};
  data.TargetId = reader.u64();
  data.CurHp = read13(reader);
  data.Damage = read13(reader);
  data.Unk3_m = reader.i16();
  if (reader.bool())
    data.DamageAttr = reader.u8();
  data.DamageType = reader.u8();
  data.MaxHp = read13(reader);
  data.Modifier = reader.u8();
  return data;
}

// src/packets/common/SkillMoveOptionData.ts
function read49(reader) {
  const data = {};
  const flag = reader.u8();
  if (flag & 1)
    data.MoveTime = reader.u32();
  if (flag & 2)
    data.StandUpTime = reader.u32();
  if (flag & 4)
    data.DownTime = reader.u32();
  if (flag & 8)
    data.FreezeTime = reader.u32();
  if (flag & 16)
    data.MoveHeight = reader.u32();
  if (flag & 32)
    data.FarmostDist = reader.u32();
  if (flag & 64)
    data.flag40 = reader.bytes(reader.u16(), 6);
  return data;
}

// src/packets/generated/structures/SkillDamageAbnormalMoveEvent.ts
function read50(reader) {
  const data = {};
  data.Unk4_m = reader.u16();
  data.skillDamageEvent = read48(reader);
  data.Position = read21(reader);
  data.Unk8_m = reader.u16();
  data.Unk1_m = reader.u8();
  data.Destination = read21(reader);
  data.SkillMoveOptionData = read49(reader);
  data.Unk3_m = reader.u16();
  data.Unk2_m = reader.u64();
  return data;
}

// src/packets/generated/definitions/PKTSkillDamageAbnormalMoveNotify.ts
function read51(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk1_m = reader.u8();
  data.SkillId = reader.u32();
  data.SkillEffectId = reader.u32();
  data.Unk2_m = reader.u32();
  data.SkillDamageAbnormalMoveEvents = reader.array(reader.u16(), () => read50(reader), 50);
  data.SourceId = reader.u64();
  return data;
}
var name29 = "PKTSkillDamageAbnormalMoveNotify";
var opcode29 = 16593;

// src/packets/generated/definitions/PKTSkillDamageNotify.ts
function read52(buf) {
  const reader = new Read(buf);
  const data = {};
  data.SkillEffectId = reader.u32();
  data.SkillId = reader.u32();
  data.SourceId = reader.u64();
  data.SkillLevel = reader.u8();
  data.SkillDamageEvents = reader.array(reader.u16(), () => read48(reader), 50);
  return data;
}
var name30 = "PKTSkillDamageNotify";
var opcode30 = 2813;

// src/packets/generated/definitions/PKTSkillStageNotify.ts
function read53(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(8);
  data.Stage = reader.u8();
  data.SkillId = reader.u32();
  reader.skip(28);
  data.SourceId = reader.u64();
  reader.skip(5);
  return data;
}
var name31 = "PKTSkillStageNotify";
var opcode31 = 17861;

// src/packets/common/SkillOptionData.ts
function read54(reader) {
  const data = {};
  const flag = reader.u8();
  if (flag & 1)
    data.LayerIndex = reader.u8();
  if (flag & 2)
    data.StartStageIndex = reader.u8();
  if (flag & 4)
    data.TransitIndex = reader.u32();
  if (flag & 8)
    data.StageStartTime = reader.u32();
  if (flag & 16)
    data.FarmostDistance = reader.u32();
  if (flag & 32)
    data.TripodIndex = read29(reader);
  if (flag & 64)
    data.TripodLevel = read30(reader);
  return data;
}

// src/packets/generated/definitions/PKTSkillStartNotify.ts
function read55(buf) {
  const reader = new Read(buf);
  const data = {};
  data.SkillLevel = reader.u8();
  if (reader.bool())
    data.AiStateId = reader.u32();
  data.SkillId = reader.u32();
  data.SkillOptionData = read54(reader);
  if (reader.bool())
    data.PitchRotation = read22(reader);
  data.NewDirectionYaw = read22(reader);
  data.NewPosition = read21(reader);
  data.CurPosition = read21(reader);
  data.AimTargetPosition = read21(reader);
  data.CurDirectionYaw = read22(reader);
  if (reader.bool())
    data.Unk1_m = reader.i32();
  data.SourceId = reader.u64();
  return data;
}
var name32 = "PKTSkillStartNotify";
var opcode32 = 13284;

// src/packets/generated/definitions/PKTStatChangeOriginNotify.ts
function read56(buf) {
  const reader = new Read(buf);
  const data = {};
  if (reader.bool())
    data.Unk0_0 = reader.u32();
  data.ObjectId = reader.u64();
  data.Unk2 = reader.array(
    reader.u16(),
    () => {
      const S = {};
      S.StatType = reader.u8();
      S.Value = read13(reader);
      return S;
    },
    152
  );
  data.Unk3 = reader.array(
    reader.u16(),
    () => {
      const T = {};
      T.StatType = reader.u8();
      T.Value = read13(reader);
      return T;
    },
    152
  );
  data.Unk4 = reader.u8();
  return data;
}
var name33 = "PKTStatChangeOriginNotify";
var opcode33 = 24475;

// src/packets/generated/definitions/PKTStatusEffectAddNotify.ts
function read57(buf) {
  const reader = new Read(buf);
  const data = {};
  data.New = reader.bool();
  data.ObjectId = reader.u64();
  data.statusEffectData = read14(reader);
  data.Unk3 = reader.u64();
  if (reader.bool())
    data.Unk4_0 = reader.u64();
  return data;
}
var name34 = "PKTStatusEffectAddNotify";
var opcode34 = 35476;

// src/packets/generated/definitions/PKTStatusEffectRemoveNotify.ts
function read58(buf) {
  const reader = new Read(buf);
  const data = {};
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  data.ObjectId = reader.u64();
  data.Reason = reader.u8();
  return data;
}
var name35 = "PKTStatusEffectRemoveNotify";
var opcode35 = 54795;

// src/packets/generated/definitions/PKTStatusEffectSyncDataNotify.ts
function read59(buf) {
  const reader = new Read(buf);
  const data = {};
  data.EffectInstanceId = reader.u32();
  reader.skip(4);
  data.ObjectId = reader.u64();
  data.CharacterId = reader.u64();
  reader.skip(1);
  data.Value = reader.u32();
  return data;
}
var name36 = "PKTStatusEffectSyncDataNotify";
var opcode36 = 17356;

// src/packets/generated/definitions/PKTTriggerBossBattleStatus.ts
function read60(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk2_m = reader.bool();
  reader.skip(1);
  data.TriggerId = reader.u32();
  data.Step = reader.u32();
  return data;
}
var name37 = "PKTTriggerBossBattleStatus";
var opcode37 = 51236;

// src/packets/generated/definitions/PKTTriggerFinishNotify.ts
function read61(buf) {
  const reader = new Read(buf);
  const data = {};
  data.PacketResultCode = reader.u32();
  data.InvolvedPCs = reader.array(reader.u16(), () => reader.u64(), 40);
  data.TriggerId = reader.u32();
  data.Unk0_m = reader.u32();
  return data;
}
var name38 = "PKTTriggerFinishNotify";
var opcode38 = 43614;

// src/packets/generated/definitions/PKTTriggerStartNotify.ts
function read62(buf) {
  const reader = new Read(buf);
  const data = {};
  data.InvolvedPCs = reader.array(reader.u16(), () => reader.u64(), 40);
  data.TriggerId = reader.u32();
  data.TriggerSignalType = reader.u32();
  data.SourceId = reader.u64();
  return data;
}
var name39 = "PKTTriggerStartNotify";
var opcode39 = 4099;

// src/packets/generated/definitions/PKTTroopMemberUpdateMinNotify.ts
function read63(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk0_m = reader.u32();
  data.CharacterId = reader.u64();
  data.MaxHp = read13(reader);
  data.Position = reader.u64();
  data.statusEffectDatas = reader.array(reader.u16(), () => read14(reader), 80);
  data.CurHp = read13(reader);
  return data;
}
var name40 = "PKTTroopMemberUpdateMinNotify";
var opcode40 = 6981;

// src/packets/generated/mapping.ts
var mapping = /* @__PURE__ */ new Map([
  [opcode, [name, read2]],
  [opcode2, [name2, read4]],
  [
    opcode3,
    [name3, read5]
  ],
  [opcode4, [name4, read6]],
  [opcode5, [name5, read7]],
  [opcode6, [name6, read8]],
  [opcode7, [name7, read9]],
  [opcode8, [name8, read10]],
  [opcode9, [name9, read12]],
  [opcode10, [name10, read16]],
  [opcode11, [name11, read18]],
  [opcode12, [name12, read24]],
  [opcode13, [name13, read25]],
  [opcode14, [name14, read28]],
  [opcode15, [name15, read32]],
  [opcode16, [name16, read33]],
  [opcode17, [name17, read35]],
  [opcode18, [name18, read36]],
  [
    opcode19,
    [name19, read37]
  ],
  [
    opcode20,
    [name20, read38]
  ],
  [opcode21, [name21, read39]],
  [
    opcode22,
    [name22, read40]
  ],
  [
    opcode23,
    [name23, read41]
  ],
  [
    opcode24,
    [name24, read42]
  ],
  [
    opcode25,
    [name25, read43]
  ],
  [opcode26, [name26, read44]],
  [opcode27, [name27, read45]],
  [opcode28, [name28, read47]],
  [
    opcode29,
    [name29, read51]
  ],
  [opcode30, [name30, read52]],
  [opcode31, [name31, read53]],
  [opcode32, [name32, read55]],
  [opcode33, [name33, read56]],
  [opcode34, [name34, read57]],
  [opcode35, [name35, read58]],
  [opcode36, [name36, read59]],
  [opcode37, [name37, read60]],
  [opcode38, [name38, read61]],
  [opcode39, [name39, read62]],
  [opcode40, [name40, read63]]
]);

// src/pkt-stream.ts
var PKTStream = class extends import_tiny_typed_emitter.TypedEmitter {
  #decompressor;
  constructor(decompressor) {
    super();
    this.#decompressor = decompressor;
  }
  read(buf) {
    try {
      if (buf.length < 6)
        return false;
      const xor = buf.readUInt8(5);
      if (xor > 2)
        return false;
      const compression = buf.readUInt8(4);
      if (compression > 3)
        return false;
      const data = buf.subarray(6);
      const opcode41 = buf.readUInt16LE(2);
      const pkt = mapping.get(opcode41);
      if (pkt) {
        const [name41, read64] = pkt;
        this.emit(
          name41,
          new PKT(data, opcode41, compression, Boolean(xor), this.#decompressor, read64)
        );
      }
      this.emit("*", data, opcode41, compression, Boolean(xor));
    } catch (e) {
      return false;
    }
  }
};
var PKT = class {
  #data;
  #opcode;
  #compression;
  #xor;
  #decompressor;
  #read;
  constructor(data, opcode41, compression, xor, decompressor, read64) {
    this.#data = data;
    this.#opcode = opcode41;
    this.#compression = compression;
    this.#xor = xor;
    this.#decompressor = decompressor;
    this.#read = read64;
  }
  #cached;
  get parsed() {
    if (!this.#cached) {
      try {
        this.#cached = this.#read(this.#decompressor.decrypt(this.#data, this.#opcode, this.#compression, this.#xor));
      } catch (e) {
        console.error(`[meter-core/pkt-stream] - ${e}`);
        return void 0;
      }
    }
    return this.#cached;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PKT,
  PKTStream
});
