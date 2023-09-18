import './inventory.css';
import getMembrList from '../../ajax/getMembrList';
import { end, start } from '../../analytics/timing';
import all from '../../common/all';
import currentGuildId from '../../common/currentGuildId';
import entries from '../../common/entries';
import executeAll from '../../common/executeAll';
import fromEntries from '../../common/fromEntries';
import jQueryNotPresent from '../../common/jQueryNotPresent';
import loadDataTables from '../../common/loadDataTables';
import notLastUpdate from '../../common/notLastUpdate';
import setInnerHtml from '../../dom/setInnerHtml';
import calf from '../../support/calf';
import { oldActionSpinner } from '../../support/constants';
import { pcc } from '../../support/layout';
import task from '../../support/task';
import { buildInv, getTheInv } from './buildInv';
import clearButton from './clearButton';
import decorate from './decorate';
import doTable from './doTable';
import eventHandlers from './eventHandlers/eventHandlers';
import {
  lvlFilter, rarityFilter, setFilter, typeFilter,
} from './filters';
import headers from './headers';
import { extendOptions } from './options';
import recallAll from './recallAll/recallAll';
import setChecks from './setChecks';
import setLvls from './setLvls';

const rekey = ([, o]) => [o.id, o];

function doSpinner() {
  setInnerHtml(`<span id="fshInvMan"><img src = "${
    oldActionSpinner}">&nbsp;Getting inventory data...</span>`, pcc());
}

async function rekeyMembrList() {
  await getMembrList(false);
  // Rekey membrList from names to id's
  calf.membrList = fromEntries(entries(calf.membrList).filter(notLastUpdate).map(rekey));
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

function doInventory(reset) {
  prepareLayout();
  const fshInv = doTable();
  eventHandlers(fshInv);
  $('#fshRefresh').on('click', reset);
  clearButton(fshInv);
  recallAll();
}

function getInvMan(reset) {
  start('JS Perf', 'getInvMan');
  doInventory(reset);
  end('JS Perf', 'getInvMan');
}

function asyncCall(reset) {
  task(3, getInvMan, [reset]);
}

async function syncInvMan(reset) {
  const prm = [loadDataTables(), buildInv()];
  if (calf.subcmd === 'guildinvmgr') prm.push(rekeyMembrList());
  prm.push(extendOptions());
  await all(prm);
  if (!getTheInv()) return;
  asyncCall(reset);
}

export default function inventory() {
  if (jQueryNotPresent() || !pcc()) return;
  if (calf.subcmd === 'guildinvmgr' && !currentGuildId()) return;
  doSpinner();
  syncInvMan(inventory);
}
