import add from '../../support/task';
import allthen from '../../common/allthen';
import { buildInv } from './buildInv';
import calf from '../../support/calf';
import clearButton from './clearButton';
import decorate from './decorate';
import doTable from './table';
import entries from '../../common/entries';
import eventHandlers from './eventHandlers/eventHandlers';
import executeAll from '../../common/executeAll';
import { extendOptions } from './options';
import { get } from '../../system/idb';
import getMembrList from '../../ajax/getMembrList';
import getValue from '../../system/getValue';
import headers from './headers';
import jQueryNotPresent from '../../common/jQueryNotPresent';
import loadDataTables from '../../common/loadDataTables';
import notLastUpdate from '../../common/notLastUpdate';
import { oldActionSpinner } from '../../support/constants';
import { pCC } from '../../support/layout';
import setChecks from './setChecks';
import setInnerHtml from '../../dom/setInnerHtml';
import setLvls from './setLvls';
import {
  lvlFilter, rarityFilter, setFilter, typeFilter,
} from './filters';
import { time, timeEnd } from '../../support/debug';

function doSpinner() { // jQuery
  setInnerHtml(`<span id="fshInvMan"><img src = "${
    oldActionSpinner}">&nbsp;Getting inventory data...</span>`, pCC);
}

function hydrate(acc, pair) {
  // eslint-disable-next-line prefer-destructuring
  acc[pair[1].id] = pair[1];
  return acc;
}

function rekeyMembrList() {
  // Rekey membrList from names to id's
  calf.membrList = entries(calf.membrList).filter(notLastUpdate)
    .reduce(hydrate, {});
}

function prepareLayout() {
  executeAll([
    decorate,
    lvlFilter,
    typeFilter,
    setFilter,
    rarityFilter,
    headers,
    setChecks,
    setLvls,
  ]);
}

function doInventory() {
  prepareLayout();
  const fshInv = doTable();
  eventHandlers(fshInv);
  // eslint-disable-next-line no-use-before-define
  $('#fshRefresh').on('click', injectInventoryManagerNew);
  clearButton(fshInv);
}

function getInvMan() {
  const betaOptIn = getValue('betaOptIn');
  if (betaOptIn) { //  Timing output
    time('inventory.getInvMan');
  }
  doInventory();
  if (betaOptIn) { //  Timing output
    timeEnd('inventory.getInvMan');
  }
}

function asyncCall() {
  add(3, getInvMan);
}

function syncInvMan() { // jQuery
  const prm = [loadDataTables(), buildInv()];
  if (calf.subcmd === 'guildinvmgr') {
    prm.push(getMembrList(false).then(rekeyMembrList));
  }
  prm.push(get(`fsh_${calf.subcmd}`).then(extendOptions));
  allthen(prm, asyncCall);
}

export default function injectInventoryManagerNew() {
  if (jQueryNotPresent()) { return; }
  doSpinner();
  syncInvMan();
}
