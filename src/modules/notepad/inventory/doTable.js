import bpRender from './render/bpRender';
import { craftHash } from './assets';
import craftRender from './render/craftRender';
import createTable from '../../common/cElement/createTable';
import createdRow from './render/createdRow';
import dropRender from './render/dropRender';
import durabilityRender from './render/durabilityRender';
import forgeRender from './render/forgeRender';
import { getPcc } from '../../support/layout';
import { getTheInv } from './buildInv';
import gsRender from './render/gsRender';
import insertElement from '../../common/insertElement';
import { itemType } from '../../support/constants';
import nameRender from './render/nameRender';
import sendRender from './render/sendRender';
import wearUseRender from './render/wearUseRender';
import whereData from './render/whereData';
import whereRender from './render/whereRender';
import whereRenderDisplay from './render/whereRenderDisplay';
import whereRenderFilter from './render/whereRenderFilter';
import { getShowQuickDropLinks, getShowQuickSendLinks } from './options';

const tblCols = [
  { title: 'Name', data: 'item_name', render: nameRender },
  { title: 'Level', data: 'stats.min_level' },
  {
    title: 'Where',
    data: whereData,
    render: {
      _: whereRender,
      display: whereRenderDisplay,
      filter: whereRenderFilter,
    },
  },
  {
    title: 'Type',
    data: 'type',
    render(type) { return itemType[type]; },
  },
  { title: 'Att', data: 'stats.attack' },
  { title: 'Def', data: 'stats.defense' },
  { title: 'Arm', data: 'stats.armor' },
  { title: 'Dam', data: 'stats.damage' },
  { title: 'HP', data: 'stats.hp' },
  { title: 'Frg', data: 'forge', render: forgeRender },
  {
    title: 'Craft',
    data: 'craft',
    render: {
      _(craft) {
        if (craftHash[craft]) {
          return craftHash[craft].index;
        }
        return 0;
      },
      display: craftRender,
      filter: craftRender,
    },
  },
  { title: 'Du%', data: 'durability', render: durabilityRender },
  { title: 'BP', data: whereData, render: bpRender },
  { title: 'GS', data: whereData, render: gsRender },
  { title: 'W/U', data: 'type', render: wearUseRender },
  {
    title: 'setName',
    data: 'stats.set_name',
    orderable: false,
    visible: false,
  },
  {
    title: 'Tag',
    data: 'guild_tag',
    render(tag) {
      if (tag === -1) { return 'No'; }
      return 'Yes';
    },
  },
  { title: 'Drop', data: 'type', render: dropRender },
  { title: 'Send', data: 'type', render: sendRender },
];

function isUserInv() {
  return 'player_id' in getTheInv();
}

function tableId() {
  if (isUserInv()) {
    return 'fshUserInv';
  }
  return 'fshGuildInv';
}

function injectTable() {
  const fshInv = createTable({
    className: 'hover fshXSmall',
    id: tableId(),
  });
  insertElement(getPcc(), fshInv);
  return fshInv;
}

function makeDataTable(fshInv) { // jQuery
  return $(fshInv).DataTable({
    autoWidth: false,
    columnDefs: [{ targets: '_all', defaultContent: '' },
      {
        targets: [1, 4, 5, 6, 7, 8, 9, 10, 12, 13],
        orderSequence: ['desc', 'asc'],
      }],
    columns: tblCols,
    createdRow,
    data: getTheInv().items,
    deferRender: true,
    lengthMenu: [[50, 100, 150, 200, -1], [50, 100, 150, 200, 'All']],
    pageLength: 50,
    stateDuration: 0,
    stateSave: true,
  });
}

function hideCols(table) {
  [
    [12, 'current_player_id' in getTheInv()],
    [17, isUserInv() && getShowQuickDropLinks()],
    [18, isUserInv() && getShowQuickSendLinks()],
  ].forEach(([col, bool]) => table.column(col).visible(bool));
}

export default function doTable() {
  const fshInv = injectTable();
  const table = makeDataTable(fshInv);
  hideCols(table);
  return fshInv;
}
