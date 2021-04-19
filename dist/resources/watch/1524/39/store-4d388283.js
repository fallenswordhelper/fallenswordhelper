import { c as closestTd } from './closestTd-5c87850d.js';
import { f as fshArenaKey } from './assets-b1b89ba1.js';
import { H as getTextTrim, F as querySelectorArray } from './calfSystem-d5c49dc8.js';
import { g as get, s as set } from './idb-83942350.js';
import './closest-97a04dcf.js';

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
//# sourceMappingURL=store-4d388283.js.map
