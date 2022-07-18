import './mailbox.css';
import daMailboxTake from '../_dataAccess/daMailboxTake';
import createDiv from '../common/cElement/createDiv';
import createInput from '../common/cElement/createInput';
import createLabel from '../common/cElement/createLabel';
import createUl from '../common/cElement/createUl';
import chunk from '../common/chunk';
import entries from '../common/entries';
import getArrayByTagName from '../common/getArrayByTagName';
import getElementById from '../common/getElementById';
import hasClass from '../common/hasClass';
import insertElement from '../common/insertElement';
import insertElementBefore from '../common/insertElementBefore';
import isArray from '../common/isArray';
import jQueryNotPresent from '../common/jQueryNotPresent';
import jsonFail from '../common/jsonFail';
import once from '../common/once';
import onclick from '../common/onclick';
import outputResult from '../common/outputResult';
import partial from '../common/partial';
import regExpGroups from '../common/regExpGroups';
import setInnerHtml from '../dom/setInnerHtml';
import { fetchItemRe } from '../support/constants';
import { pcc } from '../support/layout';

function makeQtLabel(id, text, injector) {
  const lbl = createLabel({
    id,
    className: 'sendLink',
    htmlFor: 'fshQuickTake',
    textContent: `Toggle ${text}`,
  });
  insertElementBefore(lbl, injector);
  return lbl;
}

function reduceItems(acc, curr) {
  const img = curr.children[0];
  const { tipped } = img.dataset;
  const { itemId, invId } = regExpGroups(fetchItemRe, tipped);
  if (!itemId || !invId) return acc;
  if (acc[itemId]) {
    acc[itemId].invIds.push(invId);
  } else {
    acc[itemId] = {
      invIds: [invId],
      tipped: tipped.replace(/&extra=\d/, ''),
      src: img.src,
    };
  }
  return acc;
}

function basicQt() {
  return createDiv({
    id: 'quickTake',
    innerHTML: '<div class="fshCenter">'
      + '<br><font size="3"><b>Quick Take</b></font><br><br>'
      + 'Select which item to take all similar items from your Mailbox.'
    + '</div><div></div>',
  });
}

function makeTakeResult() {
  const takeContainer = createDiv();
  const takeResult = createUl();
  insertElement(takeContainer, takeResult);
  return { takeContainer, takeResult };
}

function makeItemBox(itemTbl, pair) {
  const item = pair[1];
  const container = createDiv();
  const itemDiv = createDiv({
    innerHTML: `<img src="${item.src}" class="tip-dynamic" `
      + `data-tipped="${item.tipped}">`,
  });
  insertElement(container, itemDiv);
  const buttonDiv = createDiv({
    innerHTML: `<button class="fshBl fshBls" data-id="${pair[0]
    }">Take All ${item.invIds.length}</button>`,
  });
  insertElement(container, buttonDiv);
  insertElement(itemTbl, container);
}

function makeItemBoxes(itemTbl, itemList) {
  entries(itemList).forEach(partial(makeItemBox, itemTbl));
}

function killQTip(itemId) { // jQuery
  const qtipApi = $(`#temp-inv-img-${itemId}`).qtip('api');
  if (qtipApi) { qtipApi.destroy(true); }
}

function removeImg(item) {
  killQTip(item.id);
  const thisCell = getElementById(`temp-inv-${item.id}`);
  if (thisCell) { setInnerHtml('', thisCell); }
}

function takeSuccess(takeResult, json) {
  json.r.forEach(removeImg);
  outputResult(`${json.r.length.toString()} item(s) taken.`, takeResult);
}

function doneTake(takeResult, json) {
  if (jsonFail(json, takeResult)) { return; }
  if (isArray(json.r)) { takeSuccess(takeResult, json); }
}

function doTakeItem(takeResult, el) {
  daMailboxTake(el).then(partial(doneTake, takeResult));
}

function takeSimilar(itemList, takeResult, target) { // jQuery.min
  const type = target.dataset.id;
  const { invIds } = itemList[type];
  setInnerHtml(`taking all ${invIds.length} items`, target.parentNode);
  chunk(40, invIds).forEach(partial(doTakeItem, takeResult));
}

function clickEvt(itemList, takeResult, evt) {
  if (hasClass('fshBls', evt.target)) {
    takeSimilar(itemList, takeResult, evt.target);
  }
}

function makeItemTable(itemList, qt, takeResult) {
  const itemTbl = createDiv({ className: 'fshTakeGrid' });
  makeItemBoxes(itemTbl, itemList);
  insertElement(qt, itemTbl);
  onclick(itemTbl, partial(clickEvt, itemList, takeResult));
}

function makeQtDiv(itemList) {
  const qt = basicQt();
  const { takeContainer, takeResult } = makeTakeResult();
  makeItemTable(itemList, qt, takeResult);
  insertElement(qt, createDiv());
  insertElement(qt, takeContainer);
  insertElement(pcc(), qt);
}

function toggleQuickTake(items, injector) {
  makeQtLabel('qtOn', 'Mailbox', injector);
  const itemList = items.reduce(reduceItems, {});
  makeQtDiv(itemList);
}

function makeQtCheckbox(items, injector) {
  const qtCheckbox = createInput({
    id: 'fshQuickTake',
    type: 'checkbox',
  });
  insertElementBefore(qtCheckbox, injector);
  once(qtCheckbox, 'change', partial(toggleQuickTake, items, injector));
}

export default function mailbox() {
  if (jQueryNotPresent() || !pcc()) { return; }
  const items = getArrayByTagName('a', pcc());
  if (items.length === 0) { return; } // Empty mailbox
  const injector = pcc().lastElementChild;
  makeQtCheckbox(items, injector);
  makeQtLabel('qtOff', 'Quick Take', injector);
}
