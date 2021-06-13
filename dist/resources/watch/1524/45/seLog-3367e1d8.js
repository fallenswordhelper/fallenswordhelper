import { x as callApp, a6 as now, ad as months, H as getTextTrim, t as createDocument, E as querySelector, V as nowSecs, u as indexAjaxData, $ as $dataAccess, s as partial } from './calfSystem-02fd040d.js';
import { d as dataRows } from './dataRows-17b071b0.js';
import { g as get, s as set } from './idb-d6386b46.js';

function superelite$1() {
  return callApp({ cmd: 'superelite' });
}

function parseDateAsOffset(textDate) {
  const dateAry = textDate.replace('<br>', ' ').split(/[: /]/);
  return Math.floor(
    (now - Date.UTC(Number(dateAry[2]), months.indexOf(dateAry[1]),
      Number(dateAry[0]), Number(dateAry[3]), Number(dateAry[4]), 0)) / 1000,
  );
}

function formatRow(row) {
  return {
    time: parseDateAsOffset(row.cells[0].innerHTML),
    creature: { name: getTextTrim(row.cells[1]) },
  };
}

function parseReport(html) {
  const doc = createDocument(html);
  const logTable = querySelector('#pCC table table', doc);
  if (!logTable) { return { s: false }; }
  const rows = dataRows(logTable.rows, 4, 1);
  const data = rows.map(formatRow);
  return { r: data, s: true, t: `0 ${String(nowSecs)}` };
}

// Incomplete
function superelite() {
  return indexAjaxData({ cmd: 'superelite' }).then(parseReport);
}

function daSuperElite() {
  return $dataAccess(superelite$1, superelite);
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
//# sourceMappingURL=seLog-3367e1d8.js.map
