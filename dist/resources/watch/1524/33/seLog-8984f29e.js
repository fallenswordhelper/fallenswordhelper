import { w as callApp, s as partial, U as nowSecs } from './calfSystem-cc2b30b5.js';
import { g as get, s as set } from './idb-cc82dc55.js';

function superelite() {
  return callApp({ cmd: 'superelite' });
}

// import { $dataAccess } from './_dataAccess';
// import superelite from './fallbacks/superelite';

function daSuperElite() {
  // return $dataAccess(appSe, superelite);
  return superelite();
}

let oldLog;
let timeoutId;
let intervalId;

function disableBackgroundChecks() {
  if (timeoutId) {
    window.clearTimeout(timeoutId);
    timeoutId = false;
  }
  if (intervalId) {
    window.clearInterval(intervalId);
    intervalId = false;
  }
}

function dataLooksOk(data) {
  return data && data.t;
}

function updateSeLog(serverTime, element) {
  const myTime = serverTime - element.time;
  const mobName = element.creature.name.replace(' (Super Elite)', '');
  if (!oldLog.se[mobName] || oldLog.se[mobName] < myTime) {
    oldLog.se[mobName] = myTime;
  }
}

function processSeData(data) {
  const serverTime = Number(data.t.split(' ')[1]);
  if (!oldLog) { oldLog = { lastUpdate: 0, se: {} }; }
  oldLog.lastUpdate = serverTime;
  const resultAry = data.r;
  if (resultAry) {
    resultAry.forEach(partial(updateSeLog, serverTime));
    set('fsh_seLog', oldLog);
  }
}

function gotSe(data) {
  if (dataLooksOk(data)) { processSeData(data); }
}

function getSeLog() { // jQuery.min
  return daSuperElite().then(gotSe);
}

function doBackgroundCheck() {
  disableBackgroundChecks();
  intervalId = window.setInterval(getSeLog, 300000);
  return getSeLog();
}

function whenWasLastCheck() {
  return nowSecs - ((oldLog && oldLog.lastUpdate) || 0);
}

function setupBackgroundCheck() {
  const lastCheckSecs = whenWasLastCheck();
  if (lastCheckSecs >= 600) {
    doBackgroundCheck();
  } else {
    timeoutId = window.setTimeout(doBackgroundCheck,
      (600 - lastCheckSecs) * 1000);
  }
}

function gotLog(data) {
  if (data) { oldLog = data; }
}

function getFshSeLog() { // jQuery.min
  return get('fsh_seLog').then(gotLog);
}

function seLog() { // jQuery.min
  getFshSeLog().then(setupBackgroundCheck);
}

export { disableBackgroundChecks, doBackgroundCheck, getFshSeLog, oldLog, seLog };
//# sourceMappingURL=seLog-8984f29e.js.map
