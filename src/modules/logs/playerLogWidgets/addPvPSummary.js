import addCommas from '../../system/addCommas';
import closestTr from '../../common/closestTr';
import { combatSelector } from '../../support/constants';
import createDiv from '../../common/cElement/createDiv';
import getCombat from './getCombat';
import insertElement from '../../common/insertElement';
import insertHtmlAfterBegin from '../../common/insertHtmlAfterBegin';
import querySelector from '../../common/querySelector';
import querySelectorArray from '../../common/querySelectorArray';

const green = 'fshGreen';
const red = 'fshRed';

const isPvp = (r) => querySelector(combatSelector, r);
const notGuildCombat = ([, msgHtml]) => !/\(Guild Conflict\)/.test(msgHtml);
const getCombats = async ([r, msgHtml]) => [
  r, msgHtml, await getCombat(r, /combat_id=(\d+)/.exec(msgHtml)[1]),
];

function parseCombatWinner(msgHtml) {
  const victory = /You were victorious over/.test(msgHtml);
  if (victory) {
    return [green, `You were <span class="${green}">victorious</span> over `];
  }
  const defeat = /You were defeated by/.test(msgHtml);
  if (defeat) {
    return [red, `You were <span class="${red}">defeated</span> by `];
  }
  return ['', null]; // unresolved combat
}

function result(stat, desc, color) {
  if (stat !== 0) {
    return `${desc}:<span class="${color}">${addCommas(stat)}</span> `;
  }
  return '';
}

function highlightSpecials(acc, el) {
  if (el.id === 18) {
    return `${acc}<br><span class="fshRed fshBold">${
      el.params[0]} leeched the buff '${el.params[1]}'.</span>`;
  }
  if (el.id === 21) {
    return `${acc}<br><span class="fshRed fshBold">${
      el.params[0]} was mesmerized by Spell Breaker, losing the '${
      el.params[1]}' buff.</span>`;
  }
  return acc;
}

function parseCombat(combat, color) {
  return result(combat.xp_gain, 'XP stolen', color)
    + result(combat.gold_gain, 'Gold lost', color)
    + result(combat.gold_stolen, 'Gold stolen', color)
    + result(combat.pvp_prestige_gain, 'Prestige gain', color)
    + result(combat.pvp_rating_change, 'PvP change', color)
    + combat.specials.reduce(highlightSpecials, '');
}

function updateTd([r, msgHtml, json]) {
  const [color, pre] = parseCombatWinner(msgHtml);
  if (pre) {
    const summaryDiv = parseCombat(json.r.combat, color);
    r.cells[2].firstChild.remove();
    insertHtmlAfterBegin(r.cells[2], pre);
    insertElement(r.cells[2], createDiv({ innerHTML: summaryDiv }));
  }
}

function notGuild(combatLinks) {
  return combatLinks
    .map(closestTr)
    .filter(isPvp)
    .map((r) => [r, r.cells[2].innerHTML])
    .filter(notGuildCombat)
    .map(getCombats);
}

const goodCombats = ([, , json]) => json && json.s;

export default async function addPvPSummary(logTable) {
  const combatLinks = querySelectorArray('a[href*="&combat_id="]', logTable);
  if (combatLinks.length === 0) { return; }
  const combats = await Promise.all(notGuild(combatLinks));
  combats.filter(goodCombats).forEach(updateTd);
}
