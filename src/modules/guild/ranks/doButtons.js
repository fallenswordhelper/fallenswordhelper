import daRankPosition from '../../_dataAccess/daRankPosition';
import getValue from '../../system/getValue';
import insertElementBefore from '../../common/insertElementBefore';
import onclick from '../../common/onclick';
import { pCC } from '../../support/layout';
import playerName from '../../common/playerName';
import toLowerCase from '../../common/toLowerCase';

let characterRow;

const upOrDown = (evt) => ['Up', 'Down'].includes(evt.target.value);

function notValidRow(thisRankRow, targetRowNum) {
  return characterRow >= Math.min(thisRankRow.rowIndex, targetRowNum)
    || targetRowNum < 1
    || targetRowNum > thisRankRow.parentNode.rows.length;
}

function getTargetRowNumber(val) {
  if (val === 'Up') { return -1; }
  return 2;
}

function getPxScroll(val) {
  if (val === 'Up') { return -22; }
  return 22;
}

function shuffleRows(evt, thisRankRow, targetRowNum) {
  const matchRankId = evt.target.getAttribute('onclick').match(/rank_id=(\d+)/);
  daRankPosition(toLowerCase(evt.target.value), matchRankId[1]);
  const injectRow = thisRankRow.parentNode.rows[targetRowNum];
  insertElementBefore(thisRankRow, injectRow);
  const pxScroll = getPxScroll(evt.target.value);
  window.scrollBy(0, pxScroll);
  evt.stopPropagation();
}

function overrideUpDown(evt) {
  const thisRankRow = evt.target.parentNode.parentNode.parentNode;
  const targetRowNum = thisRankRow.rowIndex
    + getTargetRowNumber(evt.target.value);
  if (notValidRow(thisRankRow, targetRowNum)) { return; }
  shuffleRows(evt, thisRankRow, targetRowNum);
}

function ajaxifyRankControls(evt) {
  if (upOrDown(evt)) { overrideUpDown(evt); }
}

export function doButtons() {
  if (characterRow && getValue('ajaxifyRankControls')) {
    onclick(pCC, ajaxifyRankControls, true);
  }
}

export function setCharacterRow(row, members) {
  if (members.includes(playerName())) {
    characterRow = row.rowIndex;
  }
}
