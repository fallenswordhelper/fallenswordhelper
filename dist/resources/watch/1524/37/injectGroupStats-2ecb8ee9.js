import { a as addCommas } from './addCommas-e39c029a.js';
import { g as getMercStats } from './getMercStats-37b6ec31.js';
import { g as groupViewStats } from './groupViewStats-dbf35e7e.js';
import { y as jQueryNotPresent, B as setInnerHtml } from './calfSystem-6840a38e.js';
import './intValue-0e97c9b9.js';

let groupStats;

function displayStat(el, groupStat, mercStat) {
  setInnerHtml(`<span class="fshBlue">${addCommas(groupStat)}</span> ( ${
    addCommas(groupStat - mercStat)} )`, el);
}

function parseMercStats(mercStats) {
  displayStat(groupStats.attackElement, groupStats.attack, mercStats.attack);
  displayStat(groupStats.defenseElement, groupStats.defense, mercStats.defense);
  displayStat(groupStats.armorElement, groupStats.armor, mercStats.armor);
  displayStat(groupStats.damageElement, groupStats.damage, mercStats.damage);
  displayStat(groupStats.hpElement, groupStats.hp, mercStats.hp);
}

function injectGroupStats() { // jQuery
  if (jQueryNotPresent()) { return; }
  groupStats = groupViewStats(document);
  if (groupStats.attackElement) {
    getMercStats().then(parseMercStats);
  }
}

export default injectGroupStats;
//# sourceMappingURL=injectGroupStats-2ecb8ee9.js.map
