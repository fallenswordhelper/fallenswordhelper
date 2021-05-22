import { z as getElementById, V as nowSecs, ax as infoBox, E as querySelector, s as partial, T as sendEvent } from './calfSystem-23094c64.js';
import { i as injectArena } from './arena-be71f62e.js';
import { s as set, g as get } from './idb-19ed4aa8.js';
import './allthen-c5cfa8a4.js';
import './all-8d04560c.js';
import './closestTr-e3251941.js';
import './closest-7cf61e52.js';
import './intValue-66f66ba9.js';
import './changeMinMax-1ab4ee0d.js';
import './numberIsNaN-11f99b26.js';
import './assets-bced98d7.js';
import './lvlTests-84dfdfd2.js';
import './interceptSubmit-556c7605.js';
import './formToUrl-68851fbc.js';
import './loadDataTables-61526201.js';
import './currentGuildId-b9442f48.js';
import './setTipped-92acd4eb.js';

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
//# sourceMappingURL=arenaDoJoin-38f510f4.js.map
