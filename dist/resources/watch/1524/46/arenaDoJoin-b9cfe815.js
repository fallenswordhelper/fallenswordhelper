import { z as getElementById, V as nowSecs, ay as infoBox, E as querySelector, s as partial, T as sendEvent } from './calfSystem-86663d02.js';
import { i as injectArena } from './arena-22e102f2.js';
import { s as set, g as get } from './idb-0b309dec.js';
import './allthen-34d3fc07.js';
import './all-3768003b.js';
import './closestTr-65796700.js';
import './closest-d38ca7fc.js';
import './intValue-19726e4b.js';
import './changeMinMax-847fc3f2.js';
import './numberIsNaN-c0e87dea.js';
import './assets-57c269a1.js';
import './lvlTests-d4e55cfd.js';
import './interceptSubmit-b6f9d345.js';
import './formToUrl-bdc5f748.js';
import './loadDataTables-b55cd180.js';
import './currentGuildId-c3b232af.js';
import './setTipped-c38098a5.js';

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
//# sourceMappingURL=arenaDoJoin-b9cfe815.js.map
