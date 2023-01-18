declare type AbilityData = {
    Id: number;
    Points: number;
    Level: number;
};

declare type PKTAbilityChangeNotify = {
    abilityDataList: AbilityData[];
};
declare function read$D(buf: Buffer): PKTAbilityChangeNotify;
declare const name$D = "PKTAbilityChangeNotify";
declare const opcode$D = 36688;

declare type ActiveAbility = {
    Level: number;
    FeatureType: number;
};

declare type PKTActiveAbilityNotify = {
    ObjectId: bigint;
    activeAbilityList: ActiveAbility[];
};
declare function read$C(buf: Buffer): PKTActiveAbilityNotify;
declare const name$C = "PKTActiveAbilityNotify";
declare const opcode$C = 39175;

declare type PKTAddonSkillFeatureChangeNotify = {
    ObjectId: bigint;
    struct_120: Buffer;
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        SkillId: number;
    }[];
};
declare function read$B(buf: Buffer): PKTAddonSkillFeatureChangeNotify;
declare const name$B = "PKTAddonSkillFeatureChangeNotify";
declare const opcode$B = 55274;

declare type PKTAuthTokenResult = {
    PacketResultCode: number;
    Unk1_m: Buffer;
};
declare function read$A(buf: Buffer): PKTAuthTokenResult;
declare const name$A = "PKTAuthTokenResult";
declare const opcode$A = 44294;

declare type PKTBlockSkillStateNotify = {
    ParalyzationPoint: number;
    ParalyzationMaxPoint: number;
    Type: number;
    ObjectId: bigint;
};
declare function read$z(buf: Buffer): PKTBlockSkillStateNotify;
declare const name$z = "PKTBlockSkillStateNotify";
declare const opcode$z = 31669;

declare type PKTCounterAttackNotify = {
    TargetId: bigint;
    Type: number;
    SourceId: bigint;
};
declare function read$y(buf: Buffer): PKTCounterAttackNotify;
declare const name$y = "PKTCounterAttackNotify";
declare const opcode$y = 23544;

declare type PKTDeathNotify = {
    Unk0: number;
    SourceId: bigint;
    Unk2_0?: number;
    Unk3: number;
    Unk4_0?: number;
    TargetId: bigint;
    Unk6: bigint;
    Unk7: number;
    Unk8_0?: number;
};
declare function read$x(buf: Buffer): PKTDeathNotify;
declare const name$x = "PKTDeathNotify";
declare const opcode$x = 21940;

declare type PKTInitAbility = {
    struct_124: Buffer;
    abilityDataList: AbilityData[];
};
declare function read$w(buf: Buffer): PKTInitAbility;
declare const name$w = "PKTInitAbility";
declare const opcode$w = 23159;

declare type LostArkDateTime = Date;

declare type PKTInitEnv = {
    Unk0: number;
    PlayerId: bigint;
    lostArkDateTime: LostArkDateTime;
    Unk3: number;
    Unk4: number;
    Unk5: bigint;
    struct_544: string;
    struct_26: {
        struct_544: string;
        versionString: string;
        struct_531: string;
    }[];
};
declare function read$v(buf: Buffer): PKTInitEnv;
declare const name$v = "PKTInitEnv";
declare const opcode$v = 12201;

declare type StatusEffectData = {
    SourceId: bigint;
    Unk1: number;
    Unk2: number;
    lostArkDateTime: LostArkDateTime;
    SkillLevel: number;
    StatusEffectId: number;
    struct_420: Buffer;
    InstanceId: bigint;
    Value?: Buffer;
    Unk9_0?: bigint;
    EffectInstanceId: number;
};

declare type Struct_678 = {
    Unk0: bigint;
    Unk1: bigint;
    Unk2: number;
    Unk3: number;
    Unk4: bigint;
    Unk5: number;
    Unk6: number;
};

declare type PKTInitPC = {
    Unk0: Buffer;
    Unk1: number;
    Unk2: number;
    ClassId: number;
    Unk4: bigint;
    Unk5: number;
    Unk6: number;
    Unk7: number;
    Unk8: number;
    Level: number;
    statPair: {
        Value: bigint;
        StatType: number;
    }[];
    Unk11: number;
    Unk12: number;
    Unk13: number;
    Unk14: number;
    Unk15: number;
    statusEffectDatas: StatusEffectData[];
    Unk17: number;
    struct_320: Buffer;
    Unk19: bigint;
    Unk20: number;
    Unk21: number;
    Unk22: number;
    Unk23: number;
    Unk24: number;
    Unk25: number;
    Unk26: number;
    Unk27: number;
    PlayerId: bigint;
    Unk29: number;
    Name: string;
    Unk31: number;
    Unk32: number;
    Unk33: number;
    struct_368: Struct_678[];
    Unk35: number;
    Unk36_0?: number;
    Unk37: number;
    Unk38: number;
    Unk39: bigint;
    CharacterId: bigint;
    struct_343: string;
    Unk42: number;
    Unk43: number;
    Unk44: number;
    struct_217: Buffer;
    Unk46: bigint;
    Unk47: number;
    Unk48: number;
    Unk49: number;
    GearLevel: number;
    Unk51: number;
    struct_92: Buffer;
    Unk53: Buffer;
    Unk54: number;
    Unk55: number;
    Unk56: number;
};
declare function read$u(buf: Buffer): PKTInitPC;
declare const name$u = "PKTInitPC";
declare const opcode$u = 44217;

declare type Struct_695 = {
    Unk0: number;
    Unk1: number;
    Unk2_0?: Buffer;
    Unk3_0?: number;
    Unk4: number;
};

declare type PKTInitLocal = {
    statPair: {
        Value: bigint;
        StatType: number;
    }[];
    abilityDataList: AbilityData[];
    struct_124: Buffer;
    Unk3: number;
    statusEffectDatas: StatusEffectData[];
    struct_399: Struct_695[];
    struct_120: Buffer;
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        SkillId: number;
    }[];
    struct_320: Buffer;
    Unk9: number;
    struct_217: Buffer;
    Unk11: bigint;
    Unk12: number;
    Unk13_0?: number;
    Unk14: bigint;
    Unk15: number;
};
declare function read$t(buf: Buffer): PKTInitLocal;
declare const name$t = "PKTInitLocal";
declare const opcode$t = 55118;

declare type Struct_637 = {
    Unk0: number;
    Unk1: number;
    Unk2: number;
    lostArkDateTime: LostArkDateTime;
    Unk4_0?: number;
    struct_426: Buffer;
};

declare type Struct_675 = {
    Unk0: number;
    Unk1: number;
    Unk2: bigint;
    struct_85: Buffer;
    lostArkString: string;
    struct_298: Struct_637[];
    Unk6: number;
    Unk7: number;
};

declare type Vector3F = {
    x?: number;
    y?: number;
    z?: number;
};

declare type Angle = number;

declare type NpcData = {
    struct_675?: Struct_675;
    TransitIndex?: number;
    Unk2: number;
    struct_315?: Buffer;
    ObjectId: bigint;
    SpawnIndex: number;
    statusEffectDatas: StatusEffectData[];
    Unk7: number;
    Position: Vector3F;
    Unk9_0?: number;
    Unk10: number;
    Unk11_0?: number;
    struct_254?: Buffer;
    Unk13: number;
    Unk14: number;
    TypeId: number;
    Unk16_0?: number;
    Unk17_0?: number;
    DirectionYaw: Angle;
    Unk19_0?: number;
    Unk20_0?: number;
    Unk21_0?: number;
    Unk22: number;
    Unk23_0?: number;
    statPair: {
        Value: bigint;
        StatType: number;
    }[];
    Unk25_0?: bigint;
    Unk26_0?: number;
    Unk27_0?: number;
    Unk28: number;
    Unk29_0?: number;
    Unk30_0?: number;
    struct_368: Struct_678[];
    Unk32_0?: number;
};

declare type PKTNewNpc = {
    Unk0_0?: number;
    Unk1_0?: bigint;
    NpcStruct: NpcData;
    Unk3: number;
};
declare function read$s(buf: Buffer): PKTNewNpc;
declare const name$s = "PKTNewNpc";
declare const opcode$s = 31638;

declare type PKTNewNpcSummon = {
    PublishReason: number;
    OwnerId: bigint;
    NpcData: NpcData;
};
declare function read$r(buf: Buffer): PKTNewNpcSummon;
declare const name$r = "PKTNewNpcSummon";
declare const opcode$r = 57156;

declare type TrackMoveInfo = {
    Unk0: number;
    Unk1: number;
    Unk2: Buffer;
    Unk3_0?: Buffer;
};

declare type PCStruct = {
    Unk0: string;
    Unk1: number;
    Unk2: number;
    Unk3: number;
    Unk5_m: number;
    Unk5_0?: Buffer;
    Unk6: number;
    struct_368: Struct_678[];
    struct_298: Struct_637[];
    Unk9: number;
    Unk10: number;
    GearLevel: number;
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        SkillId: number;
    }[];
    Unk13: number;
    Unk14: number;
    Unk15: number;
    Unk16: number;
    Unk17: number;
    Level: number;
    struct_85: Buffer;
    Unk20: number;
    Unk21: number;
    Unk22: number;
    Heading: Angle;
    Unk24: bigint;
    Unk25: number;
    CharacterId: bigint;
    struct_297: Struct_637[];
    Unk28: number;
    Unk29: number;
    struct_120: Buffer;
    ClassId: number;
    Unk32: number;
    Unk33: Buffer;
    Name: string;
    Unk35: number;
    Unk36: number;
    statPair: {
        Value: bigint;
        StatType: number;
    }[];
    Unk38: Buffer;
    Unk39: number;
    Unk40: number;
    Unk41: number;
    statusEffectDatas: StatusEffectData[];
    PlayerId: bigint;
};

declare type PKTNewPC = {
    TrackMoveInfo?: TrackMoveInfo;
    Unk5_0_m?: Buffer;
    Unk2_m: number;
    Unk3_0_m?: number;
    Unk0_m: number;
    Unk4_0_m?: Buffer;
    PCStruct: PCStruct;
};
declare function read$q(buf: Buffer): PKTNewPC;
declare const name$q = "PKTNewPC";
declare const opcode$q = 13099;

declare type TripodIndex = {
    first: number;
    second: number;
    third: number;
};

declare type TripodLevel = {
    first: number;
    second: number;
    third: number;
};

declare type ProjectileInfo = {
    Unk0: number;
    ProjectileId: bigint;
    Unk2: number;
    Unk3: number;
    Unk4_0?: number;
    struct_315?: Buffer;
    Unk6: number;
    Unk7: number;
    SkillEffect: number;
    tripodIndex: TripodIndex;
    Unk10: bigint;
    Unk11: number;
    SkillLevel: number;
    tripodLevel: TripodLevel;
    Unk14: bigint;
    Unk15: number;
    Unk16: number;
    Unk17_0?: bigint;
    Unk18: bigint;
    SkillId: number;
    OwnerId: bigint;
};

declare type PKTNewProjectile = {
    projectileInfo: ProjectileInfo;
};
declare function read$p(buf: Buffer): PKTNewProjectile;
declare const name$p = "PKTNewProjectile";
declare const opcode$p = 1296;

declare type PKTParalyzationStateNotify = {
    NoHitCheckTime: number;
    ParalyzationMaxPoint: number;
    DecreasePoint: number;
    Enable: boolean;
    ParalyzationPoint: number;
    HitCheckTime: number;
    ObjectId: bigint;
};
declare function read$o(buf: Buffer): PKTParalyzationStateNotify;
declare const name$o = "PKTParalyzationStateNotify";
declare const opcode$o = 1696;

declare type PartyMemberData = {
    CharacterLevel: number;
    Unk1: number;
    Unk2: bigint;
    Unk3: number;
    Unk4: number;
    Unk5: number;
    Unk6: bigint;
    Name: string;
    PartyMemberNumber: number;
    Unk9: bigint;
    Unk10: bigint;
    CharacterId: bigint;
    Unk12: number;
    Unk13: number;
    Unk14: number;
    Unk15: number;
    Unk16: number;
    Unk17: number;
    Unk18: number;
    Unk19: number;
};

declare type PKTPartyInfo = {
    PartyInstanceId: number;
    MemberDatas: PartyMemberData[];
    PartyType: number;
    RaidInstanceId: number;
    LootGrade: number;
    PartyLootType: number;
};
declare function read$n(buf: Buffer): PKTPartyInfo;
declare const name$n = "PKTPartyInfo";
declare const opcode$n = 20135;

declare type PKTPartyLeaveResult = {
    PartyInstanceId: number;
    Name: string;
    PartyLeaveType: number;
};
declare function read$m(buf: Buffer): PKTPartyLeaveResult;
declare const name$m = "PKTPartyLeaveResult";
declare const opcode$m = 12275;

declare type PKTPartyPassiveStatusEffectAddNotify = {
    ObjectId: bigint;
    Unk0_m: number;
    passiveStatusEffectList: number[];
};
declare function read$l(buf: Buffer): PKTPartyPassiveStatusEffectAddNotify;
declare const name$l = "PKTPartyPassiveStatusEffectAddNotify";
declare const opcode$l = 48656;

declare type PKTPartyPassiveStatusEffectRemoveNotify = {
    passiveStatusEffectList: number[];
    ObjectId: bigint;
};
declare function read$k(buf: Buffer): PKTPartyPassiveStatusEffectRemoveNotify;
declare const name$k = "PKTPartyPassiveStatusEffectRemoveNotify";
declare const opcode$k = 14139;

declare type PKTPartyStatusEffectAddNotify = {
    statusEffectDatas: StatusEffectData[];
    PlayerIdOnRefresh: bigint;
    CharacterId: bigint;
    Unk3: bigint;
    Unk4: number;
};
declare function read$j(buf: Buffer): PKTPartyStatusEffectAddNotify;
declare const name$j = "PKTPartyStatusEffectAddNotify";
declare const opcode$j = 8895;

declare type PKTPartyStatusEffectRemoveNotify = {
    Unk0: bigint;
    Unk1: number;
    CharacterId: bigint;
    statusEffectIds: number[];
};
declare function read$i(buf: Buffer): PKTPartyStatusEffectRemoveNotify;
declare const name$i = "PKTPartyStatusEffectRemoveNotify";
declare const opcode$i = 13843;

declare type PKTPartyStatusEffectResultNotify = {
    CharacterId: bigint;
    RaidInstanceId: number;
    PartyInstanceId: number;
};
declare function read$h(buf: Buffer): PKTPartyStatusEffectResultNotify;
declare const name$h = "PKTPartyStatusEffectResultNotify";
declare const opcode$h = 601;

declare type PKTPassiveStatusEffectAddNotify = {
    passiveStatusEffectList: number[];
};
declare function read$g(buf: Buffer): PKTPassiveStatusEffectAddNotify;
declare const name$g = "PKTPassiveStatusEffectAddNotify";
declare const opcode$g = 28362;

declare type PKTPassiveStatusEffectRemoveNotify = {
    passiveStatusEffectList: number[];
};
declare function read$f(buf: Buffer): PKTPassiveStatusEffectRemoveNotify;
declare const name$f = "PKTPassiveStatusEffectRemoveNotify";
declare const opcode$f = 56744;

declare type PKTRaidBossKillNotify = {
    Unk0: Buffer;
};
declare function read$e(buf: Buffer): PKTRaidBossKillNotify;
declare const name$e = "PKTRaidBossKillNotify";
declare const opcode$e = 20140;

declare type PKTRaidResult = {
    Unk0: number;
    Unk1: bigint;
    Unk2: number;
    Unk3: bigint;
    Unk4: number;
    struct_44: {
        struct_494: Buffer;
        Unk0_0_1: bigint;
        Unk0_0_2: number;
        Unk0_0_3: bigint;
    }[];
    Unk6: bigint;
    Unk7: bigint;
};
declare function read$d(buf: Buffer): PKTRaidResult;
declare const name$d = "PKTRaidResult";
declare const opcode$d = 17609;

declare type UnpublishObject = {
    UnpublishReason: number;
    ObjectId: bigint;
};

declare type PKTRemoveObject = {
    unpublishedObjects: UnpublishObject[];
};
declare function read$c(buf: Buffer): PKTRemoveObject;
declare const name$c = "PKTRemoveObject";
declare const opcode$c = 39958;

declare type MoveOptionData = {
    Mod?: number;
    Speed?: number;
    NextPos?: bigint;
    flag8?: number;
    flag10?: Buffer;
    flag20?: Buffer;
    flag40?: Buffer;
};

declare type SkillDamageEvent = {
    CurHp: bigint;
    TargetId: bigint;
    MaxHp: bigint;
    DamageAttr?: number;
    DamageType: number;
    Unk3_m: number;
    Modifier: number;
    Damage: bigint;
};

declare type SkillDamageAbnormalMoveEvent = {
    Unk0_m: MoveOptionData;
    Unk8_m: number;
    Unk2_m: bigint;
    Destination: Vector3F;
    Unk4_m: number;
    skillDamageEvent: SkillDamageEvent;
    Position: Vector3F;
    Unk3_m: number;
    Unk1_m: number;
};

declare type PKTSkillDamageAbnormalMoveNotify = {
    Unk2_m: number;
    SourceId: bigint;
    Unk1_m: number;
    SkillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEvent[];
    SkillEffectId: number;
    SkillId: number;
};
declare function read$b(buf: Buffer): PKTSkillDamageAbnormalMoveNotify;
declare const name$b = "PKTSkillDamageAbnormalMoveNotify";
declare const opcode$b = 29416;

declare type PKTSkillDamageNotify = {
    SkillDamageEvents: SkillDamageEvent[];
    SkillId: number;
    SourceId: bigint;
    SkillLevel: number;
    SkillEffectId: number;
};
declare function read$a(buf: Buffer): PKTSkillDamageNotify;
declare const name$a = "PKTSkillDamageNotify";
declare const opcode$a = 1847;

declare type PKTSkillStageNotify = {
    SourceId: bigint;
    Stage: number;
    SkillId: number;
};
declare function read$9(buf: Buffer): PKTSkillStageNotify;
declare const name$9 = "PKTSkillStageNotify";
declare const opcode$9 = 6028;

declare type SkillOptionData = {
    LayerIndex?: number;
    StartStageIndex?: number;
    TransitIndex?: number;
    StageStartTime?: number;
    FarmostDistance?: number;
    TripodIndex?: TripodIndex;
    TripodLevel?: TripodLevel;
};

declare type PKTSkillStartNotify = {
    AimTargetPosition: Vector3F;
    CurPosition: Vector3F;
    CurDirectionYaw: Angle;
    PitchRotation?: Angle;
    SkillId: number;
    NewPosition: Vector3F;
    SourceId: bigint;
    Unk1_m?: number;
    SkillOptionData: SkillOptionData;
    AiStateId?: number;
    SkillLevel: number;
    NewDirectionYaw: Angle;
};
declare function read$8(buf: Buffer): PKTSkillStartNotify;
declare const name$8 = "PKTSkillStartNotify";
declare const opcode$8 = 45202;

declare type PKTStatChangeOriginNotify = {
    StatPairList: {
        Value: bigint;
        StatType: number;
    }[];
    Unk1: {
        Value: bigint;
        StatType: number;
    }[];
    Unk2: number;
    Unk3_0?: number;
    ObjectId: bigint;
};
declare function read$7(buf: Buffer): PKTStatChangeOriginNotify;
declare const name$7 = "PKTStatChangeOriginNotify";
declare const opcode$7 = 36460;

declare type PKTStatusEffectAddNotify = {
    ObjectId: bigint;
    Unk1_0?: bigint;
    statusEffectData: StatusEffectData;
    Unk3: bigint;
    New: boolean;
};
declare function read$6(buf: Buffer): PKTStatusEffectAddNotify;
declare const name$6 = "PKTStatusEffectAddNotify";
declare const opcode$6 = 4713;

declare type PKTStatusEffectRemoveNotify = {
    statusEffectIds: number[];
    Reason: number;
    ObjectId: bigint;
};
declare function read$5(buf: Buffer): PKTStatusEffectRemoveNotify;
declare const name$5 = "PKTStatusEffectRemoveNotify";
declare const opcode$5 = 55030;

declare type PKTStatusEffectSyncDataNotify = {
    ObjectId: bigint;
    EffectInstanceId: number;
    Value: number;
    CharacterId: bigint;
};
declare function read$4(buf: Buffer): PKTStatusEffectSyncDataNotify;
declare const name$4 = "PKTStatusEffectSyncDataNotify";
declare const opcode$4 = 35589;

declare type PKTTriggerBossBattleStatus = {
    Unk2_m: boolean;
    Step: number;
    TriggerId: number;
};
declare function read$3(buf: Buffer): PKTTriggerBossBattleStatus;
declare const name$3 = "PKTTriggerBossBattleStatus";
declare const opcode$3 = 35800;

declare type PKTTriggerFinishNotify = {
    TriggerId: number;
    PacketResultCode: number;
    Unk0_m: number;
    InvolvedPCs: bigint[];
};
declare function read$2(buf: Buffer): PKTTriggerFinishNotify;
declare const name$2 = "PKTTriggerFinishNotify";
declare const opcode$2 = 53300;

declare type PKTTriggerStartNotify = {
    TriggerId: number;
    InvolvedPCs: bigint[];
    SourceId: bigint;
    TriggerSignalType: number;
};
declare function read$1(buf: Buffer): PKTTriggerStartNotify;
declare const name$1 = "PKTTriggerStartNotify";
declare const opcode$1 = 50016;

declare type PKTTroopMemberUpdateMinNotify = {
    Unk0_m: number;
    Position: bigint;
    CharacterId: bigint;
    CurHp: bigint;
    MaxHp: bigint;
    statusEffectDatas: StatusEffectData[];
};
declare function read(buf: Buffer): PKTTroopMemberUpdateMinNotify;
declare const name = "PKTTroopMemberUpdateMinNotify";
declare const opcode = 36043;

export { opcode$q as $, PKTRemoveObject as A, PKTSkillDamageAbnormalMoveNotify as B, PKTSkillDamageNotify as C, PKTSkillStageNotify as D, PKTSkillStartNotify as E, PKTStatChangeOriginNotify as F, PKTStatusEffectAddNotify as G, PKTStatusEffectRemoveNotify as H, PKTStatusEffectSyncDataNotify as I, PKTTriggerBossBattleStatus as J, PKTTriggerFinishNotify as K, PKTTriggerStartNotify as L, PKTTroopMemberUpdateMinNotify as M, opcode$D as N, opcode$C as O, PKTAbilityChangeNotify as P, opcode$B as Q, opcode$A as R, opcode$z as S, opcode$y as T, opcode$x as U, opcode$w as V, opcode$v as W, opcode$u as X, opcode$t as Y, opcode$s as Z, opcode$r as _, PKTActiveAbilityNotify as a, name$2 as a$, opcode$p as a0, opcode$o as a1, opcode$n as a2, opcode$m as a3, opcode$l as a4, opcode$k as a5, opcode$j as a6, opcode$i as a7, opcode$h as a8, opcode$g as a9, name$t as aA, name$s as aB, name$r as aC, name$q as aD, name$p as aE, name$o as aF, name$n as aG, name$m as aH, name$l as aI, name$k as aJ, name$j as aK, name$i as aL, name$h as aM, name$g as aN, name$f as aO, name$e as aP, name$d as aQ, name$c as aR, name$b as aS, name$a as aT, name$9 as aU, name$8 as aV, name$7 as aW, name$6 as aX, name$5 as aY, name$4 as aZ, name$3 as a_, opcode$f as aa, opcode$e as ab, opcode$d as ac, opcode$c as ad, opcode$b as ae, opcode$a as af, opcode$9 as ag, opcode$8 as ah, opcode$7 as ai, opcode$6 as aj, opcode$5 as ak, opcode$4 as al, opcode$3 as am, opcode$2 as an, opcode$1 as ao, opcode as ap, name$D as aq, name$C as ar, name$B as as, name$A as at, name$z as au, name$y as av, name$x as aw, name$w as ax, name$v as ay, name$u as az, PKTAddonSkillFeatureChangeNotify as b, name$1 as b0, name as b1, read$D as b2, read$C as b3, read$B as b4, read$A as b5, read$z as b6, read$y as b7, read$x as b8, read$w as b9, read$5 as bA, read$4 as bB, read$3 as bC, read$2 as bD, read$1 as bE, read as bF, read$v as ba, read$u as bb, read$t as bc, read$s as bd, read$r as be, read$q as bf, read$p as bg, read$o as bh, read$n as bi, read$m as bj, read$l as bk, read$k as bl, read$j as bm, read$i as bn, read$h as bo, read$g as bp, read$f as bq, read$e as br, read$d as bs, read$c as bt, read$b as bu, read$a as bv, read$9 as bw, read$8 as bx, read$7 as by, read$6 as bz, PKTAuthTokenResult as c, PKTBlockSkillStateNotify as d, PKTCounterAttackNotify as e, PKTDeathNotify as f, PKTInitAbility as g, PKTInitEnv as h, PKTInitPC as i, PKTInitLocal as j, PKTNewNpc as k, PKTNewNpcSummon as l, PKTNewPC as m, PKTNewProjectile as n, PKTParalyzationStateNotify as o, PKTPartyInfo as p, PKTPartyLeaveResult as q, PKTPartyPassiveStatusEffectAddNotify as r, PKTPartyPassiveStatusEffectRemoveNotify as s, PKTPartyStatusEffectAddNotify as t, PKTPartyStatusEffectRemoveNotify as u, PKTPartyStatusEffectResultNotify as v, PKTPassiveStatusEffectAddNotify as w, PKTPassiveStatusEffectRemoveNotify as x, PKTRaidBossKillNotify as y, PKTRaidResult as z };
