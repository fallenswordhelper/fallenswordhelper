import { z as getElementById, V as nowSecs, ay as infoBox, E as querySelector, s as partial, T as sendEvent } from './calfSystem-02fd040d.js';
import { i as injectArena } from './arena-3d8d1dce.js';
import { s as set, g as get } from './idb-d6386b46.js';
import './allthen-b379c12a.js';
import './all-47be5400.js';
import './closestTr-ac0d1c6b.js';
import './closest-8e46d454.js';
import './intValue-a6f9b475.js';
import './changeMinMax-62835ba1.js';
import './numberIsNaN-c7db67d0.js';
import './assets-38ff398f.js';
import './lvlTests-78b1d1df.js';
import './interceptSubmit-091d1f17.js';
import './formToUrl-37eb4bb6.js';
import './loadDataTables-64a7630e.js';
import './currentGuildId-b6506645.js';
import './setTipped-031e6715.js';

function addId(id, obj) {
  const newObj = obj || {};
  newObj[id] = nowSecs;
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

function arenaDoJoin() {
  const tabs = getElementById('arenaTypeTabs');
  if (tabs) {
    injectArena();
  } else {
    evalMsg();
  }
}

export default arenaDoJoin;
//# sourceMappingURL=arenaDoJoin-e62255fe.js.map
