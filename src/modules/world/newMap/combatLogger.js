import { defPvE } from '../../support/constants';
import getValue from '../../system/getValue';
import { get, set } from '../../system/idb';

// Taking the Not Save in case they add new enhancements.
const notSave = ['Breaker', 'Protection', 'Master Thief', 'Protect Gold',
  'Disarm', 'Duelist', 'Thievery', 'Master Blacksmith', 'Master Crafter',
  'Fury Caster', 'Master Inventor', 'Sustain'];
let combatLog = [];
let combatData = 0;

function storeBuffs(buff) {
  if (buff.id === 54 || buff.id === 26) {
    combatData.player.buffs[buff.id] = parseInt(buff.level, 10);
  }
}

function storeEnhancements(enh) {
  if (notSave.indexOf(enh.name) === -1) {
    combatData.player.enhancements[enh.name] = enh.value;
  }
}

function hazBuffs(data) {
  if (data.player.buffs) {
    data.player.buffs.forEach(storeBuffs); // loop through buffs,
    // only need to keep CA and Doubler 54 = ca, 26 = doubler
  }
}

function hazEnhancements(data) {
  if (data.player.enhancements) {
    data.player.enhancements.forEach(storeEnhancements); // loop through enhancements
  }
}

function processCombatResponse(data) {
  combatData = {};
  combatData.combat = data.response.data;
  if (combatData.combat.inventory_id) {
    combatData.combat.drop = combatData.combat.item.id;
  }

  combatData.player = {};
  combatData.player.buffs = {};
  combatData.player.enhancements = {};
  hazBuffs(data);
  hazEnhancements(data);
  combatData.time = data.time;
  combatLog.push(combatData);
  set('fsh_combatLog', combatLog);
}

function combatResponse(_e, data) {
  // If bad response do nothing.
  if (data.response.response === 0) { processCombatResponse(data); }
}

function gotCombatLog(data) { // jQuery.min
  if (data) { combatLog = data; }
  $.subscribe(defPvE, combatResponse);
}

export default function combatLogger() { // jQuery.min
  if (getValue('keepLogs')) {
    get('fsh_combatLog').then(gotCombatLog);
  }
}
