import sendEvent from '../analytics/sendEvent';
import getElementById from '../common/getElementById';
import infoBox from '../common/infoBox';
import partial from '../common/partial';
import querySelector from '../common/querySelector';
import { getNowSecs } from '../support/now';
import { get, set } from '../system/idb';
import arena from './arena';

function addId(id, obj) {
  const newObj = obj || {};
  newObj[id] = getNowSecs();
  set('fsh_arenaFull', newObj);
}

function maxMoves(thisInfo) {
  return thisInfo && thisInfo.includes('combat move');
}

function yourGuild(thisInfo) {
  return thisInfo && thisInfo.includes('your guild');
}

function evalMsg() {
  const thisInfo = infoBox();
  if (maxMoves(thisInfo)) { return; }
  if (yourGuild(thisInfo)) {
    const thisId = querySelector('#pCC input[name="pvp_id"]').value;
    get('fsh_arenaFull').then(partial(addId, thisId));
  } else {
    sendEvent('arena', 'doJoin', thisInfo);
  }
}

export default function arenaDoJoin() {
  const tabs = getElementById('arenaTypeTabs');
  if (tabs) {
    arena();
  } else {
    evalMsg();
  }
}
