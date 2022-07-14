import closestTd from '../common/closestTd';
import getTextTrim from '../common/getTextTrim';
import querySelectorArray from '../common/querySelectorArray';
import regExpFirstCapture from '../common/regExpFirstCapture';
import { get, set } from '../system/idb';
import { fshArenaKey } from './assets';

function getCount(moveImg) {
  return regExpFirstCapture(/(?<cnt>\d)$/, getTextTrim(closestTd(moveImg)));
}

function getCounts(acc, moveImg) {
  const moveId = regExpFirstCapture(/\/(?<id>\d{1,2})\.png/, moveImg.src);
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
