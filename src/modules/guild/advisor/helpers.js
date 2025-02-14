import './advisor.css';
import sendEvent from '../../analytics/sendEvent';
import createDiv from '../../common/cElement/createDiv';
import createTable from '../../common/cElement/createTable';
import insertElement from '../../common/insertElement';
import partial from '../../common/partial';
import replaceChild from '../../common/replaceChild';
import trim from '../../common/trim';
import chromeHandlers from '../../notepad/inventory/eventHandlers/chromeHandlers';
import task from '../../support/task';

const advisorColumns = [
  { title: '<div class="fshBold">Member</div>' },
  { title: '<div class="fshBold">Lvl</div>', class: 'dt-center' },
  { title: '<div class="fshBold">Rank</div>', class: 'dt-center dt-nowrap' },
  {
    title: '<div class="fshBold">Gold From Deposits</div>',
    class: 'dt-center',
  },
  { title: '<div class="fshBold">Gold From Tax</div>', class: 'dt-center' },
  { title: '<div class="fshBold">Gold Total</div>', class: 'dt-center' },
  { title: '<div class="fshBold">FSP</div>', class: 'dt-center' },
  { title: '<div class="fshBold">Skill Cast</div>', class: 'dt-center' },
  { title: '<div class="fshBold">Group Create</div>', class: 'dt-center' },
  { title: '<div class="fshBold">Group Join</div>', class: 'dt-center' },
  { title: '<div class="fshBold">Relic</div>', class: 'dt-center' },
  { title: '<div class="fshBold">XP Contrib</div>', class: 'dt-center' },
];

export function playerLevel(f, membrList) {
  if (!membrList[f]) {
    return '';
  }
  return membrList[f].level;
}

export function playerRank(f, membrList) {
  if (!membrList[f]) {
    return '';
  }
  return `<div class="fshAdvRank">${trim(membrList[f].rank_name)}</div>`;
}

function doTable(tbl, data, callback) {
  // jQuery
  $(tbl).DataTable({
    autoWidth: false,
    columnDefs: [
      {
        targets: [1, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        orderSequence: ['desc', 'asc'],
      },
    ],
    columns: advisorColumns,
    data,
    deferRender: true,
    initComplete: callback,
    lengthMenu: [
      [25, 50, -1],
      [25, 50, 'All'],
    ],
    pageLength: 25,
    stateDuration: 0,
    stateSave: true,
  });
}

const advisorEvent = (type) => sendEvent('advisor', type);
const advisorEventHdl = (type) => () => {
  sendEvent('advisor', type);
};

function doSwitch(targetElement, div, tbl) {
  replaceChild(div, targetElement);
  chromeHandlers(tbl, advisorEventHdl, advisorEvent);
}

function switcheroo(targetElement, div, tbl) {
  task(3, doSwitch, [targetElement, div, tbl]);
}

export function injectTable(targetElement, tfoot, data) {
  const div = createDiv();
  const tbl = createTable({ className: 'fshDataTable fshXSmall hover' });
  insertElement(div, tbl);
  insertElement(tbl, tfoot);
  task(3, doTable, [tbl, data, partial(switcheroo, targetElement, div, tbl)]);
  return div;
}
