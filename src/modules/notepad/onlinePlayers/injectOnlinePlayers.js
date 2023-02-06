import onlinePlayersPage from '../../ajax/onlinePlayersPage';
import all from '../../common/all';
import idHandler from '../../common/idHandler';
import jQueryNotPresent from '../../common/jQueryNotPresent';
import loadDataTables from '../../common/loadDataTables';
import on from '../../common/on';
import onclick from '../../common/onclick';
import partial from '../../common/partial';
import regExpGroups from '../../common/regExpGroups';
import { now } from '../../support/now';
import createDocument from '../../system/createDocument';
import { get, set } from '../../system/idb';
import setValue from '../../system/setValue';
import buildOnlinePlayerData from './buildOnlinePlayerData';
import changeLvl from './changeLvl';
import doRefreshButton from './doRefreshButton';
import { doTable } from './doTable';
import filterHeaderOnlinePlayers from './filterHeaderOnlinePlayers';
import resetEvt from './resetEvt';

let context = 0;
let onlinePlayers = 0;
let onlinePages = 0;
let lastPage = 0;

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
  const theRows = $('#pCC img[src$="/world/icon_action_view.png', doc).parent().parent().parent();
  theRows.each(partial(buildElements, thePage));
}

function getLastPage(input) {
  const { page } = regExpGroups(/(?<page>\d+)/, input.parent().text());
  return parseInt(page, 10);
}

function getOtherPages(callback, input) {
  lastPage = getLastPage(input);
  const prm = Array(lastPage - 1).fill(1).map(async (e, i) => {
    const data = await onlinePlayersPage(i + 2);
    callback(data);
  });
  return all(prm);
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

async function refreshEvt() { // Bad jQuery
  $('#fshRefresh', context).hide();
  onlinePages = 0;
  onlinePlayers = {};
  const prm = onlinePlayersPage(1);
  setValue('lastOnlineCheck', now());
  updateStatus('Parsing online players...');
  getOnlinePlayers(await prm);
}

const idHdl = [
  ['fshRefresh', refreshEvt],
  ['fshReset', () => resetEvt(context)],
];

async function injectOnlinePlayersNew() { // jQuery
  context.html(
    `<span><b>Online Players</b></span>${doRefreshButton()
    }<div id="fshOutput"></div>`,
  );
  const data = await get('fsh_onlinePlayers');
  gotOnlinePlayers(data);
  onclick(context[0], idHandler(idHdl));
  on(context[0], 'keyup', changeLvl);
}

export default async function injectOnlinePlayers(content) { // jQuery
  if (jQueryNotPresent()) { return; }
  context = content ? $(content) : $('#pCC');
  await loadDataTables();
  injectOnlinePlayersNew();
}
