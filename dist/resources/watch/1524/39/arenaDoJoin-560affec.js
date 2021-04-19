import { z as getElementById, V as nowSecs, av as infoBox, E as querySelector, s as partial, Y as sendEvent } from './calfSystem-d5c49dc8.js';
import { i as injectArena } from './arena-5cb60233.js';
import { s as set, g as get } from './idb-83942350.js';
import './allthen-b65a93f3.js';
import './all-2b32eb82.js';
import './closestTr-b3bccbcf.js';
import './closest-97a04dcf.js';
import './intValue-f6303c59.js';
import './changeMinMax-7a476e50.js';
import './numberIsNaN-d0e4b349.js';
import './assets-b1b89ba1.js';
import './lvlTests-d169eb80.js';
import './interceptSubmit-81e5b5bb.js';
import './formToUrl-14c2f9ee.js';
import './loadDataTables-de598ad0.js';
import './currentGuildId-5c2ac6d6.js';
import './setTipped-70cff648.js';

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
//# sourceMappingURL=arenaDoJoin-560affec.js.map
