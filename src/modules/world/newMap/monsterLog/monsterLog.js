import sendEvent from '../../../analytics/sendEvent';
import partial from '../../../common/partial';
import calf from '../../../support/calf';
import badData from '../badData';
import getCreatureStats from '../getCreatureStats/getCreatureStats';
import {
  getMonsterPrefs,
  processMonsterLog,
} from './processMonsterLog';

const processedMonsters = [];

function processMonster(data) {
  if (badData(data)) { return; }
  processMonsterLog(data.response.data);
}

function thisMob(e, el) { return e.id === el.id; }

function seenBefore(e) {
  if (processedMonsters.find(partial(thisMob, e.data))) { return true; }
  processedMonsters.push(e.data);
}

async function loopActions(e, i) {
  if (e.type !== 6 || seenBefore(e)) { return; }
  const data = await getCreatureStats(e.data.id, i);
  processMonster(data);
}

let signalSent = false;

function initMonsterLog() {
  if (calf.showMonsterLog) {
    GameData.actions().forEach(loopActions);
    if (!signalSent) {
      sendEvent('NewMap', 'MonsterLog');
      signalSent = true;
    }
  }
}

export default function monsterLog() { // jQuery.min
  getMonsterPrefs();
  $.subscribe('-1-success.action-response '
    + '4-success.action-response '
    + '5-success.action-response '
    + '25-success.action-response', initMonsterLog);
  initMonsterLog();
}
