import { defLastLadderReset } from '../support/constants';
import { getNow } from '../support/now';
import getValue from '../system/getValue';
import outputFormat from '../system/outputFormat';
import querySelector from '../common/querySelector';
import setInnerHtml from '../dom/setInnerHtml';
import setText from '../dom/setText';

function formatLastReset(lastLadderReset) {
  let min = Math.floor((getNow() - lastLadderReset) / 60000);
  const hour = Math.floor(min / 60);
  min %= 60;
  return `${outputFormat(hour, ' hours, ') + min} mins`;
}

function formatTime() {
  const lastLadderReset = getValue(defLastLadderReset);
  if (lastLadderReset < getNow() - 48 * 60 * 60 * 1000) {
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

function lastReset() {
  const firstTable = querySelector('#pCC table');
  if (!firstTable) { return; }
  const newRow = firstTable.insertRow(-1);
  makeLeftCell(newRow);
  makeRightCell(newRow);
}

export default function trackLastReset() {
  if (getValue('trackLadderReset')) {
    lastReset();
  }
}
