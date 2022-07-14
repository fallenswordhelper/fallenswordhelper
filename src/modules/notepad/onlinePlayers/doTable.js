import currentGuildId from '../../common/currentGuildId';
import { getLowerPvpLevel, getUpperPvpLevel } from '../../common/levelHighlight';
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

export function doTable(context, onlineData) {
  highlightPlayersNearMyLvl = getValue('highlightPlayersNearMyLvl');
  table = $('#fshInv', context).DataTable(tableOpts(onlineData));
}

export function tableDraw() {
  table.draw();
}
