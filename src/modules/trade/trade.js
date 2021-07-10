import './trade.css';
import calf from '../support/calf';
import createTr from '../common/cElement/createTr';
import defaults from '../support/dataObj.json';
import doFolders from './doFolders';
import getElementById from '../common/getElementById';
import getValue from '../system/getValue';
import hasClass from '../common/hasClass';
import insertElementBefore from '../common/insertElementBefore';
import jsonParse from '../common/jsonParse';
import numberIsNaN from '../common/numberIsNaN';
import onclick from '../common/onclick';
import oneByOne from './oneByOne';
import partial from '../common/partial';
import querySelectorArray from '../common/querySelectorArray';
import task from '../support/task';

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

function injectTradeOld(itemList) {
  const multiple = createTr({
    id: 'fshSelectMultiple',
    innerHTML: '<td colspan=6>Select:&ensp;<span id="itemid-1" '
      + 'class="fshCheckAll fshLink fshNoWrap">All Items</span> &ensp;'
      + '<span id="itemid-2" class="fshCheckAll fshLink fshNoWrap">'
      + `All Resources</span>${getItemList().map(makeSpan).join('')}`
      + ' &ensp;How&nbsp;many:<input id="fshSendHowMany" type="text" '
      + 'class="custominput fshHowMany" value="all"></td>',
  });
  onclick(multiple, toggleAllPlants);
  insertElementBefore(multiple, itemList.parentNode.parentNode);
}

export default function trade() {
  const itemList = getElementById('item-list');
  if (!itemList) { return; }
  task(3, doFolders);
  task(3, injectTradeOld, [itemList]);
  if (calf.userIsDev) { //  oneByOne
    task(3, oneByOne);
  }
}
