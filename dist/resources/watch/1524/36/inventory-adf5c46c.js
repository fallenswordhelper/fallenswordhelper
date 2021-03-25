import { $ as $dataAccess, H as getTextTrim, t as createDocument, F as querySelectorArray, u as indexAjaxData, Q as isArray, s as partial, c as calf, a6 as fallback, bc as ahSearchUrl, bo as rarity, a4 as playerIdUrl, e as entries, q as extend, I as getValue, bp as itemType, i as insertElement, p as pCC, ao as cdn, aO as hideQTip, B as setInnerHtml, y as jQueryNotPresent, aq as oldActionSpinner, aj as time, ak as timeEnd, a as add } from './calfSystem-c08399e5.js';
import { a as allthen } from './allthen-a8900f54.js';
import { g as guild } from './guild-5c91beb3.js';
import { i as indexAjaxJson } from './indexAjaxJson-bc8da7ab.js';
import { i as itemId, q as queueTakeItem, a as queueRecallItem } from './queue-497b06dd.js';
import { g as guildInventory } from './takeItem-ef7abe63.js';
import { d as daLoadInventory } from './daLoadInventory-95c1ebf3.js';
import { g as getInventory } from './getInventory-7b398dd5.js';
import { c as createTable } from './createTable-256d9f33.js';
import { i as isSelected } from './isSelected-ec34c747.js';
import { a as ajaxReturnCode, e as equipItem, u as useItem } from './useItem-f939d486.js';
import { d as daAjaxSendItemsToRecipient } from './daAjaxSendItemsToRecipient-59ab6e68.js';
import { s as set, g as get } from './idb-28876f6e.js';
import { c as changeMinMax } from './changeMinMax-f6ae18c7.js';
import { d as dialog } from './dialog-92c3ed6b.js';
import { m as moveItem } from './moveItem-b870bb42.js';
import { h as htmlResult } from './htmlResult-5111d5cc.js';
import { e as errorDialog } from './errorDialog-db13a69a.js';
import { e as executeAll } from './executeAll-a7ad7ece.js';
import { g as getMembrList } from './getMembrList-315e29a2.js';
import { l as loadDataTables } from './loadDataTables-2c8f275d.js';
import { n as notLastUpdate } from './notLastUpdate-381690ef.js';
import { i as intValue } from './intValue-ca51a3c0.js';
import { l as lvlTest, p as playerLvlTest } from './lvlTests-6db80944.js';
import './all-778b38b7.js';
import './backpack-e785c28b.js';
import './guildStore-fce032a6.js';
import './cmdExport-d301ee98.js';
import './daUseItem-df77a6d0.js';
import './sendItems-0dcd3f15.js';
import './numberIsNaN-891c59d9.js';
import './dialogMsg-716cf657.js';
import './currentGuildId-915d45b4.js';

function fetchinv() {
  return guild({ subcmd: 'fetchinv' });
}

function updateType(item) {
  const updates = {
    a: Number(item.a),
    b: Number(item.b),
    l: Number(item.l),
    n: item.extra ? item.extra.name : item.n,
    t: Number(item.t),
  };
  return { ...item, ...updates };
}

function formatResponse(json) {
  return { r: json.map(updateType), s: true };
}

function guildFetchInv() {
  return indexAjaxJson({
    cmd: 'guild',
    subcmd: 'fetchinv',
  }).then(formatResponse);
}

function daGuildFetchInv() {
  return $dataAccess(fetchinv, guildFetchInv);
}

function details(td) {
  if (!td.children[0].href) { return { a: -1, n: '-1', t: -1 }; }
  const thisId = Number(itemId(td.children[0].href));
  const thisName = getTextTrim(td.previousElementSibling);
  const ret = { a: thisId };
  if (thisName.endsWith(' (Potion)')) {
    ret.n = thisName.slice(0, -9);
    ret.t = 15;
  } else {
    ret.n = thisName;
    ret.t = -1;
  }
  return ret;
}

function parseReport(html) {
  const doc = createDocument(html);
  const nodeList = querySelectorArray('#pCC table table td:nth-of-type(3n)',
    doc);
  return { r: nodeList.map(details), s: true };
}

// Incomplete
function guildReport() {
  return indexAjaxData({
    cmd: 'guild',
    subcmd: 'inventory',
    subcmd2: 'report',
  }).then(parseReport);
}

function report() {
  return guildInventory({ subcmd2: 'report' });
}

function daGuildReport() {
  return $dataAccess(report, guildReport);
}

let theInv;
let composed = [];

function cacheTheInv(data) {
  theInv = data;
}

function doInventory$1() {
  return getInventory().then(cacheTheInv);
}

const composedPot = (el) => el.t === 15;

function getComposedFromBp(data) {
  if (!isArray(data.r)) { return; }
  composed = Array.prototype.concat.apply([], data.r.map((el) => el.items))
    .filter(composedPot);
}

function doComposedFromBp() {
  return daLoadInventory().then(getComposedFromBp);
}

function getComposedFromGs(data) {
  if (!isArray(data.r)) { return; }
  composed = composed.concat(data.r.filter(composedPot));
}

function doGs() {
  return daGuildFetchInv().then(getComposedFromGs);
}

function doReport() {
  return daGuildReport().then(getComposedFromGs);
}

function thisPot(invId, pot) { return pot.a === invId; }

function addComposedName(item) {
  if (item.type === 15) {
    const cp = composed.find(partial(thisPot, item.inv_id));
    // eslint-disable-next-line no-param-reassign
    if (cp) { item.item_name = cp.n; }
  }
}

function gotSomeStuff() {
  theInv.items.forEach(addComposedName);
}

function buildInv() {
  const prm = [doInventory$1()];
  if (calf.subcmd === 'invmanagernew') {
    prm.push(doComposedFromBp());
  }
  if (calf.subcmd === 'guildinvmgr') {
    prm.push(doGs());
    prm.push(doReport());
  }
  return allthen(prm, gotSomeStuff);
}

function clearSearch(fshInv, input) {
  input.val('');
  $(fshInv).DataTable().search('').draw();
}

function clearButton(fshInv) { // jQuery
  const input = $(`#${fshInv.id}_filter input`);
  input.prop('type', 'text');
  const clear = $('<span>&times;</span>');
  input.wrap($('<span class="text-input-wrapper"/>'));
  input.after(clear);
  clear.on('click', partial(clearSearch, fshInv, input));
}

function decorate() {
  if (theInv.folders) {
    theInv.folders['-1'] = 'Main';
  }
}

function bpDisplayType(type, row) {
  if (type !== 'display') { return 'BP'; }
  if (row.player_id === -1) {
    return `<span class="fshLink takeItem" invid="${row.inv_id
    }" action="take">BP</span>`;
  }
  return `<span class="fshLink recallItem" invid="${row.inv_id
  }" playerid="${row.player_id
  }" mode="0" action="recall">BP</span>`;
}

function bpRender(where, type, row) {
  if (row.folder_id || row.player_id
    === theInv.current_player_id) { return; }
  return bpDisplayType(type, row);
}

const defaultOptions = {
  checkedElements: {
    0: 1,
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1,
    6: 1,
    7: 1,
    8: 1,
    100: 1,
    101: 1,
    102: 1,
    103: 1,
    104: 1,
    105: 1,
    106: 1,
  },
  fshMinLvl: 1,
  fshMaxLvl: 9999,
};
const invManFilter = '<table class="fshInvFilter">'
  + '<tr><th colspan="14">@@reportTitle@@</th>'
  + '<th><span id="fshRefresh" class="fshLink">[Refresh]</span></th></tr>'
  + '<tr><td colspan="2" rowspan="3"><b>&nbsp;Show Items:</b></td>'
  + '<td class="fshRight">&nbsp;Helmet:</td>'
  + '<td><input id="fshHelmet" type="checkbox" item="0"/></td>'
  + '<td class="fshRight">&nbsp;Armor:</td>'
  + '<td><input id="fshArmor" type="checkbox" item="1"/></td>'
  + '<td class="fshRight">&nbsp;Gloves:</td>'
  + '<td><input id="fshGloves" type="checkbox" item="2"/></td>'
  + '<td class="fshRight">&nbsp;Boots:</td>'
  + '<td><input id="fshBoots" type="checkbox" item="3"/></td>'
  + '<td class="fshRight">&nbsp;Weapon:</td>'
  + '<td><input id="fshWeapon" type="checkbox" item="4"/></td>'
  + '<td></td>'
  + '<td class="fshRight">&nbsp;Min lvl:</td>'
  + '<td><input id="fshMinLvl" size="5" value="1"/></td>'
  + '</tr><tr>'
  + '<td class="fshRight">&nbsp;Shield:</td>'
  + '<td><input id="fshShield" type="checkbox" item="5"/></td>'
  + '<td class="fshRight">&nbsp;Ring:</td>'
  + '<td><input id="fshRing" type="checkbox" item="6"/></td>'
  + '<td class="fshRight">&nbsp;Amulet:</td>'
  + '<td><input id="fshAmulet" type="checkbox" item="7"/></td>'
  + '<td class="fshRight">&nbsp;Rune:</td>'
  + '<td><input id="fshRune" type="checkbox" item="8"/></td>'
  + '<td class="fshRight">&nbsp;Sets Only:</td>'
  + '<td><input id="fshSets" item="-1" type="checkbox"/></td>'
  + '<td></td>'
  + '<td class="fshRight">&nbsp;Max lvl:</td>'
  + '<td><input id="fshMaxLvl" size="5" value="9999"/></td>'
  + '</tr><tr>'
  + '<td colspan="2">'
  + '&nbsp;[<span id="fshAll" class="fshLink">Select All</span>]</td>'
  + '<td colspan="2">'
  + '&nbsp;[<span id="fshNone" class="fshLink">Select None</span>]</td>'
  + '<td colspan="2">'
  + '&nbsp;[<span id="fshDefault" class="fshLink">Defaults</span>]</td>'
  + '<td colspan="6"></td>'
  + '<td><input id="fshReset" type="button" value="Reset"/></td>'
  + '</tr>'
  + '<tr>'
  + '<td class="fshRight">&nbsp;Quest Item:</td>'
  + '<td><input id="fshQuest" item="9" type="checkbox"/></td>'
  + '<td class="fshRight">&nbsp;Potion:</td>'
  + '<td><input id="fshPotion" item="10" type="checkbox"/></td>'
  + '<td class="fshRight">&nbsp;Resource:</td>'
  + '<td><input id="fshResource" item="12" type="checkbox"/></td>'
  + '<td class="fshRight">&nbsp;Recipe:</td>'
  + '<td><input id="fshRecipe" item="13" type="checkbox"/></td>'
  + '<td class="fshRight">&nbsp;Container:</td>'
  + '<td><input id="fshContainer" item="14" type="checkbox"/></td>'
  + '<td class="fshRight">&nbsp;Frag Stash:</td>'
  + '<td><input id="fshStash" item="16" type="checkbox"/></td>'
  + '<td class="fshRight">&nbsp;Composed:</td>'
  + '<td><input id="fshComposed" item="15" type="checkbox"/></td>'
  + '<td></td></tr>'
  + '<tr>'
  + '<td class="fshRight">&nbsp;Common:</td>'
  + '<td><input id="fshCommon" item="100" type="checkbox" checked/></td>'
  + '<td class="fshRight">&nbsp;Rare:</td>'
  + '<td><input id="fshRare" item="101" type="checkbox" checked/></td>'
  + '<td class="fshRight">&nbsp;Unique:</td>'
  + '<td><input id="fshUnique" item="102" type="checkbox" checked/></td>'
  + '<td class="fshRight">&nbsp;Legendary:</td>'
  + '<td><input id="fshLegendary" item="103" type="checkbox" checked/></td>'
  + '<td class="fshRight">&nbsp;Super Elite:</td>'
  + '<td><input id="fshSuperElite" item="104" type="checkbox" checked/></td>'
  + '<td class="fshRight">&nbsp;Crystalline:</td>'
  + '<td><input id="fshCrystalline" item="105" type="checkbox" checked/></td>'
  + '<td class="fshRight">&nbsp;Epic:</td>'
  + '<td colspan="2"><input id="fshEpic" item="106" type="checkbox" checked/>'
  + '</td>'
  + '</tr>'
  + '</table>';
const inventoryCheckAll = {
  0: 1,
  1: 1,
  2: 1,
  3: 1,
  4: 1,
  5: 1,
  6: 1,
  7: 1,
  8: 1,
  9: 1,
  10: 1,
  11: 1,
  12: 1,
  13: 1,
  14: 1,
  15: 1,
  16: 1,
  100: 1,
  101: 1,
  102: 1,
  103: 1,
  104: 1,
  105: 1,
  106: 1,
};
const craftHash = {
  Perfect: { abbr: 'Perf', colour: '#00b600', index: 8 },
  Excellent: { abbr: 'Exc', colour: '#f6ed00', index: 7 },
  'Very Good': { abbr: 'VG', colour: '#f67a00', index: 6 },
  Good: { abbr: 'Good', colour: '#f65d00', index: 5 },
  Average: { abbr: 'Ave', colour: '#f64500', index: 4 },
  Poor: { abbr: 'Poor', colour: '#f61d00', index: 3 },
  'Very Poor': { abbr: 'VPr', colour: '#b21500', index: 2 },
  Uncrafted: { abbr: 'Unc', colour: '#666666', index: 1 },
};

function craftRender(craft) {
  if (craftHash[craft]) { return craftHash[craft].abbr; }
  return '';
}

function selfRowColor(data) {
  if (data.equipped) { return 'fshGreen'; }
  return 'fshNavy';
}

function guildRowColor(data) {
  if (data.player_id === -1) { return 'fshNavy'; }
  return 'fshMaroon';
}

function getRowColor(data) {
  if (data.folder_id) { return selfRowColor(data); }
  return guildRowColor(data);
}

function createdRow(row, data) {
  const colour = getRowColor(data);
  row.classList.add(colour);
}

function taggedOrEquipped(row) {
  return row.guild_tag !== -1 || row.equipped;
}

function dropRender(data, type, row) {
  if (taggedOrEquipped(row)) { return; }
  if (type !== 'display') { return 'Drop'; }
  return '<span class="dropItem tip-static dropLink" data-tipped="INSTANTLY '
    + `DESTROY THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${
      row.inv_id}">Drop</span>`;
}

function durabilityRender(data, type, row) {
  if (row.type < 9 && row.max_durability > 0) {
    return Math.ceil((row.durability / row.max_durability) * 100);
  }
}

function forgeRender(data, type, row) {
  if (row.type < 9) {
    return row.forge;
  }
}

function onGuildMember(row) {
  return row.player_id && row.player_id !== -1;
}

function isTagged(row) {
  return row.folder_id && row.guild_tag !== -1;
}

function canRecall(row) {
  return onGuildMember(row) || isTagged(row);
}

function gsRecall(row) {
  return `<span class="fshLink recallItem" invid="${
    row.inv_id}" playerid="${
    fallback(row.player_id, theInv.player_id)
  }" mode="1" action="recall">GS</span>`;
}

function gsStore(row) {
  return `<span class="fshLink storeItem" invid="${
    row.inv_id}">GS</span>`;
}

function gsDisplayType(type, row, fn) {
  if (type === 'display') {
    return fn(row);
  }
  return 'GS';
}

function canStore(row) {
  return row.folder_id && !row.bound; // && !row.equipped;
}

function gsRender(_data, type, row) {
  if (canRecall(row)) { return gsDisplayType(type, row, gsRecall); }
  if (canStore(row)) { return gsDisplayType(type, row, gsStore); }
}

function getT(row) {
  if (row.player_id === -1) { return 4; }
  if (canRecall(row)) { return 7; }
  return 1;
}

function player(invPlayer, rowPlayer, guild) {
  if (invPlayer) { return invPlayer; }
  if (rowPlayer !== -1) { return rowPlayer; }
  return guild;
}

function isPartOfSet(row) {
  return row.stats && row.stats.set_name !== '';
}

function nameRenderDisplay(data, row) {
  const t = getT(row);
  const p = player(theInv.player_id, row.player_id,
    theInv.guild_id);

  let bold = data;
  if (row.equipped) { bold = `<b>${data}</b>`; }

  let setName = '';
  if (isPartOfSet(row)) {
    setName = ` (<span class="fshLink setName" set="${row.stats.set_name
    }">set</span>)`;
  }

  return `<a href="${ahSearchUrl}${data
  }" class="fshInvItem tip-dynamic ${
    rarity[row.rarity].clas}" `
    + `data-tipped="fetchitem.php?item_id=${row.item_id
    }&inv_id=${row.inv_id}&t=${t}&p=${p}">${
      bold}</a>${setName}`;
}

function nameRender(data, type, row) {
  if (type !== 'display') { return data; }
  return nameRenderDisplay(data, row);
}

function cantSend(row) {
  return row.equipped || (row.guild_tag === -1 && row.bound);
}

function sendRender(data, type, row) {
  if (cantSend(row)) { return; }
  if (type !== 'display') { return 'Send'; }
  return '<span class="sendItem tip-static sendLink" '
    + 'data-tipped="INSTANTLY SEND THE ITEM. NO REFUNDS OR DO-OVERS! '
    + `Use at own risk." data-inv="${row.inv_id}">Send</span>`;
}

function userInvNotEquipped(row) {
  return row.folder_id && !row.equipped;
}

function guidInvNotEquipped(row) {
  return row.player_id && !row.equipped
    && row.player_id === theInv.current_player_id;
}

const locations = [
  [
    (row) => row.player_id && row.player_id === -1,
    (row, act) => `takeItem" action="${act.a}`,
  ],
  [
    (row) => row.player_id && row.player_id !== theInv.current_player_id,
    (row, act) => `recallItem" playerid="${
      row.player_id}" mode="0" action="${act.a}`,
  ],
  [
    (row) => userInvNotEquipped(row) || guidInvNotEquipped(row),
    (row, act) => act.c,
  ],
];

function wuRender(row, act) {
  const location = locations.find((el) => el[0](row));
  if (location) {
    return `<span class="fshLink ${location[1](row, act)
    }" invid="${row.inv_id}">${act.b}</span>`;
  }
  return '';
}

function wearUseRender(data, _type, row) {
  //            0  1  2  3  4  5  6  7  8 9 10 11121314 15
  // eslint-disable-next-line no-sparse-arrays
  const action = [1, 1, 1, 1, 1, 1, 1, 1, 1, , 2, 2, , , , 2][data];
  if (action === 1) {
    return wuRender(row, {
      a: 'wear',
      b: 'Wear',
      c: 'wearItem',
    });
  }
  if (action === 2) {
    return wuRender(row, {
      a: 'use',
      b: 'Use',
      c: 'useItem',
    });
  }
}

function whereData(row) {
  return fallback(row.folder_id, row.player_id);
}

function playerName(f) {
  if (!calf.membrList[f]) { return '???'; }
  return calf.membrList[f].username;
}

function whereRenderUserFolder(row) {
  if (row.equipped) { return -2; }
  return row.folder_id;
}

function whereRender(data, type, row) {
  if (row.folder_id) {
    return whereRenderUserFolder(row);
  }
  if (row.player_id === -1) { return '~'; }
  return playerName(row.player_id);
}

function whereRenderGuildDisplay(row) {
  if (row.player_id === -1) { return 'Guild Store'; }
  return `<a class="fshMaroon" href="${playerIdUrl
  }${row.player_id}">${playerName(row.player_id)}</a>`;
}

function numeric(a, b) { return a[0] - b[0]; }

function makeOption(folderId, pair) {
  return `<option value="${pair[0]}"${
    isSelected(Number(pair[0]), folderId)}>${
    pair[1]}</option>`;
}

function makeFolderOptions(folderId, folders) {
  return entries(folders).sort(numeric)
    .map(partial(makeOption, folderId)).join('');
}

function whereRenderDisplay(data, type, row) {
  if (row.player_id) {
    return whereRenderGuildDisplay(row);
  }
  if (row.equipped) { return 'Worn'; }
  return `<select class="fshMoveItem" data-inv="${row.inv_id}">${
    makeFolderOptions(row.folder_id, theInv.folders)}</select>`;
}

function whereRenderGuildFilter(row) {
  if (row.player_id === -1) { return 'Guild Store'; }
  return playerName(row.player_id);
}

function whereRenderFilter(data, type, row) {
  if (row.player_id) {
    return whereRenderGuildFilter(row);
  }
  if (row.equipped) { return 'Worn'; }
  return theInv.folders[row.folder_id];
}

let options;
let showQuickDropLinks;
let showQuickSendLinks;

function extendOptions(data) {
  options = extend({}, defaultOptions);
  extend(options, fallback(data, {}));
  showQuickDropLinks = getValue('showQuickDropLinks');
  showQuickSendLinks = getValue('showQuickSendLinks');
}

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
  return 'player_id' in theInv;
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
  insertElement(pCC, fshInv);
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
    data: theInv.items,
    deferRender: true,
    lengthMenu: [[50, 100, 150, 200, -1], [50, 100, 150, 200, 'All']],
    pageLength: 50,
    stateDuration: 0,
    stateSave: true,
  });
}

function hideCols(table) {
  table.column(12).visible('current_player_id' in theInv);
  table.column(17).visible(isUserInv() && showQuickDropLinks);
  table.column(18).visible(isUserInv() && showQuickSendLinks);
}

function doTable() {
  const fshInv = injectTable();
  const table = makeDataTable(fshInv);
  hideCols(table);
  return fshInv;
}

function ajaxSendItems(invIdAry) {
  return daAjaxSendItemsToRecipient(invIdAry).then(ajaxReturnCode);
}

function saveOptions(options) {
  set(`fsh_${calf.subcmd}`, options);
}

function setChecks() {
  querySelectorArray('table.fshInvFilter input[type="checkbox"]').forEach(
    (el) => {
      // eslint-disable-next-line no-param-reassign
      el.checked = options.checkedElements[el.getAttribute('item')] === 1;
    },
  );
  saveOptions(options);
}

function allChecks(fshInv) { // jQuery
  options.checkedElements = inventoryCheckAll;
  setChecks();
  $(fshInv).DataTable().draw(false);
}

function newOpts(newMin, newMax) {
  options.fshMinLvl = newMin;
  options.fshMaxLvl = newMax;
  saveOptions(options);
}

function redrawTable(fshInv) {
  $(fshInv).DataTable().draw(false);
}

function changeLvls(fshInv) { // jQuery
  changeMinMax(newOpts, partial(redrawTable, fshInv));
}

function gearOnly(pair) { return Number(pair[0]) >= 100; }

function hydrate$1(acc, curr) {
  // eslint-disable-next-line prefer-destructuring
  acc[curr[0]] = curr[1];
  return acc;
}

function clearGearOnly(checkedElements) {
  return entries(checkedElements).filter(gearOnly).reduce(hydrate$1, {});
}

function clearChecks(fshInv) { // jQuery
  options.checkedElements = clearGearOnly(options.checkedElements);
  setChecks();
  $(fshInv).DataTable().draw();
}

function removeClass(target) {
  target.closest('tr')
    .find('.takeItem, .recallItem, .wearItem, .dropItem, .sendItem, .storeItem')
    .removeClass();
}

function clear(td, i) { td.eq(i).empty(); } // jQuery

function clearButtons(td) {
  [
    2, // Where
    12, // BP - GS
    13, // GS - W/U
    14, // W/U - Tag
    15, // Tag - Drop
    16, // ? - Send
  ].forEach(partial(clear, td));
}

function killRow(target, data) { // jQuery
  if (data.r === 1) { return; }
  const tr = target.closest('tr');
  const td = $('td', tr);
  clearButtons(td);
  tr.css('text-decoration', 'line-through');
}

function anotherSpinner(target) { // jQuery
  target.empty().append(`<img src="${cdn
  }ui/misc/spinner.gif" width="11" height="11">`);
}

function doAction(fn, target) { // jQuery
  hideQTip(target);
  removeClass(target);
  fn().then(partial(killRow, target));
  anotherSpinner(target);
}

function dropItem(invIdList) {
  return indexAjaxJson({
    cmd: 'profile',
    subcmd: 'dodropitems',
    removeIndex: invIdList,
    ajax: 1,
  }).then(dialog);
}

function getChecks(fshInv) { // jQuery
  options.checkedElements = {};
  querySelectorArray('table.fshInvFilter input[type="checkbox"][item]:checked')
    .forEach(
      (el) => { options.checkedElements[el.getAttribute('item')] = 1; },
    );
  saveOptions(options);
  $(fshInv).DataTable().draw(false);
}

function resetChecks(fshInv) { // jQuery
  options.checkedElements = defaultOptions.checkedElements;
  setChecks();
  $(fshInv).DataTable().draw(false);
}

function resetLvls(fshInv) { // jQuery
  options.fshMinLvl = defaultOptions.fshMinLvl;
  options.fshMaxLvl = defaultOptions.fshMaxLvl;
  saveOptions(options);
  $('#fshMinLvl').val(options.fshMinLvl);
  $('#fshMaxLvl').val(options.fshMaxLvl);
  $(fshInv).DataTable().draw(false);
}

function dostoreitems(invIdAry) {
  return guildInventory({
    subcmd2: 'dostoreitems',
    storeIndex: invIdAry,
  });
}

function storeitems(invIdAry) {
  return indexAjaxData({
    cmd: 'guild',
    subcmd: 'inventory',
    subcmd2: 'dostoreitems',
    storeIndex: invIdAry,
  }).then(htmlResult);
}

function daStoreItems(invIdAry) {
  return $dataAccess(dostoreitems, storeitems, invIdAry);
}

function storeItems(invIdAry) {
  return daStoreItems(invIdAry).then(errorDialog).then(ajaxReturnCode);
}

function setName(fshInv, e) { // jQuery
  $(fshInv).DataTable().search($(e.target).attr('set')).draw();
  $(`#${fshInv.id}_filter input`).trigger('focus');
}

function takeItem(e) { // jQuery
  const target = $(e.target);
  doAction(partial(queueTakeItem, target.attr('invid'), target.attr('action')),
    target);
}

function recallItem(e) { // jQuery
  const target = $(e.target);
  doAction(partial(queueRecallItem, target.attr('invid'),
    target.attr('playerid'), target.attr('mode'), target.attr('action')),
  target);
}

function wearItem(e) { // jQuery
  const target = $(e.target);
  doAction(partial(equipItem, target.attr('invid')), target);
}

function doUseItem(e) { // jQuery
  const target = $(e.target);
  doAction(partial(useItem, target.attr('invid')), target);
}

function doMoveItem(e) { // jQuery
  const target = $(e.target);
  moveItem([target.data('inv')], target.val());
}

function doStoreItem(e) { // jQuery
  const target = $(e.target);
  doAction(partial(storeItems, [target.attr('invid')]), target);
}

function doDropItem(e) { // jQuery
  const target = $(e.target);
  doAction(partial(dropItem, [target.data('inv')]), target);
}

function doSendItem(e) { // jQuery
  const target = $(e.target);
  doAction(partial(ajaxSendItems, [target.data('inv')]), target);
}

function elClick(fshInv, el) { // jQuery
  $(el[0]).on('click', partial(el[1], fshInv));
}

function elementClickHandlers(fshInv) {
  [
    ['#fshReset', resetLvls],
    ['#fshAll', allChecks],
    ['#fshNone', clearChecks],
    ['#fshDefault', resetChecks],
  ].forEach(partial(elClick, fshInv));
}

function spanClick(fshInv, el) { $(fshInv).on('click', `span.${el[0]}`, el[1]); } // jQuery

function spanClickHandlers(fshInv) {
  [
    ['setName', partial(setName, fshInv)],
    ['takeItem', takeItem],
    ['recallItem', recallItem],
    ['wearItem', wearItem],
    ['useItem', doUseItem],
    ['dropItem', doDropItem],
    ['sendItem', doSendItem],
    ['storeItem', doStoreItem],
  ].forEach(partial(spanClick, fshInv));
}

function setupClickHandlers(fshInv) { // jQuery
  elementClickHandlers(fshInv);
  $('table.fshInvFilter').on('click', 'input[type="checkbox"]',
    partial(getChecks, fshInv));
  spanClickHandlers(fshInv);
}

function eventHandlers(fshInv) { // jQuery
  $('#fshMinLvl, #fshMaxLvl').on('keyup', partial(changeLvls, fshInv));
  $(fshInv).on('change', 'select.fshMoveItem', doMoveItem);
  setupClickHandlers(fshInv);
}

function headers() {
  let reportTitle;
  if (theInv.player_id) {
    reportTitle = `<b>&nbsp;Inventory Manager</b> ${
      theInv.items.length
    } items (green = worn, blue = backpack)`;
  } else {
    reportTitle = `<b>&nbsp;Guild Inventory Manager</b> ${
      theInv.items.length
    } items (maroon = in BP, blue=guild store)`;
  }
  setInnerHtml(invManFilter.replace('@@reportTitle@@', reportTitle), pCC);
}

function setLvls() { // jQuery
  $('#fshMinLvl').val(options.fshMinLvl);
  $('#fshMaxLvl').val(options.fshMaxLvl);
}

let itemLvlTest;

function doLvlFilter(_settings, data) {
  return lvlTest(itemLvlTest, intValue(data[1]),
    options.fshMinLvl, options.fshMaxLvl);
}

function lvlFilter() { // jQuery
  itemLvlTest = [(level) => level === 0].concat(playerLvlTest);
  /* Custom filtering function which will search
  data in column 2 between two values */
  $.fn.dataTable.ext.search.push(doLvlFilter);
}

function typeFilter() { // jQuery
  $.fn.dataTable.ext.search.push(
    (_settings, _row, _index, data) => !options.checkedElements
        || options.checkedElements[data.type],
  );
}

function testSetId(data) {
  return options.checkedElements['-1']
    && data.stats && data.stats.set_id !== -1;
}

function setFilter() { // jQuery
  $.fn.dataTable.ext.search.push(
    (_settings, _row, _index, data) => !options.checkedElements
        || !options.checkedElements['-1']
        || testSetId(data),
  );
}

function rarityFilter() { // jQuery
  $.fn.dataTable.ext.search.push(
    (_settings, _row, _index, data) => {
      const rarity = (parseInt(data.rarity, 10) + 100).toString();
      return !options.checkedElements
        || options.checkedElements[rarity];
    },
  );
}

function doSpinner() { // jQuery
  setInnerHtml(`<span id="fshInvMan"><img src = "${
    oldActionSpinner}">&nbsp;Getting inventory data...</span>`, pCC);
}

function hydrate(acc, pair) {
  // eslint-disable-next-line prefer-destructuring
  acc[pair[1].id] = pair[1];
  return acc;
}

function rekeyMembrList() {
  // Rekey membrList from names to id's
  calf.membrList = entries(calf.membrList).filter(notLastUpdate)
    .reduce(hydrate, {});
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
  $('#fshRefresh').on('click', injectInventoryManagerNew);
  clearButton(fshInv);
}

function getInvMan() {
  // eslint-disable-next-line no-unused-labels, no-labels
  betaLbl: { //  Timing output
    time('inventory.getInvMan');
  }
  doInventory();
  // eslint-disable-next-line no-unused-labels, no-labels
  betaLbl: { //  Timing output
    timeEnd('inventory.getInvMan');
  }
}

function asyncCall() {
  add(3, getInvMan);
}

function syncInvMan() { // jQuery
  const prm = [loadDataTables(), buildInv()];
  if (calf.subcmd === 'guildinvmgr') {
    prm.push(getMembrList(false).then(rekeyMembrList));
  }
  prm.push(get(`fsh_${calf.subcmd}`).then(extendOptions));
  allthen(prm, asyncCall);
}

function injectInventoryManagerNew() {
  if (jQueryNotPresent()) { return; }
  doSpinner();
  syncInvMan();
}

export default injectInventoryManagerNew;
//# sourceMappingURL=inventory-adf5c46c.js.map
