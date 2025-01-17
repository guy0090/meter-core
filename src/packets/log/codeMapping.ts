import * as codes from "../generated/codes";
import * as logIds from "./logIds";
export const codeMapping = new Map<number, [number]>([
  [codes.PKTAbilityChangeNotify, [logIds.AbilityChangeNotify]],
  [codes.PKTActiveAbilityNotify, [logIds.ActiveAbilityNotify]],
  [codes.PKTAddonSkillFeatureChangeNotify, [logIds.AddonSkillFeatureChangeNotify]],
  [codes.PKTBlockSkillStateNotify, [logIds.BlockSkillStateNotify]],
  [codes.PKTCounterAttackNotify, [logIds.CounterAttackNotify]],
  [codes.PKTDeathNotify, [logIds.DeathNotify]],
  [codes.PKTInitAbility, [logIds.InitAbility]],
  [codes.PKTInitEnv, [logIds.InitEnv]],
  [codes.PKTInitPC, [logIds.InitPC]],
  [codes.PKTInitLocal, [logIds.InitLocal]],
  [codes.PKTMigrationExecute, [logIds.MigrationExecute]],
  [codes.PKTNewNpc, [logIds.NewNpc]],
  [codes.PKTNewNpcSummon, [logIds.NewNpcSummon]],
  [codes.PKTNewPC, [logIds.NewPC]],
  [codes.PKTNewProjectile, [logIds.NewProjectile]],
  [codes.PKTParalyzationStateNotify, [logIds.ParalyzationStateNotify]],
  [codes.PKTPartyInfo, [logIds.PartyInfo]],
  [codes.PKTPartyLeaveResult, [logIds.PartyLeaveResult]],
  [codes.PKTPartyPassiveStatusEffectAddNotify, [logIds.PartyPassiveStatusEffectAddNotify]],
  [codes.PKTPartyPassiveStatusEffectRemoveNotify, [logIds.PartyPassiveStatusEffectRemoveNotify]],
  [codes.PKTPartyStatusEffectAddNotify, [logIds.PartyStatusEffectAddNotify]],
  [codes.PKTPartyStatusEffectRemoveNotify, [logIds.PartyStatusEffectRemoveNotify]],
  [codes.PKTPartyStatusEffectResultNotify, [logIds.PartyStatusEffectResultNotify]],
  [codes.PKTPassiveStatusEffectAddNotify, [logIds.PassiveStatusEffectAddNotify]],
  [codes.PKTPassiveStatusEffectRemoveNotify, [logIds.PassiveStatusEffectRemoveNotify]],
  [codes.PKTRaidBossKillNotify, [logIds.RaidBossKillNotify]],
  [codes.PKTRaidResult, [logIds.RaidResult]],
  [codes.PKTRemoveObject, [logIds.RemoveObject]],
  [codes.PKTSkillDamageAbnormalMoveNotify, [logIds.SkillDamageAbnormalMoveNotify]],
  [codes.PKTSkillDamageNotify, [logIds.SkillDamageNotify]],
  [codes.PKTSkillStageNotify, [logIds.SkillStageNotify]],
  [codes.PKTSkillStartNotify, [logIds.SkillStartNotify]],
  [codes.PKTStatusEffectAddNotify, [logIds.StatusEffectAddNotify]],
  [codes.PKTStatusEffectRemoveNotify, [logIds.StatusEffectRemoveNotify]],
  [codes.PKTStatusEffectDurationNotify, [logIds.StatusEffectDurationNotify]],
  [codes.PKTStatusEffectSyncDataNotify, [logIds.StatusEffectSyncDataNotify]],
  [codes.PKTTriggerBossBattleStatus, [logIds.TriggerBossBattleStatus]],
  [codes.PKTTriggerFinishNotify, [logIds.TriggerFinishNotify]],
  [codes.PKTTriggerStartNotify, [logIds.TriggerStartNotify]],
  [codes.PKTTroopMemberUpdateMinNotify, [logIds.TroopMemberUpdateMinNotify]],
  [codes.PKTIdentityGaugeChangeNotify, [logIds.IdentityGaugeChangeNotify]],
  [codes.PKTZoneObjectUnpublishNotify, [logIds.ZoneObjectUnpublishNotify]],
  [codes.PKTZoneStatusEffectAddNotify, [logIds.ZoneStatusEffectAddNotify]],
  [codes.PKTZoneStatusEffectRemoveNotify, [logIds.ZoneStatusEffectRemoveNotify]],
  [codes.PKTSkillCastNotify, [logIds.SkillCastNotify]],
]);
