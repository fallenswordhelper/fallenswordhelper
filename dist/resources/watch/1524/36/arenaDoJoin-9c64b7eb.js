import { z as getElementById, V as nowSecs, an as infoBox, E as querySelector, s as partial, Y as sendEvent } from './calfSystem-c08399e5.js';
import { i as injectArena } from './arena-028c7aa9.js';
import { s as set, g as get } from './idb-28876f6e.js';
import './allthen-a8900f54.js';
import './all-778b38b7.js';
import './closestTr-062a6525.js';
import './closest-7968af48.js';
import './intValue-ca51a3c0.js';
import './changeMinMax-f6ae18c7.js';
import './numberIsNaN-891c59d9.js';
import './assets-7400169d.js';
import './lvlTests-6db80944.js';
import './interceptSubmit-c60dab5a.js';
import './formToUrl-4cfd88e5.js';
import './loadDataTables-2c8f275d.js';
import './currentGuildId-915d45b4.js';
import './setTipped-4c2abd3e.js';

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
//# sourceMappingURL=arenaDoJoin-9c64b7eb.js.map
