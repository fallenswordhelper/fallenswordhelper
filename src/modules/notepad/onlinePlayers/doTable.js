import sendEvent from '../../analytics/sendEvent';
import currentGuildId from '../../common/currentGuildId';
import getElementById from '../../common/getElementById';
import { getLowerPvpLevel, getUpperPvpLevel } from '../../common/levelHighlight';
import onclick from '../../common/onclick';
import regExpFirstCapture from '../../common/regExpFirstCapture';
import { guildRE } from '../../support/constants';
import getValue from '../../system/getValue';
import intValue from '../../system/intValue';

let highlightPlayersNearMyLvl = 0;
let table = 0;

function guildNumber(html) {
  const match = regExpFirstCapture(guildRE, html);
  if (match) { return Number(match); }
}

const highlightTests = [
  () => highlightPlayersNearMyLvl,
  (data) => guildNumber(data[0]) !== currentGuildId(),
  (data) => intValue(data[2]) >= getLowerPvpLevel(),
  (data) => intValue(data[2]) <= getUpperPvpLevel(),
];

function pvpHighlight(data) {
  return highlightTests.every((el) => el(data));
}

function createdRow(row, data) {
  if (pvpHighlight(data)) {
    $('td', row).eq(2).addClass('lvlHighlight');
  }
}

function tableOpts(onlineData) {
  return {
    columns: [
      { title: 'Guild', class: 'dt-center', orderable: false },
      { title: 'Name', class: 'dt-center' },
      { title: 'Level', class: 'dt-center' },
      { title: 'Page/Index', class: 'dt-center' },
    ],
    createdRow,
    data: onlineData,
    deferRender: true,
    lengthMenu: [[30, 60, -1], [30, 60, 'All']],
    order: [3, 'desc'],
    pageLength: 30,
    stateDuration: 0,
    stateSave: true,
  };
}

const onlinePlayersEvent = (type) => sendEvent('OnlinePlayers', type);
const onlinePlayersEventHdl = (type) => () => { sendEvent('OnlinePlayers', type); };

function anchorHdl(e) {
  if (e.currentTarget.children[0]?.tagName === 'IMG') onlinePlayersEvent('guild click');
  else onlinePlayersEvent('player click');
}

function tableHandlers() {
  $('#fshInv').on('click', 'a', anchorHdl);
  $('#fshInv').on('click', '.sorting', onlinePlayersEventHdl('sorting'));
}

function chromeHandlers() { // jQuery
  $('#fshInv_length select').on('change', onlinePlayersEventHdl('dataTables_length'));
  $('#fshInv_filter input').on('keyup', onlinePlayersEventHdl('dataTables_filter'));
  // something is preventing jQuery bubbling
  onclick(getElementById('fshInv_paginate'), (e) => {
    if (e.target.classList.contains('paginate_button')) onlinePlayersEvent('paginate_button');
  });
}

export function doTable(context, onlineData) {
  highlightPlayersNearMyLvl = getValue('highlightPlayersNearMyLvl');
  table = $('#fshInv', context).DataTable(tableOpts(onlineData));
  tableHandlers();
  chromeHandlers();
}

export function tableDraw() {
  table.draw();
}
