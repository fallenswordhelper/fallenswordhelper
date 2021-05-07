import { e as entries, j as jQueryPresent, a as add, g as getElementsByTagName, d as defTable, p as pCC, c as calf, b as createDiv, i as insertElement, h as hasClass, o as onclick, f as insertHtmlBeforeEnd, k as on, l as itemRE, m as getArrayByTagName } from './calfSystem-476ab75d.js';
import { c as createInput } from './createInput-a1c8d139.js';
import { c as createLabel } from './createLabel-d3de902b.js';
import { g as getInventoryById } from './getInventoryById-cb43cec5.js';
import { h as hideElement } from './hideElement-0d0f9065.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-7c55ba28.js';
import { m as makeFolderSpan } from './makeFolderSpan-a13e9ca6.js';
import { t as toggleForce } from './toggleForce-aa6abab1.js';
import './getInventory-97f1d676.js';
import './guildStore-ffacd1c7.js';
import './cmdExport-5254d9ed.js';
import './indexAjaxJson-2772144f.js';
import './insertElementBefore-23d4e956.js';

var css = ".fshItemGrid .fshHide {\n  display: none;\n}\n";
var modules_86d76469 = {};

function wornSelector(needsWorn) {
  if (needsWorn) { return makeFolderSpan('-2', 'Worn'); }
  return '';
}

function folderSpan(ary) {
  return makeFolderSpan(ary[0], ary[1]);
}

function makeFolderSpans(folders, needsWorn) {
  return makeFolderSpan('0', 'All')
    + wornSelector(needsWorn)
    + makeFolderSpan('-1', 'Main')
    + entries(folders).map(folderSpan).join('');
}

let itemTable;
let itemsAry;
let invItems;
let folderId = 0;
let perfBox;
let itemGrid;

function whichTableHasItems() {
  const allTables = getElementsByTagName(defTable, pCC.lastElementChild);
  if (calf.cmd === 'crafting') {
    return allTables[1];
  }
  return allTables[0];
}

function insertItem(item) {
  const itemDiv = createDiv();
  const aLink = item[0].parentNode;
  insertElement(itemDiv, aLink);
  insertElement(itemGrid, itemDiv);
}

function drawingNewItemTable() {
  if (!itemGrid) {
    itemGrid = createDiv({ className: 'fshItemGrid' });
    itemsAry.forEach(insertItem);
    insertElementAfterBegin(itemTable.parentNode, itemGrid);
    hideElement(itemTable);
  }
}

function testFolder(item) {
  return folderId !== 0 && item[2] !== folderId;
}

function testCraft(item) {
  return perfBox.checked && item[3] !== 'Perfect';
}

function afn(item) {
  const myDiv = item[0].parentNode.parentNode;
  toggleForce(myDiv, testFolder(item) || testCraft(item));
}

function reDrawGrid() {
  drawingNewItemTable();
  itemsAry.forEach(afn);
}

function doHideFolders(evt) {
  if (!hasClass('fshFolder', evt.target)) { return; }
  const evtFid = Number(evt.target.dataset.folder);
  if (evtFid !== folderId) {
    folderId = evtFid;
    reDrawGrid();
  }
}

function getFolderId(item) {
  if (item.equipped) { return -2; }
  return item.folder_id;
}

function addProps(item) {
  const invItem = invItems[item[1]];
  if (invItem) {
    item.push(getFolderId(invItem), invItem.craft);
  }
}

function enhanceWarehouse() {
  itemsAry.forEach(addProps);
}

function doFolderButtons(folders) {
  const inject = itemTable.parentNode.parentNode
    .previousElementSibling.children[0];
  inject.classList.add('fshCenter');
  onclick(inject, doHideFolders);
  insertHtmlBeforeEnd(inject, makeFolderSpans(folders, true));
  return inject;
}

function doPerfSwitch(inject) {
  if (calf.cmd === 'crafting') {
    perfBox = { checked: false };
    return;
  }
  const perfLabel = createLabel({
    className: 'fshVMid',
    innerHTML: '<span class="fshLink">Perfect</span> ',
  });
  perfBox = createInput({
    className: 'fshVMid',
    type: 'checkbox',
  });
  on(perfBox, 'change', reDrawGrid);
  insertElement(perfLabel, perfBox);
  insertHtmlBeforeEnd(inject, ' &ensp;');
  insertElement(inject, perfLabel);
}

function inventory(data) {
  if (data.items && itemTable) {
    invItems = data.items;
    add(4, enhanceWarehouse);
    const inject = doFolderButtons(data.folders);
    doPerfSwitch(inject);
  }
}

function imgItemId(img) {
  const { tipped } = img.dataset;
  const matches = tipped.match(itemRE);
  return [img, matches[2]];
}

function getItems() {
  itemTable = whichTableHasItems();
  itemsAry = getArrayByTagName('img', itemTable).map(imgItemId);
}

function craftForge() {
  if (jQueryPresent()) {
    getInventoryById().then(inventory);
    add(3, getItems);
  }
}

export default craftForge;
//# sourceMappingURL=craftForge-17cef443.js.map
