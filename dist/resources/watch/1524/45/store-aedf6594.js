import { c as closest } from './closest-8e46d454.js';
import { aC as defTd, H as getTextTrim, F as querySelectorArray } from './calfSystem-02fd040d.js';
import { f as fshArenaKey } from './assets-38ff398f.js';
import { g as get, s as set } from './idb-d6386b46.js';

function closestTd(el) {
  return closest(defTd, el);
}

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
//# sourceMappingURL=store-aedf6594.js.map
