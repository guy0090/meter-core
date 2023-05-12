import"../chunk-JWW2Y3M4.mjs";import"../chunk-UEW5MVPI.mjs";import{a as D,b as y,c as B,d as x,e as v}from"../chunk-K7C7TUE5.mjs";import{TypedEmitter as et}from"tiny-typed-emitter";import{TypedEmitter as $}from"tiny-typed-emitter";function T(b){let s=Buffer.alloc(4);return s.writeUInt32LE(b),Math.round(s.readFloatLE()*100)/100}var E,C,p,M,U,w,L,G=class extends ${constructor(e,i,t=!0,a=!!process.env.DEV){super();B(this,M);B(this,w);D(this,"PartyStatusEffectRegistry");D(this,"LocalStatusEffectRegistry");B(this,E,void 0);B(this,C,void 0);B(this,p,void 0);D(this,"debug");D(this,"trace",!1);this.PartyStatusEffectRegistry=new Map,this.LocalStatusEffectRegistry=new Map,this.debug=a,x(this,E,e),x(this,C,i),x(this,p,t)}getStatusEffectRegistryForPlayer(e,i){let t=this.getPlayerRegistry(i),a=t.get(e);if(a)return a;let r=new Map;return t.set(e,r),r}hasStatusEffectRegistryForPlayer(e,i){return this.getPlayerRegistry(i).has(e)}getPlayerRegistry(e){switch(e){case 1:return this.LocalStatusEffectRegistry;case 0:return this.PartyStatusEffectRegistry;default:break}return this.LocalStatusEffectRegistry}RemoveLocalObject(e,i){let t=this.LocalStatusEffectRegistry.get(e);if(t)for(let[,a]of t)this.RemoveStatusEffect(e,a.instanceId,1,void 0,i);this.LocalStatusEffectRegistry.delete(e)}RemovePartyObject(e,i){let t=this.PartyStatusEffectRegistry.get(e);if(t)for(let[,a]of t)this.RemoveStatusEffect(e,a.instanceId,0,void 0,i);this.PartyStatusEffectRegistry.delete(e)}RegisterStatusEffect(e){let i=this.getStatusEffectRegistryForPlayer(e.targetId,e.type),t=i.get(e.instanceId);t?y(this,p)&&t.expirationTimer&&(clearTimeout(t.expirationTimer),t.expirationTimer=void 0):e.effectType===0&&this.emit("shieldApplied",e),i.set(e.instanceId,e),this.SetupStatusEffectTimeout(e)}HasAnyStatusEffect(e,i,t,a){if(!this.hasStatusEffectRegistryForPlayer(e,i))return!1;let r=this.getStatusEffectRegistryForPlayer(e,i);for(let[,n]of r)if(!(!y(this,p)&&!this.IsReplayStatusEffectValidElseRemove(n,a))){for(let o of t)if(o===n.statusEffectId)return!0}return!1}IsReplayStatusEffectValidElseRemove(e,i){return e.expireAt===void 0||e.expireAt.getTime()>i.getTime()?!0:(this.ExpireStatusEffectByTimeout(e),!1)}HasAnyStatusEffectFromParty(e,i,t,a,r){if(!this.hasStatusEffectRegistryForPlayer(e,i))return!1;let n=this.getStatusEffectRegistryForPlayer(e,i);for(let[,o]of n)if(!(!y(this,p)&&!this.IsReplayStatusEffectValidElseRemove(o,r))&&a.includes(o.statusEffectId)&&(this.ValidForWholeRaid(o)||y(this,E).getPartyIdFromEntityId(o.sourceId)===t))return!0;return!1}RemoveStatusEffect(e,i,t,a,r){if(!this.hasStatusEffectRegistryForPlayer(e,t))return;let n=this.getStatusEffectRegistryForPlayer(e,t),o=n.get(i);o&&(y(this,p)&&(clearTimeout(o.expirationTimer),o.expirationTimer=void 0),n.delete(i),a===4&&(y(this,p)||this.IsReplayStatusEffectValidElseRemove(o,r))&&this.RegisterValueUpdate(o,o.value,0))}GetStatusEffects(e,i,t){if(!this.hasStatusEffectRegistryForPlayer(e,i))return[];let a=this.getStatusEffectRegistryForPlayer(e,i);if(!y(this,p))for(let[,r]of a)this.IsReplayStatusEffectValidElseRemove(r,t);return[...a.values()]}GetStatusEffectsFromParty(e,i,t,a){if(!this.hasStatusEffectRegistryForPlayer(e,i))return[];let r=this.getStatusEffectRegistryForPlayer(e,i);if(!y(this,p))for(let[,n]of r)this.IsReplayStatusEffectValidElseRemove(n,a);return[...r.values()].filter(n=>this.ValidForWholeRaid(n)?!0:t===y(this,E).getPartyIdFromEntityId(n.sourceId))}Clear(e){let i=0;for(let[,a]of this.LocalStatusEffectRegistry){for(let[,r]of a)this.RemoveStatusEffect(r.targetId,r.instanceId,r.type,void 0,e);i+=a.size}let t=0;for(let[,a]of this.PartyStatusEffectRegistry){for(let[,r]of a)this.RemoveStatusEffect(r.targetId,r.instanceId,r.type,void 0,e);t+=a.size}this.trace&&console.log("On Clear SE in local",i,"in party",t),this.LocalStatusEffectRegistry.clear(),this.PartyStatusEffectRegistry.clear()}UpdateDuration(e,i,t,a){let n=this.getStatusEffectRegistryForPlayer(i,a).get(e);if(n){let o=t-n.timestamp;if(y(this,p)&&n.expirationTimer&&(this.trace&&console.log("Clearing timeout for",n.instanceId,"because of duration change"),clearTimeout(n.expirationTimer),n.expirationTimer=void 0),n.expireAt){let f=n.expireAt.getTime()+Number(o),d=f-n.pktTime.getTime();d>0?(this.trace&&console.log("Extending duration by",o,"ms","New timeout delay",d,"from",n.expireAt.toISOString(),"to",new Date(f).toISOString()),y(this,p)&&(n.expirationTimer=setTimeout(this.ExpireStatusEffectByTimeout.bind(this,n),d)),n.expireAt=new Date(f),n.timestamp=t):n.expireAt=void 0}}else this.debug&&console.error("Tried to update duration for SE with instanceId",e," on target",i,"but where is no such SE registered")}SyncStatusEffect(e,i,t,a,r){let n=v(this,w,L).call(this,i,r),o=n?0:1,f=n?i:t;if(!f)return;let c=this.getStatusEffectRegistryForPlayer(f,o).get(e);if(!c)return;let S=c.value;c.value=a,this.RegisterValueUpdate(c,S,a)}ValidForWholeRaid(e){return(e.buffCategory===3||e.buffCategory===1||e.buffCategory===2)&&e.category===1&&e.showType===1}SetupStatusEffectTimeout(e){if(e.expirationDelay>0&&e.expirationDelay<604800){let i=e.pktTime.getTime()>e.occurTime.getTime()?e.pktTime:e.occurTime,t=Math.ceil(e.expirationDelay*1e3),a=i.getTime()+t+G.TIMEOUT_DELAY_MS-e.pktTime.getTime();e.expireAt=new Date(e.pktTime.getTime()+a),this.trace&&console.log("Setting up statuseffect expiration time for",e.name,e.instanceId,"to",e.expireAt.toISOString(),"with delay",a),y(this,p)&&(e.expirationTimer=setTimeout(this.ExpireStatusEffectByTimeout.bind(this,e),a))}}ExpireStatusEffectByTimeout(e){this.debug&&console.error("Triggered timeout on",e.name,"with iid",e.instanceId),this.RemoveStatusEffect(e.targetId,e.instanceId,e.type,void 0,new Date)}RegisterValueUpdate(e,i,t){e.effectType===0&&this.emit("shieldChanged",e,i,t)}newPC(e,i,t){let a=v(this,w,L).call(this,e.PCStruct.CharacterId,i);a?this.RemovePartyObject(e.PCStruct.CharacterId,t):this.RemoveLocalObject(e.PCStruct.PlayerId,t);for(let r of e.PCStruct.statusEffectDatas)this.RegisterStatusEffect(this.buildStatusEffect(r,a?e.PCStruct.CharacterId:e.PCStruct.PlayerId,r.SourceId,a?0:1,t))}buildStatusEffect(e,i,t,a,r){let n=e.Value?e.Value.readUInt32LE():0,o=e.Value?e.Value.readUInt32LE(8):0,f=n<o?n:o,d=0,c=0,S=0,P="Unknown",I=1,m=y(this,C).skillBuff.get(e.StatusEffectId);if(m){switch(P=m.name,m.category){case"debuff":d=1;break}switch(m.buffcategory){case"bracelet":c=1;break;case"etc":c=2;break;case"battleitem":c=3;break}switch(m.iconshowtype){case"all":S=1;break}switch(m.type){case"shield":I=0;break}}return{instanceId:e.EffectInstanceId,sourceId:t,statusEffectId:e.StatusEffectId,targetId:i,type:a,value:f,buffCategory:c,category:d,showType:S,expirationDelay:T(e.TotalTime),expirationTimer:void 0,timestamp:e.EndTick,expireAt:void 0,occurTime:e.OccurTime,name:P,pktTime:r,effectType:I}}getStatusEffects(e,i,t,a){let r=[],n=[],o=v(this,M,U).call(this,e,t),f=this.GetStatusEffects(o?e.characterId:e.entityId,o?0:1,a);for(let d of f)n.push([d.statusEffectId,d.sourceId]);if(i){let d=v(this,M,U).call(this,i,t),c=y(this,E).isEntityInParty(e.entityId),S=c?y(this,E).getPartyIdFromEntityId(e.entityId):void 0,P=c&&S?this.GetStatusEffectsFromParty(d?i.characterId:i.entityId,d?0:1,S,a):this.GetStatusEffects(d?i.characterId:i.entityId,d?0:1,a);for(let I of P)r.push([I.statusEffectId,I.sourceId])}return[n,r]}},R=G;E=new WeakMap,C=new WeakMap,p=new WeakMap,M=new WeakSet,U=function(e,i){if(e.entityType!==1)return!1;let t=e;return v(this,w,L).call(this,t.characterId,i)},w=new WeakSet,L=function(e,i){let t=y(this,E).isCharacterInParty(i),a=y(this,E).isCharacterInParty(e);if(t){if(!a||e===i)return!1;let r=y(this,E).getPartyIdFromCharacterId(i),n=y(this,E).getPartyIdFromCharacterId(e);return r===n}return!1},D(R,"TIMEOUT_DELAY_MS",1e3);var A=class{#t;#s;#r;#n;entities=new Map;localPlayer;constructor(s,e,i,t){this.#t=s,this.#s=e,this.#r=i,this.#n=t,this.localPlayer={entityId:0n,entityType:1,name:"You",class:0,gearLevel:0,characterId:0n}}processNewPC(s){let e=s.parsed;if(!e)return;let i={entityId:e.PCStruct.PlayerId,entityType:1,name:e.PCStruct.Name,class:e.PCStruct.ClassId,gearLevel:T(e.PCStruct.GearLevel),characterId:e.PCStruct.CharacterId};this.entities.set(i.entityId,i);let t=this.#t.getEntityId(i.characterId);return t&&this.#s.changeEntityId(t,e.PCStruct.PlayerId),this.#t.addMapping(i.characterId,i.entityId),this.#s.completeEntry(i.characterId,i.entityId),this.#r.newPC(e,this.localPlayer.characterId,s.time),i}processInitEnv(s){let e=s.parsed;if(!e)return;this.localPlayer.entityId!==0n&&this.#s.changeEntityId(this.localPlayer.entityId,e.PlayerId),this.entities.clear();let i={entityId:e.PlayerId,entityType:1,name:this.localPlayer.name,class:this.localPlayer.class,gearLevel:this.localPlayer.gearLevel,characterId:this.localPlayer.characterId};this.localPlayer=i,this.entities.set(i.entityId,i),this.#t.clear(),this.#r.Clear(s.time),i.characterId!==0n&&this.#t.addMapping(i.characterId,i.entityId),this.localPlayer&&this.localPlayer.characterId&&this.localPlayer.characterId>0n&&this.#s.completeEntry(this.localPlayer.characterId,e.PlayerId)}processInitPC(s){let e=s.parsed;if(!e)return;this.entities.clear();let i={entityId:e.PlayerId,entityType:1,name:e.Name,class:e.ClassId,gearLevel:T(e.GearLevel),characterId:e.CharacterId};this.localPlayer=i,this.entities.set(i.entityId,i),this.#t.addMapping(i.characterId,i.entityId),this.#s.setOwnName(e.Name),this.#s.completeEntry(i.characterId,e.PlayerId),this.#r.RemoveLocalObject(e.PlayerId,s.time);for(let t of e.statusEffectDatas){let a=this.getSourceEntity(t.SourceId);this.#r.RegisterStatusEffect(this.#r.buildStatusEffect(t,e.PlayerId,a.entityId,1,s.time))}return i}processNewNpc(s){let e=s.parsed;if(!e)return;let i=!1,t=this.#n.npc.get(e.NpcStruct.TypeId);t&&["boss","raid","epic_raid","commander"].includes(t.grade)&&(i=!0);let a={entityId:e.NpcStruct.ObjectId,entityType:2,name:t?.name??e.NpcStruct.ObjectId.toString(16),typeId:e.NpcStruct.TypeId,isBoss:i},r=this.#n.getNpcEsther(e.NpcStruct.TypeId);r!==void 0&&(a.entityType=4,a.name=r.name,a.icon=r.icon),this.entities.set(a.entityId,a),this.#r.RemoveLocalObject(e.NpcStruct.ObjectId,s.time);for(let n of e.NpcStruct.statusEffectDatas){let o=this.getSourceEntity(n.SourceId);this.#r.RegisterStatusEffect(this.#r.buildStatusEffect(n,e.NpcStruct.ObjectId,o.entityId,1,s.time))}return a}processNewNpcSummon(s){let e=s.parsed;if(!e)return;let i=!1,t=this.#n.npc.get(e.NpcData.TypeId);t&&["boss","raid","epic_raid","commander"].includes(t.grade)&&(i=!0);let a={entityId:e.NpcData.ObjectId,entityType:3,name:t?.name??e.NpcData.ObjectId.toString(16),ownerId:e.OwnerId,typeId:e.NpcData.TypeId,isBoss:i};this.#r.RemoveLocalObject(e.NpcData.ObjectId,s.time);for(let r of e.NpcData.statusEffectDatas){let n=this.getSourceEntity(r.SourceId);this.#r.RegisterStatusEffect(this.#r.buildStatusEffect(r,e.NpcData.ObjectId,n.entityId,1,s.time))}return this.entities.set(a.entityId,a),a}getSourceEntity(s){let e=this.entities.get(s);if((e?.entityType===5||e?.entityType===3)&&(s=e.ownerId),e=this.entities.get(s),e)return e;let i={entityId:s,entityType:2,name:s.toString(16)};return this.entities.set(s,i),i}guessIsPlayer(s,e){let i=this.#n.getSkillClassId(e);if(i!==0){let t;if(s.entityType===1){let a=s;if(a.class===i)return a;t={entityId:a.entityId,entityType:1,name:a.name,class:i,gearLevel:a.gearLevel,characterId:a.characterId}}else t={entityId:s.entityId,entityType:1,name:s.name,class:i,gearLevel:0,characterId:0n};return this.entities.set(s.entityId,t),t}return s}getOrCreateEntity(s){let e=this.entities.get(s);return e||(e={entityId:s,entityType:0,name:s.toString(16)},this.entities.set(s,e)),e}};import{TypedEmitter as X}from"tiny-typed-emitter";var tt={isLive:!0,dontResetOnZoneChange:!1,resetAfterPhaseTransition:!1,splitOnPhaseTransition:!1},j=class extends X{#t;encounters;#s;#r;#n;#a;options;resetTimer;phaseTransitionResetRequest;phaseTransitionResetRequestTime;#e;constructor(s,e,i,t,a){super(),this.#s=s,this.#r=e,this.#n=i,this.#a=t,this.options={...tt,...a},this.resetTimer=null,this.phaseTransitionResetRequest=!1,this.phaseTransitionResetRequestTime=0,this.#e=new Map,this.encounters=[],this.#t={startedOn:0,lastCombatPacket:0,fightStartedOn:0,localPlayer:this.#s.localPlayer.name,currentBoss:void 0,entities:new Map,damageStatistics:{totalDamageDealt:0,topDamageDealt:0,totalDamageTaken:0,topDamageTaken:0,totalHealingDone:0,topHealingDone:0,totalShieldDone:0,topShieldDone:0,debuffs:new Map,buffs:new Map,topShieldGotten:0,totalEffectiveShieldingDone:0,topEffectiveShieldingDone:0,topEffectiveShieldingUsed:0,effectiveShieldingBuffs:new Map,appliedShieldingBuffs:new Map}}}onCounterAttack(s,e){let i=this.updateEntity(s,{},e);i.hits.counter+=1}onInitEnv(s,e){this.options.isLive?(this.#t.entities.forEach((i,t,a)=>{i.hits.total===0&&a.delete(t)}),this.options.dontResetOnZoneChange===!1&&this.resetTimer===null&&(this.resetTimer=setTimeout(()=>{this.resetState(+e+6e3)},6e3),this.emit("message","new-zone"))):(this.splitEncounter(e),this.emit("message","new-zone"))}splitEncounter(s){if(this.#t.fightStartedOn!==0&&(this.#t.damageStatistics.totalDamageDealt!==0||this.#t.damageStatistics.totalDamageTaken!==0)){let e=structuredClone(this.#t);this.applyBreakdowns(e.entities),this.encounters.push(e)}this.resetState(+s)}getBossIfStillExist(){if(this.#t.currentBoss?.id){let s=BigInt(`0x0${this.#t.currentBoss?.id}`);return this.#s.entities.has(s)?this.#t.currentBoss:void 0}}resetState(s){this.cancelReset(),this.applyBreakdowns(this.#t.entities),this.emit("reset-state",this.#t),this.#t={startedOn:+s,lastCombatPacket:+s,fightStartedOn:0,localPlayer:this.#s.localPlayer.name,currentBoss:this.getBossIfStillExist(),entities:new Map,damageStatistics:{totalDamageDealt:0,topDamageDealt:0,totalDamageTaken:0,topDamageTaken:0,totalHealingDone:0,topHealingDone:0,totalShieldDone:0,topShieldDone:0,debuffs:new Map,buffs:new Map,appliedShieldingBuffs:new Map,effectiveShieldingBuffs:new Map,topEffectiveShieldingDone:0,topEffectiveShieldingUsed:0,topShieldGotten:0,totalEffectiveShieldingDone:0}}}cancelReset(){this.resetTimer&&clearTimeout(this.resetTimer),this.resetTimer=null}onPhaseTransition(s,e){this.options.isLive&&(this.emit("message",`phase-transition-${s}`),this.options.resetAfterPhaseTransition&&(this.phaseTransitionResetRequest=!0,this.phaseTransitionResetRequestTime=+e)),!this.options.isLive&&this.options.splitOnPhaseTransition&&this.splitEncounter(e)}updateOptions(s){this.options={...this.options,...s}}onDeath(s,e){let i=this.#t.entities.get(s.name),t=0;i?i.isDead?t=i.deaths:t=i.deaths+1:t=1,this.updateEntity(s,{isDead:!0,deathTime:+e,deaths:t},e)}onDamage(s,e,i,t,a){if((t.modifier&15)===11&&t.skillId===0&&t.skillEffectId===0)return;this.phaseTransitionResetRequest&&this.phaseTransitionResetRequestTime>0&&this.phaseTransitionResetRequestTime<+a-8e3&&(this.resetState(+a),this.phaseTransitionResetRequest=!1);let[r,n]=this.#r.getStatusEffects(s,i,this.#s.localPlayer.characterId,a);if(this.#a.isBattleItem(t.skillEffectId,"attack")&&e&&e.entityType===5){let h=e;t.skillEffectId=h.skillEffectId}let o=this.updateEntity(s,{},a),f=this.updateEntity(i,{currentHp:t.targetCurHp,maxHp:t.targetMaxHp},a);if(!o||!f)return;!f.isPlayer&&t.targetCurHp<0&&(t.damage=t.damage+t.targetCurHp);let d=t.skillId;t.skillId===0&&t.skillEffectId!==0&&(d=t.skillEffectId);let c=o.skills.get(d);c||(c={...this.createEntitySkill(),id:d,...this.getSkillNameIcon(t.skillId,t.skillEffectId)},o.skills.set(d,c));let S=t.modifier&15,P=(t.modifier>>4&7)-1,I=(S&9)!==0,m=new Set,N=new Set;r.forEach(h=>{m.add(h[0])}),n.forEach(h=>{N.add(h[0])}),c.damageDealt+=t.damage,t.damage>c.maxDamage&&(c.maxDamage=t.damage),o.hits.total+=1,c.hits.total+=1,o.damageDealt+=t.damage,f.damageTaken+=t.damage;let q=I?1:0;o.hits.crit+=q,c.hits.crit+=q;let H=!1,V=!1,O=this.#a.getSkillEffectDirectionalMask(t.skillEffectId)-1;if(O===0||O===2){V=P===0;let h=V?1:0;o.hits.backAttack+=h,o.hits.totalBackAttack+=1,c.hits.backAttack+=h,c.hits.totalBackAttack+=1}if(O===1||O===2){H=P===1;let h=H?1:0;o.hits.frontAttack+=h,o.hits.totalFrontAttack+=1,c.hits.frontAttack+=h,c.hits.totalFrontAttack+=1}if(o.isPlayer){this.#t.damageStatistics.totalDamageDealt+=t.damage,this.#t.damageStatistics.topDamageDealt=Math.max(this.#t.damageStatistics.topDamageDealt,o.damageDealt);let h=!1,k=!1;m.forEach(l=>{if(!this.#t.damageStatistics.buffs.has(l)){let g=this.#a.getStatusEffectHeaderData(l);g&&this.#t.damageStatistics.buffs.set(l,g)}let u=this.#t.damageStatistics.buffs.get(l);u&&!h&&(h=(u.buffcategory==="classskill"||u.buffcategory==="identity"||u.buffcategory==="ability")&&u.source.skill!==void 0&&u.target===1&&this.#a.isSupportClassId(u.source.skill.classid))}),N.forEach(l=>{if(!this.#t.damageStatistics.debuffs.has(l)){let g=this.#a.getStatusEffectHeaderData(l);g&&this.#t.damageStatistics.debuffs.set(l,g)}let u=this.#t.damageStatistics.debuffs.get(l);u&&!k&&(k=(u.buffcategory==="classskill"||u.buffcategory==="identity"||u.buffcategory==="ability")&&u.source.skill!==void 0&&u.target===1&&this.#a.isSupportClassId(u.source.skill.classid))});let z=k?1:0,Y=h?1:0;c.damageDealtBuffedBySupport+=h?t.damage:0,c.damageDealtDebuffedBySupport+=k?t.damage:0,m.forEach(l=>{let u=c.damageDealtBuffedBy.get(l)??0;c.damageDealtBuffedBy.set(l,u+t.damage);let g=o.damageDealtBuffedBy.get(l)??0;o.damageDealtBuffedBy.set(l,g+t.damage)}),N.forEach(l=>{let u=c.damageDealtDebuffedBy.get(l)??0;c.damageDealtDebuffedBy.set(l,u+t.damage);let g=o.damageDealtDebuffedBy.get(l)??0;o.damageDealtDebuffedBy.set(l,g+t.damage)}),o.damageDealtBuffedBySupport+=h?t.damage:0,o.damageDealtDebuffedBySupport+=k?t.damage:0,o.hits.hitsBuffedBySupport+=Y,o.hits.hitsDebuffedBySupport+=z,m.forEach(l=>{let u=o.hits.hitsBuffedBy.get(l)??0;o.hits.hitsBuffedBy.set(l,u+1);let g=c.hits.hitsBuffedBy.get(l)??0;c.hits.hitsBuffedBy.set(l,g+1)}),N.forEach(l=>{let u=o.hits.hitsDebuffedBy.get(l)??0;o.hits.hitsDebuffedBy.set(l,u+1);let g=c.hits.hitsDebuffedBy.get(l)??0;c.hits.hitsDebuffedBy.set(l,g+1)}),c.hits.hitsBuffedBySupport+=Y,c.hits.hitsDebuffedBySupport+=z;let J={timestamp:+a,damage:t.damage,targetEntity:f.id,isCrit:I,isBackAttack:V,isFrontAttack:H,isBuffedBySupport:h,isDebuffedBySupport:k,buffedBy:[...m],debuffedBy:[...N]},K=BigInt("0x"+o.id);this.addBreakdown(K,d,J)}f.isPlayer&&(this.#t.damageStatistics.totalDamageTaken+=t.damage,this.#t.damageStatistics.topDamageTaken=Math.max(this.#t.damageStatistics.topDamageTaken,f.damageTaken)),f.isBoss&&(this.#t.currentBoss=f),this.#t.fightStartedOn===0&&(this.#t.fightStartedOn=+a),this.#t.lastCombatPacket=+a}onStartSkill(s,e,i){let t=this.updateEntity(s,{isDead:!1},i);if(t){t.hits.casts+=1;let a=t.skills.get(e);a||(a={...this.createEntitySkill(),id:e,...this.getSkillNameIcon(e,0)},t.skills.set(e,a)),a.hits.casts+=1}}onShieldUsed(s,e,i,t){if(t<0&&console.error("Shield change values was negative, shield ammount increased"),s.entityType===1&&e.entityType===1){if(!this.#t.damageStatistics.effectiveShieldingBuffs.has(i)){let d=this.#a.getStatusEffectHeaderData(i);d&&this.#t.damageStatistics.effectiveShieldingBuffs.set(i,d)}let a=new Date,r=this.updateEntity(s,{},a),n=this.updateEntity(e,{},a);r.damagePreventedByShield+=t;let o=r.damagePreventedByShieldBy.get(i)??0;r.damagePreventedByShieldBy.set(i,o+t),this.#t.damageStatistics.topEffectiveShieldingUsed=Math.max(r.damagePreventedByShield,this.#t.damageStatistics.topEffectiveShieldingUsed),n.damagePreventedWithShieldOnOthers+=t;let f=n.damagePreventedWithShieldOnOthersBy.get(i)??0;n.damagePreventedWithShieldOnOthersBy.set(i,f+t),this.#t.damageStatistics.topEffectiveShieldingDone=Math.max(n.damagePreventedWithShieldOnOthers,this.#t.damageStatistics.topEffectiveShieldingDone),this.#t.damageStatistics.totalEffectiveShieldingDone+=t}}onShieldApplied(s,e,i,t){let a=new Date,r=this.updateEntity(s,{},a),n=this.updateEntity(e,{},a);if(n.isPlayer&&r.isPlayer){if(!this.#t.damageStatistics.appliedShieldingBuffs.has(i)){let d=this.#a.getStatusEffectHeaderData(i);d&&this.#t.damageStatistics.appliedShieldingBuffs.set(i,d)}r.shieldReceived+=t,n.shieldDone+=t;let o=n.shieldDoneBy.get(i)??0;n.shieldDoneBy.set(i,o+t);let f=r.shieldReceivedBy.get(i)??0;r.shieldReceivedBy.set(i,f+t),this.#t.damageStatistics.topShieldDone=Math.max(n.shieldDone,this.#t.damageStatistics.topShieldDone),this.#t.damageStatistics.topShieldGotten=Math.max(r.shieldReceived,this.#t.damageStatistics.topShieldGotten),this.#t.damageStatistics.totalShieldDone+=t}}getSkillNameIcon(s,e){if(s===0&&e===0)return{name:"Bleed",icon:"buff_168.png"};if(s===0){let i=this.#a.skillEffect.get(e);if(i&&i.itemname)return{name:i.itemname,icon:i.icon??""};if(i){if(i.sourceskill){let t=this.#a.skill.get(i.sourceskill);if(t)return{name:t.name,icon:t.icon}}else{let t=this.#a.skill.get(Math.floor(e/10));if(t)return{name:t.name,icon:t.icon}}return{name:i.comment}}else return{name:this.#a.getSkillName(s)}}else{let i=this.#a.skill.get(s);return!i&&(i=this.#a.skill.get(s-s%10),!i)?{name:this.#a.getSkillName(s),icon:""}:i.summonsourceskill?(i=this.#a.skill.get(i.summonsourceskill),i?{name:i.name+" (Summon)",icon:i.icon}:{name:this.#a.getSkillName(s),icon:""}):i.sourceskill?(i=this.#a.skill.get(i.sourceskill),i?{name:i.name,icon:i.icon}:{name:this.#a.getSkillName(s),icon:""}):{name:i.name,icon:i.icon}}}updateEntity(s,e,i){let t={lastUpdate:+i},a=this.#t.entities.get(s.name),r={},n=this.#n.isEntityInParty(s.entityId)?this.#n.getPartyIdFromEntityId(s.entityId)?.toString(16):void 0;if(!a||s.entityType===1&&a.isPlayer!==!0){if(s.entityType===1){let o=s;r={classId:o.class,gearScore:o.gearLevel,isPlayer:!0}}else if(s.entityType===2||s.entityType===3){let o=s;r={npcId:o.typeId,isBoss:o.isBoss}}else if(s.entityType===4){let o=s;r={npcId:o.typeId,isBoss:o.isBoss,isEsther:!0,icon:o.icon}}}return n&&(r.partyId=n),a?Object.assign(a,e,t,r):(a={...this.createEntity(),...e,...t,...r,name:s.name,id:s.entityId.toString(16)},this.#t.entities.set(s.name,a)),a}updateOrCreateEntity(s,e,i){if(!(!e.name||!e.id)){for(let[t,a]of this.#t.entities)if(e.id===a.id){this.#t.entities.delete(t),this.updateEntity(s,{...a,...e},i);return}this.updateEntity(s,e,i)}}createEntitySkill(){return{id:0,name:"",icon:"",damageDealt:0,damageDealtDebuffedBySupport:0,damageDealtBuffedBySupport:0,maxDamage:0,hits:{casts:0,total:0,crit:0,backAttack:0,totalBackAttack:0,frontAttack:0,totalFrontAttack:0,counter:0,hitsDebuffedBySupport:0,hitsBuffedBySupport:0,hitsBuffedBy:new Map,hitsDebuffedBy:new Map},breakdown:[],damageDealtDebuffedBy:new Map,damageDealtBuffedBy:new Map}}createEntity(){return{lastUpdate:0,id:"",npcId:0,name:"",classId:0,isBoss:!1,isPlayer:!1,isDead:!1,deaths:0,deathTime:0,gearScore:0,currentHp:0,maxHp:0,damageDealt:0,damageDealtDebuffedBySupport:0,damageDealtBuffedBySupport:0,healingDone:0,shieldDone:0,damageTaken:0,skills:new Map,hits:{casts:0,total:0,crit:0,backAttack:0,totalBackAttack:0,frontAttack:0,totalFrontAttack:0,counter:0,hitsDebuffedBySupport:0,hitsBuffedBySupport:0,hitsBuffedBy:new Map,hitsDebuffedBy:new Map},damageDealtDebuffedBy:new Map,damageDealtBuffedBy:new Map,damagePreventedByShieldBy:new Map,damagePreventedWithShieldOnOthersBy:new Map,shieldDoneBy:new Map,shieldReceivedBy:new Map,damagePreventedWithShieldOnOthers:0,damagePreventedByShield:0,shieldReceived:0}}getBroadcast(){let s={...this.#t};return s.entities=new Map,this.#t.entities.forEach((e,i)=>{!e.isPlayer&&!e.isEsther||s.entities.set(i,{...e})}),s.localPlayer=this.#s.localPlayer.name,s}resetBreakdowns(){this.#e.clear()}createBreakdownEntity(s){return this.#e.has(s)||this.#e.set(s,new Map),this.#e.get(s)}removeBreakdownEntry(s){this.#e.delete(s)}addBreakdown(s,e,i){let t=this.createBreakdownEntity(s);if(t.has(e))t.get(e).push(i);else{let a=new Array(i);t.set(e,a)}}getBreakdowns(s,e){let i=this.#e.get(s);if(i)return i.get(e)}clearBreakdowns(s,e){let i=this.#e.get(s);i&&i.delete(e)}applyBreakdowns(s,e=!0){s.forEach(i=>{i.skills.forEach(t=>{let a=BigInt("0x"+i.id),r=this.getBreakdowns(a,t.id);r&&(t.breakdown=[...r])})}),e&&this.resetBreakdowns()}};var _=class{characterIdToPartyId;entityIdToPartyId;raidInstanceToPartyInstances;ownName;characterNameToCharacterId;#t;constructor(s){this.characterIdToPartyId=new Map,this.entityIdToPartyId=new Map,this.raidInstanceToPartyInstances=new Map,this.characterNameToCharacterId=new Map,this.#t=s}add(s,e,i=void 0,t=void 0,a=void 0){!i&&!t||(i&&!t&&(t=this.#t.getEntityId(i)),t&&!i&&(i=this.#t.getEntityId(t)),i&&this.characterIdToPartyId.set(i,e),t&&this.entityIdToPartyId.set(t,e),a&&i&&this.characterNameToCharacterId.set(a,i),this.registerPartyId(s,e))}completeEntry(s,e){let i=this.getPartyIdFromCharacterId(s),t=this.getPartyIdFromEntityId(e);i&&t||(!i&&t&&this.characterIdToPartyId.set(s,t),!t&&i&&this.entityIdToPartyId.set(e,i))}changeEntityId(s,e){let i=this.getPartyIdFromEntityId(s);i&&(this.entityIdToPartyId.delete(s),this.entityIdToPartyId.set(e,i))}setOwnName(s){this.ownName=s}remove(s,e){if(e===this.ownName){this.removePartyMappings(s);return}let i=this.characterNameToCharacterId.get(e);if(this.characterNameToCharacterId.delete(e),!i)return;this.characterIdToPartyId.delete(i);let t=this.#t.getEntityId(i);t&&this.characterIdToPartyId.delete(t)}isCharacterInParty(s){return this.characterIdToPartyId.has(s)}isEntityInParty(s){return this.entityIdToPartyId.has(s)}getPartyIdFromCharacterId(s){return this.characterIdToPartyId.get(s)}getPartyIdFromEntityId(s){return this.entityIdToPartyId.get(s)}removePartyMappings(s){let e=this.getRaidInstanceId(s),i=e?this.raidInstanceToPartyInstances.get(e)??new Set([s]):new Set([s]);for(let[t,a]of this.characterIdToPartyId)if(i.has(a)){this.characterIdToPartyId.delete(t);for(let[r,n]of this.characterNameToCharacterId)if(t===n){this.characterNameToCharacterId.delete(r);break}}for(let[t,a]of this.entityIdToPartyId)i.has(a)&&this.entityIdToPartyId.delete(t)}getRaidInstanceId(s){for(let e of this.raidInstanceToPartyInstances)if(e[1].has(s))return e[0]}registerPartyId(s,e){let i=this.raidInstanceToPartyInstances.get(s);i||(i=new Set,this.raidInstanceToPartyInstances.set(s,i)),i.add(e)}partyInfo(s,e,i){let t=s.parsed;if(t){if(t.MemberDatas.length===1&&t.MemberDatas[0]?.Name===i.name){this.remove(t.PartyInstanceId,t.MemberDatas[0].Name);return}this.removePartyMappings(t.PartyInstanceId);for(let a of t.MemberDatas){a.CharacterId===i.characterId&&this.setOwnName(a.Name);let r=this.#t.getEntityId(a.CharacterId);if(r){let n=e.get(r);if(n&&n.entityType===1&&n.name!==a.Name){let o=n;o.gearLevel=T(a.GearLevel),o.name=a.Name,o.class=a.ClassId}}this.add(t.RaidInstanceId,t.PartyInstanceId,a.CharacterId,r,a.Name)}}}};var F=class{entityToCharacterId;characterToEntityId;constructor(){this.entityToCharacterId=new Map,this.characterToEntityId=new Map}addMapping(s,e){this.entityToCharacterId.set(e,s),this.characterToEntityId.set(s,e)}getCharacterId(s){return this.entityToCharacterId.get(s)}getEntityId(s){return this.characterToEntityId.get(s)}clear(){this.entityToCharacterId.clear(),this.characterToEntityId.clear()}};var Z=class extends et{#t;#s;#r;#n;#a;#e;#i;#o;#c;constructor(s,e,i){super(),this.#t=s,this.#s=e,this.#r=new F,this.#n=new _(this.#r),this.#a=new R(this.#n,this.#s,i.isLive??!0),this.#e=new A(this.#r,this.#n,this.#a,this.#s),this.#i=new j(this.#e,this.#a,this.#n,this.#s,i),this.#i.emit=this.emit.bind(this),this.#o=!1,this.#c=!1,this.#i.options.isLive&&setInterval(this.broadcastStateChange.bind(this),100),this.#t.on("AbilityChangeNotify",t=>{}).on("ActiveAbilityNotify",t=>{}).on("AddonSkillFeatureChangeNotify",t=>{}).on("BlockSkillStateNotify",t=>{}).on("CounterAttackNotify",t=>{let a=t.parsed;if(!a)return;let r=this.#e.entities.get(a.SourceId);r&&this.#i.onCounterAttack(r,t.time)}).on("DeathNotify",t=>{let a=t.parsed;if(!a)return;let r=this.#e.entities.get(a.TargetId);r&&this.#i.onDeath(r,t.time)}).on("IdentityGaugeChangeNotify",t=>{}).on("InitAbility",t=>{}).on("InitEnv",t=>{this.#e.processInitEnv(t),this.#i.onInitEnv(t,t.time)}).on("InitLocal",t=>{}).on("InitPC",t=>{let a=this.#e.processInitPC(t);if(a&&t.parsed){let r=this.#s.getStatPairMap(t.parsed.statPair);this.#i.updateOrCreateEntity(a,{id:a.entityId.toString(16),name:a.name,classId:a.class,isPlayer:!0,gearScore:a.gearLevel,currentHp:Number(r.get(1))||0,maxHp:Number(r.get(27))||0},t.time)}}).on("MigrationExecute",t=>{if(this.#e.localPlayer.characterId!==0n)return;let a=t.parsed;a&&(this.#e.localPlayer.characterId=a.Account_CharacterId1<a.Account_CharacterId2?a.Account_CharacterId1:a.Account_CharacterId2)}).on("NewNpc",t=>{let a=this.#e.processNewNpc(t);if(a&&t.parsed){let r=this.#s.getStatPairMap(t.parsed.NpcStruct.statPair);this.#i.updateOrCreateEntity(a,{id:a.entityId.toString(16),name:a.name,npcId:a.typeId,isPlayer:!1,isBoss:a.isBoss,currentHp:Number(r.get(1))||0,maxHp:Number(r.get(27))||0},t.time)}}).on("NewNpcSummon",t=>{let a=this.#e.processNewNpcSummon(t);if(a&&t.parsed){let r=this.#s.getStatPairMap(t.parsed.NpcData.statPair);this.#i.updateOrCreateEntity(a,{id:a.entityId.toString(16),name:a.name,npcId:a.typeId,isPlayer:!1,isBoss:a.isBoss,currentHp:Number(r.get(1))||0,maxHp:Number(r.get(27))||0},t.time)}}).on("NewPC",t=>{let a=this.#e.processNewPC(t);if(a&&t.parsed){let r=this.#s.getStatPairMap(t.parsed.PCStruct.statPair);this.#i.updateOrCreateEntity(a,{id:a.entityId.toString(16),name:a.name,classId:a.class,isPlayer:!0,gearScore:a.gearLevel,currentHp:Number(r.get(1))||0,maxHp:Number(r.get(27))||0},t.time)}}).on("NewProjectile",t=>{let a=t.parsed;if(!a)return;let r={entityId:a.projectileInfo.ProjectileId,entityType:5,name:a.projectileInfo.ProjectileId.toString(16),ownerId:a.projectileInfo.OwnerId,skillEffectId:a.projectileInfo.SkillEffect,skillId:a.projectileInfo.SkillId};this.#e.entities.set(r.entityId,r)}).on("ParalyzationStateNotify",t=>{}).on("PartyInfo",t=>{this.#n.partyInfo(t,this.#e.entities,this.#e.localPlayer)}).on("PartyLeaveResult",t=>{let a=t.parsed;a&&this.#n.remove(a.PartyInstanceId,a.Name)}).on("PartyPassiveStatusEffectAddNotify",t=>{}).on("PartyPassiveStatusEffectRemoveNotify",t=>{}).on("PartyStatusEffectAddNotify",t=>{let a=t.parsed;if(a)for(let r of a.statusEffectDatas){let n=a.PlayerIdOnRefresh!==0n?a.PlayerIdOnRefresh:r.SourceId,o=this.#e.getSourceEntity(n);this.#a.RegisterStatusEffect(this.#a.buildStatusEffect(r,a.CharacterId,o.entityId,0,t.time))}}).on("PartyStatusEffectRemoveNotify",t=>{let a=t.parsed;if(a)for(let r of a.statusEffectIds)this.#a.RemoveStatusEffect(a.CharacterId,r,0,a.Reason,t.time)}).on("PartyStatusEffectResultNotify",t=>{let a=t.parsed;a&&this.#n.add(a.RaidInstanceId,a.PartyInstanceId,a.CharacterId)}).on("PassiveStatusEffectAddNotify",t=>{}).on("PassiveStatusEffectRemoveNotify",t=>{}).on("RaidBossKillNotify",t=>{this.#i.onPhaseTransition(1,t.time)}).on("RaidResult",t=>{this.#i.onPhaseTransition(0,t.time)}).on("RemoveObject",t=>{let a=t.parsed;if(a)for(let r of a.unpublishedObjects)this.#a.RemoveLocalObject(r.ObjectId,t.time)}).on("SkillDamageAbnormalMoveNotify",t=>{let a=t.parsed;if(!a)return;let r=this.#e.getSourceEntity(a.SourceId);a.SkillDamageAbnormalMoveEvents.forEach(n=>{let o=this.#e.getOrCreateEntity(n.skillDamageEvent.TargetId),f=this.#e.getOrCreateEntity(a.SourceId);this.#i.onDamage(r,f,o,{skillId:a.SkillId,skillEffectId:a.SkillEffectId,damage:Number(n.skillDamageEvent.Damage),modifier:n.skillDamageEvent.Modifier,targetCurHp:Number(n.skillDamageEvent.CurHp),targetMaxHp:Number(n.skillDamageEvent.MaxHp)},t.time)})}).on("SkillDamageNotify",t=>{let a=t.parsed;if(!a)return;let r=this.#e.getSourceEntity(a.SourceId);a.SkillDamageEvents.forEach(n=>{let o=this.#e.getOrCreateEntity(n.TargetId),f=this.#e.getOrCreateEntity(a.SourceId);this.#i.onDamage(r,f,o,{skillId:a.SkillId,skillEffectId:a.SkillEffectId,damage:Number(n.Damage),modifier:n.Modifier,targetCurHp:Number(n.CurHp),targetMaxHp:Number(n.MaxHp)},t.time)})}).on("SkillStageNotify",t=>{}).on("SkillStartNotify",t=>{let a=t.parsed;if(!a)return;let r=this.#e.getSourceEntity(a.SourceId);r=this.#e.guessIsPlayer(r,a.SkillId),this.#i.onStartSkill(r,a.SkillId,t.time)}).on("StatusEffectAddNotify",t=>{let a=t.parsed;if(!a)return;let r=this.#e.getSourceEntity(a.statusEffectData.SourceId);this.#a.RegisterStatusEffect(this.#a.buildStatusEffect(a.statusEffectData,a.ObjectId,r.entityId,1,t.time))}).on("StatusEffectDurationNotify",t=>{let a=t.parsed;a&&this.#a.UpdateDuration(a.EffectInstanceId,a.TargetId,a.ExpirationTick,1)}).on("StatusEffectRemoveNotify",t=>{let a=t.parsed;if(a)for(let r of a.statusEffectIds)this.#a.RemoveStatusEffect(a.ObjectId,r,1,a.Reason,t.time)}).on("StatusEffectSyncDataNotify",t=>{}).on("TriggerBossBattleStatus",t=>{this.#i.onPhaseTransition(2,t.time)}).on("TriggerFinishNotify",t=>{}).on("TriggerStartNotify",t=>{let a=t.parsed;if(a)switch(a.TriggerSignalType){case 57:case 59:case 61:case 63:case 74:case 76:this.#c=!0,this.#o=!1;break;case 58:case 60:case 62:case 64:case 75:case 77:this.#c=!1,this.#o=!0;break}}).on("TroopMemberUpdateMinNotify",t=>{}).on("ZoneObjectUnpublishNotify",t=>{let a=t.parsed;a&&this.#a.RemoveLocalObject(a.ObjectId,t.time)}).on("ZoneStatusEffectAddNotify",t=>{}).on("StatusEffectSyncDataNotify",t=>{let a=t.parsed;a&&this.#a.SyncStatusEffect(a.EffectInstanceId,a.CharacterId,a.ObjectId,a.Value,this.#e.localPlayer.characterId)}).on("TroopMemberUpdateMinNotify",t=>{let a=t.parsed;if(a&&a.statusEffectDatas.length>0)for(let r of a.statusEffectDatas){let n=this.#r.getEntityId(a.CharacterId),o=r.Value?r.Value.readUInt32LE():0,f=r.Value?r.Value.readUInt32LE(8):0,d=o<f?o:f;this.#a.SyncStatusEffect(r.EffectInstanceId,a.CharacterId,n,d,this.#e.localPlayer.characterId)}}).on("ZoneStatusEffectRemoveNotify",t=>{}),this.#a.on("shieldApplied",t=>{let a=t.targetId;if(t.type===0&&(a=this.#r.getEntityId(t.targetId)??a),a===void 0)return;let r=this.#e.getSourceEntity(t.sourceId),n=this.#e.getOrCreateEntity(a);this.#i.onShieldApplied(n,r,t.statusEffectId,t.value)}).on("shieldChanged",(t,a,r)=>{let n=t.targetId;if(t.type===0&&(n=this.#r.getEntityId(t.targetId)??n),n===void 0)return;let o=this.#e.getSourceEntity(t.sourceId),f=this.#e.getOrCreateEntity(n);this.#i.onShieldUsed(f,o,t.statusEffectId,a-r)})}broadcastStateChange(){this.emit("state-change",this.#i.getBroadcast())}reset(){this.#i.resetState(+new Date)}cancelReset(){this.#i.cancelReset()}updateOptions(s){this.#i.updateOptions(s)}get encounters(){return this.#i.splitEncounter(new Date),this.#i.encounters}};export{Z as Parser};
