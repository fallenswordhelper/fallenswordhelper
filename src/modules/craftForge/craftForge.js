import './craftForge.css';
import calf from '../support/calf';
import createDiv from '../common/cElement/createDiv';
import createInput from '../common/cElement/createInput';
import createLabel from '../common/cElement/createLabel';
import getArrayByTagName from '../common/getArrayByTagName';
import getElementsByTagName from '../common/getElementsByTagName';
import getInventoryById from '../ajax/getInventoryById';
import hasClass from '../common/hasClass';
import hideElement from '../common/hideElement';
import insertElement from '../common/insertElement';
import insertElementAfterBegin from '../common/insertElementAfterBegin';
import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';
import jQueryPresent from '../common/jQueryPresent';
import makeFolderSpans from '../common/makeFolderSpans';
import on from '../common/on';
import onclick from '../common/onclick';
import { pCC } from '../support/layout';
import task from '../support/task';
import toggleForce from '../common/toggleForce';
import { defTable, itemRE } from '../support/constants';

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
    task(4, enhanceWarehouse);
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

export default function craftForge() {
  if (jQueryPresent() && pCC) {
    getInventoryById().then(inventory);
    task(3, getItems);
  }
}
