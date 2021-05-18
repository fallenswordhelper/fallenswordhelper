import buffList from '../../support/buffObj.json';
import closestTd from '../../common/closestTd';
import closestTr from '../../common/closestTr';
import csvSplit from '../../common/csvSplit';
import getText from '../../common/getText';
import getTextTrim from '../../common/getTextTrim';
import openQuickBuffByName from '../../common/openQuickBuffByName';
import sendEvent from '../../analytics/sendEvent';
import toLowerCase from '../../common/toLowerCase';

const thisNick = (nick, buffObj) => csvSplit(buffObj.nicks).includes(toLowerCase(nick));

function getBuffId(nick) {
  const thisBuff = buffList.find((buffObj) => thisNick(nick, buffObj));
  if (thisBuff) { return thisBuff.id; }
}

export default function parseBuffs(e) {
  const { target } = e;
  const playerName = getText(closestTr(target).children[2].children[0]);
  const msg = getTextTrim(closestTd(target).childNodes[0]);
  let ids = '';
  const buffs = /`~(.*)~`/.exec(msg);
  if (buffs) {
    ids = csvSplit(buffs[1]).map(getBuffId).filter((b) => b).join(';');
  }
  openQuickBuffByName(playerName, ids);
  sendEvent('privateMsg', 'Buff');
}
