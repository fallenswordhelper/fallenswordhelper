import { z as getElementById, W as nowSecs, aw as infoBox, E as querySelector, s as partial, U as sendEvent } from './calfSystem-476ab75d.js';
import { i as injectArena } from './arena-fbe90178.js';
import { s as set, g as get } from './idb-07a4f1ba.js';
import './allthen-0f84efe6.js';
import './all-0d44a747.js';
import './closestTr-92a4bf9c.js';
import './closest-bc1fafe7.js';
import './intValue-fefb28df.js';
import './changeMinMax-54c36996.js';
import './numberIsNaN-885a5556.js';
import './assets-c96edcaf.js';
import './lvlTests-d3fbadf8.js';
import './interceptSubmit-1cc9bbe8.js';
import './formToUrl-3223a0cf.js';
import './loadDataTables-d48f4e54.js';
import './currentGuildId-1f42e657.js';
import './setTipped-2c9c4c64.js';

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
//# sourceMappingURL=arenaDoJoin-97649020.js.map
