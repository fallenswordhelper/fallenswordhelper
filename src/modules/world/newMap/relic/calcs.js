import fallback from '../../../system/fallback';
import { getRelicMultiplier } from './parseGuild';
import playerDataObject from '../../../common/playerDataObject';
import reduceBuffArray from '../../../common/reduceBuffArray';
import setText from '../../../dom/setText';
import setTextCommas from '../../../common/setTextCommas';
import { darkCurseMultiplier, defenderMultiplier } from '../../../support/constants';
import {
  getArmorBuffedElement,
  getArmorElement,
  getAttackBuffedElement,
  getAttackElement,
  getDamageBuffedElement,
  getDamageElement,
  getDc175Element,
  getDc225Element,
  getDefCloakedElement,
  getDefProcessedElement,
  getDefenseBuffedElement,
  getDefenseElement,
  getGroupArmorBuffedElement,
  getGroupArmorElement,
  getGroupAttackBuffedElement,
  getGroupAttackElement,
  getGroupDamageBuffedElement,
  getGroupDamageElement,
  getGroupDefenseBuffedElement,
  getGroupDefenseElement,
  getGroupHPBuffedElement,
  getGroupHPElement,
  getHpBuffedElement,
  getHpElement,
  getLdCloakedElement,
  getProcessingStatus,
} from './secondaryElements';

let defRawAttack = 0;
let defBuffedAttack = 0;
let defRawDefense = 0;
let defRawArmor = 0;
let defRawDamage = 0;
let defBuffedDamage = 0;
let defRawHp = 0;
let defCloaked = 0;
let defProcessed = 0;
let leadDefender = 0;
let groupStats = 0;
let mercStats = 0;

function deductMercStats() {
  groupStats.attack -= mercStats.attack;
  groupStats.defense -= mercStats.defense;
  groupStats.armor -= mercStats.armor;
  groupStats.damage -= mercStats.damage;
  groupStats.hp -= mercStats.hp;
}

function withRelicMultiplier(val) {
  return Math.round(val * getRelicMultiplier());
}

function updateDefenderValues() {
  defRawAttack += withRelicMultiplier(leadDefender.attackValue);
  defRawDefense += withRelicMultiplier(leadDefender.defenseValue);
  defRawArmor += withRelicMultiplier(leadDefender.armorValue);
  defRawDamage += withRelicMultiplier(leadDefender.damageValue);
  defRawHp += withRelicMultiplier(leadDefender.hpValue);
}

function updateDefenderElements() {
  setTextCommas(defRawAttack, getAttackElement());
  setTextCommas(defRawDefense, getDefenseElement());
  setTextCommas(defRawArmor, getArmorElement());
  setTextCommas(defRawDamage, getDamageElement());
  setTextCommas(defRawHp, getHpElement());
  setText(defCloaked, getDefCloakedElement());
  defProcessed += 1;
  setText(defProcessed, getDefProcessedElement());
}

function updateGroupValues() {
  setTextCommas(groupStats.attack, getGroupAttackElement());
  setTextCommas(groupStats.defense, getGroupDefenseElement());
  setTextCommas(groupStats.armor, getGroupArmorElement());
  setTextCommas(groupStats.damage, getGroupDamageElement());
  setTextCommas(groupStats.hp, getGroupHPElement());
}

function calcNmvEffect(buffs) {
  return Math.ceil(groupStats.attack
    * (fallback(buffs['Nightmare Visage'], 0) * 0.0025));
}

function doGroupAttackBuffedElement() {
  const storedFlinchEffectValue = Math.ceil(groupStats.attack
    * leadDefender.flinchLevel * 0.001);
  setTextCommas(groupStats.attack - storedFlinchEffectValue, getGroupAttackBuffedElement());
}

function calcDefWithConst(buffs) {
  return Math.ceil(groupStats.defense
    * (1 + fallback(buffs.Constitution, 0) * 0.001));
}

function doGroupDefenseBuffedElement(nmv, defConst) {
  setTextCommas(defConst + nmv, getGroupDefenseBuffedElement());
}

function doGroupArmorBuffedElement(buffs) {
  setTextCommas(groupStats.armor + Math.floor(groupStats.armor
    * fallback(buffs.Sanctuary, 0) * 0.001), getGroupArmorBuffedElement());
}

function calcFortitudeBonusHP(buffs, defenseWithConstitution) {
  return Math.ceil(defenseWithConstitution
    * fallback(buffs.Fortitude, 0) * 0.001);
}

function doGroupHPBuffedElement(fortitudeBonusHP) {
  setTextCommas(groupStats.hp + fortitudeBonusHP, getGroupHPBuffedElement());
}

function doGroupDamageBuffedElement(buffs, fortitudeBonusHP) {
  const chiStrikeBonusDamage = Math.ceil((groupStats.hp + fortitudeBonusHP)
    * fallback(buffs['Chi Strike'], 0) * 0.001);
  const storedTerrorizeEffectValue = Math.ceil(
    groupStats.damage * leadDefender.terrorizeLevel * 0.001,
  );
  setTextCommas(groupStats.damage + chiStrikeBonusDamage
    - storedTerrorizeEffectValue, getGroupDamageBuffedElement());
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
  setTextCommas(defBuffedAttack - flinchEffectValue, getAttackBuffedElement());
}

function terrorizeEffectOnDefenders(buffs) {
  const terrorizeEffectValue = Math.ceil(defBuffedDamage
    * fallback(buffs.Terrorize, 0) * 0.001);
  setTextCommas(defBuffedDamage - terrorizeEffectValue, getDamageBuffedElement());
}

function calculateGroup() {
  setText('Processing attacking group stats ... ', getProcessingStatus());
  if (mercStats) { deductMercStats(); }
  updateGroupValues();
  const buffs = reduceBuffArray(GameData.player().buffs);
  doGroupAttributeElements(buffs);
  flinchEffectOnDefenders(buffs); // Effect on defending group from Flinch on attacking group.
  terrorizeEffectOnDefenders(buffs);
  setText('Done.', getProcessingStatus());
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
  setTextCommas(defBuffedAttack, getAttackBuffedElement());
}

function calcDcEffect(points) {
  return 1 - points * darkCurseMultiplier;
}

function updateDefenderBuffedDefense(nmv, defWithConst) {
  const defBuffedDefense = defWithConst + nmv;
  setTextCommas(defBuffedDefense, getDefenseBuffedElement());
  setTextCommas(Math.ceil(defBuffedDefense * calcDcEffect(225)), getDc225Element());
  setTextCommas(Math.ceil(defBuffedDefense * calcDcEffect(175)), getDc175Element());
}

function updateDefenderBuffedArmor() {
  setTextCommas(defRawArmor + Math.floor(
    defRawArmor * leadDefender.sanctuaryLevel * 0.001,
  ), getArmorBuffedElement());
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
    setText('Yes', getLdCloakedElement());
  }
}

export function doCalculations() {
  setText('Processing defending guild stats ... ', getProcessingStatus());
  updateDefenderValues();
  updateDefenderElements();
  const nmvEffect = calcDefenderNmvEffect();
  updateDefenderBuffedAttack(nmvEffect);
  const defWithConst = calcDefenderDefenseWithConst();
  updateDefenderBuffedDefense(nmvEffect, defWithConst);
  updateDefenderBuffedArmor();
  const defBuffedHp = defRawHp + calcDefenderFortitudeBonusHp(defWithConst);
  setTextCommas(defBuffedHp, getHpBuffedElement());
  updateDefenderBuffedDamage(defBuffedHp);
  isLeadDefenderCloaked();
  if (GameData.player().hasGroup && groupStats) {
    calculateGroup();
  } else {
    setText('Done.', getProcessingStatus());
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
