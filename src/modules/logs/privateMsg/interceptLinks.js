import sendEvent from '../../analytics/sendEvent';
import classPair from '../../common/classPair';
import closestTr from '../../common/closestTr';
import getText from '../../common/getText';
import onclick from '../../common/onclick';
import getValue from '../../system/getValue';
import getMsg from './getMsg';
import parseBuffs from './parseBuffs';

const getPlayerName = (target) => getText(closestTr(target).children[2].children[0]);

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

export default function interceptLinks(logTable) {
  onclick(logTable, intercept);
}
