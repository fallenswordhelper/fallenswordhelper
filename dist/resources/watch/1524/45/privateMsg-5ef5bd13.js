import { a as addLogColoring, g as getLastTable } from './addLogColoring-20f6cd22.js';
import { a as addLogWidgets } from './addLogWidgets-d8efac4c.js';
import { d as dataRows } from './dataRows-17b071b0.js';
import { H as getTextTrim, C as getText, ah as toLowerCase, T as sendEvent, I as getValue, ai as classPair, o as onclick, S as getUrlParameter, f as insertHtmlBeforeEnd, aj as tradeUrl, ak as secureUrl } from './calfSystem-02fd040d.js';
import { c as closestTr } from './closestTr-ac0d1c6b.js';
import { b as buffList } from './buffObj-c673ca2f.js';
import { c as csvSplit } from './csvSplit-95ff5434.js';
import { o as openQuickBuffByName } from './openQuickBuffByName-2e9d4b7d.js';
import './createStyle-a3fa6839.js';
import './doBuffLinkClick-c58696d9.js';
import './parseDateAsTimestamp-b803bda9.js';
import './insertHtmlAfterEnd-6372af07.js';
import './currentGuildId-b6506645.js';
import './getMembrList-af382514.js';
import './cmdExport-0fd651b6.js';
import './indexAjaxJson-3c4dab4a.js';
import './idb-d6386b46.js';
import './addCommas-c0fbc0a2.js';
import './myStats-db43482d.js';
import './getProfile-49311f54.js';
import './playerName-512f3e50.js';
import './closest-8e46d454.js';
import './fshOpen-d0a5bbc1.js';

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
  if (!getValue('privateMsgButtons')) { return; }
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
//# sourceMappingURL=privateMsg-5ef5bd13.js.map
