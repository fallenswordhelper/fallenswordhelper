import sendEvent from '../analytics/sendEvent';
import { end, start } from '../analytics/timing';
import view from '../app/arena/view';
import all from '../common/all';
import interceptSubmit from '../common/interceptSubmit';
import jQueryNotPresent from '../common/jQueryNotPresent';
import loadDataTables from '../common/loadDataTables';
import querySelectorArray from '../common/querySelectorArray';
import { get } from '../system/idb';
import arenaFull from './arenaFull';
import { fshArenaKey, tableOpts } from './assets';
import doLvlFilter from './doLvlFilter';
import filterHeader from './filterHeader';
import orderData from './orderData';
import participants from './participants';
import redoSort from './redoSort';
import {
  setOpts,
  storeOpts,
} from './setOpts';

function removeHiddenRows() {
  const hiddenRows = querySelectorArray(
    '#arenaTypeTabs tr[style="display: none;"]',
  );
  hiddenRows.forEach((n) => n.remove());
}

function redoHead(_i, e) { // jQuery
  const firstRow = $('tr', e).first();
  $('a', firstRow).contents().unwrap();
  $(e).prepend($('<thead/>').append(firstRow));
}

function prepareEnv() {
  filterHeader();
  storeOpts();
  doLvlFilter();
}

function arenaDataTable(tabs, [arenaOpts, obj, json]) { // jQuery
  const theTables = $('table[width="635"]', tabs);
  theTables.each(redoHead);
  setOpts(arenaOpts);
  orderData(theTables);
  arenaFull(obj);
  participants(json);
  prepareEnv();
  theTables.DataTable(tableOpts);
  redoSort(tabs);
}

function process(tabs, values) {
  start('JS Perf', 'arena.process');
  removeHiddenRows();
  arenaDataTable(tabs, values);
  interceptSubmit();
  end('JS Perf', 'arena.process');
}

async function prepare(tabs) {
  const values = await all(
    [
      get(fshArenaKey),
      get('fsh_arenaFull'),
      view().catch(() => ({})),
      loadDataTables(),
    ],
  );
  process(tabs, values);
}

export default function arena() { // jQuery
  if (jQueryNotPresent()) { return; }
  const tabs = $('#arenaTypeTabs');
  if (tabs.length === 1) {
    prepare(tabs);
  } else {
    sendEvent('arena', 'Join error screen ?');
  }
}
