import { a as addCommas } from './addCommas-c0fbc0a2.js';
import { g as getMercStats } from './getMercStats-5e308d6f.js';
import { g as groupViewStats } from './groupViewStats-698b5506.js';
import { y as jQueryNotPresent, B as setInnerHtml } from './calfSystem-02fd040d.js';
import './intValue-a6f9b475.js';

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
//# sourceMappingURL=injectGroupStats-f1644ffc.js.map
