import { z as getElementById, V as nowSecs, an as infoBox, E as querySelector, s as partial, Y as sendEvent } from './calfSystem-6840a38e.js';
import { i as injectArena } from './arena-a3185f00.js';
import { s as set, g as get } from './idb-e00287d8.js';
import './allthen-e710674d.js';
import './all-d206e4b9.js';
import './closestTr-f86ef3fe.js';
import './closest-214539bf.js';
import './intValue-0e97c9b9.js';
import './changeMinMax-84a626e9.js';
import './numberIsNaN-a6723163.js';
import './assets-48ba956a.js';
import './lvlTests-8ba5bd5d.js';
import './interceptSubmit-7a9128a3.js';
import './formToUrl-a4a392eb.js';
import './loadDataTables-d3f02686.js';
import './currentGuildId-00d4d0e4.js';
import './setTipped-f5389fab.js';

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
//# sourceMappingURL=arenaDoJoin-66fd1d4e.js.map
