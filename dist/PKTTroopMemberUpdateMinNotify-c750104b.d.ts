<<<<<<<< HEAD:dist/PKTTroopMemberUpdateMinNotify-ac28db28.d.ts
declare type AbilityData = {
    Points: number;
    Id: number;
    Level: number;
};

declare type PKTAbilityChangeNotify = {
    abilityDataList: AbilityData[];
};
declare function read$D(buf: Buffer): PKTAbilityChangeNotify;
declare const name$D = "PKTAbilityChangeNotify";
declare const opcode$D = 41653;

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
declare const opcode$C = 40185;

declare type PKTAddonSkillFeatureChangeNotify = {
    struct_120: Buffer;
    ObjectId: bigint;
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        SkillId: number;
    }[];
};
declare function read$B(buf: Buffer): PKTAddonSkillFeatureChangeNotify;
declare const name$B = "PKTAddonSkillFeatureChangeNotify";
declare const opcode$B = 26664;

declare type PKTAuthTokenResult = {
    PacketResultCode: number;
    Unk1_m: Buffer;
};
declare function read$A(buf: Buffer): PKTAuthTokenResult;
declare const name$A = "PKTAuthTokenResult";
declare const opcode$A = 13236;

declare type PKTBlockSkillStateNotify = {
    ObjectId: bigint;
    ParalyzationPoint: number;
    Type: number;
    ParalyzationMaxPoint: number;
};
declare function read$z(buf: Buffer): PKTBlockSkillStateNotify;
declare const name$z = "PKTBlockSkillStateNotify";
declare const opcode$z = 15059;

declare type PKTCounterAttackNotify = {
    SourceId: bigint;
    TargetId: bigint;
    Type: number;
};
declare function read$y(buf: Buffer): PKTCounterAttackNotify;
declare const name$y = "PKTCounterAttackNotify";
declare const opcode$y = 1804;

declare type PKTDeathNotify = {
    Unk0_0?: number;
    Unk1: number;
    Unk2: number;
    Unk3: bigint;
    Unk4: number;
    Unk5_0?: number;
    Unk6: number;
    SourceId: bigint;
    TargetId: bigint;
    Unk9_0?: number;
};
declare function read$x(buf: Buffer): PKTDeathNotify;
declare const name$x = "PKTDeathNotify";
declare const opcode$x = 29634;

declare type PKTInitAbility = {
    struct_125: Buffer;
    abilityDataList: AbilityData[];
};
declare function read$w(buf: Buffer): PKTInitAbility;
declare const name$w = "PKTInitAbility";
declare const opcode$w = 1769;
========
type AbilityData = {
    Level: number;
    Id: number;
    Points: number;
};

type PKTAbilityChangeNotify = {
    abilityDataList: AbilityData[];
};
declare function read$D(buf: Buffer): PKTAbilityChangeNotify;
declare const name$D = "PKTAbilityChangeNotify";
declare const opcode$D = 16300;

type ActiveAbility = {
    FeatureType: number;
    Level: number;
};

type PKTActiveAbilityNotify = {
    activeAbilityList: ActiveAbility[];
    ObjectId: bigint;
};
declare function read$C(buf: Buffer): PKTActiveAbilityNotify;
declare const name$C = "PKTActiveAbilityNotify";
declare const opcode$C = 29688;

type PKTAddonSkillFeatureChangeNotify = {
    ObjectId: bigint;
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        SkillId: number;
    }[];
    struct_115: Buffer;
};
declare function read$B(buf: Buffer): PKTAddonSkillFeatureChangeNotify;
declare const name$B = "PKTAddonSkillFeatureChangeNotify";
declare const opcode$B = 14375;

type PKTAuthTokenResult = {
    PacketResultCode: number;
    Unk1_m: Buffer;
};
declare function read$A(buf: Buffer): PKTAuthTokenResult;
declare const name$A = "PKTAuthTokenResult";
declare const opcode$A = 35847;

type PKTBlockSkillStateNotify = {
    ObjectId: bigint;
    Type: number;
    ParalyzationMaxPoint: number;
    ParalyzationPoint: number;
};
declare function read$z(buf: Buffer): PKTBlockSkillStateNotify;
declare const name$z = "PKTBlockSkillStateNotify";
declare const opcode$z = 23429;

type PKTCounterAttackNotify = {
    SourceId: bigint;
    Type: number;
    TargetId: bigint;
};
declare function read$y(buf: Buffer): PKTCounterAttackNotify;
declare const name$y = "PKTCounterAttackNotify";
declare const opcode$y = 22606;

type PKTDeathNotify = {
    TargetId: bigint;
    Unk1: number;
    Unk2: number;
    Unk3: bigint;
    Unk4: number;
    SourceId: bigint;
    Unk6_0?: number;
    Unk7: number;
    Unk8_0?: number;
    Unk9_0?: number;
};
declare function read$x(buf: Buffer): PKTDeathNotify;
declare const name$x = "PKTDeathNotify";
declare const opcode$x = 21574;

type PKTInitAbility = {
    abilityDataList: AbilityData[];
    struct_120: Buffer;
};
declare function read$w(buf: Buffer): PKTInitAbility;
declare const name$w = "PKTInitAbility";
declare const opcode$w = 29820;
>>>>>>>> 2e868f7e588163ec47402f328a9a7dd8a2780ddb:dist/PKTTroopMemberUpdateMinNotify-c750104b.d.ts

declare type LostArkDateTime = Date;

<<<<<<<< HEAD:dist/PKTTroopMemberUpdateMinNotify-ac28db28.d.ts
declare type PKTInitEnv = {
    Unk0: number;
    Unk1: bigint;
    Unk2: number;
    struct_542: string;
    PlayerId: bigint;
    lostArkDateTime: LostArkDateTime;
    Unk6: number;
    struct_27: {
        struct_530: string;
        versionString: string;
        struct_542: string;
    }[];
};
declare function read$v(buf: Buffer): PKTInitEnv;
declare const name$v = "PKTInitEnv";
declare const opcode$v = 16275;

declare type StatusEffectData = {
    Unk0_0?: bigint;
    SkillLevel: number;
    Value?: Buffer;
    lostArkDateTime: LostArkDateTime;
    StatusEffectId: number;
    struct_423: Buffer;
    EffectInstanceId: number;
    SourceId: bigint;
    Unk8: number;
    Unk9: number;
    InstanceId: bigint;
};

declare type Struct_674 = {
    Unk0: number;
    Unk1: bigint;
    Unk2: number;
    Unk3: number;
    Unk4: number;
    Unk5: bigint;
    Unk6: bigint;
};

declare type PKTInitPC = {
    statusEffectDatas: StatusEffectData[];
    Unk1: number;
    Unk2: number;
    Unk3: number;
    GearLevel: number;
    Unk5: number;
    Unk6: number;
    Name: string;
    Unk8: number;
    Unk9: number;
    Unk10: number;
    Unk11: number;
    Unk12: Buffer;
    Unk13: number;
    Unk14: number;
    Unk15: bigint;
    struct_372: Struct_674[];
    Unk17: number;
    Unk18: number;
    Unk19: number;
    Unk20: number;
    Unk21: number;
    Unk22: number;
    Unk23_0?: number;
    struct_93: Buffer;
    Unk25: number;
    Unk26: number;
    Unk27: number;
    Unk28: bigint;
    struct_218: Buffer;
    CharacterId: bigint;
    Unk31: number;
    Unk32: number;
    Level: number;
    Unk34: number;
    Unk35: number;
    Unk36: number;
    Unk37: number;
    PlayerId: bigint;
    Unk39: number;
    Unk40: number;
    statPair: {
        StatType: number;
        Value: bigint;
    }[];
    Unk42: number;
    struct_323: Buffer;
    Unk44: bigint;
    Unk45: number;
    Unk46: number;
    Unk47: Buffer;
    Unk48: number;
    Unk49: Buffer;
    Unk50: bigint;
    struct_349: string;
    ClassId: number;
    Unk53: number;
    Unk54: number;
    Unk55: number;
    Unk56: number;
};
declare function read$u(buf: Buffer): PKTInitPC;
declare const name$u = "PKTInitPC";
declare const opcode$u = 50429;

declare type Struct_691 = {
    Unk0_0?: Buffer;
    Unk1: number;
    Unk2_0?: number;
    Unk3: number;
    Unk4: number;
};

declare type PKTInitLocal = {
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        SkillId: number;
    }[];
    Unk1_0?: number;
    struct_323: Buffer;
    Unk3: number;
    statusEffectDatas: StatusEffectData[];
    Unk5: bigint;
    struct_125: Buffer;
    Unk7: number;
    Unk8: number;
    Unk9: bigint;
    struct_218: Buffer;
    struct_120: Buffer;
    Unk12: number;
    struct_403: Struct_691[];
    abilityDataList: AbilityData[];
    statPair: {
        StatType: number;
        Value: bigint;
    }[];
};
declare function read$t(buf: Buffer): PKTInitLocal;
declare const name$t = "PKTInitLocal";
declare const opcode$t = 3753;

declare type Struct_636 = {
    Unk0_0?: number;
    Unk1: number;
    lostArkDateTime: LostArkDateTime;
    struct_429: Buffer;
    Unk4: number;
    Unk5: number;
};

declare type Struct_671 = {
    Unk0: number;
    struct_300: Struct_636[];
    Unk2: number;
    Unk3: number;
    Unk4: number;
    lostArkString: string;
    struct_86: Buffer;
    Unk7: bigint;
========
type PKTInitEnv = {
    lostArkDateTime: LostArkDateTime;
    Unk1: number;
    PlayerId: bigint;
    Unk3: bigint;
    Unk4: number;
    struct_541: string;
    Unk6: number;
    struct_25: {
        struct_529: string;
        versionString: string;
        struct_541: string;
    }[];
};
declare function read$v(buf: Buffer): PKTInitEnv;
declare const name$v = "PKTInitEnv";
declare const opcode$v = 43353;

type StatusEffectData = {
    SourceId: bigint;
    StatusEffectId: number;
    Value?: Buffer;
    lostArkDateTime: LostArkDateTime;
    struct_420: Buffer;
    InstanceId: bigint;
    EffectInstanceId: number;
    Unk7: number;
    Unk8: number;
    Unk9_0?: bigint;
    SkillLevel: number;
};

type Struct_674 = {
    Unk0: number;
    Unk1: number;
    Unk2: number;
    Unk3: bigint;
    Unk4: bigint;
    Unk5: bigint;
    Unk6: number;
};

type PKTInitPC = {
    struct_313: string;
    Unk1_0?: number;
    Unk2: number;
    statPair: {
        StatType: number;
        Value: bigint;
    }[];
    Unk4: number;
    Unk5: number;
    Unk6: number;
    GearLevel: number;
    Unk8: number;
    Unk9: number;
    Unk10: number;
    Unk11: bigint;
    Unk12: number;
    Unk13: number;
    statusEffectDatas: StatusEffectData[];
    Unk15: number;
    Unk16: number;
    Unk17: number;
    PlayerId: bigint;
    CharacterId: bigint;
    Unk20: number;
    Unk21: number;
    Unk22: number;
    Unk23: number;
    Unk24: number;
    Unk25: number;
    Unk26: number;
    Unk27: number;
    Unk28: Buffer;
    struct_366: Struct_674[];
    Unk30: number;
    Level: number;
    Unk32: number;
    Unk33: bigint;
    Unk34: number;
    Unk35: number;
    Unk36: number;
    Unk37: Buffer;
    Unk38: Buffer;
    Unk39: number;
    Unk40: number;
    Unk41: number;
    Unk42: number;
    Unk43: number;
    Unk44: number;
    ClassId: number;
    Unk46: number;
    Name: string;
    Unk48: bigint;
    Unk49: number;
    Unk50: bigint;
    struct_210: Buffer;
    Unk52: number;
    struct_90: Buffer;
    Unk54: number;
    Unk55: number;
    struct_319: Buffer;
};
declare function read$u(buf: Buffer): PKTInitPC;
declare const name$u = "PKTInitPC";
declare const opcode$u = 399;

type Struct_691 = {
    Unk0: number;
    Unk1: number;
    Unk2: number;
    Unk3_0?: Buffer;
    Unk4_0?: number;
};

type PKTInitLocal = {
    struct_400: Struct_691[];
    Unk1: bigint;
    struct_115: Buffer;
    Unk3: number;
    Unk4: number;
    struct_319: Buffer;
    Unk6: bigint;
    struct_210: Buffer;
    Unk8: number;
    struct_120: Buffer;
    Unk10: number;
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        SkillId: number;
    }[];
    statusEffectDatas: StatusEffectData[];
    Unk13_0?: number;
    statPair: {
        StatType: number;
        Value: bigint;
    }[];
    abilityDataList: AbilityData[];
};
declare function read$t(buf: Buffer): PKTInitLocal;
declare const name$t = "PKTInitLocal";
declare const opcode$t = 25609;

type Struct_636 = {
    struct_425: Buffer;
    Unk1: number;
    lostArkDateTime: LostArkDateTime;
    Unk3: number;
    Unk4: number;
    Unk5_0?: number;
};

type Struct_671 = {
    Unk0: bigint;
    Unk1: number;
    lostArkString: string;
    struct_83: Buffer;
    Unk4: number;
    Unk5: number;
    struct_297: Struct_636[];
    Unk7: number;
>>>>>>>> 2e868f7e588163ec47402f328a9a7dd8a2780ddb:dist/PKTTroopMemberUpdateMinNotify-c750104b.d.ts
};

declare type Vector3F = {
    x?: number;
    y?: number;
    z?: number;
};

declare type Angle = number;

<<<<<<<< HEAD:dist/PKTTroopMemberUpdateMinNotify-ac28db28.d.ts
declare type NpcData = {
    Unk0_0?: number;
    Unk1_0?: number;
    Unk2: number;
    struct_253?: Buffer;
    struct_372: Struct_674[];
    SpawnIndex: number;
    Unk6_0?: number;
    Unk7: number;
    statPair: {
        StatType: number;
        Value: bigint;
    }[];
    Unk9_0?: number;
    struct_318?: Buffer;
    Unk11_0?: number;
    struct_671?: Struct_671;
    Unk13_0?: number;
    statusEffectDatas: StatusEffectData[];
    Unk15_0?: number;
    Unk16: number;
    Position: Vector3F;
    Unk18_0?: bigint;
    Unk19_0?: number;
    Unk20_0?: number;
    Unk21: number;
    Unk22_0?: number;
    Unk23: number;
    Unk24_0?: number;
    TransitIndex?: number;
    Unk26: number;
    Unk27_0?: number;
    DirectionYaw: Angle;
    Unk29_0?: number;
    Unk30: number;
    ObjectId: bigint;
    TypeId: number;
};

declare type PKTNewNpc = {
    NpcStruct: NpcData;
    Unk1: number;
    Unk2_0?: bigint;
    Unk3_0?: number;
    Unk0_0?: string;
    Unk0_1?: string;
};
declare function read$s(buf: Buffer): PKTNewNpc;
declare const name$s = "PKTNewNpc";
declare const opcode$s = 11763;

declare type PKTNewNpcSummon = {
    OwnerId: bigint;
    PublishReason: number;
    NpcData: NpcData;
};
declare function read$r(buf: Buffer): PKTNewNpcSummon;
declare const name$r = "PKTNewNpcSummon";
declare const opcode$r = 13729;

declare type PCStruct = {
    Unk0: number;
    Unk1: number;
    Unk5_m: number;
    Unk3_0?: Buffer;
    Unk4: number;
    struct_300: Struct_636[];
    Unk6: Buffer;
    statPair: {
        StatType: number;
        Value: bigint;
    }[];
    Name: string;
    CharacterId: bigint;
    Unk10: number;
    Unk11: Buffer;
    struct_120: Buffer;
    Heading: Angle;
    Unk14: number;
    Unk15: number;
    Unk16: number;
    struct_299: Struct_636[];
    ClassId: number;
    Unk19: number;
    Unk20: string;
    Unk21: number;
    Unk22: number;
    PlayerId: bigint;
    Unk24: number;
    Unk25: number;
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        SkillId: number;
    }[];
    Unk27: number;
    Unk28: number;
    statusEffectDatas: StatusEffectData[];
    Unk30: number;
    Unk31: number;
    Unk32: number;
    GearLevel: number;
    Unk34: bigint;
    Unk35: number;
    Unk36: number;
    Unk37: number;
    struct_86: Buffer;
    struct_372: Struct_674[];
    Level: number;
    Unk41: number;
    Unk42: number;
    Unk43: number;
};

declare type TrackMoveInfo = {
    Unk0: number;
    Unk1: Buffer;
    Unk2: number;
    Unk3_0?: Buffer;
};

declare type PKTNewPC = {
    Unk5_0_m?: Buffer;
    Unk4_0_m?: Buffer;
    Unk2_m: number;
    Unk0_m: number;
    PCStruct: PCStruct;
    TrackMoveInfo?: TrackMoveInfo;
    Unk3_0_m?: number;
};
declare function read$q(buf: Buffer): PKTNewPC;
declare const name$q = "PKTNewPC";
declare const opcode$q = 55660;
========
type NpcData = {
    struct_366: Struct_674[];
    Unk1: number;
    SpawnIndex: number;
    Unk3_0?: number;
    Unk4_0?: number;
    Unk5_0?: bigint;
    Position: Vector3F;
    struct_671?: Struct_671;
    TransitIndex?: number;
    statusEffectDatas: StatusEffectData[];
    Unk10_0?: number;
    Unk11: number;
    Unk12_0?: number;
    Unk13_0?: number;
    Unk14_0?: number;
    struct_314?: Buffer;
    Unk16_0?: number;
    DirectionYaw: Angle;
    Unk18_0?: number;
    Unk19_0?: number;
    ObjectId: bigint;
    Unk21: number;
    Unk22: number;
    Unk23_0?: number;
    Unk24: number;
    Unk25_0?: number;
    TypeId: number;
    Unk27_0?: number;
    Unk28: number;
    statPair: {
        StatType: number;
        Value: bigint;
    }[];
    struct_250?: Buffer;
    Unk31: number;
    Unk32_0?: number;
};

type PKTNewNpc = {
    Unk0_0?: string;
    Unk0_1?: string;
    Unk1: number;
    NpcStruct: NpcData;
    Unk3_0?: bigint;
    Unk4_0?: number;
};
declare function read$s(buf: Buffer): PKTNewNpc;
declare const name$s = "PKTNewNpc";
declare const opcode$s = 32635;

type PKTNewNpcSummon = {
    PublishReason: number;
    NpcData: NpcData;
    OwnerId: bigint;
};
declare function read$r(buf: Buffer): PKTNewNpcSummon;
declare const name$r = "PKTNewNpcSummon";
declare const opcode$r = 26596;

type TrackMoveInfo = {
    Unk0: number;
    Unk1: number;
    Unk2: Buffer;
    Unk3_0?: Buffer;
};

type PCStruct = {
    Unk0: number;
    Unk1: number;
    Unk2: number;
    Unk3: bigint;
    struct_83: Buffer;
    Unk5: number;
    Unk6: number;
    Level: number;
    Unk8: number;
    Unk9: number;
    struct_297: Struct_636[];
    statusEffectDatas: StatusEffectData[];
    PlayerId: bigint;
    Unk13: string;
    Unk14: Buffer;
    Unk15: number;
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        SkillId: number;
    }[];
    ClassId: number;
    Unk18: number;
    Unk19: number;
    Unk20_0?: Buffer;
    Unk21: number;
    Unk22: number;
    Unk23: number;
    Unk24: number;
    struct_296: Struct_636[];
    Heading: Angle;
    statPair: {
        StatType: number;
        Value: bigint;
    }[];
    Unk28: number;
    Unk29: number;
    struct_366: Struct_674[];
    GearLevel: number;
    Unk32: number;
    Unk33: number;
    Unk34: number;
    Unk35: number;
    Unk36: number;
    Name: string;
    Unk5_m: number;
    Unk39: number;
    CharacterId: bigint;
    Unk41: number;
    Unk42: Buffer;
    struct_115: Buffer;
};

type PKTNewPC = {
    Unk2_m: number;
    Unk4_0_m?: Buffer;
    Unk3_0_m?: number;
    Unk5_0_m?: Buffer;
    TrackMoveInfo?: TrackMoveInfo;
    PCStruct: PCStruct;
    Unk0_m: number;
};
declare function read$q(buf: Buffer): PKTNewPC;
declare const name$q = "PKTNewPC";
declare const opcode$q = 58123;
>>>>>>>> 2e868f7e588163ec47402f328a9a7dd8a2780ddb:dist/PKTTroopMemberUpdateMinNotify-c750104b.d.ts

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

<<<<<<<< HEAD:dist/PKTTroopMemberUpdateMinNotify-ac28db28.d.ts
declare type ProjectileInfo = {
    SkillEffect: number;
    ProjectileId: bigint;
    Unk2_0?: bigint;
    tripodIndex: TripodIndex;
    Unk4: number;
    Unk5: number;
    Unk6: number;
    SkillLevel: number;
    Unk8: bigint;
    Unk9: number;
    OwnerId: bigint;
    Unk11: bigint;
    Unk12: bigint;
    tripodLevel: TripodLevel;
    Unk14: number;
    Unk15_0?: number;
    struct_318?: Buffer;
    Unk17: number;
    SkillId: number;
    Unk19: number;
    Unk20: number;
};

declare type PKTNewProjectile = {
    projectileInfo: ProjectileInfo;
};
declare function read$p(buf: Buffer): PKTNewProjectile;
declare const name$p = "PKTNewProjectile";
declare const opcode$p = 36459;

declare type PKTParalyzationStateNotify = {
    HitCheckTime: number;
    ParalyzationMaxPoint: number;
    Enable: boolean;
    DecreasePoint: number;
    ObjectId: bigint;
    ParalyzationPoint: number;
    NoHitCheckTime: number;
};
declare function read$o(buf: Buffer): PKTParalyzationStateNotify;
declare const name$o = "PKTParalyzationStateNotify";
declare const opcode$o = 34438;

declare type PartyMemberData = {
    Unk0: number;
    Unk1: bigint;
    Unk2: number;
    Unk3: number;
    CharacterLevel: number;
    Unk5: bigint;
    Unk6: number;
    Unk7: number;
    Unk8: number;
    Unk9: number;
    Unk10: number;
    Unk11: number;
    Unk12: number;
    Name: string;
    Unk14: number;
    CharacterId: bigint;
    Unk16: bigint;
    Unk17: bigint;
    Unk18: number;
    PartyMemberNumber: number;
};

declare type PKTPartyInfo = {
    PartyLootType: number;
    RaidInstanceId: number;
    LootGrade: number;
    MemberDatas: PartyMemberData[];
    PartyInstanceId: number;
    PartyType: number;
};
declare function read$n(buf: Buffer): PKTPartyInfo;
declare const name$n = "PKTPartyInfo";
declare const opcode$n = 43950;

declare type PKTPartyLeaveResult = {
    Name: string;
    PartyInstanceId: number;
    PartyLeaveType: number;
};
declare function read$m(buf: Buffer): PKTPartyLeaveResult;
declare const name$m = "PKTPartyLeaveResult";
declare const opcode$m = 59312;

declare type PKTPartyPassiveStatusEffectAddNotify = {
    ObjectId: bigint;
    Unk0_m: number;
    passiveStatusEffectList: number[];
};
declare function read$l(buf: Buffer): PKTPartyPassiveStatusEffectAddNotify;
declare const name$l = "PKTPartyPassiveStatusEffectAddNotify";
declare const opcode$l = 20854;

declare type PKTPartyPassiveStatusEffectRemoveNotify = {
    passiveStatusEffectList: number[];
    ObjectId: bigint;
};
declare function read$k(buf: Buffer): PKTPartyPassiveStatusEffectRemoveNotify;
declare const name$k = "PKTPartyPassiveStatusEffectRemoveNotify";
declare const opcode$k = 48340;

declare type PKTPartyStatusEffectAddNotify = {
    PlayerIdOnRefresh: bigint;
    CharacterId: bigint;
    Unk2: number;
    Unk3: bigint;
    statusEffectDatas: StatusEffectData[];
};
declare function read$j(buf: Buffer): PKTPartyStatusEffectAddNotify;
declare const name$j = "PKTPartyStatusEffectAddNotify";
declare const opcode$j = 29152;

declare type PKTPartyStatusEffectRemoveNotify = {
    Unk0: number;
    CharacterId: bigint;
    statusEffectIds: number[];
    Unk3: bigint;
};
declare function read$i(buf: Buffer): PKTPartyStatusEffectRemoveNotify;
declare const name$i = "PKTPartyStatusEffectRemoveNotify";
declare const opcode$i = 49827;

declare type PKTPartyStatusEffectResultNotify = {
    RaidInstanceId: number;
    PartyInstanceId: number;
    CharacterId: bigint;
};
declare function read$h(buf: Buffer): PKTPartyStatusEffectResultNotify;
declare const name$h = "PKTPartyStatusEffectResultNotify";
declare const opcode$h = 37755;

declare type PKTPassiveStatusEffectAddNotify = {
    passiveStatusEffectList: number[];
};
declare function read$g(buf: Buffer): PKTPassiveStatusEffectAddNotify;
declare const name$g = "PKTPassiveStatusEffectAddNotify";
declare const opcode$g = 33210;

declare type PKTPassiveStatusEffectRemoveNotify = {
    passiveStatusEffectList: number[];
};
declare function read$f(buf: Buffer): PKTPassiveStatusEffectRemoveNotify;
declare const name$f = "PKTPassiveStatusEffectRemoveNotify";
declare const opcode$f = 16624;

declare type PKTRaidBossKillNotify = {
    Unk0: Buffer;
};
declare function read$e(buf: Buffer): PKTRaidBossKillNotify;
declare const name$e = "PKTRaidBossKillNotify";
declare const opcode$e = 35914;

declare type PKTRaidResult = {
    Unk0: bigint;
    Unk1: number;
    Unk2: number;
    Unk3: bigint;
    struct_45: {
        Unk0_0_0: bigint;
        Unk0_0_1: bigint;
        struct_495: Buffer;
        Unk0_0_3: number;
    }[];
    Unk5: number;
    Unk6: bigint;
    Unk7: bigint;
};
declare function read$d(buf: Buffer): PKTRaidResult;
declare const name$d = "PKTRaidResult";
declare const opcode$d = 24561;
========
type ProjectileInfo = {
    Unk0: bigint;
    Unk1_0?: bigint;
    Unk2: number;
    struct_314?: Buffer;
    Unk4: bigint;
    Unk5: number;
    Unk6: bigint;
    Unk7: number;
    ProjectileId: bigint;
    tripodIndex: TripodIndex;
    Unk10: number;
    Unk11: number;
    Unk12: number;
    Unk13: number;
    SkillLevel: number;
    Unk15_0?: number;
    tripodLevel: TripodLevel;
    SkillId: number;
    SkillEffect: number;
    OwnerId: bigint;
    Unk20: number;
};

type PKTNewProjectile = {
    projectileInfo: ProjectileInfo;
};
declare function read$p(buf: Buffer): PKTNewProjectile;
declare const name$p = "PKTNewProjectile";
declare const opcode$p = 45143;

type PKTParalyzationStateNotify = {
    Enable: boolean;
    ParalyzationMaxPoint: number;
    DecreasePoint: number;
    HitCheckTime: number;
    ParalyzationPoint: number;
    ObjectId: bigint;
    NoHitCheckTime: number;
};
declare function read$o(buf: Buffer): PKTParalyzationStateNotify;
declare const name$o = "PKTParalyzationStateNotify";
declare const opcode$o = 10632;

type PartyMemberData = {
    Unk0: number;
    Unk1: bigint;
    Unk2: number;
    Unk3: bigint;
    Unk4: number;
    CharacterId: bigint;
    Unk6: number;
    Unk7: bigint;
    PartyMemberNumber: number;
    Unk9: number;
    Unk10: number;
    Unk11: number;
    Unk12: number;
    Name: string;
    Unk14: number;
    CharacterLevel: number;
    Unk16: number;
    Unk17: number;
    Unk18: bigint;
    Unk19: number;
};

type PKTPartyInfo = {
    PartyType: number;
    MemberDatas: PartyMemberData[];
    LootGrade: number;
    PartyInstanceId: number;
    PartyLootType: number;
    RaidInstanceId: number;
};
declare function read$n(buf: Buffer): PKTPartyInfo;
declare const name$n = "PKTPartyInfo";
declare const opcode$n = 8616;

type PKTPartyLeaveResult = {
    PartyInstanceId: number;
    Name: string;
    PartyLeaveType: number;
};
declare function read$m(buf: Buffer): PKTPartyLeaveResult;
declare const name$m = "PKTPartyLeaveResult";
declare const opcode$m = 56943;

type PKTPartyPassiveStatusEffectAddNotify = {
    Unk0_m: number;
    ObjectId: bigint;
    passiveStatusEffectList: number[];
};
declare function read$l(buf: Buffer): PKTPartyPassiveStatusEffectAddNotify;
declare const name$l = "PKTPartyPassiveStatusEffectAddNotify";
declare const opcode$l = 24702;

type PKTPartyPassiveStatusEffectRemoveNotify = {
    ObjectId: bigint;
    passiveStatusEffectList: number[];
};
declare function read$k(buf: Buffer): PKTPartyPassiveStatusEffectRemoveNotify;
declare const name$k = "PKTPartyPassiveStatusEffectRemoveNotify";
declare const opcode$k = 59968;

type PKTPartyStatusEffectAddNotify = {
    Unk0: number;
    statusEffectDatas: StatusEffectData[];
    CharacterId: bigint;
    Unk3: bigint;
    PlayerIdOnRefresh: bigint;
};
declare function read$j(buf: Buffer): PKTPartyStatusEffectAddNotify;
declare const name$j = "PKTPartyStatusEffectAddNotify";
declare const opcode$j = 5853;

type PKTPartyStatusEffectRemoveNotify = {
    Unk0: number;
    CharacterId: bigint;
    Unk2: bigint;
    statusEffectIds: number[];
};
declare function read$i(buf: Buffer): PKTPartyStatusEffectRemoveNotify;
declare const name$i = "PKTPartyStatusEffectRemoveNotify";
declare const opcode$i = 15434;

type PKTPartyStatusEffectResultNotify = {
    PartyInstanceId: number;
    RaidInstanceId: number;
    CharacterId: bigint;
};
declare function read$h(buf: Buffer): PKTPartyStatusEffectResultNotify;
declare const name$h = "PKTPartyStatusEffectResultNotify";
declare const opcode$h = 57506;

type PKTPassiveStatusEffectAddNotify = {
    passiveStatusEffectList: number[];
};
declare function read$g(buf: Buffer): PKTPassiveStatusEffectAddNotify;
declare const name$g = "PKTPassiveStatusEffectAddNotify";
declare const opcode$g = 6905;

type PKTPassiveStatusEffectRemoveNotify = {
    passiveStatusEffectList: number[];
};
declare function read$f(buf: Buffer): PKTPassiveStatusEffectRemoveNotify;
declare const name$f = "PKTPassiveStatusEffectRemoveNotify";
declare const opcode$f = 50847;

type PKTRaidBossKillNotify = {
    Unk0: Buffer;
};
declare function read$e(buf: Buffer): PKTRaidBossKillNotify;
declare const name$e = "PKTRaidBossKillNotify";
declare const opcode$e = 34040;

type PKTRaidResult = {
    Unk0: number;
    Unk1: bigint;
    Unk2: bigint;
    Unk3: number;
    Unk4: bigint;
    Unk5: bigint;
    Unk6: number;
    struct_43: {
        struct_494: Buffer;
        Unk0_0_1: bigint;
        Unk0_0_2: bigint;
        Unk0_0_3: number;
    }[];
};
declare function read$d(buf: Buffer): PKTRaidResult;
declare const name$d = "PKTRaidResult";
declare const opcode$d = 13462;
>>>>>>>> 2e868f7e588163ec47402f328a9a7dd8a2780ddb:dist/PKTTroopMemberUpdateMinNotify-c750104b.d.ts

declare type UnpublishObject = {
    ObjectId: bigint;
    UnpublishReason: number;
};

<<<<<<<< HEAD:dist/PKTTroopMemberUpdateMinNotify-ac28db28.d.ts
declare type PKTRemoveObject = {
    unpublishedObjects: UnpublishObject[];
};
declare function read$c(buf: Buffer): PKTRemoveObject;
declare const name$c = "PKTRemoveObject";
declare const opcode$c = 33454;
========
type PKTRemoveObject = {
    unpublishedObjects: UnpublishObject[];
};
declare function read$c(buf: Buffer): PKTRemoveObject;
declare const name$c = "PKTRemoveObject";
declare const opcode$c = 29821;

type SkillDamageEvent = {
    TargetId: bigint;
    CurHp: bigint;
    Damage: bigint;
    Unk3_m: number;
    DamageAttr?: number;
    DamageType: number;
    MaxHp: bigint;
    Modifier: number;
};
>>>>>>>> 2e868f7e588163ec47402f328a9a7dd8a2780ddb:dist/PKTTroopMemberUpdateMinNotify-c750104b.d.ts

declare type SkillMoveOptionData = {
    MoveTime?: number;
    StandUpTime?: number;
    DownTime?: number;
    FreezeTime?: number;
    MoveHeight?: number;
    FarmostDist?: number;
    flag40?: Buffer;
};

<<<<<<<< HEAD:dist/PKTTroopMemberUpdateMinNotify-ac28db28.d.ts
declare type SkillDamageEvent = {
    Unk3_m: number;
    CurHp: bigint;
    Damage: bigint;
    DamageAttr?: number;
    DamageType: number;
    Modifier: number;
    TargetId: bigint;
    MaxHp: bigint;
};

declare type SkillDamageAbnormalMoveEvent = {
    Unk1_m: number;
    Unk2_m: bigint;
    SkillMoveOptionData: SkillMoveOptionData;
    Unk4_m: number;
    Unk8_m: number;
    Destination: Vector3F;
    Unk3_m: number;
    Position: Vector3F;
    skillDamageEvent: SkillDamageEvent;
};

declare type PKTSkillDamageAbnormalMoveNotify = {
    Unk1_m: number;
    SourceId: bigint;
    Unk2_m: number;
    SkillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEvent[];
    SkillId: number;
    SkillEffectId: number;
};
declare function read$b(buf: Buffer): PKTSkillDamageAbnormalMoveNotify;
declare const name$b = "PKTSkillDamageAbnormalMoveNotify";
declare const opcode$b = 10555;

declare type PKTSkillDamageNotify = {
    SkillId: number;
    SkillLevel: number;
    SkillEffectId: number;
    SkillDamageEvents: SkillDamageEvent[];
    SourceId: bigint;
};
declare function read$a(buf: Buffer): PKTSkillDamageNotify;
declare const name$a = "PKTSkillDamageNotify";
declare const opcode$a = 17998;

declare type PKTSkillStageNotify = {
    SkillId: number;
    SourceId: bigint;
    Stage: number;
};
declare function read$9(buf: Buffer): PKTSkillStageNotify;
declare const name$9 = "PKTSkillStageNotify";
declare const opcode$9 = 47144;
========
type SkillDamageAbnormalMoveEvent = {
    Unk4_m: number;
    skillDamageEvent: SkillDamageEvent;
    Position: Vector3F;
    Unk8_m: number;
    Unk1_m: number;
    Destination: Vector3F;
    SkillMoveOptionData: SkillMoveOptionData;
    Unk3_m: number;
    Unk2_m: bigint;
};

type PKTSkillDamageAbnormalMoveNotify = {
    Unk1_m: number;
    SkillId: number;
    SkillEffectId: number;
    Unk2_m: number;
    SkillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEvent[];
    SourceId: bigint;
};
declare function read$b(buf: Buffer): PKTSkillDamageAbnormalMoveNotify;
declare const name$b = "PKTSkillDamageAbnormalMoveNotify";
declare const opcode$b = 16593;

type PKTSkillDamageNotify = {
    SkillEffectId: number;
    SkillId: number;
    SourceId: bigint;
    SkillLevel: number;
    SkillDamageEvents: SkillDamageEvent[];
};
declare function read$a(buf: Buffer): PKTSkillDamageNotify;
declare const name$a = "PKTSkillDamageNotify";
declare const opcode$a = 2813;

type PKTSkillStageNotify = {
    Stage: number;
    SkillId: number;
    SourceId: bigint;
};
declare function read$9(buf: Buffer): PKTSkillStageNotify;
declare const name$9 = "PKTSkillStageNotify";
declare const opcode$9 = 17861;
>>>>>>>> 2e868f7e588163ec47402f328a9a7dd8a2780ddb:dist/PKTTroopMemberUpdateMinNotify-c750104b.d.ts

declare type SkillOptionData = {
    LayerIndex?: number;
    StartStageIndex?: number;
    TransitIndex?: number;
    StageStartTime?: number;
    FarmostDistance?: number;
    TripodIndex?: TripodIndex;
    TripodLevel?: TripodLevel;
};

<<<<<<<< HEAD:dist/PKTTroopMemberUpdateMinNotify-ac28db28.d.ts
declare type PKTSkillStartNotify = {
    SourceId: bigint;
    CurPosition: Vector3F;
    Unk1_m?: number;
    NewPosition: Vector3F;
    CurDirectionYaw: Angle;
    AimTargetPosition: Vector3F;
    AiStateId?: number;
    SkillLevel: number;
    SkillId: number;
    NewDirectionYaw: Angle;
    SkillOptionData: SkillOptionData;
    PitchRotation?: Angle;
};
declare function read$8(buf: Buffer): PKTSkillStartNotify;
declare const name$8 = "PKTSkillStartNotify";
declare const opcode$8 = 28344;

declare type PKTStatChangeOriginNotify = {
    ObjectId: bigint;
    Unk1_0?: number;
    Unk2: {
        StatType: number;
        Value: bigint;
    }[];
    Unk3: number;
    Unk4: {
        StatType: number;
        Value: bigint;
    }[];
};
declare function read$7(buf: Buffer): PKTStatChangeOriginNotify;
declare const name$7 = "PKTStatChangeOriginNotify";
declare const opcode$7 = 37312;

declare type PKTStatusEffectAddNotify = {
    ObjectId: bigint;
    Unk1_0?: bigint;
    Unk2: bigint;
    statusEffectData: StatusEffectData;
    New: boolean;
};
declare function read$6(buf: Buffer): PKTStatusEffectAddNotify;
declare const name$6 = "PKTStatusEffectAddNotify";
declare const opcode$6 = 12655;

declare type PKTStatusEffectRemoveNotify = {
    ObjectId: bigint;
    Reason: number;
    statusEffectIds: number[];
};
declare function read$5(buf: Buffer): PKTStatusEffectRemoveNotify;
declare const name$5 = "PKTStatusEffectRemoveNotify";
declare const opcode$5 = 42373;

declare type PKTStatusEffectSyncDataNotify = {
    Value: number;
    EffectInstanceId: number;
    ObjectId: bigint;
    CharacterId: bigint;
};
declare function read$4(buf: Buffer): PKTStatusEffectSyncDataNotify;
declare const name$4 = "PKTStatusEffectSyncDataNotify";
declare const opcode$4 = 10266;

declare type PKTTriggerBossBattleStatus = {
    Step: number;
    Unk2_m: boolean;
    TriggerId: number;
};
declare function read$3(buf: Buffer): PKTTriggerBossBattleStatus;
declare const name$3 = "PKTTriggerBossBattleStatus";
declare const opcode$3 = 4265;

declare type PKTTriggerFinishNotify = {
    InvolvedPCs: bigint[];
    PacketResultCode: number;
    TriggerId: number;
    Unk0_m: number;
};
declare function read$2(buf: Buffer): PKTTriggerFinishNotify;
declare const name$2 = "PKTTriggerFinishNotify";
declare const opcode$2 = 38227;

declare type PKTTriggerStartNotify = {
    SourceId: bigint;
    TriggerSignalType: number;
    InvolvedPCs: bigint[];
    TriggerId: number;
};
declare function read$1(buf: Buffer): PKTTriggerStartNotify;
declare const name$1 = "PKTTriggerStartNotify";
declare const opcode$1 = 11378;

declare type PKTTroopMemberUpdateMinNotify = {
    MaxHp: bigint;
    statusEffectDatas: StatusEffectData[];
    CharacterId: bigint;
    Unk0_m: number;
    Position: bigint;
    CurHp: bigint;
};
declare function read(buf: Buffer): PKTTroopMemberUpdateMinNotify;
declare const name = "PKTTroopMemberUpdateMinNotify";
declare const opcode = 53789;
========
type PKTSkillStartNotify = {
    SkillLevel: number;
    AiStateId?: number;
    SkillId: number;
    SkillOptionData: SkillOptionData;
    PitchRotation?: Angle;
    NewDirectionYaw: Angle;
    NewPosition: Vector3F;
    CurPosition: Vector3F;
    AimTargetPosition: Vector3F;
    CurDirectionYaw: Angle;
    Unk1_m?: number;
    SourceId: bigint;
};
declare function read$8(buf: Buffer): PKTSkillStartNotify;
declare const name$8 = "PKTSkillStartNotify";
declare const opcode$8 = 13284;

type PKTStatChangeOriginNotify = {
    Unk0_0?: number;
    ObjectId: bigint;
    Unk2: {
        StatType: number;
        Value: bigint;
    }[];
    Unk3: {
        StatType: number;
        Value: bigint;
    }[];
    Unk4: number;
};
declare function read$7(buf: Buffer): PKTStatChangeOriginNotify;
declare const name$7 = "PKTStatChangeOriginNotify";
declare const opcode$7 = 24475;

type PKTStatusEffectAddNotify = {
    New: boolean;
    ObjectId: bigint;
    statusEffectData: StatusEffectData;
    Unk3: bigint;
    Unk4_0?: bigint;
};
declare function read$6(buf: Buffer): PKTStatusEffectAddNotify;
declare const name$6 = "PKTStatusEffectAddNotify";
declare const opcode$6 = 35476;

type PKTStatusEffectRemoveNotify = {
    statusEffectIds: number[];
    ObjectId: bigint;
    Reason: number;
};
declare function read$5(buf: Buffer): PKTStatusEffectRemoveNotify;
declare const name$5 = "PKTStatusEffectRemoveNotify";
declare const opcode$5 = 54795;

type PKTStatusEffectSyncDataNotify = {
    EffectInstanceId: number;
    ObjectId: bigint;
    CharacterId: bigint;
    Value: number;
};
declare function read$4(buf: Buffer): PKTStatusEffectSyncDataNotify;
declare const name$4 = "PKTStatusEffectSyncDataNotify";
declare const opcode$4 = 17356;

type PKTTriggerBossBattleStatus = {
    Unk2_m: boolean;
    TriggerId: number;
    Step: number;
};
declare function read$3(buf: Buffer): PKTTriggerBossBattleStatus;
declare const name$3 = "PKTTriggerBossBattleStatus";
declare const opcode$3 = 51236;

type PKTTriggerFinishNotify = {
    PacketResultCode: number;
    InvolvedPCs: bigint[];
    TriggerId: number;
    Unk0_m: number;
};
declare function read$2(buf: Buffer): PKTTriggerFinishNotify;
declare const name$2 = "PKTTriggerFinishNotify";
declare const opcode$2 = 43614;

type PKTTriggerStartNotify = {
    InvolvedPCs: bigint[];
    TriggerId: number;
    TriggerSignalType: number;
    SourceId: bigint;
};
declare function read$1(buf: Buffer): PKTTriggerStartNotify;
declare const name$1 = "PKTTriggerStartNotify";
declare const opcode$1 = 4099;

type PKTTroopMemberUpdateMinNotify = {
    Unk0_m: number;
    CharacterId: bigint;
    MaxHp: bigint;
    Position: bigint;
    statusEffectDatas: StatusEffectData[];
    CurHp: bigint;
};
declare function read(buf: Buffer): PKTTroopMemberUpdateMinNotify;
declare const name = "PKTTroopMemberUpdateMinNotify";
declare const opcode = 6981;
>>>>>>>> 2e868f7e588163ec47402f328a9a7dd8a2780ddb:dist/PKTTroopMemberUpdateMinNotify-c750104b.d.ts

export { opcode$q as $, PKTRemoveObject as A, PKTSkillDamageAbnormalMoveNotify as B, PKTSkillDamageNotify as C, PKTSkillStageNotify as D, PKTSkillStartNotify as E, PKTStatChangeOriginNotify as F, PKTStatusEffectAddNotify as G, PKTStatusEffectRemoveNotify as H, PKTStatusEffectSyncDataNotify as I, PKTTriggerBossBattleStatus as J, PKTTriggerFinishNotify as K, PKTTriggerStartNotify as L, PKTTroopMemberUpdateMinNotify as M, opcode$D as N, opcode$C as O, PKTAbilityChangeNotify as P, opcode$B as Q, opcode$A as R, opcode$z as S, opcode$y as T, opcode$x as U, opcode$w as V, opcode$v as W, opcode$u as X, opcode$t as Y, opcode$s as Z, opcode$r as _, PKTActiveAbilityNotify as a, name$2 as a$, opcode$p as a0, opcode$o as a1, opcode$n as a2, opcode$m as a3, opcode$l as a4, opcode$k as a5, opcode$j as a6, opcode$i as a7, opcode$h as a8, opcode$g as a9, name$t as aA, name$s as aB, name$r as aC, name$q as aD, name$p as aE, name$o as aF, name$n as aG, name$m as aH, name$l as aI, name$k as aJ, name$j as aK, name$i as aL, name$h as aM, name$g as aN, name$f as aO, name$e as aP, name$d as aQ, name$c as aR, name$b as aS, name$a as aT, name$9 as aU, name$8 as aV, name$7 as aW, name$6 as aX, name$5 as aY, name$4 as aZ, name$3 as a_, opcode$f as aa, opcode$e as ab, opcode$d as ac, opcode$c as ad, opcode$b as ae, opcode$a as af, opcode$9 as ag, opcode$8 as ah, opcode$7 as ai, opcode$6 as aj, opcode$5 as ak, opcode$4 as al, opcode$3 as am, opcode$2 as an, opcode$1 as ao, opcode as ap, name$D as aq, name$C as ar, name$B as as, name$A as at, name$z as au, name$y as av, name$x as aw, name$w as ax, name$v as ay, name$u as az, PKTAddonSkillFeatureChangeNotify as b, name$1 as b0, name as b1, read$D as b2, read$C as b3, read$B as b4, read$A as b5, read$z as b6, read$y as b7, read$x as b8, read$w as b9, read$5 as bA, read$4 as bB, read$3 as bC, read$2 as bD, read$1 as bE, read as bF, read$v as ba, read$u as bb, read$t as bc, read$s as bd, read$r as be, read$q as bf, read$p as bg, read$o as bh, read$n as bi, read$m as bj, read$l as bk, read$k as bl, read$j as bm, read$i as bn, read$h as bo, read$g as bp, read$f as bq, read$e as br, read$d as bs, read$c as bt, read$b as bu, read$a as bv, read$9 as bw, read$8 as bx, read$7 as by, read$6 as bz, PKTAuthTokenResult as c, PKTBlockSkillStateNotify as d, PKTCounterAttackNotify as e, PKTDeathNotify as f, PKTInitAbility as g, PKTInitEnv as h, PKTInitPC as i, PKTInitLocal as j, PKTNewNpc as k, PKTNewNpcSummon as l, PKTNewPC as m, PKTNewProjectile as n, PKTParalyzationStateNotify as o, PKTPartyInfo as p, PKTPartyLeaveResult as q, PKTPartyPassiveStatusEffectAddNotify as r, PKTPartyPassiveStatusEffectRemoveNotify as s, PKTPartyStatusEffectAddNotify as t, PKTPartyStatusEffectRemoveNotify as u, PKTPartyStatusEffectResultNotify as v, PKTPassiveStatusEffectAddNotify as w, PKTPassiveStatusEffectRemoveNotify as x, PKTRaidBossKillNotify as y, PKTRaidResult as z };
