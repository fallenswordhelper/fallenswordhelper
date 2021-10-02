import closestTd from '../common/closestTd';
import { fshArenaKey } from './assets';
import getTextTrim from '../common/getTextTrim';
import querySelectorArray from '../common/querySelectorArray';
import { get, set } from '../system/idb';

function getCount(moveImg) {
  return /(\d)$/.exec(getTextTrim(closestTd(moveImg)))[1];
}

function getCounts(acc, moveImg) {
  const moveId = /(\d+)\.png/.exec(moveImg.src)[1];
  acc[moveId] = Number(getCount(moveImg));
  return acc;
}

function gotMoves(_arena) {
  const arena = _arena || {};
  const arenaMoves = querySelectorArray('#pCC img[vspace="4"]').slice(1);
  arena.moves = arenaMoves.reduce(getCounts, {});
  set(fshArenaKey, arena);
}

export default function storeMoves() {
  get(fshArenaKey).then(gotMoves);
}
