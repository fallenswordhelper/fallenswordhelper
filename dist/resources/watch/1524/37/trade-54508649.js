import { y as jQueryNotPresent, z as getElementById, b as createDiv, g as getElementsByTagName, d as defTable, i as insertElement, a6 as fallback, h as hasClass, m as getArrayByTagName, s as partial, e as entries, o as onclick, aj as time, ak as timeEnd, a as add, $ as $dataAccess, E as querySelector, F as querySelectorArray, c as calf, b6 as jsonParse, I as getValue, ai as defaults } from './calfSystem-6840a38e.js';
import { c as createTr } from './createTr-d6e52f73.js';
import { g as getInventoryById } from './getInventoryById-6984c9dd.js';
import { h as hideElement } from './hideElement-4575b6b4.js';
import { i as insertElementBefore } from './insertElementBefore-656c48d5.js';
import { i as insertHtmlBeforeBegin } from './insertHtmlBeforeBegin-20d2a2e1.js';
import { n as numberIsNaN } from './numberIsNaN-a6723163.js';
import { c as createButton } from './createButton-bd777447.js';
import { s as senditems, a as senditems$1 } from './sendItems-eac2bbdf.js';
import { i as insertElementAfter } from './insertElementAfter-be9367f8.js';
import './getInventory-832d18e6.js';
import './guildStore-42fc3208.js';
import './cmdExport-31c126b7.js';
import './indexAjaxJson-dfd6ce16.js';
import './htmlResult-3178c643.js';

var css$1 = ".itemDiv {width: 403px;}\n.isInST {background-color: red;}\n";
var modules_a0e901d2 = {};

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
  const checkbox = el.children[0].lastElementChild.children[0].children[0];
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

function doFolders() { // jQuery.min
  if (jQueryNotPresent()) { return; }
  getInventoryById().then(gotInventory);
}

var css = "#oneByOneBtn {\n  font-size: inherit;\n  margin-left: 10px;\n}\n";
var modules_caf98654 = {};

function daSendItems(user, invIdAry) {
  return $dataAccess(senditems, senditems$1, user, invIdAry);
}

async function sendThem(prm, options) {
  const data = await prm;
  // eslint-disable-next-line no-console
  console.log('promise data', data);
  if (data === null || data.s) { return daSendItems(options[0], options[1]); }
  return data;
}

async function onBtnClick() {
  const user = querySelector('form[name="sendItemForm"] [name="target_username"]');
  const items = querySelectorArray('[name="sendItemList[]"]:checked')
    .map((el) => [user.value, [el.value]]);
  const finalResult = await items.reduce(sendThem, Promise.resolve(null));
  // eslint-disable-next-line no-console
  console.log('finalResult', finalResult);
}

function oneByOne() {
  const sendItemBtn = querySelector('form[name="sendItemForm"] input[value="Send"]');
  const myBtn = createButton({
    className: 'fshBl',
    id: 'oneByOneBtn',
    textContent: 'OneByOne',
    type: 'button',
  });
  insertElementAfter(myBtn, sendItemBtn);
  onclick(myBtn, onBtnClick);
}

function getHowMany(itemTables) {
  const howMany = parseInt(getElementById('fshSendHowMany').value, 10);
  if (numberIsNaN(howMany)) { return itemTables.length; }
  if (calf.subcmd !== '-') { return Math.min(100, howMany); }
  return howMany;
}

function itemType(itemid, checkbox) {
  return itemid === 'itemid-2' && hasClass('itemtype12', checkbox);
}

function thisType(itemid, checkbox) {
  return itemid === 'itemid-1'
    || itemType(itemid, checkbox)
    || hasClass(itemid, checkbox);
}

function findStCheck() {
  const cbox = getElementById('itemsInSt');
  if (cbox) { return cbox.checked; }
}

function notInSt(itemsInSt, el) {
  return itemsInSt || !hasClass('isInST', el);
}

function getCheckbox(el) {
  return el.children[0].lastElementChild.children[0].children[0];
}

function doCheck(bool, checkbox) {
  // eslint-disable-next-line no-param-reassign
  checkbox.checked = bool;
}

function unCheckAll(checkbox) {
  doCheck(false, checkbox);
}

function checkAll(checkbox) {
  doCheck(true, checkbox);
}

function doTheChecks(itemid, itemTables) {
  itemTables
    .filter(partial(notInSt, findStCheck()))
    .map(getCheckbox)
    .filter(partial(thisType, itemid))
    .slice(0, getHowMany(itemTables))
    .forEach(checkAll);
}

function doCheckAll(evt) {
  const itemList = getElementById('item-div')
    || getElementById('item-list');
  const itemTables = querySelectorArray('table:not(.fshHide)', itemList);
  itemTables
    .map(getCheckbox)
    .forEach(unCheckAll);
  doTheChecks(evt.target.id, itemTables);
}

function toggleAllPlants(evt) {
  if (hasClass('fshCheckAll', evt.target)) { doCheckAll(evt); }
}

function arrayfromList(classes) {
  return jsonParse(`[${classes}]`);
}

function getItemList() {
  const sendClasses = getValue('sendClasses');
  const itemList = arrayfromList(sendClasses);
  if (itemList) { return itemList; }
  return arrayfromList(defaults.sendClasses);
}

function makeSpan(el) {
  return ` &ensp;<span id="itemid${el[1]
  }" class="fshCheckAll fshLink fshNoWrap">${el[0]}</span>`;
}

function injectTradeOld() {
  const multiple = createTr({
    id: 'fshSelectMultiple',
    innerHTML: '<td colspan=6>Select:&ensp;<span id="itemid-1" '
      + 'class="fshCheckAll fshLink fshNoWrap">All Items</span> &ensp;'
      + '<span id="itemid-2" class="fshCheckAll fshLink fshNoWrap">'
      + `All Resources</span>${getItemList().map(makeSpan).join('')}`
      + ' &ensp;How&nbsp;many:<input id="fshSendHowMany" type="text" '
      + 'class="custominput" value="all" size=3></td>',
  });
  onclick(multiple, toggleAllPlants);
  const el = getElementById('item-list').parentNode.parentNode;
  insertElementBefore(multiple, el);
}

function injectTrade() {
  add(3, doFolders);
  add(3, injectTradeOld);
  // eslint-disable-next-line no-unused-labels, no-labels
  devLbl: { //  oneByOne
    add(3, oneByOne);
  }
}

export default injectTrade;
//# sourceMappingURL=trade-54508649.js.map
