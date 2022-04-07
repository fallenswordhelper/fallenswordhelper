import './doFolders.css';
import createDiv from '../common/cElement/createDiv';
import createTr from '../common/cElement/createTr';
import { defTable } from '../support/constants';
import entries from '../common/entries';
import fallback from '../system/fallback';
import getArrayByTagName from '../common/getArrayByTagName';
import getElementById from '../common/getElementById';
import getElementsByTagName from '../common/getElementsByTagName';
import getInventoryById from '../ajax/getInventoryById';
import getValue from '../system/getValue';
import hasClass from '../common/hasClass';
import hideElement from '../common/hideElement';
import insertElement from '../common/insertElement';
import insertElementBefore from '../common/insertElementBefore';
import insertHtmlBeforeBegin from '../common/insertHtmlBeforeBegin';
import jQueryNotPresent from '../common/jQueryNotPresent';
import onclick from '../common/onclick';
import partial from '../common/partial';
import sendEvent from '../analytics/sendEvent';
import task from '../support/task';
import { time, timeEnd } from '../support/debug';

const shouldShow = (hidden, all, hasFolder) => hidden && fallback(all, hasFolder);
const shouldHide = (hidden, all, hasFolder) => !hidden && !all && !hasFolder;
const stColor = (el, item) => { if (item.is_in_st) el.classList.add('isInST'); };

let invItems = {};

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
  sendEvent('trade', 'doHideFolder');
  const items = getArrayByTagName(defTable, getItemDiv());
  items.forEach(partial(hideFolderItem, evt.target.id));
}

function hideFolder(evt) {
  if (evt.target.nodeName === 'SPAN'
      && evt.target.id.indexOf('folderid') !== -1) { doHideFolder(evt); }
}

function folderSpan(pair) {
  return ` &ensp;<span id="folderid${pair[0]}" class="fshLink fshNoWrap" fid=${
    pair[0]}>${pair[1]}</span> `;
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

function tagItem(el, checkbox, item) {
  el.classList.add(`folderid${item.folder_id}`);
  if (invItems.fshHasST) stColor(el, item);
  checkbox.classList.add(`itemid${item.item_id}`);
  checkbox.classList.add(`itemtype${item.type}`);
  if (item.guild_tag !== -1) checkbox.classList.add('isGuildTagged');
}

function forEachInvItem(el) {
  const checkbox = el.children[0]?.lastElementChild.children[0]?.children[0];
  if (!checkbox) { return; }
  const item = invItems[checkbox.value];
  if (item) tagItem(el, checkbox, item);
}

function processTrade(data) {
  const betaOptIn = getValue('betaOptIn');
  if (betaOptIn) { //  Timing output
    time('trade.processTrade');
  }
  invItems = data.items;
  // Highlight items in ST
  const nodeList = getArrayByTagName(defTable, getElementById('item-list'));
  nodeList.forEach(forEachInvItem); // TODO unnecessary DOM manipulation
  doFolderHeaders(data.folders);
  if (betaOptIn) { //  Timing output
    timeEnd('trade.processTrade');
  }
}

export default async function doFolders() {
  if (jQueryNotPresent()) { return; }
  const data = await getInventoryById();
  task(3, processTrade, [data]);
}
