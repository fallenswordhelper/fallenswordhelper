import sendEvent from '../analytics/sendEvent';
import view from '../app/arena/view';
import allthen from '../common/allthen';
import interceptSubmit from '../common/interceptSubmit';
import jQueryNotPresent from '../common/jQueryNotPresent';
import loadDataTables from '../common/loadDataTables';
import partial from '../common/partial';
import querySelectorArray from '../common/querySelectorArray';
import { time, timeEnd } from '../support/debug';
import getValue from '../system/getValue';
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

function redoHead(i, e) { // jQuery
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
  const betaOptIn = getValue('betaOptIn');
  if (betaOptIn) { //  Timing output
    time('arena.process');
  }
  removeHiddenRows();
  arenaDataTable(tabs, values);
  interceptSubmit();
  if (betaOptIn) { //  Timing output
    timeEnd('arena.process');
  }
}

function prepare(tabs) {
  allthen(
    [
      get(fshArenaKey),
      get('fsh_arenaFull'),
      view().catch(() => ({})),
      loadDataTables(),
    ],
    partial(process, tabs),
  );
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
