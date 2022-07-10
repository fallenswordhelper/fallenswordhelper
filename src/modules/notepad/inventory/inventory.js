import './inventory.css';
import getMembrList from '../../ajax/getMembrList';
import allthen from '../../common/allthen';
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
import { time, timeEnd } from '../../support/debug';
import { getPcc } from '../../support/layout';
import task from '../../support/task';
import getValue from '../../system/getValue';
import { get } from '../../system/idb';
import { buildInv } from './buildInv';
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
    oldActionSpinner}">&nbsp;Getting inventory data...</span>`, getPcc());
}

function rekeyMembrList() {
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

function doInventory() {
  prepareLayout();
  const fshInv = doTable();
  eventHandlers(fshInv);
  // eslint-disable-next-line no-use-before-define
  $('#fshRefresh').on('click', inventory);
  clearButton(fshInv);
  recallAll();
}

function getInvMan() {
  const betaOptIn = getValue('betaOptIn');
  if (betaOptIn) time('inventory.getInvMan'); // Timing output
  doInventory();
  if (betaOptIn) timeEnd('inventory.getInvMan'); // Timing output
}

function asyncCall() {
  task(3, getInvMan);
}

function syncInvMan() {
  const prm = [loadDataTables(), buildInv()];
  if (calf.subcmd === 'guildinvmgr') prm.push(getMembrList(false).then(rekeyMembrList));
  prm.push(get(`fsh_${calf.subcmd}`).then(extendOptions));
  allthen(prm, asyncCall);
}

export default function inventory() {
  if (jQueryNotPresent() || !getPcc()) return;
  if (calf.subcmd === 'guildinvmgr' && !currentGuildId()) return;
  doSpinner();
  syncInvMan();
}
