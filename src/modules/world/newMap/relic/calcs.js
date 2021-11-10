import fallback from '../../../system/fallback';
import playerDataObject from '../../../common/playerDataObject';
import reduceBuffArray from '../../../common/reduceBuffArray';
import { relicMultiplier } from './parseGuild';
import setText from '../../../dom/setText';
import setTextCommas from '../../../common/setTextCommas';
import {
  armorBuffedElement,
  armorElement,
  attackBuffedElement,
  attackElement,
  damageBuffedElement,
  damageElement,
  dc175Element,
  dc225Element,
  defCloakedElement,
  defProcessedElement,
  defenseBuffedElement,
  defenseElement,
  groupArmorBuffedElement,
  groupArmorElement,
  groupAttackBuffedElement,
  groupAttackElement,
  groupDamageBuffedElement,
  groupDamageElement,
  groupDefenseBuffedElement,
  groupDefenseElement,
  groupHPBuffedElement,
  groupHPElement,
  hpBuffedElement,
  hpElement,
  lDCloakedElement,
  processingStatus,
} from './secondaryElements';
import { darkCurseMultiplier, defenderMultiplier } from '../../../support/constants';

let defRawAttack;
let defBuffedAttack;
let defRawDefense;
let defRawArmor;
let defRawDamage;
let defBuffedDamage;
let defRawHp;
let defCloaked;
let defProcessed;
let leadDefender;
let groupStats;
let mercStats;

function deductMercStats() {
  groupStats.attack -= mercStats.attack;
  groupStats.defense -= mercStats.defense;
  groupStats.armor -= mercStats.armor;
  groupStats.damage -= mercStats.damage;
  groupStats.hp -= mercStats.hp;
}

function withRelicMultiplier(val) {
  return Math.round(val * relicMultiplier);
}

function updateDefenderValues() {
  defRawAttack += withRelicMultiplier(leadDefender.attackValue);
  defRawDefense += withRelicMultiplier(leadDefender.defenseValue);
  defRawArmor += withRelicMultiplier(leadDefender.armorValue);
  defRawDamage += withRelicMultiplier(leadDefender.damageValue);
  defRawHp += withRelicMultiplier(leadDefender.hpValue);
}

function updateDefenderElements() {
  setTextCommas(defRawAttack, attackElement);
  setTextCommas(defRawDefense, defenseElement);
  setTextCommas(defRawArmor, armorElement);
  setTextCommas(defRawDamage, damageElement);
  setTextCommas(defRawHp, hpElement);
  setText(defCloaked, defCloakedElement);
  defProcessed += 1;
  setText(defProcessed, defProcessedElement);
}

function updateGroupValues() {
  setTextCommas(groupStats.attack, groupAttackElement);
  setTextCommas(groupStats.defense, groupDefenseElement);
  setTextCommas(groupStats.armor, groupArmorElement);
  setTextCommas(groupStats.damage, groupDamageElement);
  setTextCommas(groupStats.hp, groupHPElement);
}

function calcNmvEffect(buffs) {
  return Math.ceil(groupStats.attack
    * (fallback(buffs['Nightmare Visage'], 0) * 0.0025));
}

function doGroupAttackBuffedElement() {
  const storedFlinchEffectValue = Math.ceil(groupStats.attack
    * leadDefender.flinchLevel * 0.001);
  setTextCommas(groupStats.attack - storedFlinchEffectValue, groupAttackBuffedElement);
}

function calcDefWithConst(buffs) {
  return Math.ceil(groupStats.defense
    * (1 + fallback(buffs.Constitution, 0) * 0.001));
}

function doGroupDefenseBuffedElement(nmv, defConst) {
  setTextCommas(defConst + nmv, groupDefenseBuffedElement);
}

function doGroupArmorBuffedElement(buffs) {
  setTextCommas(groupStats.armor + Math.floor(groupStats.armor
    * fallback(buffs.Sanctuary, 0) * 0.001), groupArmorBuffedElement);
}

function calcFortitudeBonusHP(buffs, defenseWithConstitution) {
  return Math.ceil(defenseWithConstitution
    * fallback(buffs.Fortitude, 0) * 0.001);
}

function doGroupHPBuffedElement(fortitudeBonusHP) {
  setTextCommas(groupStats.hp + fortitudeBonusHP, groupHPBuffedElement);
}

function doGroupDamageBuffedElement(buffs, fortitudeBonusHP) {
  const chiStrikeBonusDamage = Math.ceil((groupStats.hp + fortitudeBonusHP)
    * fallback(buffs['Chi Strike'], 0) * 0.001);
  const storedTerrorizeEffectValue = Math.ceil(
    groupStats.damage * leadDefender.terrorizeLevel * 0.001,
  );
  setTextCommas(groupStats.damage + chiStrikeBonusDamage
    - storedTerrorizeEffectValue, groupDamageBuffedElement);
}

function doGroupAttributeElements(buffs) {
  const nightmareVisageEffect = calcNmvEffect(buffs);
  groupStats.attack -= nightmareVisageEffect; // <-- important
  doGroupAttackBuffedElement();
  const defenseWithConstitution = calcDefWithConst(buffs);
  doGroupDefenseBuffedElement(nightmareVisageEffect, defenseWithConstitution);
  doGroupArmorBuffedElement(buffs);
  const fortitudeBonusHP = calcFortitudeBonusHP(buffs, defenseWithConstitution);
  doGroupHPBuffedElement(fortitudeBonusHP);
  doGroupDamageBuffedElement(buffs, fortitudeBonusHP);
}

function flinchEffectOnDefenders(buffs) {
  const flinchEffectValue = Math.ceil(defBuffedAttack
    * fallback(buffs.Flinch, 0) * 0.001);
  setTextCommas(defBuffedAttack - flinchEffectValue, attackBuffedElement);
}

function terrorizeEffectOnDefenders(buffs) {
  const terrorizeEffectValue = Math.ceil(defBuffedDamage
    * fallback(buffs.Terrorize, 0) * 0.001);
  setTextCommas(defBuffedDamage - terrorizeEffectValue, damageBuffedElement);
}

function calculateGroup() {
  setText('Processing attacking group stats ... ', processingStatus);
  if (mercStats) { deductMercStats(); }
  updateGroupValues();
  const buffs = reduceBuffArray(GameData.player().buffs);
  doGroupAttributeElements(buffs);
  flinchEffectOnDefenders(buffs); // Effect on defending group from Flinch on attacking group.
  terrorizeEffectOnDefenders(buffs);
  setText('Done.', processingStatus);
}

function calcDefenderNmvEffect() {
  return Math.ceil(defRawAttack * (leadDefender.nightmareVisageLevel * 0.0025));
}

function calcDefenderDefenseWithConst() {
  return Math.ceil(defRawDefense
    * (1 + leadDefender.constitutionLevel * 0.001));
}

function updateDefenderBuffedAttack(nmvEffect) {
  defBuffedAttack = defRawAttack - nmvEffect;
  setTextCommas(defBuffedAttack, attackBuffedElement);
}

function calcDcEffect(points) {
  return 1 - points * darkCurseMultiplier;
}

function updateDefenderBuffedDefense(nmv, defWithConst) {
  const defBuffedDefense = defWithConst + nmv;
  setTextCommas(defBuffedDefense, defenseBuffedElement);
  setTextCommas(Math.ceil(defBuffedDefense * calcDcEffect(225)), dc225Element);
  setTextCommas(Math.ceil(defBuffedDefense * calcDcEffect(175)), dc175Element);
}

function updateDefenderBuffedArmor() {
  setTextCommas(defRawArmor + Math.floor(
    defRawArmor * leadDefender.sanctuaryLevel * 0.001,
  ), armorBuffedElement);
}

function calcDefenderFortitudeBonusHp(defWithConst) {
  return Math.ceil(defWithConst * leadDefender.fortitudeLevel * 0.001);
}

function updateDefenderBuffedDamage(defBuffedHp) {
  defBuffedDamage = defRawDamage
    + Math.ceil(defBuffedHp * leadDefender.chiStrikeLevel * 0.001);
  setTextCommas(defBuffedDamage);
}

function isLeadDefenderCloaked() {
  if (leadDefender.cloakLevel !== 0) {
    setText('Yes', lDCloakedElement);
  }
}

export function doCalculations() {
  setText('Processing defending guild stats ... ', processingStatus);
  updateDefenderValues();
  updateDefenderElements();
  const nmvEffect = calcDefenderNmvEffect();
  updateDefenderBuffedAttack(nmvEffect);
  const defWithConst = calcDefenderDefenseWithConst();
  updateDefenderBuffedDefense(nmvEffect, defWithConst);
  updateDefenderBuffedArmor();
  const defBuffedHp = defRawHp + calcDefenderFortitudeBonusHp(defWithConst);
  setTextCommas(defBuffedHp, hpBuffedElement);
  updateDefenderBuffedDamage(defBuffedHp);
  isLeadDefenderCloaked();
  if (GameData.player().hasGroup && groupStats) {
    calculateGroup();
  } else {
    setText('Done.', processingStatus);
  }
}

export function parseDefender(json) {
  const defender = playerDataObject(json);
  defRawAttack += Math.round(defender.attackValue * defenderMultiplier);
  defRawDefense += Math.round(defender.defenseValue
    * defenderMultiplier);
  defRawArmor += Math.round(defender.armorValue * defenderMultiplier);
  defRawDamage += Math.round(defender.damageValue * defenderMultiplier);
  defRawHp += Math.round(defender.hpValue * defenderMultiplier);
  if (defender.cloakLevel !== 0) { defCloaked += 1; }
  updateDefenderElements();
}

export function storeLeadDefender(json) {
  leadDefender = playerDataObject(json);
}

export function storeGroupStats(obj) {
  groupStats = obj;
}

export function storeMercStats(obj) {
  mercStats = obj;
}

export function resetCounters() {
  defRawAttack = 0;
  defRawDefense = 0;
  defRawArmor = 0;
  defRawDamage = 0;
  defRawHp = 0;
  defCloaked = 0;
  defProcessed = 0;
}
