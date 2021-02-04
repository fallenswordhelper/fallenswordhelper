import { c as closestTd } from './closestTd-5ab74c06.js';
import { f as fshArenaKey } from './assets-4b152e49.js';
import { G as getTextTrim, E as querySelectorArray } from './calfSystem-cc2b30b5.js';
import { g as get, s as set } from './idb-cc82dc55.js';
import './closest-8b679b7a.js';

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
//# sourceMappingURL=store-f2af7538.js.map
