import { e as entries, al as isObject, am as getCustomUrlParameter, an as attackplayerUrl, F as querySelectorArray, ao as doAddIgnore, H as getTextTrim, f as insertHtmlBeforeEnd, G as playerLinkSelector, x as callApp, u as indexAjaxData, T as sendEvent, C as getText, t as createDocument, z as getElementById, s as partial, $ as $dataAccess, V as nowSecs, ap as fromEntries, E as querySelector, aq as combatSelector, ab as insertHtmlAfterBegin, i as insertElement, b as createDiv, A as setText, X as setValue, a7 as defLastLadderReset, I as getValue, ar as noteSelector, y as jQueryNotPresent } from './calfSystem-86663d02.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-0e0c4a8c.js';
import { c as currentGuildId } from './currentGuildId-c3b232af.js';
import { g as getMembrList } from './getMembrList-77c65031.js';
import { c as closestTr } from './closestTr-65796700.js';
import { a as addCommas } from './addCommas-8af578e2.js';
import { p as parseDateAsTimestamp } from './parseDateAsTimestamp-168ca6a2.js';
import { s as set, g as get } from './idb-0b309dec.js';
import { c as createStyle } from './createStyle-5b8fcd55.js';
import { m as myStats } from './myStats-0082327e.js';
import { g as getLastTable } from './addLogColoring-6e42c273.js';

let memberPrm;

async function getKeys() {
  return entries(await getMembrList(false))
    .filter(([, value]) => isObject(value))
    .map(([key]) => key);
}

async function isGuildMate(playerName) {
  if (currentGuildId() && !memberPrm) {
    memberPrm = getKeys();
  }
  return (await memberPrm).includes(playerName);
}

const getPlayer = (t) => [t, getCustomUrlParameter(t.href, 'target_username')];
const guildTest = async ([t, name]) => [t, name, await isGuildMate(name)];
const pmClass$1 = (privMsg) => (privMsg ? ' class="pmAttackUrl"' : '');

function addAttack(privMsg, [t, playerName]) {
  insertHtmlAfterEnd(t, ` | <a${pmClass$1(privMsg)} href="${
    attackplayerUrl}${playerName}">Attack</a>`);
}

async function addAttackLink(logTable, privMsg) {
  const trade = querySelectorArray('a[href*="=createsecure&"]', logTable);
  if (!trade.length) { return; }
  const withPlayer = trade.map(getPlayer);
  const guildMate = await Promise.all(withPlayer.map(guildTest));
  guildMate.filter(([, , gm]) => !gm).forEach((player) => addAttack(privMsg, player));
}

const pmClass = (privMsg) => (privMsg ? ' class="pmIgnoreUrl"' : '');

const ignoreLinkHtml = (privMsg, p) => `<a${pmClass(privMsg)} href="${doAddIgnore}${
  getTextTrim(p)}" data-tooltip="Add to Ignore List">Ignore</a>`;

function noMsg(privMsg, [p, r]) {
  insertHtmlBeforeEnd(r.cells[1], `<font size="1"><br>[ ${ignoreLinkHtml(privMsg, p)} ]</font>`);
}

function addIgnoreLinks(logTable, privMsg) {
  const playerLinks = querySelectorArray(playerLinkSelector, logTable);
  if (playerLinks.length === 0) { return; }
  const playerRows = playerLinks.map((p) => [p, closestTr(p)]);
  playerRows.forEach((pr) => noMsg(privMsg, pr));
}

function viewCombat$1(id) {
  return callApp({
    cmd: 'combat',
    subcmd: 'view',
    combat_id: id,
  });
}

function combatView(id) {
  return indexAjaxData({
    cmd: 'combat',
    subcmd: 'view',
    combat_id: id,
  });
}

function getId(e) {
  return Number(e.getAttribute('background').match(/\/(\d+)/)[1]); // FIXME
}

function getResult(script, e) {
  const thisRe = new RegExp(`${e} = (\\d+)`);
  return Number(script.match(thisRe)[1]);
}

const specialMask = [
  [18, /(\w+)+ leeched the buff '([A-Za-z ]+)'./],
  [21,
    /(\w+)+ was mesmerized by Spell Breaker, losing the '([A-Za-z ]+)' buff./],
];

function gettokens(spec) {
  // const [specId, specMatch] = specialMask
  //   .map(([id, mask]) => [id, spec.match(mask)])
  //   .find(([, match]) => match);
  // return {id: specId, params: [specMatch[1], specMatch[2]]};
  const thisTests = specialMask
    .map(([id, mask]) => [id, spec.match(mask)])
    .find(([, match]) => match);
  if (!thisTests) {
    sendEvent('Logs', 'Missing PvP Special', spec);
    return { id: -1, params: ['-1', '-1'] };
  }
  return { id: thisTests[0], params: [thisTests[1][1], thisTests[1][2]] };
}

function formatSpecial(pCC) {
  const spec = querySelectorArray('#specialsDiv', pCC)
    .map(getTextTrim)
    .filter((t) => ['leeched', 'Spell'].some((s) => t.includes(s)))
    .map(gettokens);
  return spec;
}

function attacker(header) {
  return {
    id: getId(header.rows[1].cells[0]),
    name: getTextTrim(header.rows[0].cells[0]),
  };
}

function defender(header) {
  return {
    id: getId(header.rows[1].cells[2]),
    name: getTextTrim(header.rows[0].cells[2]),
  };
}

function doBase(id, pCC) {
  const header = pCC.children[0].rows[5].cells[0].children[0];
  return {
    attacker: attacker(header),
    defender: defender(header),
    id: Number(id),
    specials: formatSpecial(pCC),
  };
}

function doscript(pCC) {
  const script = getText(pCC.children[1]);
  return {
    gold_gain: getResult(script, 'goldGain'),
    gold_stolen: getResult(script, 'goldStolen'),
    pvp_prestige_gain: getResult(script, 'prestigeGain'),
    pvp_rating_change: getResult(script, 'pvpRatingChange'),
    winner: getResult(script, 'winner'),
    xp_gain: getResult(script, 'xpGain'),
  };
}

function reportObject(id, pCC) {
  return { ...doBase(id, pCC), ...doscript(pCC) };
}

function parseReport(id, html) {
  const doc = createDocument(html);
  const pCC = getElementById('pCC', doc);
  return {
    r: reportObject(id, pCC),
    s: true,
  };
}

// Incomplete
function viewCombat(id) {
  return combatView(id).then(partial(parseReport, id));
}

function daViewCombat(id) {
  return $dataAccess(viewCombat$1, viewCombat, id);
}

const storageKey = 'fsh_pvpCombat';

let combatPrm;
let newCache;

function currentCombatRecord(sevenDays, [key, val]) {
  return key === 'lastCheck' || (val.logTime && val.logTime > sevenDays);
}

function getRecent(internal) {
  const sevenDays = nowSecs - 7 * 24 * 60 * 60;
  const pairs = entries(internal);
  const filtered = pairs.filter(partial(currentCombatRecord, sevenDays));
  const recent = { ...fromEntries(filtered), lastCheck: nowSecs };
  set(storageKey, recent);
  return recent;
}

async function prepareCache() {
  const internal = await get(storageKey);
  if (!internal) { return { lastCheck: nowSecs }; }
  const oneDay = nowSecs - 24 * 60 * 60;
  if (!internal.lastCheck || internal.lastCheck < oneDay) {
    return getRecent(internal);
  }
  return internal;
}

async function newCombat(r, combatId, combatCache) {
  const thisCombat = await daViewCombat(combatId);
  if (!thisCombat || !thisCombat.s) { return; }
  if (!newCache) {
    newCache = { ...combatCache };
  }
  newCache[combatId] = {
    ...thisCombat,
    logTime: parseDateAsTimestamp(getTextTrim(r.cells[1])) / 1000,
  };
  set(storageKey, newCache);
  return thisCombat;
}

async function getCombat(r, combatId) {
  if (!combatPrm) {
    combatPrm = prepareCache();
  }
  const combatCache = await combatPrm;
  if (combatCache[combatId] && combatCache[combatId].logTime) {
    return combatCache[combatId];
  }
  return newCombat(r, combatId, combatCache);
}

const green = 'fshGreen';
const red = 'fshRed';

const isPvp = (r) => querySelector(combatSelector, r);
const notGuildCombat = ([, msgHtml]) => !/\(Guild Conflict\)/.test(msgHtml);
const getCombats = async ([r, msgHtml]) => [
  r, msgHtml, await getCombat(r, /combat_id=(\d+)/.exec(msgHtml)[1]),
];

function parseCombatWinner(r, msgHtml) {
  const victory = /You were victorious over/.test(msgHtml);
  if (victory) {
    return [green, `You were <span class="${green}">victorious</span> over `];
  }
  const defeat = /You were defeated by/.test(msgHtml);
  if (defeat) {
    return [red, `You were <span class="${red}">defeated</span> by `];
  }
  return ['', getText(r.cells[2].firstChild)];
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

function parseCombat(json, color) {
  return result(json.r.xp_gain, 'XP stolen', color)
    + result(json.r.gold_gain, 'Gold lost', color)
    + result(json.r.gold_stolen, 'Gold stolen', color)
    + result(json.r.pvp_prestige_gain, 'Prestige gain', color)
    + result(json.r.pvp_rating_change, 'PvP change', color)
    + json.r.specials.reduce(highlightSpecials, '');
}

function updateTd([r, msgHtml, json]) {
  const [color, pre] = parseCombatWinner(r, msgHtml);
  const summaryDiv = parseCombat(json, color);
  r.cells[2].firstChild.remove();
  insertHtmlAfterBegin(r.cells[2], pre);
  insertElement(r.cells[2], createDiv({ innerHTML: summaryDiv }));
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

async function addPvPSummary(logTable) {
  const combatLinks = querySelectorArray('a[href*="&combat_id="]', logTable);
  if (combatLinks.length === 0) { return; }
  const combats = await Promise.all(notGuild(combatLinks));
  combats.filter(goodCombats).forEach(updateTd);
}

function changeLables(logTable) {
  querySelectorArray('a[href*="=trade&"]', logTable)
    .forEach((a) => setText('Trade', a));
  querySelectorArray('a[href*="=createsecure&"]', logTable)
    .forEach((a) => setText('ST', a));
}

const justUsername = (obj) => obj.username;

let allyPrm;

async function getAllyEnemy() {
  const stats = await myStats(false);
  return {
    _allies: stats._allies.map(justUsername),
    _enemies: stats._enemies.map(justUsername),
  };
}

async function isAlly(playerName) {
  if (!allyPrm) {
    allyPrm = getAllyEnemy();
  }
  return (await allyPrm)._allies.includes(playerName);
}

async function isEnemy(playerName) {
  if (!allyPrm) {
    allyPrm = getAllyEnemy();
  }
  return (await allyPrm)._enemies.includes(playerName);
}

function doMsgHeader(logTable, privMsg) {
  const messageHeader = logTable.rows[0].cells[2];
  if (messageHeader && !privMsg) {
    insertHtmlBeforeEnd(messageHeader, '&nbsp;&nbsp;'
      + '<span class="fshWhite">(Guild mates show up in '
      + '<span class="fshGreen">green</span>)</span>');
  }
}

async function playerType(a) {
  let type = '';
  const playerName = getTextTrim(a);
  const [guildMate, ally, enemy] = await Promise.all([
    isGuildMate(playerName),
    isAlly(playerName),
    isEnemy(playerName),
  ]);
  if (guildMate) {
    type = 'guild';
  } else if (ally) {
    type = 'ally';
  } else if (enemy) {
    type = 'enemy';
  }
  return [
    `.fshPlayerColoring tr:nth-of-type(${closestTr(a).rowIndex + 1})`
      + ' td:nth-of-type(3) > a:first-of-type',
    type,
  ];
}

function byType(acc, [style, type]) {
  if (acc[type]) {
    acc[type].push(style);
  } else {
    acc[type] = [style];
  }
  return acc;
}

const colorLookup = {
  guild: 'green',
  ally: 'blue',
  enemy: 'red',
};

function makeStyle([key, selectors]) {
  return `${selectors.join(', ')} { color: ${colorLookup[key]}; }`;
}

const foundType = ([, type]) => type;

function getPlayerStyles(playerTags) {
  return entries(playerTags.filter(foundType).reduce(byType, {})).map(makeStyle);
}

function playerStyling(logTable, playerTags, privMsg) {
  const playerStyles = getPlayerStyles(playerTags);
  if (playerStyles.length) {
    doMsgHeader(logTable, privMsg);
    logTable.classList.add('fshPlayerColoring');
    insertElement(document.body, createStyle(playerStyles.join('\n')));
  }
}

async function colorPlayers(logTable, privMsg) {
  const playerLinks = querySelectorArray(playerLinkSelector, logTable);
  if (!playerLinks.length) { return; }
  const playerTags = await Promise.all(playerLinks.map(playerType));
  playerStyling(logTable, playerTags, privMsg);
}

let lastLadderReset;
const ladderRe = /You ranked \w{3} in your PvP Band! You have gained \d x PvP Ladder Token/;

function pvp(r) {
  return ladderRe.test(getText(r.cells[2]));
}

function saveLastResetTime(r) {
  const logTime = parseDateAsTimestamp(getTextTrim(r.cells[1]));
  if (logTime > lastLadderReset) {
    setValue(defLastLadderReset, logTime);
    lastLadderReset = logTime;
  }
}

function processLadder(logTable) {
  lastLadderReset = getValue(defLastLadderReset);
  const noteImgs = querySelectorArray(noteSelector, logTable);
  const noteRows = noteImgs.map(closestTr);
  const pvpImgs = noteRows.filter(pvp);
  pvpImgs.forEach(saveLastResetTime);
}

const conditionalArray = [
  ['addIgnoreLink', addIgnoreLinks],
  ['colorPlayerNames', colorPlayers],
  ['addAttackLinkToLog', addAttackLink],
  ['changeButtonLabels', changeLables],
  ['trackLadderReset', processLadder],
  ['showPvPSummaryInLog', addPvPSummary],
];

function processConditionals(logTable, privMsg, pair) {
  if (getValue(pair[0])) {
    pair[1](logTable, privMsg);
  }
}

function foundLogTable(logTable, privMsg) {
  conditionalArray.forEach(partial(processConditionals, logTable, privMsg));
}

function addLogWidgets(privMsg) {
  if (jQueryNotPresent()) { return; }
  const logTable = getLastTable();
  if (logTable) { foundLogTable(logTable, privMsg); }
}

export { addLogWidgets as a };
//# sourceMappingURL=addLogWidgets-05a6aef3.js.map
