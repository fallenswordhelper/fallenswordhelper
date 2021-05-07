import { y as jQueryNotPresent, B as setInnerHtml, k as on, c as calf, f as insertHtmlBeforeEnd, i as insertElement, s as partial, p as pCC, e as entries, Y as setValue } from './calfSystem-476ab75d.js';
import { c as createTBody } from './createTBody-09167d5d.js';
import { c as createTable } from './createTable-897e075d.js';
import { i as isDate, f as formatDateTime } from './isDate-52df43b3.js';
import { p as padZ } from './padZ-7f619ae9.js';
import { b as simpleCheckboxHtml } from './simpleCheckbox-6b20b115.js';
import { getFshSeLog, oldLog, disableBackgroundChecks, doBackgroundCheck } from './seLog-80d837dc.js';
import './numberIsNaN-885a5556.js';
import './isChecked-987a8a1c.js';
import './dataRows-af1deb3a.js';
import './idb-07a4f1ba.js';

function utcDatePartsPadded(aDate) {
  return [
    aDate.getUTCMonth() + 1,
    aDate.getUTCDate(),
    aDate.getUTCHours(),
    aDate.getUTCMinutes(),
    aDate.getUTCSeconds(),
  ].map(padZ);
}

function utcDateParts(aDate) {
  return [aDate.getUTCFullYear().toString()].concat(utcDatePartsPadded(aDate));
}

function formatUtcDateTime(aDate) {
  if (isDate(aDate)) {
    return formatDateTime(utcDateParts(aDate));
  }
}

const enableSeTracker = 'enableSeTracker';
let trackerCell;

function addRow(trackerTable, se) {
  insertHtmlBeforeEnd(trackerTable,
    `<tr><td class="fshCenter">${se[0]}</td>`
    + `<td class="fshBold fshCenter fshCooldown">${
      formatUtcDateTime(new Date(se[1] * 1000))}</td></tr>`);
}

function buildTrackerTable(seAry) {
  const trackerTable = createTable({ className: 'fshTTracker' });
  const tBody = createTBody({
    innerHTML: '<tr><td class="header fshCenter">Creature</td>'
      + '<td class="header fshCenter">Last Kill</td></tr>',
  });
  insertElement(trackerTable, tBody);
  seAry.forEach(partial(addRow, tBody));
  return trackerTable;
}

function insertNewRow() {
  const newRow = pCC.lastElementChild.insertRow(-1);
  const newCell = newRow.insertCell(-1);
  newCell.colSpan = 3;
  return newCell;
}

function displayTracker(seAry) {
  const trackerTable = buildTrackerTable(seAry);
  trackerCell = insertNewRow();
  insertElement(trackerCell, trackerTable);
}

function valueNumeric(a, b) { return a[1] - b[1]; }

function gotSeLog() {
  if (oldLog && oldLog.se) {
    displayTracker(entries(oldLog.se).sort(valueNumeric));
  }
}

function killTable() {
  if (!calf.enableSeTracker) {
    if (trackerCell) {
      trackerCell.parentNode.remove();
      trackerCell = false;
    }
    disableBackgroundChecks();
  } else {
    doBackgroundCheck().finally(gotSeLog);
  }
}

function togglePref(evt) {
  if (evt.target.id === enableSeTracker) {
    calf.enableSeTracker = !calf.enableSeTracker;
    setValue(enableSeTracker, calf.enableSeTracker);
    killTable();
  }
}

function waitForLog() {
  doBackgroundCheck().finally(gotSeLog);
}

function superelite() {
  if (jQueryNotPresent()) { return; }
  let newCell = insertNewRow();
  newCell.height = 20;
  newCell = insertNewRow();
  newCell.className = 'fshCenter';
  setInnerHtml(simpleCheckboxHtml(enableSeTracker), newCell);
  on(newCell, 'change', togglePref);
  if (calf.enableSeTracker) {
    getFshSeLog().then(waitForLog);
  }
}

export default superelite;
//# sourceMappingURL=superelite-0e4fefcb.js.map
