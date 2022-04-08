import './trade.css';
import arrayfromList from '../common/arrayfromList';
import calf from '../support/calf';
import createTr from '../common/cElement/createTr';
import defaults from '../support/dataObj.json';
import doFolders from './doFolders';
import getElementById from '../common/getElementById';
import getValue from '../system/getValue';
import hasClass from '../common/hasClass';
import insertElementBefore from '../common/insertElementBefore';
import numberIsNaN from '../common/numberIsNaN';
import onclick from '../common/onclick';
import oneByOne from './oneByOne';
import partial from '../common/partial';
import querySelectorArray from '../common/querySelectorArray';
import sendEvent from '../analytics/sendEvent';
import task from '../support/task';

const typeTests = [
  (itemid) => itemid === 'itemid-1',
  (itemid, checkbox) => itemid === 'itemid-2' && hasClass('itemtype12', checkbox),
  (itemid, checkbox) => itemid === 'itemid-3' && hasClass('isGuildTagged', checkbox),
  hasClass,
];

const thisType = (itemid, checkbox) => typeTests.some((fn) => fn(itemid, checkbox));
const findStCheck = () => getElementById('itemsInSt')?.checked;
const notInSt = (itemsInSt, el) => itemsInSt || !hasClass('isInST', el);
const getCheckbox = (el) => el.children[0].lastElementChild.children[0].children[0];
const doCheck = (bool, ctx) => { ctx.checked = bool; };
const unCheckAll = (checkbox) => { doCheck(false, checkbox); };
const checkAll = (checkbox) => { doCheck(true, checkbox); };
const makeSpan = (el) => ` &ensp;<span id="itemid${
  el[1]}" class="fshCheckAll fshLink fshNoWrap">${el[0]}</span>`;

function getHowMany(itemTables) {
  const howMany = parseInt(getElementById('fshSendHowMany').value, 10);
  if (numberIsNaN(howMany)) { return itemTables.length; }
  if (calf.subcmd !== '-') { return Math.min(100, howMany); }
  return howMany;
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
  sendEvent('trade', 'doCheckAll');
  const itemList = getElementById('item-div') || getElementById('item-list');
  const itemTables = querySelectorArray('table:not(.fshHide)', itemList);
  itemTables
    .map(getCheckbox)
    .forEach(unCheckAll);
  doTheChecks(evt.target.id, itemTables);
}

function toggleAllPlants(evt) {
  if (hasClass('fshCheckAll', evt.target)) { doCheckAll(evt); }
}

function getItemList() {
  const sendClasses = getValue('sendClasses');
  return arrayfromList(sendClasses) || arrayfromList(defaults.sendClasses);
}

function injectTradeOld(itemList) {
  const multiple = createTr({
    id: 'fshSelectMultiple',
    innerHTML: '<td colspan=6>Select:'
      + '&ensp;<span id="itemid-1" class="fshCheckAll fshLink fshNoWrap">All Items</span>'
      + ' &ensp;<span id="itemid-2" class="fshCheckAll fshLink fshNoWrap">All Resources</span>'
      + ' &ensp;<span id="itemid-3" class="fshCheckAll fshLink fshNoWrap">Guild Tagged</span>'
      + `${getItemList().map(makeSpan).join('')} &ensp;How&nbsp;many:`
      + '<input id="fshSendHowMany" type="text" class="custominput fshHowMany" value="all"></td>',
  });
  onclick(multiple, toggleAllPlants);
  insertElementBefore(multiple, itemList.parentNode.parentNode);
}

export default function trade() {
  const itemList = getElementById('item-list');
  if (!itemList) { return; }
  task(3, doFolders);
  task(3, injectTradeOld, [itemList]);
  task(3, oneByOne);
}
