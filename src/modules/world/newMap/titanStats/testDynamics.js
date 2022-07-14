import daScoutTower from '../../../_dataAccess/daScoutTower';
import isArray from '../../../common/isArray';
import partial from '../../../common/partial';
import calf from '../../../support/calf';
import { hasTitan, hideTitanDiv, setupTitanDiv } from './hasTitan';
import processTitans from './processTitans';

let timeoutId = null;

function clearTheTimeout() {
  if (timeoutId) {
    window.clearTimeout(timeoutId);
    timeoutId = null;
  }
}

const goodData = (data) => data && data.s && isArray(data.r);
const titanToShow = (dynamic) => calf.showTitanInfo && isArray(dynamic) && dynamic.some(hasTitan);

function processScoutTower(ast, data) {
  if (!goodData(data)) { return; }
  processTitans(data.r);
  if (titanToShow(GameData.realm().dynamic)) {
    timeoutId = window.setTimeout(ast, 30000);
  } else {
    hideTitanDiv();
  }
}

function ajaxScoutTower() {
  daScoutTower().then(partial(processScoutTower, ajaxScoutTower));
}

export default function testDynamics(dynamic) {
  clearTheTimeout();
  if (titanToShow(dynamic)) {
    setupTitanDiv();
    ajaxScoutTower();
  } else {
    hideTitanDiv();
  }
}
