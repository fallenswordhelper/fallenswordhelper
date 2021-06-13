import { b1 as keys, s as partial, bE as guildRE, I as getValue, a6 as now, X as setValue, a5 as fallback, at as defaults, y as jQueryNotPresent, t as createDocument, o as onclick, k as on } from './calfSystem-86663d02.js';
import { c as currentGuildId } from './currentGuildId-c3b232af.js';
import { i as intValue } from './intValue-19726e4b.js';
import { g as getLowerPvpLevel, a as getUpperPvpLevel } from './levelHighlight-40487550.js';
import { n as numberIsNaN } from './numberIsNaN-c0e87dea.js';
import { l as lvlTest, p as playerLvlTest } from './lvlTests-d4e55cfd.js';
import { l as loadDataTables } from './loadDataTables-b55cd180.js';
import { o as onlinePlayersPage } from './onlinePlayersPage-4eba6970.js';
import { s as set, g as get } from './idb-0b309dec.js';
import './asInt-e8fa21e2.js';
import './valueText-d8194e49.js';
import './all-3768003b.js';

function onlinePlayer(onlinePlayers, player) {
  const guildImage = $('<div/>').append(onlinePlayers[player][0]);
  $('img', guildImage).addClass('fshImgCntr');
  return [
    guildImage.html(),
    onlinePlayers[player][1],
    onlinePlayers[player][2],
    onlinePlayers[player][3] * 100
    + onlinePlayers[player][4] + 1,
  ];
}

function buildOnlinePlayerData(onlinePlayers) { // jQuery
  return keys(onlinePlayers).map(partial(onlinePlayer, onlinePlayers));
}

let highlightPlayersNearMyLvl;
let table;

function guildNumber(html) {
  const match = html.match(guildRE);
  if (match) { return Number(match[1]); }
}

const highlightTests = [
  () => highlightPlayersNearMyLvl,
  (data) => guildNumber(data[0]) !== currentGuildId(),
  (data) => intValue(data[2]) >= getLowerPvpLevel(),
  (data) => intValue(data[2]) <= getUpperPvpLevel(),
];

function pvpHighlight(data) {
  return highlightTests.every((el) => el(data));
}

function createdRow(row, data) {
  if (pvpHighlight(data)) {
    $('td', row).eq(2).addClass('lvlHighlight');
  }
}

function tableOpts(onlineData) {
  return {
    columns: [
      { title: 'Guild', class: 'dt-center', orderable: false },
      { title: 'Name', class: 'dt-center' },
      { title: 'Level', class: 'dt-center' },
      { title: 'Page/Index', class: 'dt-center' },
    ],
    createdRow,
    data: onlineData,
    deferRender: true,
    lengthMenu: [[30, 60, -1], [30, 60, 'All']],
    order: [3, 'desc'],
    pageLength: 30,
    stateDuration: 0,
    stateSave: true,
  };
}

function doTable(context, onlineData) {
  highlightPlayersNearMyLvl = getValue('highlightPlayersNearMyLvl');
  table = $('#fshInv', context).DataTable(tableOpts(onlineData));
}

function tableDraw() {
  table.draw();
}

function changeLvl(e) { // jQuery
  if (e.target.id === 'fshMinLvl' || e.target.id === 'fshMaxLvl') {
    tableDraw();
  }
}

function doRefreshButton() {
  const lastCheck = getValue('lastOnlineCheck');
  if (now - lastCheck > 300000) {
    return '<span> (takes a while to refresh so only do it '
      + 'if you really need to) </span><span id="fshRefresh" class="fshLink"'
      + '>[Refresh]</span>';
  }
  return `<span>[ Wait ${Math.round(300 - (now
    - lastCheck) / 1000)}s ]</span>`;
}

function getVal(el, context) {
  return parseInt($(el, context).val(), 10);
}

function saveVal(key, val) {
  if (!numberIsNaN(val)) { setValue(key, val); }
}

function dataTableSearch(context, _settings, data) { // jQuery
  const min = getVal('#fshMinLvl', context);
  const max = getVal('#fshMaxLvl', context);
  saveVal('onlinePlayerMinLvl', min);
  saveVal('onlinePlayerMaxLvl', max);
  const level = fallback(intValue(data[2]), 0);
  return lvlTest(playerLvlTest, level, min, max);
}

function filterHeaderOnlinePlayers(context) { // jQuery
  $.fn.dataTable.ext.search.push(partial(dataTableSearch, context));
  $('#fshOutput', context).html(
    `<div align=right>Min lvl:<input value="${
      getValue('onlinePlayerMinLvl')}" size=5 id="fshMinLvl" /> `
    + `Max lvl:<input value="${
      getValue('onlinePlayerMaxLvl')}" size=5 id="fshMaxLvl" /> `
    + '<input id="fshReset" type="button" value="Reset"/>'
    + '</div><table id="fshInv" class="allow stripe hover"></table>',
  );
}

function resetEvt(context) {
  setValue('onlinePlayerMinLvl', defaults.onlinePlayerMinLvl);
  setValue('onlinePlayerMaxLvl', defaults.onlinePlayerMaxLvl);
  $('#fshMinLvl', context).val(defaults.onlinePlayerMinLvl);
  $('#fshMaxLvl', context).val(defaults.onlinePlayerMaxLvl);
  tableDraw();
}

let context;
let onlinePlayers;
let onlinePages;
let lastPage;

function gotOnlinePlayers(value) { // jQuery
  onlinePlayers = value || {};
  filterHeaderOnlinePlayers(context);
  doTable(context, buildOnlinePlayerData(onlinePlayers));
}

function checkLastPage() {
  if (onlinePages === lastPage) {
    set('fsh_onlinePlayers', onlinePlayers);
    gotOnlinePlayers(onlinePlayers);
  }
}

function seenPlayer(player, thePage) {
  return onlinePlayers[player] && onlinePlayers[player][3] > thePage;
}

function playerRecord(thePage, index, tds) {
  return [
    tds.eq(0).html(),
    tds.eq(1).html(),
    tds.eq(2).text(),
    thePage,
    index,
  ];
}

function buildElements(thePage, index, element) {
  const tds = $('td', $(element));
  const player = tds.eq(1).text();
  if (seenPlayer(player, thePage)) { return; }
  onlinePlayers[player] = playerRecord(thePage, index, tds);
}

function processTheRows(doc, input) {
  const thePage = input.attr('value');
  const theRows = $('#pCC img[src$="/world/icon_action_view.png',
    doc).parent().parent().parent();
  theRows.each(partial(buildElements, thePage));
}

function getLastPage(input) {
  return parseInt(input.parent().text().match(/(\d+)/g)[0], 10);
}

function getOtherPages(callback, input) {
  lastPage = getLastPage(input);
  for (let i = 2; i <= lastPage; i += 1) {
    onlinePlayersPage(i).then(callback);
  }
}

function updateStatus(text) {
  $('#fshOutput', context).append(text);
}

function getOnlinePlayers(data) { // Bad jQuery
  updateStatus(` ${onlinePages + 1}`);
  const doc = createDocument(data);
  const input = $('#pCC input.custominput', doc).first();
  processTheRows(doc, input);
  onlinePages += 1;
  if (onlinePages === 1) {
    getOtherPages(getOnlinePlayers, input);
  }
  checkLastPage();
}

function refreshEvt() { // Bad jQuery
  $('#fshRefresh', context).hide();
  onlinePages = 0;
  onlinePlayers = {};
  onlinePlayersPage(1).then(getOnlinePlayers);
  setValue('lastOnlineCheck', now);
  updateStatus('Parsing online players...');
}

function clickHandler(e) {
  if (e.target.id === 'fshRefresh') { refreshEvt(); }
  if (e.target.id === 'fshReset') { resetEvt(context); }
}

function injectOnlinePlayersNew() { // jQuery
  context.html(
    `<span><b>Online Players</b></span>${doRefreshButton()
    }<div id="fshOutput"></div>`,
  );
  get('fsh_onlinePlayers').then(gotOnlinePlayers);
  onclick(context[0], clickHandler);
  on(context[0], 'keyup', changeLvl);
}

function injectOnlinePlayers(content) { // jQuery
  if (jQueryNotPresent()) { return; }
  if (content) {
    context = $(content);
  } else {
    context = $('#pCC');
  }
  loadDataTables().then(injectOnlinePlayersNew);
}

export default injectOnlinePlayers;
//# sourceMappingURL=injectOnlinePlayers-5151dff1.js.map
