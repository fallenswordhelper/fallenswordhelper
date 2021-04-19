import numberIsNaN from './numberIsNaN';
import partial from './partial';
import reduceBuffArray from './reduceBuffArray';
import round from './round';

function cloakGuess(bonus, level) {
  if (bonus > level * 10 || bonus < level) {
    return bonus;
  }
  return level * 10;
}

function updateForCloak(obj) {
  /* eslint-disable no-param-reassign */
  obj.attackValue = cloakGuess(obj.attackBonus, obj.levelValue);
  obj.defenseValue = cloakGuess(obj.defenseBonus, obj.levelValue);
  obj.armorValue = cloakGuess(obj.armorBonus, obj.levelValue);
  obj.damageValue = cloakGuess(obj.damageBonus, obj.levelValue);
  obj.hpValue = obj.hpBonus;
  /* eslint-enable no-param-reassign */
}

const statList = [
  ['levelValue', 'level'],
  ['attackValue', 'attack'],
  ['attackBonus', 'bonus_attack'],
  ['defenseValue', 'defense'],
  ['defenseBonus', 'bonus_defense'],
  ['armorValue', 'armor'],
  ['armorBonus', 'bonus_armor'],
  ['damageValue', 'damage'],
  ['damageBonus', 'bonus_damage'],
  ['hpValue', 'hp'],
  ['hpBonus', 'bonus_hp'],
  ['killStreakValue', 'killstreak'],
];

// eslint-disable-next-line no-param-reassign
function assignStats(obj, json, arr) { obj[arr[0]] = Number(json[arr[1]]); }

function importStats(obj, json) {
  statList.forEach(partial(assignStats, obj, json));
}

const buffList = [
  ['counterAttackLevel', 'Counter Attack'],
  ['doublerLevel', 'Doubler'],
  ['deathDealerLevel', 'Death Dealer'],
  ['darkCurseLevel', 'Dark Curse'],
  ['holyFlameLevel', 'Holy Flame'],
  ['constitutionLevel', 'Constitution'],
  ['sanctuaryLevel', 'Sanctuary'],
  ['flinchLevel', 'Flinch'],
  ['nightmareVisageLevel', 'Nightmare Visage'],
  ['superEliteSlayerLevel', 'Super Elite Slayer'],
  ['fortitudeLevel', 'Fortitude'],
  ['chiStrikeLevel', 'Chi Strike'],
  ['terrorizeLevel', 'Terrorize'],
  ['barricadeLevel', 'Barricade'],
  ['reignOfTerrorLevel', 'Reign Of Terror'],
  ['anchoredLevel', 'Anchored'],
  ['severeConditionLevel', 'Severe Condition'],
  ['entrenchLevel', 'Entrench'],
  ['cloakLevel', 'Cloak'],
];

// eslint-disable-next-line no-param-reassign
function assignBuffs(obj, buffs, arr) { obj[arr[0]] = buffs[arr[1]] || 0; }

function importBuffs(obj, buffs) {
  buffList.forEach(partial(assignBuffs, obj, buffs));
}

export default function playerDataObject(json) {
  if (!json) { return; }
  const buffs = reduceBuffArray(json._skills);
  const obj = {};
  importStats(obj, json);
  importBuffs(obj, buffs);
  obj.superEliteSlayerMultiplier = round(0.002
    * obj.superEliteSlayerLevel, 2);
  if (numberIsNaN(obj.armorValue)) { updateForCloak(obj); }
  return obj;
}
