import { c as closestTd } from './closestTd-12fc9772.js';
import { f as fshArenaKey } from './assets-1497d9b7.js';
import { G as getTextTrim, E as querySelectorArray } from './calfSystem-d1de1997.js';
import { g as get, s as set } from './idb-261893ee.js';
import './closest-f906514d.js';

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
//# sourceMappingURL=store-be980713.js.map
