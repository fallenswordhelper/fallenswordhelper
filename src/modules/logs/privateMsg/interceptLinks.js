import classPair from '../../common/classPair';
import closestTr from '../../common/closestTr';
import getText from '../../common/getText';
import getTextTrim from '../../common/getTextTrim';
import getValue from '../../system/getValue';
import onclick from '../../common/onclick';
import parseBuffs from './parseBuffs';
import sendEvent from '../../analytics/sendEvent';

function parseReply(e) {
  if (!getValue('enableChatParsing')) { return; }
  const { target } = e;
  const playerName = getText(closestTr(target).children[2].children[0]);
  const msg = getTextTrim(closestTr(target).children[3].childNodes[0]);
  let tip = msg;
  if (msg.length > 140) {
    tip = `${msg.substring(0, 140)}...`;
  }
  window.openQuickMsgDialog(playerName, '', tip);
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
