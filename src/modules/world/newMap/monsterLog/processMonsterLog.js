/* eslint-disable no-param-reassign */
import partial from '../../../common/partial';
import calf from '../../../support/calf';
import { get, set } from '../../../system/idb';

let monsterLog = 0;

function storeDescription(creature, logCreature) {
  logCreature.creature_class = creature.creature_class;
  logCreature.image_id = creature.image_id;
  logCreature.level = Number(creature.level);
  logCreature.type = creature.type;
}

function setupMob(creature) {
  if (!monsterLog[creature.name]) {
    monsterLog[creature.name] = { seen: 1 };
    storeDescription(creature, monsterLog[creature.name]);
  } else if (monsterLog[creature.name].seen) {
    monsterLog[creature.name].seen += 1;
  }
}

function getStat(fn, stat, creatureStat) {
  if (stat) {
    return fn(stat, creatureStat);
  }
  return creatureStat;
}

function updateMinMax(_logStat, creatureStat) {
  const logStat = _logStat || {};
  logStat.min = getStat(Math.min, logStat.min, creatureStat);
  logStat.max = getStat(Math.max, logStat.max, creatureStat);
  return logStat;
}

const stats = ['attack', 'armor', 'damage', 'defense', 'hp'];

function statChanged(logStat, newStat) {
  return !logStat || logStat.min !== newStat.min || logStat.max !== newStat.max;
}

function updateStat(creature, logCreature, stat) {
  const newStat = updateMinMax(logCreature[stat], Number(creature[stat]));
  if (statChanged(logCreature[stat], newStat)) {
    logCreature[stat] = newStat;
  }
}

function storeStats(creature, logCreature) {
  stats.forEach(partial(updateStat, creature, logCreature));
}

function creatureHazEnhancements(creature) {
  return creature.enhancements && creature.enhancements.length > 0;
}

function updateEnhancements(logEnh, e) {
  logEnh[e.name] = updateMinMax(logEnh[e.name], Number(e.value));
}

function storeEnhancements(creature, logCreature) {
  if (creatureHazEnhancements(creature)) {
    logCreature.enhancements = logCreature.enhancements || {};
    creature.enhancements.forEach(
      partial(updateEnhancements, logCreature.enhancements),
    );
  }
}

function doMonsterLog(creature) {
  if (!monsterLog) { monsterLog = {}; }
  setupMob(creature);
  storeStats(creature, monsterLog[creature.name]);
  storeEnhancements(creature, monsterLog[creature.name]);
  set('fsh_monsterLog', monsterLog);
}

export function processMonsterLog(creature) {
  if (calf.showMonsterLog) { doMonsterLog(creature); }
}

function initLog(data) {
  monsterLog = data || {};
}

export function getMonsterPrefs() {
  get('fsh_monsterLog').then(initLog);
}
