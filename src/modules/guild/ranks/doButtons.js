import daRankPosition from '../../_dataAccess/daRankPosition';
import sendEvent from '../../analytics/sendEvent';
import fsPostParam from '../../common/fsPostParam';
import insertElementBefore from '../../common/insertElementBefore';
import onclick from '../../common/onclick';
import playerName from '../../common/playerName';
import toLowerCase from '../../common/toLowerCase';
import { pcc } from '../../support/layout';
import getValue from '../../system/getValue';

let characterRow = 0;

const upOrDown = (evt) => ['Up', 'Down'].includes(evt.target.value);

function notValidRow(thisRankRow, targetRowNum) {
  return (
    characterRow >= Math.min(thisRankRow.rowIndex, targetRowNum) ||
    targetRowNum < 1 ||
    targetRowNum > thisRankRow.parentNode.rows.length
  );
}

function getTargetRowNumber(val) {
  if (val === 'Up') {
    return -1;
  }
  return 2;
}

function getPxScroll(val) {
  if (val === 'Up') {
    return -22;
  }
  return 22;
}

function shuffleRows(evt, thisRankRow, targetRowNum, rankId) {
  daRankPosition(toLowerCase(evt.target.value), rankId);
  const injectRow = thisRankRow.parentNode.rows[targetRowNum];
  insertElementBefore(thisRankRow, injectRow);
  const pxScroll = getPxScroll(evt.target.value);
  window.scrollBy(0, pxScroll);
  evt.stopPropagation();
}

function overrideUpDown(evt) {
  const rankId = fsPostParam(evt.target, 'rank_id');
  // Without an id, leave the click to the game
  if (!rankId) return;
  sendEvent('ranks', 'overrideUpDown');
  const thisRankRow = evt.target.parentNode.parentNode.parentNode;
  const targetRowNum =
    thisRankRow.rowIndex + getTargetRowNumber(evt.target.value);
  if (notValidRow(thisRankRow, targetRowNum)) {
    return;
  }
  shuffleRows(evt, thisRankRow, targetRowNum, rankId);
}

function ajaxifyRankControls(evt) {
  if (upOrDown(evt)) {
    overrideUpDown(evt);
  }
}

export function doButtons() {
  if (characterRow && getValue('ajaxifyRankControls')) {
    onclick(pcc(), ajaxifyRankControls, true);
  }
}

export function setCharacterRow(row, members) {
  if (members.includes(playerName())) {
    characterRow = row.rowIndex;
  }
}
