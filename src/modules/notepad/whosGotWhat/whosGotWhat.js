import './whosGotWhat.css';
import { smartTable } from 'smart-table-core';
import { table as tableComponentFactory } from 'smart-table-vanilla';
import guildStore from '../../_dataAccess/export/guildStore';
import ranksView from '../../_dataAccess/fallbacks/ranksView';
import allthen from '../../common/allthen';
import createDiv from '../../common/cElement/createDiv';
import createTable from '../../common/cElement/createTable';
import insertElement from '../../common/insertElement';
import partial from '../../common/partial';
import setInnerHtml from '../../dom/setInnerHtml';
import { pcc } from '../../support/layout';
import displayChange from './displayChange';
import makePager from './makePager';
import makeSearch from './makeSearch';
import makeSizer from './makeSizer';
import makeSummary from './makeSummary';
import prepareData from './prepareData';
import theadHtml from './theadHtml';

function makeTable(el) {
  return insertElement(el, createTable({
    className: 'whosGotWhat',
    innerHTML: theadHtml,
  }));
}

function prepareLayout(el) {
  const top = insertElement(el, createDiv({ className: 'st-top-container' }));
  const tableContainer = insertElement(el, createDiv());
  const domTable = makeTable(tableContainer);
  const bottom = insertElement(el, createDiv({ className: 'st-bottom-container' }));
  return { top, domTable, bottom };
}

function prepareSmartTable(data) {
  return smartTable({
    data,
    tableState: {
      sort: { pointer: 'slot', direction: 'asc' },
      slice: { page: 1, size: 0 },
      filter: {},
      search: {},
    },
  });
}

function buildControls(data, top, bottom, table) {
  makeSizer(top, table);
  makeSearch(top, table);
  makeSummary(bottom, table, data);
  makePager(bottom, table);
}

function initTable(el, table, domTable) {
  const tableComponent = tableComponentFactory({ el, table });
  tableComponent.onDisplayChange(partial(displayChange, domTable, table));
  tableComponent.exec();
}

function showMe(pCC, dataAry) {
  const data = prepareData(dataAry);
  setInnerHtml('', pCC);
  const el = insertElement(pCC, createDiv());
  const { top, domTable, bottom } = prepareLayout(el);
  const table = prepareSmartTable(data);
  buildControls(data, top, bottom, table);
  initTable(el, table, domTable);
}

export default function whosGotWhat() {
  const pCC = pcc();
  setInnerHtml('Loading...', pCC);
  allthen([guildStore(), ranksView()], (dataAry) => showMe(pCC, dataAry));
}
