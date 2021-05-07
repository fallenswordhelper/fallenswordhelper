import { c as closestTd } from './closestTd-7dadd93c.js';
import { f as fshArenaKey } from './assets-c96edcaf.js';
import { H as getTextTrim, F as querySelectorArray } from './calfSystem-476ab75d.js';
import { g as get, s as set } from './idb-07a4f1ba.js';
import './closest-bc1fafe7.js';

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
//# sourceMappingURL=store-cb4bdfc5.js.map
