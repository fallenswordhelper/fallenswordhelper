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

const updateElements = ([value, elementFn]) => setTextCommas(value, elementFn());

function updateDefenderElements() {
  [
    [defRawAttack, getAttackElement],
    [defRawDefense, getDefenseElement],
    [defRawArmor, getArmorElement],
    [defRawDamage, getDamageElement],
    [defRawHp, getHpElement],
  ].forEach(updateElements);
  setText(defCloaked, getDefCloakedElement());
  defProcessed += 1;
  setText(defProcessed, getDefProcessedElement());
}

function updateGroupValues() {
  [
    [groupStats.attack, getGroupAttackElement],
    [groupStats.defense, getGroupDefenseElement],
    [groupStats.armor, getGroupArmorElement],
    [groupStats.damage, getGroupDamageElement],
    [groupStats.hp, getGroupHPElement],
  ].forEach(updateElements);
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

function genericUpdate(baseValue, buffValue, getElementFn) {
  const intermediateValue = Math.ceil(baseValue * fallback(buffValue, 0) * 0.001);
  setTextCommas(baseValue - intermediateValue, getElementFn());
}

function flinchEffectOnDefenders(buffs) {
  genericUpdate(defBuffedAttack, buffs.Flinch, getAttackBuffedElement);
}

function terrorizeEffectOnDefenders(buffs) {
  genericUpdate(defBuffedDamage, buffs.Terrorize, getDamageBuffedElement);
}

function doBuffs(buffs) {
  doGroupAttributeElements(buffs);
  flinchEffectOnDefenders(buffs); // Effect on defending group from Flinch on attacking group.
  terrorizeEffectOnDefenders(buffs);
}

function calculateGroup() {
  setText('Processing attacking group stats ... ', getProcessingStatus());
  if (mercStats) { deductMercStats(); }
  updateGroupValues();
  doBuffs(reduceBuffArray(GameData.player().buffs));
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

const calcDcEffect = (points) => 1 - points * darkCurseMultiplier;
const calcDcValue = (buffedDefense, lvl) => Math.ceil(buffedDefense * calcDcEffect(lvl));

function updateDefenderBuffedDefense(nmv, defWithConst) {
  const defBuffedDefense = defWithConst + nmv;
  [
    [defBuffedDefense, getDefenseBuffedElement],
    [calcDcValue(225), getDc225Element],
    [calcDcValue(175), getDc175Element],
  ].forEach(updateElements);
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
