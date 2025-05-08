import sendEvent from '../../analytics/sendEvent';
import closestTr from '../../common/closestTr';
import csvSplit from '../../common/csvSplit';
import getPlayerId from '../../common/getPlayerId';
import openQuickBuffById from '../../common/openQuickBuffById';
import regExpFirstCapture from '../../common/regExpFirstCapture';
import toLowerCase from '../../common/toLowerCase';
import buffList from '../../support/buffObj.json';
import getMsg from './getMsg';

const thisNick = (nick, buffObj) => csvSplit(buffObj.nicks).includes(toLowerCase(nick));

function getBuffId(nick) {
  const thisBuff = buffList.find((buffObj) => thisNick(nick, buffObj));
  if (thisBuff) { return thisBuff.id; }
}

const formatIds = (matched) => csvSplit(matched).map(getBuffId).filter((b) => b).join(';');

function getIds(target) {
  const buffs = regExpFirstCapture(/`~(?<buffs>.*)~`/, getMsg(target));
  if (buffs) {
    return formatIds(buffs);
  }
  return '';
}

const getPlyrId = (target) => getPlayerId(closestTr(target).children[2].children[0].href);

export default function parseBuffs(e) {
  const { target } = e;
  openQuickBuffById(getPlyrId(target), getIds(target));
  sendEvent('privateMsg', 'Buff');
}
