import daScoutTower from '../../../_dataAccess/daScoutTower';
import isArray from '../../../common/isArray';
import partial from '../../../common/partial';
import calf from '../../../support/calf';
import setValue from '../../../system/setValue';
import { hasTitan, hideTitanDiv, setupTitanDiv } from './hasTitan';
import processTitans from './processTitans';
import { setRealm } from './realm';

let timeoutId = null;

function clearTheTimeout() {
  if (timeoutId) {
    window.clearTimeout(timeoutId);
    timeoutId = null;
  }
}

function goodData(data) {
  return data && data.s && isArray(data.r);
}

function titanToShow(dynamic) {
  return calf.showTitanInfo && isArray(dynamic) && dynamic.some(hasTitan);
}

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

function testDynamics(dynamic) {
  clearTheTimeout();
  if (titanToShow(dynamic)) {
    setupTitanDiv();
    ajaxScoutTower();
  } else {
    hideTitanDiv();
  }
}

export function titanStats(realm) {
  if (realm.dynamic) {
    setRealm(realm.name);
    testDynamics(realm.dynamic);
  }
}

export function toggleShowTitanInfo() {
  calf.showTitanInfo = !calf.showTitanInfo;
  setValue('showTitanInfo', calf.showTitanInfo);
  testDynamics(GameData.realm().dynamic);
}
