import add from '../support/task';
import calf from '../support/calf';
import {createTr} from '../common/cElement';
import defaults from '../support/dataObj.json';
import doFolders from './doFolders';
import {getElementById} from '../common/getElement';
import getValue from '../system/getValue';
import hasClass from '../common/hasClass';
import insertElementBefore from '../common/insertElementBefore';
import jsonParse from '../common/jsonParse';
import on from '../common/on';
import partial from '../common/partial';
import querySelectorArray from '../common/querySelectorArray';

function getHowMany(itemTables) {
  var howMany = parseInt(getElementById('fshSendHowMany').value, 10);
  if (isNaN(howMany)) {return itemTables.length;}
  if (calf.subcmd !== '-') {return Math.min(100, howMany);}
  return howMany;
}

function itemType(itemid, checkbox) {
  return itemid === 'itemid-2' && hasClass('itemtype12', checkbox);
}

function thisType(itemid, checkbox) {
  return itemid === 'itemid-1' ||
    itemType(itemid, checkbox) ||
    hasClass(itemid, checkbox);
}

function findStCheck() {
  var cbox = getElementById('itemsInSt');
  if (cbox) {return cbox.checked;}
}

function notInSt(itemsInSt, el) {
  return itemsInSt || !hasClass('isInST', el);
}

function getCheckbox(el) {
  return el.children[0].lastElementChild.children[0].children[0];
}

function doCheck(bool, checkbox) {
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
  var itemList = getElementById('item-div') ||
    getElementById('item-list');
  var itemTables = querySelectorArray('table:not(.fshHide)', itemList);
  itemTables
    .map(getCheckbox)
    .forEach(unCheckAll);
  doTheChecks(evt.target.id, itemTables);
}

function toggleAllPlants(evt) {
  if (hasClass('fshCheckAll', evt.target)) {doCheckAll(evt);}
}

function arrayfromList(classes) {
  return jsonParse('[' + classes + ']');
}

function getItemList() {
  var sendClasses = getValue('sendClasses');
  var itemList = arrayfromList(sendClasses);
  if (itemList) {return itemList;}
  return arrayfromList(defaults.sendClasses);
}

function makeSpan(el) {
  return ' &ensp;<span id="itemid' + el[1] +
    '" class="fshCheckAll fshLink fshNoWrap">' + el[0] + '</span>';
}

function injectTradeOld() {
  var multiple = createTr({
    id: 'fshSelectMultiple',
    innerHTML: '<td colspan=6>Select:&ensp;<span id="itemid-1" ' +
      'class="fshCheckAll fshLink fshNoWrap">All Items</span> &ensp;' +
      '<span id="itemid-2" class="fshCheckAll fshLink fshNoWrap">' +
      'All Resources</span>' + getItemList().map(makeSpan).join('') +
      ' &ensp;How&nbsp;many:<input id="fshSendHowMany" type="text" ' +
      'class="custominput" value="all" size=3></td>'
  });
  on(multiple, 'click', toggleAllPlants);
  var el = getElementById('item-list').parentNode.parentNode;
  insertElementBefore(multiple, el);
}

export default function injectTrade() {
  add(3, doFolders);
  add(3, injectTradeOld);
}
