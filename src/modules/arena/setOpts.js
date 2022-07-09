import changeMinMax from '../common/changeMinMax';
import defaults from '../support/dataObj.json';
import { fshArenaKey } from './assets';
import { set } from '../system/idb';

let opts = 0;
let oldIds = 0;

export const getOpts = () => opts;
export const getOldIds = () => oldIds;

export function storeOpts() {
  set(fshArenaKey, opts);
}

function newOpts(newMin, newMax) {
  opts = opts || {};
  opts.minLvl = newMin;
  opts.maxLvl = newMax;
  storeOpts();
}

function redrawTable() {
  $('#arenaTypeTabs table[width="635"]').DataTable().draw();
}

export function changeLvls() { // jQuery
  changeMinMax(newOpts, redrawTable);
}

export function resetLvls() { // jQuery
  newOpts(defaults.arenaMinLvl, defaults.arenaMaxLvl);
  $('#fshMinLvl').val(opts.minLvl);
  $('#fshMaxLvl').val(opts.maxLvl);
  redrawTable();
}

export function hideMoves(evt) { // jQuery
  opts = opts || {};
  opts.hideMoves = evt.target.checked;
  storeOpts();
  $('.moveMax').toggle(!evt.target.checked);
}

export function setOpts(arena) {
  opts = arena || {};
  oldIds = opts.id || {};
  opts.id = {};
}
