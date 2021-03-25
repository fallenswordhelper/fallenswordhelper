import { c as closestTd } from './closestTd-ca738d59.js';
import { f as fshArenaKey } from './assets-48ba956a.js';
import { H as getTextTrim, F as querySelectorArray } from './calfSystem-6840a38e.js';
import { g as get, s as set } from './idb-e00287d8.js';
import './closest-214539bf.js';

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
//# sourceMappingURL=store-ba78d983.js.map
