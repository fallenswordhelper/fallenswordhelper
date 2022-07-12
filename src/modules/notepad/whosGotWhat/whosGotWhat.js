import './whosGotWhat.css';
import {
  paginationDirective,
  searchDirective,
  smartTable,
} from 'smart-table-core';
import { table as tableComponentFactory } from 'smart-table-vanilla';
import guildStore from '../../_dataAccess/export/guildStore';
import ranksView from '../../_dataAccess/fallbacks/ranksView';
import allthen from '../../common/allthen';
import createButton from '../../common/cElement/createButton';
import createDiv from '../../common/cElement/createDiv';
import createInput from '../../common/cElement/createInput';
import createSelect from '../../common/cElement/createSelect';
import createTable from '../../common/cElement/createTable';
import insertElement from '../../common/insertElement';
import on from '../../common/on';
import onclick from '../../common/onclick';
import partial from '../../common/partial';
import setInnerHtml from '../../dom/setInnerHtml';
import { getPcc } from '../../support/layout';
import displayChange from './displayChange';
import prepareData from './prepareData';
import theadHtml from './theadHtml';

function makeTable(el) {
  return insertElement(el, createTable({
    className: 'whosGotWhat',
    innerHTML: theadHtml,
  }));
}

function makeSizer(el, table) {
  const thisSizer = createSelect({
    innerHTML: '<option value="25">25</option>'
      + '<option value="50">50</option>'
      + '<option value="0" selected>All</option>',
  });
  const box = createDiv();
  insertElement(box, thisSizer);
  insertElement(el, box);
  const slice = paginationDirective({ table });
  on(thisSizer, 'change', (e) => {
    slice.changePageSize(Number(e.target.value));
  });
}

function makeSearch(top, table) {
  const wrapper = createDiv({ className: 'fsh-search-wrapper' });
  const input = createInput({
    dataset: {
      stSearch: 'name, rank_name',
      stSearchFlags: 'i',
    },
    placeholder: 'Enter search term',
    required: true,
    type: 'text',
  });
  const button = createButton({
    innerHTML: '&times;',
    type: 'button',
  });
  const directive = searchDirective({ table });
  onclick(button, () => {
    input.value = '';
    input.focus();
    directive.search('');
  });
  insertElement(wrapper, input);
  insertElement(wrapper, button);
  insertElement(top, wrapper);
}

function makeSummary(bottom, table, data) {
  const summaryDiv = createDiv();
  insertElement(bottom, summaryDiv);
  const slice = paginationDirective({ table });
  slice.onSummaryChange(({ page, size, filteredCount }) => {
    let filterModifier = 0;
    if (filteredCount) { filterModifier = 1; }
    setInnerHtml(`showing ${
      (page - 1) * size + filterModifier} - ${
      Math.min(filteredCount, page * size)} of ${
      filteredCount} (${data.length} total)`, summaryDiv);
  });
}

function pagerControl(table) {
  const firstBtn = createButton({ innerHTML: '«' });
  const prevBtn = createButton({ innerHTML: '‹' });
  const pageBtn = createButton({ disabled: true, innerHTML: '1' });
  const nextBtn = createButton({ innerHTML: '›' });
  const lastBtn = createButton({ innerHTML: '»' });
  let lastPage = 1;

  const pager = paginationDirective({ table });
  pager.onSummaryChange(({ page, size, filteredCount }) => {
    firstBtn.disabled = !pager.isPreviousPageEnabled();
    prevBtn.disabled = !pager.isPreviousPageEnabled();
    nextBtn.disabled = !pager.isNextPageEnabled();
    lastBtn.disabled = !pager.isNextPageEnabled();
    setInnerHtml(page, pageBtn);
    lastPage = Math.ceil(filteredCount / size);
  });

  onclick(firstBtn, () => pager.selectPage(1));
  onclick(prevBtn, () => pager.selectPreviousPage());
  onclick(nextBtn, () => pager.selectNextPage());
  onclick(lastBtn, () => pager.selectPage(lastPage));

  return {
    firstBtn, prevBtn, pageBtn, nextBtn, lastBtn,
  };
}

function makePager(bottom, table) {
  const {
    firstBtn, prevBtn, pageBtn, nextBtn, lastBtn,
  } = pagerControl(table);
  const pagerDiv = createDiv();
  insertElement(pagerDiv, firstBtn);
  insertElement(pagerDiv, prevBtn);
  insertElement(pagerDiv, pageBtn);
  insertElement(pagerDiv, nextBtn);
  insertElement(pagerDiv, lastBtn);
  insertElement(bottom, pagerDiv);
}

function showMe(dataAry) {
  const data = prepareData(dataAry);
  setInnerHtml('', getPcc());
  const el = insertElement(getPcc(), createDiv());
  const top = insertElement(el, createDiv({ className: 'st-top-container' }));
  const tableContainer = insertElement(el, createDiv());
  const domTable = makeTable(tableContainer);
  const bottom = insertElement(el, createDiv({ className: 'st-bottom-container' }));
  const tableState = {
    sort: { pointer: 'slot', direction: 'asc' },
    slice: { page: 1, size: 0 },
    filter: {},
    search: {},
  };
  const table = smartTable({ data, tableState });
  makeSizer(top, table);
  makeSearch(top, table);
  makeSummary(bottom, table, data);
  makePager(bottom, table);
  const tableComponent = tableComponentFactory({ el, table });
  tableComponent.onDisplayChange(partial(displayChange, domTable, table));
  tableComponent.exec();
}

export default function whosGotWhat() {
  setInnerHtml('Loading...', getPcc());
  allthen([guildStore(), ranksView()], showMe);
}
