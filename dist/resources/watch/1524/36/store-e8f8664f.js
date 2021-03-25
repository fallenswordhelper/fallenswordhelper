import { c as closestTd } from './closestTd-f5136851.js';
import { f as fshArenaKey } from './assets-7400169d.js';
import { H as getTextTrim, F as querySelectorArray } from './calfSystem-c08399e5.js';
import { g as get, s as set } from './idb-28876f6e.js';
import './closest-7968af48.js';

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

function storeMoves() {
  get(fshArenaKey).then(gotMoves);
}

export default storeMoves;
//# sourceMappingURL=store-e8f8664f.js.map
