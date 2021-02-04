import { c as chunk } from './chunk-c6dcf4eb.js';
import { w as callApp, x as jQueryNotPresent, m as getArrayByTagName, p as pCC, l as itemRE, b as createDiv, i as insertElement, e as entries, s as partial, y as getElementById, A as setInnerHtml, P as isArray, h as hasClass, o as onclick, Q as once } from './calfSystem-cc2b30b5.js';
import { c as createInput } from './createInput-fee5fccc.js';
import { c as createLabel } from './createLabel-d55f0cc2.js';
import { c as createUl } from './createUl-0ac7347d.js';
import { i as insertElementBefore } from './insertElementBefore-0a7f2602.js';
import { o as outputResult, j as jsonFail } from './jsonFail-02a50b37.js';

var css = ".fshTakeGrid > div > div:nth-child(2) {text-align: center;}\n#fshQuickTake,\n#fshQuickTake:checked ~ form,\n#fshQuickTake ~ #qtOn,\n#fshQuickTake:checked ~ #qtOff,\n#fshQuickTake ~ #quickTake {\n  display: none;\n}\n#fshQuickTake:checked ~ #qtOn,\n#fshQuickTake:checked ~ #quickTake {\n  display: block;\n}\n#quickTake > div:nth-child(2),\n#quickTake > div:nth-child(4) {height: 10px;}\n";
var modules_4b6b4acb = {};

function takeitems(invIdAry) {
  return callApp({
    cmd: 'tempinv',
    subcmd: 'takeitems',
    item: invIdAry,
  });
}

// import { $dataAccess } from './_dataAccess';

function daMailboxTake(invIdAry) {
  // return $dataAccess(takeitems, mailboxTake, invIdAry);
  return takeitems(invIdAry);
}

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
  const itemIDs = itemRE.exec(tipped);
  if (!itemIDs) { return acc; }
  const itemId = itemIDs[1];
  const invId = itemIDs[2];
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

function makeTakeResult(qt) {
  const takeContainer = createDiv();
  const takeResult = createUl();
  insertElement(takeContainer, takeResult);
  insertElement(qt, takeContainer);
  return takeResult;
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
  const takeResult = makeTakeResult(qt);
  insertElement(qt, createDiv());
  makeItemTable(itemList, qt, takeResult);
  insertElement(pCC, qt);
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
  once(qtCheckbox, 'change',
    partial(toggleQuickTake, items, injector));
}

function injectMailbox() {
  if (jQueryNotPresent()) { return; }
  const items = getArrayByTagName('a', pCC);
  if (items.length === 0) { return; } // Empty mailbox
  const injector = pCC.lastElementChild;
  makeQtCheckbox(items, injector);
  makeQtLabel('qtOff', 'Quick Take', injector);
}

export default injectMailbox;
//# sourceMappingURL=mailbox-5330b44e.js.map
