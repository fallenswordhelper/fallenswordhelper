import sendEvent from '../analytics/sendEvent';
import getElementById from '../common/getElementById';
import infoBox from '../common/infoBox';
import querySelector from '../common/querySelector';
import { nowSecs } from '../support/now';
import { get, set } from '../system/idb';
import arena from './arena';

function addId(id, obj) {
  const newObj = obj || {};
  newObj[id] = nowSecs();
  set('fsh_arenaFull', newObj);
}

function maxMoves(thisInfo) {
  return thisInfo?.includes('combat move');
}

function yourGuild(thisInfo) {
  return thisInfo?.includes('your guild');
}

async function evalMsg() {
  const thisInfo = infoBox();
  if (maxMoves(thisInfo)) { return; }
  if (yourGuild(thisInfo)) {
    const thisId = querySelector('#pCC input[name="pvp_id"]').value;
    const obj = await get('fsh_arenaFull');
    addId(thisId, obj);
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
