import './doFolders.css';
import add from '../support/task';
import createDiv from '../common/cElement/createDiv';
import createTr from '../common/cElement/createTr';
import { defTable } from '../support/constants';
import entries from '../common/entries';
import fallback from '../system/fallback';
import getArrayByTagName from '../common/getArrayByTagName';
import getElementById from '../common/getElement';
import getElementsByTagName from '../common/getElementsByTagName';
import getInventoryById from '../ajax/getInventoryById';
import hasClass from '../common/hasClass';
import hideElement from '../common/hideElement';
import insertElement from '../common/insertElement';
import insertElementBefore from '../common/insertElementBefore';
import insertHtmlBeforeBegin from '../common/insertHtmlBeforeBegin';
import jQueryNotPresent from '../common/jQueryNotPresent';
import onclick from '../common/onclick';
import partial from '../common/partial';
import { time, timeEnd } from '../support/debug';

let invItems;

function getItemDiv() {
  let itemDiv = getElementById('item-div');
  if (!itemDiv) {
    itemDiv = createDiv({ id: 'item-div', className: 'itemDiv' });
    const itemList = getElementById('item-list');
    const oldItems = getElementsByTagName(defTable, itemList);
    while (oldItems.length) {
      oldItems[0].classList.add('fshBlock');
      insertElement(itemDiv, oldItems[0]);
    }
    insertElementBefore(itemDiv, itemList);
  }
  return itemDiv;
}

function shouldShow(hidden, all, hasFolder) {
  return hidden && fallback(all, hasFolder);
}

function shouldHide(hidden, all, hasFolder) {
  return !hidden && !all && !hasFolder;
}

function hideFolderItem(folderid, el) {
  // eslint-disable-next-line no-param-reassign
  el.children[0].lastElementChild.children[0].children[0].checked = false;
  const hidden = hasClass('fshHide', el);
  const all = folderid === 'folderid0';
  const hasFolder = hasClass(folderid, el);
  if (shouldShow(hidden, all, hasFolder)) {
    el.classList.remove('fshHide');
    el.classList.add('fshBlock'); // show()
  }
  if (shouldHide(hidden, all, hasFolder)) {
    el.classList.remove('fshBlock');
    hideElement(el); // hide()
  }
}

function doHideFolder(evt) {
  const items = getArrayByTagName(defTable, getItemDiv());
  items.forEach(partial(hideFolderItem, evt.target.id));
}

function hideFolder(evt) {
  if (evt.target.nodeName === 'SPAN'
      && evt.target.id.indexOf('folderid') !== -1) { doHideFolder(evt); }
}

function folderSpan(pair) {
  return ` &ensp;<span id="folderid${pair[0]
  }" class="fshLink fshNoWrap" fid=${pair[0]}>${
    pair[1]}</span> `;
}

function doFolderHeaders(folders) {
  const foldersRow = createTr({
    id: 'fshFolderSelect',
    innerHTML: '<td colspan=6>'
      + '<span id="folderid0" class="fshLink" fid=0>All</span>'
      + ` &ensp;<span id="folderid-1" class="fshLink" fid="-1">Main</span>${
        entries(folders).map(folderSpan).join('')}`,
  });
  onclick(foldersRow, hideFolder);
  const el = getElementById('item-list').parentNode.parentNode;
  insertHtmlBeforeBegin(el, '<tr id="fshShowSTs">'
    + '<td align="center" colspan=6>'
    + '<label><input type="checkbox" id="itemsInSt" checked> '
    + 'Select items in ST</label></td></tr>');
  insertElementBefore(foldersRow, el);
}

function stColor(el, item) {
  if (item.is_in_st) {
    el.classList.add('isInST');
  }
}

function forEachInvItem(el) {
  const cell = el.children[0].lastElementChild.children[0];
  if (!cell) { return; }
  const checkbox = cell.children[0];
  if (!checkbox) { return; }
  const item = invItems[checkbox.getAttribute('value')];
  if (item) {
    el.classList.add(`folderid${item.folder_id}`);
    if (invItems.fshHasST) { stColor(el, item); }
    checkbox.classList.add(`itemid${item.item_id}`);
    checkbox.classList.add(`itemtype${item.type}`);
  }
}

function processTrade(data) {
  // eslint-disable-next-line no-unused-labels, no-labels
  betaLbl: { //  Timing output
    time('trade.processTrade');
  }
  invItems = data.items;
  // Highlight items in ST
  const nodeList = getArrayByTagName(defTable, getElementById('item-list'));
  nodeList.forEach(forEachInvItem); // TODO unnecessary DOM manipulation
  doFolderHeaders(data.folders);
  // eslint-disable-next-line no-unused-labels, no-labels
  betaLbl: { //  Timing output
    timeEnd('trade.processTrade');
  }
}

function gotInventory(data) {
  add(3, processTrade, [data]);
}

export default function doFolders() { // jQuery.min
  if (jQueryNotPresent()) { return; }
  getInventoryById().then(gotInventory);
}
