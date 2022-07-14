import daRankPosition from '../../_dataAccess/daRankPosition';
import sendEvent from '../../analytics/sendEvent';
import insertElementBefore from '../../common/insertElementBefore';
import onclick from '../../common/onclick';
import playerName from '../../common/playerName';
import regExpFirstCapture from '../../common/regExpFirstCapture';
import toLowerCase from '../../common/toLowerCase';
import { getPcc } from '../../support/layout';
import getValue from '../../system/getValue';

let characterRow = 0;

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

const rankIdRe = /rank_id=(?<rankId>\d+)/;

function shuffleRows(evt, thisRankRow, targetRowNum) {
  const matchRankId = regExpFirstCapture(rankIdRe, evt.target.getAttribute('onclick'));
  daRankPosition(toLowerCase(evt.target.value), matchRankId);
  const injectRow = thisRankRow.parentNode.rows[targetRowNum];
  insertElementBefore(thisRankRow, injectRow);
  const pxScroll = getPxScroll(evt.target.value);
  window.scrollBy(0, pxScroll);
  evt.stopPropagation();
}

function overrideUpDown(evt) {
  sendEvent('ranks', 'overrideUpDown');
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
    onclick(getPcc(), ajaxifyRankControls, true);
  }
}

export function setCharacterRow(row, members) {
  if (members.includes(playerName())) {
    characterRow = row.rowIndex;
  }
}
