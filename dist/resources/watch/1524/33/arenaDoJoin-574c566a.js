import { y as getElementById, U as nowSecs, ak as infoBox, D as querySelector, s as partial, X as sendEvent } from './calfSystem-cc2b30b5.js';
import { i as injectArena } from './arena-e7ba91a3.js';
import { s as set, g as get } from './idb-cc82dc55.js';
import './allthen-259c1952.js';
import './all-978030c9.js';
import './closestTr-058b6e8e.js';
import './closest-8b679b7a.js';
import './intValue-55d66e09.js';
import './changeMinMax-ab03a69d.js';
import './numberIsNaN-c188f177.js';
import './assets-4b152e49.js';
import './lvlTests-d7715ece.js';
import './interceptSubmit-d78c86f8.js';
import './formToUrl-3b72b00b.js';
import './loadDataTables-25393d6c.js';
import './currentGuildId-6f36e6e5.js';
import './setTipped-90ca799b.js';

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
//# sourceMappingURL=arenaDoJoin-574c566a.js.map
