import addCommas from '../../system/addCommas';
import closestTr from '../../common/closestTr';
import { combatSelector } from '../../support/constants';
import createDiv from '../../common/cElement/createDiv';
import getCombat from './getCombat';
import getCustomUrlParameter from '../../system/getCustomUrlParameter';
import insertElement from '../../common/insertElement';
import insertHtmlAfterBegin from '../../common/insertHtmlAfterBegin';
import querySelector from '../../common/querySelector';
import querySelectorArray from '../../common/querySelectorArray';

const green = 'fshGreen';
const red = 'fshRed';

const isPvp = ([, r]) => querySelector(combatSelector, r);
const getCombats = async ([cl, r, msgHtml]) => [
  r, msgHtml, await getCombat(r, getCustomUrlParameter(cl.href, 'combat_id')),
];

function parseCombatWinner(msgHtml) {
  const victory = msgHtml.includes('You were victorious over');
  if (victory) {
    return [green, `You were <span class="${green}">victorious</span> over `];
  }
  const defeat = msgHtml.includes('You were defeated by');
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

const filterSpecial = (el) => [18, 21].includes(el.id);

function highlightSpecial(el) {
  if (el.id === 18) {
    return `<span class="fshRed fshBold">${
      el.params[0]} leeched the buff '${el.params[1]}'.</span>`;
  }
  return `<span class="fshRed fshBold">${
    el.params[0]} was mesmerized by Spell Breaker, losing the '${
    el.params[1]}' buff.</span>`;
}

function parseCombat(combat, color) {
  const specials = combat.specials.filter(filterSpecial).map(highlightSpecial);
  const results = result(combat.xp_gain, 'XP stolen', color)
    + result(combat.gold_gain, 'Gold lost', color)
    + result(combat.gold_stolen, 'Gold stolen', color)
    + result(combat.pvp_prestige_gain, 'Prestige gain', color)
    + result(combat.pvp_rating_change, 'PvP change', color);
  return results
    + (results && specials.length ? '<br>' : '')
    + (specials.length ? `${specials.join('<br>')}` : '');
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
    .map((cl) => [cl, closestTr(cl)])
    .filter(isPvp)
    .map(([cl, r]) => [cl, r, r.cells[2].innerHTML])
    .map(getCombats);
}

const goodCombats = ([, , json]) => json && json.s;

export default async function addPvPSummary(logTable) {
  const combatLinks = querySelectorArray('a[href*="&combat_id="]', logTable);
  if (combatLinks.length === 0) { return; }
  const combats = await Promise.all(notGuild(combatLinks));
  combats.filter(goodCombats).forEach(updateTd);
}
