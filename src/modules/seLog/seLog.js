import daSuperElite from '../_dataAccess/daSuperElite';
import { getNowSecs } from '../support/now';
import partial from '../common/partial';
import { get, set } from '../system/idb';

let oldLog = 0;
let timeoutId = 0;
let intervalId = 0;

export const getOldLog = () => oldLog;

export function disableBackgroundChecks() {
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

export function doBackgroundCheck() {
  disableBackgroundChecks();
  intervalId = window.setInterval(getSeLog, 300000);
  return getSeLog();
}

function whenWasLastCheck() {
  return getNowSecs() - ((oldLog && oldLog.lastUpdate) || 0);
}

function setupBackgroundCheck() {
  const lastCheckSecs = whenWasLastCheck();
  if (lastCheckSecs >= 600) {
    doBackgroundCheck();
  } else {
    timeoutId = window.setTimeout(doBackgroundCheck, (600 - lastCheckSecs) * 1000);
  }
}

function gotLog(data) {
  if (data) { oldLog = data; }
}

export function getFshSeLog() { // jQuery.min
  return get('fsh_seLog').then(gotLog);
}

export function seLog() { // jQuery.min
  getFshSeLog().then(setupBackgroundCheck);
}
