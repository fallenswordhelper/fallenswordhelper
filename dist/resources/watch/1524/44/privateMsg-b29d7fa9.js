import { a as addLogColoring, g as getLastTable } from './addLogColoring-369e6e68.js';
import { a as addLogWidgets } from './addLogWidgets-18099e3b.js';
import { d as dataRows } from './dataRows-20212e4a.js';
import { H as getTextTrim, C as getText, T as sendEvent, I as getValue, ah as classPair, o as onclick, S as getUrlParameter, f as insertHtmlBeforeEnd, ai as tradeUrl, aj as secureUrl } from './calfSystem-23094c64.js';
import { c as closestTr } from './closestTr-e3251941.js';
import { b as buffList } from './buffObj-1b3bee9b.js';
import { c as csvSplit } from './csvSplit-d22d07ed.js';
import { o as openQuickBuffByName } from './openQuickBuffByName-1567af36.js';
import { t as toLowerCase } from './toLowerCase-c964d32b.js';
import './createStyle-a0cb3b7e.js';
import './doBuffLinkClick-fd651b69.js';
import './parseDateAsTimestamp-aba398b8.js';
import './insertHtmlAfterEnd-1704b1c7.js';
import './currentGuildId-b9442f48.js';
import './getMembrList-3dc9ba6d.js';
import './cmdExport-c04c0b2d.js';
import './indexAjaxJson-d91f385b.js';
import './idb-19ed4aa8.js';
import './addCommas-aab57e5e.js';
import './myStats-061ea431.js';
import './getProfile-f0510aaa.js';
import './playerName-d957b0e4.js';
import './closest-7cf61e52.js';
import './fshOpen-d480412d.js';

var css = ".pmBuffBtn {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  font-family : inherit;\n  margin: 0;\n  padding: 0;\n  text-decoration: underline;\n  user-select: text;\n}\n";
var modules_6100dd33 = {};

function getMsg(target) {
  return getTextTrim(closestTr(target).children[3].childNodes[0]);
}

function getPlayerName(target) {
  return getText(closestTr(target).children[2].children[0]);
}

const thisNick = (nick, buffObj) => csvSplit(buffObj.nicks).includes(toLowerCase(nick));

function getBuffId(nick) {
  const thisBuff = buffList.find((buffObj) => thisNick(nick, buffObj));
  if (thisBuff) { return thisBuff.id; }
}

const formatIds = (matched) => csvSplit(matched).map(getBuffId).filter((b) => b).join(';');

function getIds(target) {
  const buffs = /`~(.*)~`/.exec(getMsg(target));
  if (buffs) {
    return formatIds(buffs[1]);
  }
  return '';
}

function parseBuffs(e) {
  const { target } = e;
  openQuickBuffByName(getPlayerName(target), getIds(target));
  sendEvent('privateMsg', 'Buff');
}

function formatTip(target) {
  const msg = getMsg(target);
  if (msg.length > 140) {
    return `${msg.substring(0, 140)}...`;
  }
  return msg;
}

function parseReply(e) {
  if (!getValue('enableChatParsing')) { return; }
  const { target } = e;
  window.openQuickMsgDialog(getPlayerName(target), '', formatTip(target));
  e.preventDefault();
  sendEvent('privateMsg', 'parseReply');
}

const classEvents = [
  ['pmBuffBtn', parseBuffs],
  ['fa-reply', parseReply],
  ['pmTradeUrl', () => sendEvent('privateMsg', 'Trade')],
  ['pmSecureUrl', () => sendEvent('privateMsg', 'ST')],
  ['pmAttackUrl', () => sendEvent('privateMsg', 'Attack')],
  ['pmIgnoreUrl', () => sendEvent('privateMsg', 'Ignore')],
];

function intercept(e) {
  const { target } = e;
  const hdl = classEvents.find((pair) => classPair(target, pair));
  if (hdl) { hdl[1](e); }
}

function interceptLinks(logTable) {
  onclick(logTable, intercept);
}

const getMsgCell = (tr) => [getTextTrim(tr.children[2]), tr.children[3]];

function addMsgButtons(logTable) {
  const msgCells = dataRows(logTable.rows, 6, 0).map(getMsgCell);
  msgCells.forEach(([sender, msgCell]) => {
    insertHtmlBeforeEnd(msgCell, '&nbsp;&nbsp;[ '
      + `<button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${
        tradeUrl + sender}">Send</a> | <a class="pmSecureUrl" href="${
        secureUrl + sender}">Trade</a> ]`);
  });
}

function addMsgWidgets() {
  const logTable = getLastTable();
  if (logTable) {
    addMsgButtons(logTable);
    addLogWidgets(1);
    interceptLinks(logTable);
  }
}

function privateMsg() {
  if (getUrlParameter('type') === '1') {
    addLogColoring('PrivateMsg', 1, 6);
    addMsgWidgets();
  } else {
    addLogColoring('OutBox', 1, 4);
  }
}

export default privateMsg;
//# sourceMappingURL=privateMsg-b29d7fa9.js.map
