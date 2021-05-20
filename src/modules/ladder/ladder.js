import OptIn from './OptIn.svelte';
import createTr from '../common/cElement/createTr';
import daSetFlags from '../_dataAccess/daSetFlags';
import daSettings from '../_dataAccess/daSettings';
import { defLastLadderReset } from '../support/constants';
import dialogMsg from '../common/dialogMsg';
import getValue from '../system/getValue';
import insertElement from '../common/insertElement';
import interceptSubmit from '../common/interceptSubmit';
import { now } from '../support/now';
import outputFormat from '../system/outputFormat';
import querySelector from '../common/querySelector';
import setInnerHtml from '../dom/setInnerHtml';
import setText from '../dom/setText';

function daSuccess(response) {
  if (response === undefined) {
    dialogMsg('Could not connect to FS servers.');
    return false;
  }
  if (response.s === false) {
    dialogMsg(`An error occured: ${response.e.message}`);
    return false;
  }
  return true;
}

export async function isOnLadder() {
  const response = await daSettings();
  if (daSuccess(response)) {
    return response.r.flags[0];
  }
  return response;
}

export async function toggleLadder(o) {
  const response = await daSettings();
  if (!daSuccess(response)) { return; }
  const flags = await response.r.flags
    .map((i) => (i ? 1 : 0));
  flags[0] = o ? 1 : 0;
  return daSetFlags(flags);
}

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

function startApp(target) {
  return new OptIn({
    props: { toggleLadder, isOnLadder },
    target,
  });
}

export default function ladder() {
  interceptSubmit();
  if (getValue('trackLadderReset')) {
    lastReset();
    const target = querySelector('#pCC > table:nth-child(7)');
    startApp(target);
  }
}
