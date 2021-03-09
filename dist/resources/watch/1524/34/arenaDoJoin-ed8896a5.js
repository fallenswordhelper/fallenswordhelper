import { y as getElementById, U as nowSecs, ak as infoBox, D as querySelector, s as partial, X as sendEvent } from './calfSystem-d1de1997.js';
import { i as injectArena } from './arena-46169a38.js';
import { s as set, g as get } from './idb-261893ee.js';
import './allthen-9dd15411.js';
import './all-3246a95f.js';
import './closestTr-dd453f16.js';
import './closest-f906514d.js';
import './intValue-d2a6f461.js';
import './changeMinMax-cbb09af7.js';
import './numberIsNaN-738f2a3f.js';
import './assets-1497d9b7.js';
import './lvlTests-e135660e.js';
import './interceptSubmit-4e3a3084.js';
import './formToUrl-02aea8be.js';
import './loadDataTables-ec39d9e5.js';
import './currentGuildId-5f3c5fc9.js';
import './setTipped-bbdd0d20.js';

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
//# sourceMappingURL=arenaDoJoin-ed8896a5.js.map
