import { c as createTr } from './createTr-9891c61e.js';
import { I as getValue, a7 as now, a8 as defLastLadderReset, A as setText, B as setInnerHtml, E as querySelector, i as insertElement } from './calfSystem-d5c49dc8.js';
import { i as interceptSubmit } from './interceptSubmit-81e5b5bb.js';
import { o as outputFormat } from './outputFormat-d3c3754d.js';
import './formToUrl-14c2f9ee.js';

function formatLastReset(lastLadderReset) {
  let m = Math.floor((now - lastLadderReset) / 60000);
  const h = Math.floor(m / 60);
  m %= 60;
  return `${outputFormat(h, ' hours, ') + m} mins`;
}

function formatTime() {
  const lastLadderReset = getValue(defLastLadderReset);
  if (lastLadderReset < now - 48 * 60 * 60 * 1000) {
    return '<span class="fshLink tip-static" data-tipped="FSH has not seen '
      + 'the last ladder reset.<br>You can find it in your log if you '
      + 'qualified<br>or Tavern Rumours.">???</span>';
  }
  return formatLastReset(lastLadderReset);
}

function makeLeftCell(newRow) {
  const leftCell = newRow.insertCell(-1);
  leftCell.height = 25;
  setText('Last Reset:', leftCell);
}

function makeRightCell(newRow) {
  const rightCell = newRow.insertCell(-1);
  rightCell.align = 'right';
  setInnerHtml(formatTime(), rightCell);
}

function makeNewRow() {
  const newRow = createTr();
  makeLeftCell(newRow);
  makeRightCell(newRow);
  return newRow;
}

function lastReset() {
  const topTable = querySelector('#pCC table');
  const newRow = makeNewRow();
  insertElement(topTable, newRow);
}

function ladder() {
  interceptSubmit();
  if (getValue('trackLadderReset')) {
    lastReset();
  }
}

export default ladder;
//# sourceMappingURL=ladder-01e625e5.js.map
