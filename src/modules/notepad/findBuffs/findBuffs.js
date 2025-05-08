import guildManage from '../../ajax/guildManage';
import onlinePlayersPage from '../../ajax/onlinePlayersPage';
import retryAjax from '../../ajax/retryAjax';
import sendEvent from '../../analytics/sendEvent';
import arrayFrom from '../../common/arrayFrom';
import csvSplit from '../../common/csvSplit';
import getElementById from '../../common/getElementById';
import getText from '../../common/getText';
import jQueryNotPresent from '../../common/jQueryNotPresent';
import lastActivity from '../../common/lastActivity';
import onclick from '../../common/onclick';
import partial from '../../common/partial';
import playerName from '../../common/playerName';
import querySelectorArray from '../../common/querySelectorArray';
import regExpFirstCapture from '../../common/regExpFirstCapture';
import trim from '../../common/trim';
import setInnerHtml from '../../dom/setInnerHtml';
import buffList from '../../support/buffObj.json';
import calf from '../../support/calf';
import { profileUrl, showPlayerUrl, vlRe } from '../../support/constants';
import { pcc } from '../../support/layout';
import createDocument from '../../system/createDocument';
import getValue from '../../system/getValue';
import setValue from '../../system/setValue';
import stringSort from '../../system/stringSort';
import { buffCustom, otherCustom } from './assets';
import { getBufferProgress, updateProgress } from './bufferProgress';
import { calcMinLvl, setMinLvl } from './minLvl';
import pageLayout from './pageLayout';
import parseProfileAndDisplay from './parseProfileAndDisplay';

let findBuffNicks = 0;
let findBuffMinCastLevel = 0;
let onlinePlayers = 0;
let onlinePlayersSetting = 0;
let extraProfile = 0;
let profilePagesToSearch = 0;
let profilePagesToSearchProcessed = 0;

function setInnerById(html, id) {
  setInnerHtml(html, getElementById(id));
}

function gotProfile(j, html) {
  parseProfileAndDisplay(html, {
    href: j,
    findBuffNicks,
  });
}

async function getProfile(j) {
  const html = await retryAjax(j);
  gotProfile(j, html);
}

function findBuffsParsePlayersForBuffs() {
  // Legacy
  // now need to parse player pages for buff ...
  setInnerById(onlinePlayers.length, 'potentialBuffers');
  if (onlinePlayers.length <= 0) {
    updateProgress('Done.', 'blue');
    return;
  }
  updateProgress('Parsing player data ...', 'green');
  onlinePlayers.forEach(getProfile);
}

function calcNextPage(curPage, maxPage) {
  // Legacy
  if (curPage === 1) {
    return Math.round((onlinePlayersSetting * maxPage) / 50);
  }
  return curPage + 1;
}

function addPlayerToSearchList(onlinePlayer, onlinePlayerName) {
  // add online player to search list (all but self)
  if (playerName() !== trim(onlinePlayerName)) {
    onlinePlayers.push(onlinePlayer);
  }
}

function getOnlinePlayerLevel(e) {
  return parseInt($(e).find('td:eq(2)').text().replace(/,/g, ''), 10);
}

function includePlayer(onlinePlayerLevel) {
  return (
    onlinePlayerLevel >= findBuffMinCastLevel &&
    onlinePlayerLevel >= calcMinLvl()
  );
}

function playerRow(_i, e) {
  if (includePlayer(getOnlinePlayerLevel(e))) {
    const onlinePlayer = $(e).find('td:eq(1) a').attr('href');
    const onlinePlayerName = $(e).find('td:eq(1) a').text();
    addPlayerToSearchList(onlinePlayer, onlinePlayerName);
  }
}

function getMaxPage(doc) {
  return parseInt(
    $(doc).find('td:has(input[name="page"]):last').text().replace(/\D/g, ''),
    10,
  );
}

function getCurrPage(doc) {
  return parseInt(
    $(doc).find('input[name="page"]:last').val().replace(/\D/g, ''),
    10,
  );
}

function playerRows(doc) {
  $(doc)
    .find(
      'table:contains("Username")>tbody>tr:has' +
        '(td>a[href*="cmd=profile&player_id="])',
    )
    .each(playerRow);
}

async function nextPage(curPage, maxPage, callback) {
  const newPage = calcNextPage(curPage, maxPage);
  updateProgress(`Parsing online page ${curPage} ...`);
  const html = await onlinePlayersPage(newPage);
  callback(html);
}

function findBuffsParseOnlinePlayers(responseText) {
  // Legacy
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

async function findBuffsParseOnlinePlayersStart() {
  // Legacy
  // if option enabled then parse online players
  onlinePlayersSetting = parseInt(getElementById('onlinePlayers').value, 10);
  if (onlinePlayersSetting !== 0) {
    const html = await onlinePlayersPage(1);
    findBuffsParseOnlinePlayers(html);
  } else {
    findBuffsParsePlayersForBuffs();
  }
}

function isValidPlayer(lastActivityMinutes, vlevel, minPlayerVirtualLevel) {
  return (
    lastActivityMinutes < 5 &&
    vlevel >= findBuffMinCastLevel &&
    vlevel >= minPlayerVirtualLevel
  );
}

function parsePlayerLink(el) {
  const { tipped } = el.dataset;
  const { mins } = lastActivity(tipped);
  // check if they are high enough level to cast the buff
  const vlevel = Number(regExpFirstCapture(vlRe, tipped));
  const minPlayerVirtualLevel = calcMinLvl();
  if (isValidPlayer(mins, vlevel, minPlayerVirtualLevel)) {
    addPlayerToSearchList(el.href, getText(el));
  }
}

function findBuffsParseProfilePage(responseText) {
  const doc = createDocument(responseText);
  querySelectorArray(
    '#profileLeftColumn a[data-tipped*="Last Activity"]',
    doc,
  ).forEach(parsePlayerLink);
  // continue with online players
  profilePagesToSearchProcessed += 1;
  if (profilePagesToSearchProcessed === profilePagesToSearch.length) {
    findBuffsParseOnlinePlayersStart();
  }
}

function addExtraProfile(el) {
  profilePagesToSearch.push(showPlayerUrl + el);
}

async function getAlliesEnemies(el) {
  const html = await retryAjax(el);
  findBuffsParseProfilePage(html);
}

function findBuffsParseProfilePageStart() {
  // Legacy
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
    querySelectorArray('#pCC a[data-tipped*="<td>VL:</td>"]', doc).forEach(
      parsePlayerLink,
    );
  }
  // continue with profile pages
  findBuffsParseProfilePageStart();
}

function notHeader(_el, i) {
  return i !== 0;
}

function deleteRow(buffTable) {
  buffTable.deleteRow(-1);
}

function clearTable() {
  const buffTable = getElementById('buffTable');
  arrayFrom(buffTable.rows)
    .filter(notHeader)
    .forEach(partial(deleteRow, buffTable));
}

function findBuffsClearResults() {
  // Legacy
  sendEvent('find buffs', 'clear results');
  clearTable();
  setInnerById('', 'buffNicks');
  updateProgress('Idle.', 'black');
  setInnerById('', 'potentialBuffers');
  setInnerById('0', 'buffersProcessed');
}

async function goFindBuffs() {
  // get list of players to search, starting with guild>manage page
  const responseText = await guildManage();
  findBuffsParseGuildManagePage(responseText);
}

function findAnyStart(progMsg) {
  // jQuery
  if (jQueryNotPresent()) {
    return;
  }
  setInnerById(findBuffNicks, 'buffNicks');
  updateProgress(`Gathering list of ${progMsg} ...`, 'green');
  setMinLvl();
  setInnerById('0', 'buffersProcessed');
  onlinePlayers = [];
  extraProfile = getElementById('extraProfile').value;
  setValue('extraProfile', extraProfile);
  goFindBuffs();
}

function thisBuff(selectedBuff, el) {
  return selectedBuff === el.id;
}

function findBuffsStart() {
  // Legacy
  sendEvent('find buffs', 'findBuffsStart');
  const selectedBuff = parseInt($('#selectedBuff').val(), 10);
  const findThisBuff = buffList.find(partial(thisBuff, selectedBuff));
  findBuffNicks = findThisBuff.nicks;
  findBuffMinCastLevel = findThisBuff.lvl;
  findAnyStart('potential buffers');
}

function findOtherStart() {
  // Legacy
  sendEvent('find buffs', 'findOtherStart');
  const textToSearchFor = $('#textToSearchFor')
    .val()
    .split(',')
    .map(trim)
    .join(',');
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

export function injectFindBuffs(injector) {
  // Legacy
  const content = injector || pcc();
  calf.sortBy = 'name';
  calf.sortAsc = true;
  buffList.sort(stringSort);
  getExtraProfile();
  setInnerHtml(pageLayout(buffCustom, extraProfile), content);
  getBufferProgress();
  setupFindEvent(findBuffsStart);
  setupClearEvent();
}

export function injectFindOther(injector) {
  // Native - Bad
  const content = injector || pcc();
  getExtraProfile();
  setInnerHtml(pageLayout(otherCustom, extraProfile), content);
  getBufferProgress();
  setupFindEvent(findOtherStart);
  setupClearEvent();
}
