import { u as indexAjaxData, z as getElementById, B as setInnerHtml, m as getArrayByTagName, aw as contains, C as getText, g as getElementsByTagName, bE as defStatVl, s as partial, E as querySelector, t as createDocument, I as getValue, aA as retryAjax, bw as lastActivityRE, F as querySelectorArray, az as showPlayerUrl, bL as profileUrl, N as arrayFrom, y as jQueryNotPresent, X as setValue, o as onclick, p as pCC, c as calf } from './calfSystem-c08399e5.js';
import { b as buffList } from './buffObj-ae031e44.js';
import { c as csvSplit } from './csvSplit-482f2ccd.js';
import { o as onlinePlayersPage } from './onlinePlayersPage-80f26110.js';
import { h as helpLink } from './simpleCheckbox-7d7d14cc.js';
import { i as intValue } from './intValue-ca51a3c0.js';
import { o as onlineDot } from './onlineDot-753c9d97.js';
import { p as playerName } from './playerName-34451b45.js';
import { a as stringSort } from './stringSort-28fda778.js';
import './isChecked-d75e63a5.js';
import './alpha-a79afe3b.js';
import './toLowerCase-fa335220.js';

function guildManage() {
  return indexAjaxData({
    cmd: 'guild',
    subcmd: 'manage',
  });
}

function header(o) {
  return `<tr><td rowspan="2" colspan="2" class="headCell"><h1>Find ${
    o.header}</h1></td><td class="findLabel">Select ${
    o.what} to search for:</td><td>${o.control()}</td></tr>`;
}

function cutoff(o) {
  return `<tr><td class="findLabel">Level ${
    o.cutoff}ers only:</td><td><input id="level175" type="checkbox"></td></tr>`;
}

function searchGuildMembers(o) {
  return `<tr><td class="leftLabel">${
    o.searched}:&nbsp;</td><td id="buffNicks">&nbsp;</td>`
    + '<td class="findLabel">Search guild members:</td>'
    + '<td><input id="guildMembers" type="checkbox" checked></td></tr>';
}

function allyHelpLink() {
  return helpLink('Search Allies/Enemies',
    'The checkbox enables searching your own personal '
    + 'allies/enemies list for buffs.<br><br>'
    + 'Additional profiles to search can be added in the text '
    + 'field to the right, separated by commas.');
}

function searchAlly(o, extraProfile) {
  return '<tr><td class="findLabel">'
    + `# potential ${o.potential}ers to search:&nbsp;</td>`
    + '<td id="potentialBuffers"></td>'
    + `<td class="findLabel">Search allies/enemies:${allyHelpLink()}</td>`
    + '<td><input id="alliesEnemies" type="checkbox" checked>'
    + '<input class="extraProfile" class="custominput" id="extraProfile" '
    + `type="text" title="Extra profiles to search" value="${
      extraProfile || ''}"></td></tr>`;
}

function onlineList(o) {
  return `<tr><td class="findLabel"># ${o.processed}ers processed:`
    + '&nbsp;</td><td id="buffersProcessed">0</td>'
    + '<td class="findLabel">Search online list:</td>'
    + '<td><select class="selectOnline" id="onlinePlayers">'
      + '<option value="0">Disabled</option>'
      + '<option value="49">Short (fastest)</option>'
      + '<option value="47">Medium (medium)</option>'
      + '<option value="45">Long (slowest)</option>'
    + '</select></td></tr>';
}

function progress(o) {
  return `<tr><td class="findLabel">Find ${o.progress} progress:`
    + '&nbsp;</td><td class="buffProg" id="bufferProgress">Idle</td>'
    + '<td align="center"><input id="clearresultsbutton" '
    + 'class="custombutton" type="button" value="Clear Results"></td>'
    + '<td align="center"><input id="findbuffsbutton" class="custombutton" '
    + 'type="button" value="Find Buffers"></td></tr>';
}

function outputTable(o) {
  return `<br><h1>Potential ${o.processed}ers and Bio Info</h1><br>`
    + '<table class="fshResult" id="buffTable"><tbody>'
    + '<tr><th class="nameCol">&nbsp;Name</th>'
    + '<th class="infoCol">&nbsp;Player Info</th>'
    + '<th>&nbsp;Notable Bio Text</th></tr>'
    + '</tbody></table><br>';
}

function disclaimer() {
  return '<div class="disclaim">Disclaimer: This '
    + 'functionality does a simple text search for the terms above. '
    + 'It is not as smart as you are, so please do not judge the results '
    + 'too harshly. It does not search all online players, just a subset '
    + 'of those that have been on recently. '
    + 'The aim is to be fast and still return a good set of results. This '
    + 'feature is a work in progress, so it may be tweaked and enhanced '
    + 'over time.</div>';
}

function pageLayout(o, extraProfile) { // Legacy
  return `<table class="fshFind"><tbody>${header(o)}${cutoff(o)}${
    searchGuildMembers(o)}${searchAlly(o, extraProfile)}${onlineList(o)}${
    progress(o)}</tbody></table>${outputTable(o)}${disclaimer()}`;
}

let bufferProgress;

function getBufferProgress() {
  bufferProgress = getElementById('bufferProgress');
}

function updateProgress(html, colour) {
  setInnerHtml(html, bufferProgress);
  if (colour) {
    bufferProgress.style.color = colour;
  }
}

const sustainLevelRE = /Level<br>(\d+)%/;

function getBioLines(bioCellHtml, findBuffNicks) {
  const myRe = new RegExp(`^.*\\b(?:(?:${
    findBuffNicks.replace(/,/g, ')|(?:')}))\\b.*$`, 'gim');
  return [...bioCellHtml.matchAll(myRe)].map((el) => el[0]);
}

function getSustain(doc) {
  const sustainLink = getArrayByTagName('a',
    getElementById('profileLeftColumn', doc)).find(contains('Sustain'));
  if (sustainLink) {
    const sustainText = sustainLink.parentNode.parentNode.parentNode
      .nextElementSibling.children[0].dataset.tipped;
    return parseInt(sustainLevelRE.exec(sustainText)[1], 10) || -1;
  }
  return 0;
}

function getInnerPlayerName(doc) {
  return getText(getElementsByTagName('h1', getElementById('pCC', doc))[0]);
}

function getInnerLevelValue(doc) {
  return intValue(getText(getElementById('profileLeftColumn', doc)
    .children[4].children[0].rows[0].cells[1]));
}

function getInnerVirtualLevel(doc) {
  return parseInt(getText(getElementById(defStatVl, doc)), 10);
}

function nameCell(doc, callback, lastActivity, bioCellHtml) { // Legacy
  const innerPlayerName = getInnerPlayerName(doc);
  const levelValue = getInnerLevelValue(doc);
  const virtualLevelValue = getInnerVirtualLevel(doc);
  const lastActivityMinutes = parseInt(lastActivity[1], 10);
  const lastActivityIMG = onlineDot({ min: lastActivityMinutes });
  const playerHREF = callback.href;
  const bioTip = bioCellHtml.replace(/'|"|\n/g, '');
  return `<nobr>${lastActivityIMG}&nbsp;<a href="${playerHREF}" target="new" `
    // FIXME - It kind works now, but not guaranteed?
    + 'class="tip-static" '
    + `data-tipped="${bioTip}">${innerPlayerName}</a>`
    + '&nbsp;<span class="fshBlue">[<span class="a-reply fshLink" '
    + `target_player="${innerPlayerName}">m</span>]</span></nobr><br>`
    + `<span class="fshGrey">Level:&nbsp;</span>${levelValue
    }&nbsp;(${virtualLevelValue})`;
}

function openMsg(evt) {
  window.openQuickMsgDialog(evt.target.getAttribute('target_player'));
}

function doNameCell(o) {
  const newCell = o.newRow.insertCell(0);
  newCell.style.verticalAlign = 'top';
  setInnerHtml(nameCell(o.doc, o.callback, o.lastActivity, o.bioCellHtml),
    newCell);
  $('.a-reply').on('click', openMsg);
}

function playerInfo(lastActivity, sustainLevel, hasExtendBuff) { // Legacy
  let sustain = 'fshRed';
  if (sustainLevel >= 100) { sustain = 'fshGreen'; }
  let extend = '<span class="fshRed">No</span>';
  if (hasExtendBuff) { extend = '<span class="fshGreen">Yes</span>'; }
  return '<table><tbody><tr>'
    + '<td colspan="2" class="resAct">Last Activity:</td>'
    + `<td colspan="2"><nobr>${lastActivity[0]}</nobr></td></tr>`
    + '<tr><td class="resLbl">Sustain:'
    + `</td><td class="resVal ${sustain}">${sustainLevel}%</td>`
    + '<td class="resLbl">Extend:</td>'
    + `<td class="resVal">${extend}</td></tr>`;
}

function playerInfoCell(newRow, lastActivity, sustainLevel, hasExtendBuff) {
  const newCell = newRow.insertCell(1);
  setInnerHtml(playerInfo(lastActivity, sustainLevel, hasExtendBuff), newCell);
  newCell.style.verticalAlign = 'top';
}

function injectTextLine(newCell, el) {
  // eslint-disable-next-line no-param-reassign
  newCell.innerHTML += `${el}<br>`;
}

function buffCell(newRow, textLineArray) {
  const newCell = newRow.insertCell(2);
  textLineArray.forEach(partial(injectTextLine, newCell));
}

function updateProcessed() {
  const processedBuffers = getElementById('buffersProcessed');
  const potentialBuffers = parseInt(getText(getElementById('potentialBuffers')),
    10);
  const processedBuffersCount = parseInt(getText(processedBuffers), 10);
  setInnerHtml(processedBuffersCount + 1, processedBuffers);
  if (potentialBuffers === processedBuffersCount + 1) {
    updateProgress('Done.', 'blue');
  }
}

function calcLastActivity(doc) {
  const innerPcc = getElementById('pCC', doc);
  const lastActivityElement = getElementsByTagName('p', innerPcc)[0];
  return /(\d+) mins, (\d+) secs/.exec(getText(lastActivityElement));
}

function getExtend(doc) {
  return querySelector('img.tip-static[data-tipped*="Extend"]', doc);
}

function addRowToTable(bioCellHtml, callback, doc, textLineArray) {
  const lastActivity = calcLastActivity(doc);
  const buffTable = getElementById('buffTable');
  const newRow = buffTable.insertRow(-1);
  doNameCell({
    newRow,
    doc,
    callback,
    lastActivity,
    bioCellHtml,
  });
  playerInfoCell(newRow, lastActivity, getSustain(doc), getExtend(doc));
  buffCell(newRow, textLineArray);
}

function parseProfileAndDisplay(responseText, callback) { // Hybrid - Evil
  const doc = createDocument(responseText);
  const bioCellHtml = getElementById('profile-bio', doc).innerHTML;
  const textLineArray = getBioLines(bioCellHtml, callback.findBuffNicks);
  // add row to table
  if (textLineArray.length > 0) {
    addRowToTable(bioCellHtml, callback, doc, textLineArray);
  }
  updateProcessed();
}

function makeOptions(el) {
  return `<option value="${el.id}">${el.name}</option>`;
}

const buffCustom = {
  header: 'Buff',
  what: 'buff',
  control() {
    return `<select style="width:140px;" id="selectedBuff">${
      buffList.map(makeOptions).join('')}</select>`;
  },
  cutoff: '175 buff',
  searched: 'Nicknames of buff searched',
  potential: 'buff',
  processed: 'Buff',
  progress: 'buffers',
};
const otherCustom = {
  header: 'Other',
  what: 'text',
  control() {
    const textToSearchFor = getValue('textToSearchFor') || '';
    return '<input style="width:140px;" class="custominput" '
      + `id="textToSearchFor" type="text" title="Text to search for" value="${
        textToSearchFor}">`;
  },
  cutoff: '500+ play',
  searched: 'Text searched for',
  potential: 'play',
  processed: 'Play',
  progress: 'Other',
};

let findBuffsLevel175Only;

function calcMinLvl() { // Legacy
  if (findBuffsLevel175Only) { return 500; }
  return 1;
}

function setMinLvl() {
  findBuffsLevel175Only = getElementById('level175').checked;
}

let findBuffNicks;
let findBuffMinCastLevel;
let onlinePlayers;
let onlinePlayersSetting;
let extraProfile;
let profilePagesToSearch;
let profilePagesToSearchProcessed;

function gotProfile(j, html) {
  parseProfileAndDisplay(html, {
    href: j,
    findBuffNicks,
  });
}

function getProfile(j) {
  retryAjax(j).then(partial(gotProfile, j));
}

function findBuffsParsePlayersForBuffs() { // Legacy
  // remove duplicates TODO
  // now need to parse player pages for buff ...
  setInnerHtml(onlinePlayers.length, getElementById('potentialBuffers'));
  if (onlinePlayers.length <= 0) {
    updateProgress('Done.', 'blue');
    return;
  }
  updateProgress('Parsing player data ...', 'green');
  onlinePlayers.forEach(getProfile);
}

function calcNextPage(curPage, maxPage) { // Legacy
  if (curPage === 1) {
    return Math.round((onlinePlayersSetting * maxPage) / 50);
  }
  return curPage + 1;
}

function addPlayerToSearchList(onlinePlayer, onlinePlayerName) {
  // add online player to search list (all but self)
  if (playerName() !== onlinePlayerName.trim()) {
    onlinePlayers.push(onlinePlayer);
  }
}

function getOnlinePlayerLevel(e) {
  return parseInt($(e).find('td:eq(2)').text().replace(/,/g, ''), 10);
}

function includePlayer(onlinePlayerLevel) {
  return onlinePlayerLevel >= findBuffMinCastLevel
    && onlinePlayerLevel >= calcMinLvl();
}

function playerRow(i, e) {
  if (includePlayer(getOnlinePlayerLevel(e))) {
    const onlinePlayer = $(e).find('td:eq(1) a').attr('href');
    const onlinePlayerName = $(e).find('td:eq(1) a').text();
    addPlayerToSearchList(onlinePlayer, onlinePlayerName);
  }
}

function getMaxPage(doc) {
  return parseInt($(doc).find('td:has(input[name="page"]):last')
    .text().replace(/\D/g, ''), 10);
}

function getCurrPage(doc) {
  return parseInt($(doc).find('input[name="page"]:last').val()
    .replace(/\D/g, ''), 10);
}

function playerRows(doc) {
  $(doc).find('table:contains("Username")>tbody>tr:has'
    + '(td>a[href*="cmd=profile&player_id="])').each(playerRow);
}

function nextPage(curPage, maxPage, callback) {
  const newPage = calcNextPage(curPage, maxPage);
  updateProgress(`Parsing online page ${curPage} ...`);
  onlinePlayersPage(newPage).then(callback);
}

function findBuffsParseOnlinePlayers(responseText) { // Legacy
  const doc = createDocument(responseText);
  const curPage = getCurrPage(doc);
  if (curPage !== 1) {
    playerRows(doc);
  }
  const maxPage = getMaxPage(doc);
  if (curPage < maxPage) {
    nextPage(curPage, maxPage, findBuffsParseOnlinePlayers);
  } else {
    // all done so moving on
    findBuffsParsePlayersForBuffs();
  }
}

function findBuffsParseOnlinePlayersStart() { // Legacy
  // if option enabled then parse online players
  onlinePlayersSetting = parseInt(getElementById('onlinePlayers').value, 10);
  if (onlinePlayersSetting !== 0) {
    onlinePlayersPage(1).then(findBuffsParseOnlinePlayers);
  } else {
    findBuffsParsePlayersForBuffs();
  }
}

function calcLastActMins(tipped) {
  const lastActivity = lastActivityRE.exec(tipped);
  const lastActivityDays = parseInt(lastActivity[1], 10);
  const lastActivityHours = parseInt(lastActivity[2], 10) + lastActivityDays * 24;
  return parseInt(lastActivity[3], 10) + lastActivityHours * 60;
}

function isValidPlayer(lastActivityMinutes, vlevel, minPlayerVirtualLevel) {
  return lastActivityMinutes < 5 && vlevel >= findBuffMinCastLevel
    && vlevel >= minPlayerVirtualLevel;
}

function parsePlayerLink(el) {
  const { tipped } = el.dataset;
  const lastActivityMinutes = calcLastActMins(tipped);
  // check if they are high enough level to cast the buff
  const vlevel = Number(/VL:.+?(\d+)/.exec(tipped)[1]);
  const minPlayerVirtualLevel = calcMinLvl();
  if (isValidPlayer(lastActivityMinutes, vlevel, minPlayerVirtualLevel)) {
    addPlayerToSearchList(el.href, getText(el));
  }
}

function findBuffsParseProfilePage(responseText) {
  const doc = createDocument(responseText);
  querySelectorArray('#profileLeftColumn a[data-tipped*="Last Activity"]', doc)
    .forEach(parsePlayerLink);
  // continue with online players
  profilePagesToSearchProcessed += 1;
  if (profilePagesToSearchProcessed
    === profilePagesToSearch.length) {
    findBuffsParseOnlinePlayersStart();
  }
}

function addExtraProfile(el) { profilePagesToSearch.push(showPlayerUrl + el); }

function getAlliesEnemies(el) { retryAjax(el).then(findBuffsParseProfilePage); }

function findBuffsParseProfilePageStart() { // Legacy
  // if option enabled then parse profiles
  profilePagesToSearch = [];
  profilePagesToSearch.push(profileUrl); // ???
  const extraProfileArray = csvSplit(extraProfile);
  extraProfileArray.forEach(addExtraProfile);
  profilePagesToSearchProcessed = 0;
  if (getElementById('alliesEnemies').checked) {
    profilePagesToSearch.forEach(getAlliesEnemies);
  } else {
    findBuffsParseOnlinePlayersStart();
  }
}

function findBuffsParseGuildManagePage(responseText) {
  const doc = createDocument(responseText);
  if (getElementById('guildMembers').checked) {
    querySelectorArray('#pCC a[data-tipped*="<td>VL:</td>"]', doc)
      .forEach(parsePlayerLink);
  }
  // continue with profile pages
  findBuffsParseProfilePageStart();
}

function notHeader(el, i) { return i !== 0; }

function deleteRow(buffTable) { buffTable.deleteRow(-1); }

function findBuffsClearResults() { // Legacy
  const buffTable = getElementById('buffTable');
  arrayFrom(buffTable.rows).filter(notHeader)
    .forEach(partial(deleteRow, buffTable));
  setInnerHtml('', getElementById('buffNicks'));
  updateProgress('Idle.', 'black');
  setInnerHtml('', getElementById('potentialBuffers'));
  setInnerHtml('0', getElementById('buffersProcessed'));
}

function findAnyStart(progMsg) { // jQuery
  if (jQueryNotPresent()) { return; }
  setInnerHtml(findBuffNicks, getElementById('buffNicks'));
  updateProgress(`Gathering list of ${progMsg} ...`, 'green');
  setMinLvl();
  setInnerHtml('0', getElementById('buffersProcessed'));
  onlinePlayers = [];
  extraProfile = getElementById('extraProfile').value;
  setValue('extraProfile', extraProfile);
  // get list of players to search, starting with guild>manage page
  guildManage().then(findBuffsParseGuildManagePage);
}

function thisBuff(selectedBuff, el) { return selectedBuff === el.id; }

function findBuffsStart() { // Legacy
  const selectedBuff = parseInt($('#selectedBuff').val(), 10);
  const findThisBuff = buffList.find(partial(thisBuff, selectedBuff));
  findBuffNicks = findThisBuff.nicks;
  findBuffMinCastLevel = findThisBuff.lvl;
  findAnyStart('potential buffers');
}

function findOtherStart() { // Legacy
  const textToSearchFor = $('#textToSearchFor').val().replace(/\s*,\s*/, ',');
  setValue('textToSearchFor', textToSearchFor);
  findBuffNicks = textToSearchFor;
  findBuffMinCastLevel = 1;
  findAnyStart('profiles to search');
}

function getExtraProfile() {
  extraProfile = getValue('extraProfile');
}

function setupFindEvent(fn) {
  onclick(getElementById('findbuffsbutton'), fn, true);
}

function setupClearEvent() {
  onclick(getElementById('clearresultsbutton'), findBuffsClearResults, true);
}

function injectFindBuffs(injector) { // Legacy
  const content = injector || pCC;
  calf.sortBy = 'name';
  calf.sortAsc = true;
  buffList.sort(stringSort);
  getExtraProfile();
  setInnerHtml(pageLayout(buffCustom, extraProfile), content);
  getBufferProgress();
  setupFindEvent(findBuffsStart);
  setupClearEvent();
}

function injectFindOther(injector) { // Native - Bad
  const content = injector || pCC;
  getExtraProfile();
  setInnerHtml(pageLayout(otherCustom, extraProfile), content);
  getBufferProgress();
  setupFindEvent(findOtherStart);
  setupClearEvent();
}

export { extraProfile, injectFindBuffs, injectFindOther };
//# sourceMappingURL=findBuffs-2c432aaf.js.map
