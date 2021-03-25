import { F as querySelectorArray, t as createDocument, aA as retryAjax, u as indexAjaxData, bq as profile, $ as $dataAccess, ao as cdn, ay as playerId, f as insertHtmlBeforeEnd, B as setInnerHtml, i as insertElement, Q as isArray, Y as sendEvent, s as partial, b as createDiv, A as setText, w as infoBoxFrom, K as getElementsByClassName, z as getElementById, l as itemRE, m as getArrayByTagName, C as getText, E as querySelector, Z as jQueryDialog, cc as insertQuickExtract, S as clickThis, o as onclick, bQ as classHandler } from './calfSystem-6840a38e.js';
import { c as createSpan } from './createSpan-66655207.js';
import { c as createTBody } from './createTBody-b1aadcd9.js';
import { c as createTable } from './createTable-358230d2.js';
import { a as allthen } from './allthen-e710674d.js';
import { i as insertTextBeforeEnd } from './insertTextBeforeEnd-6dc459bc.js';
import { t as toLowerCase } from './toLowerCase-9d38da0b.js';
import { c as chunk } from './chunk-eb7f7c4d.js';
import { e as errorDialog } from './errorDialog-dd9ceb95.js';
import { g as getArrayByClassName } from './getArrayByClassName-8e96c4f0.js';
import { h as hideElement } from './hideElement-4575b6b4.js';
import './all-d206e4b9.js';
import './dialogMsg-f2f50c63.js';

const componentRe = /\?item_id=(\d+)&inv_id=(\d+)&.*&vcode=([0-9a-f]+)/;

function details(a) {
  const pattern = a.children[0].dataset.tipped.match(componentRe);
  return {
    a: Number(pattern[2]),
    b: Number(pattern[1]),
    v: pattern[3],
  };
}

const getComponents$1 = (doc) => querySelectorArray('a[href*="=destroycomponent&"]', doc).map(details);

const getSlots = (doc) => querySelectorArray('td[background*="1x1mini"]', doc).length;

function processPages(prm) {
  const asDocs = prm.map(createDocument);
  const perPage = asDocs.map(getComponents$1);
  const r = [].concat(...perPage);
  const cm = asDocs.map(getSlots).reduce((a, b) => a + b, 0);
  return { h: { cm }, r };
}

function firstPage(html) {
  const doc = createDocument(html);
  const pages = querySelectorArray('a[href*="profile&component_page="]', doc);
  const profiles = pages.map((a) => retryAjax(a.href));
  return allthen(profiles, processPages);
}

// Incomplete
function components$1() {
  return indexAjaxData({ cmd: 'profile' }).then(firstPage);
}

function loadComponents() {
  return profile({ subcmd: 'loadcomponents' });
}

function daComponents() {
  return $dataAccess(loadComponents, components$1);
}

let componentList;

function tallyComponent(acc, el) {
  acc[el.b] = acc[el.b] || {
    a: el.a,
    b: el.b,
    count: 0,
    del: [],
    v: el.v,
  };
  acc[el.b].count += 1;
  acc[el.b].del.push(el.a);
  return acc;
}

function prepareComponentList(data) {
  componentList = data.r.reduce(tallyComponent, {});
}

function tallyTableRow(acc, comp) {
  return `${acc}<tr><td><img src="${cdn}items/${comp.b
  }.gif" class="fshTblCenter tip-dynamic" data-tipped="fetchitem.php?`
    + `item_id=${comp.b}&inv_id=${comp.a}&t=2&p=${playerId()
    }&vcode=${comp.v}"></td><td>${comp.count
    }</td><td>[<span class="sendLink compDelType" data-compid="${comp.b
    }">Del</span>]</td></tr>`;
}

function makeTallyTbody(data) {
  const tBody = createTBody();
  prepareComponentList(data);
  insertHtmlBeforeEnd(tBody,
    `<tr><td colspan="3">Component Summary</td></tr>${
      Object.values(componentList).reduce(tallyTableRow, '')}`);
  return tBody;
}

function makeTotalCell(tbl) {
  const totRow = tbl.insertRow(-1);
  insertHtmlBeforeEnd(totRow, '<td>Total:</td>');
  const totCell = totRow.insertCell(-1);
  totCell.colSpan = 2;
  return totCell;
}

function makeUsedCount(data) {
  const usedCount = data.r.length;
  const usedCountDom = createSpan();
  setInnerHtml(usedCount, usedCountDom);
  return usedCountDom;
}

function makeTotalRow(tbl, data) {
  const totCell = makeTotalCell(tbl);
  insertElement(totCell, makeUsedCount(data));
  insertTextBeforeEnd(totCell, ` / ${data.h.cm.toString()}`);
}

function makeTallyTable(data) {
  const tbl = createTable({ className: 'fshTblCenter', id: 'fshTally' });
  insertElement(tbl, makeTallyTbody(data));
  makeTotalRow(tbl, data);
  return tbl;
}

function displayComponentTally(target, data) {
  if (!isArray(data.r)) { return; }
  const sumComp = target.parentNode;
  if (sumComp) {
    setInnerHtml('', sumComp);
    insertElement(sumComp, makeTallyTable(data));
  }
}

function countComponent(target) { // jQuery.min
  sendEvent('components', 'countComponent');
  daComponents().then(partial(displayComponentTally, target));
}

function decorateButton(label) {
  const parentDiv = createDiv();
  const innerSpan = createSpan({
    className: `sendLink ${toLowerCase(label).replace(/ /g, '-')}`,
    textContent: label,
  });
  setText('[', parentDiv);
  insertElement(parentDiv, innerSpan);
  insertHtmlBeforeEnd(parentDiv, ']');
  return parentDiv;
}

function destroyComponent$1(componentIdAry) {
  return profile({ subcmd: 'destroycomponent', removeIndex: componentIdAry });
}

function ajaxResult(componentId, html) {
  const info = infoBoxFrom(html);
  let r = 1;
  if (info === 'Component destroyed.') { r = 0; }
  return { r, m: info, c: componentId };
}

function destroyComponent(componentId) {
  return indexAjaxData({
    cmd: 'profile',
    subcmd: 'destroycomponent',
    component_id: componentId,
  }).then(partial(ajaxResult, componentId));
}

function formatResults(resultAry) {
  const good = resultAry.filter((e) => e.r === 0);
  const bad = resultAry.filter((e) => e.r === 1);
  if (good.length > 0) {
    return { r: good.map((e) => e.c), s: true };
  }
  if (bad.length > 0) {
    return { e: { message: bad[0].m }, s: false };
  }
  return { e: { message: resultAry[0].m }, s: false };
}

function dropComponent(componentIdAry) {
  return allthen(componentIdAry.map(destroyComponent), formatResults);
}

function daDestroyComponent(componentIdAry) {
  return $dataAccess(destroyComponent$1, dropComponent, componentIdAry);
}

let invTableCache;

function getInvTable() {
  if (!invTableCache) {
    const invTables = getElementsByClassName('inventory-table',
      getElementById('profileRightColumn'));
    if (invTables.length === 2) { [, invTableCache] = invTables; }
  }
  return invTableCache;
}

let visibleCache;

function getComponents(acc, x) {
  const matches = x.dataset.tipped.match(itemRE);
  acc[matches[2]] = x.parentNode.parentNode;
  return acc;
}

function getVisibleComponents() {
  if (!visibleCache) {
    const nodeList = getArrayByTagName('img', getInvTable());
    visibleCache = nodeList.reduce(getComponents, {});
  }
  return visibleCache;
}

function blatElement(visibleComponents, a) {
  if (visibleComponents[a]) { setInnerHtml('', visibleComponents[a]); }
}

function deleteVisible(ary) {
  ary.forEach(partial(blatElement, getVisibleComponents()));
}

function updateUsedCount(del) {
  const invTableParent = getInvTable().parentNode;
  if (!invTableParent) { return; }
  const fshTally = invTableParent.children[2].children[1].children[0];
  if (fshTally.tagName !== 'TABLE') { return; }
  const tallyRows = fshTally.rows;
  const usedCountDom = tallyRows[tallyRows.length - 1].cells[1].children[0];
  let usedCount = Number(getText(usedCountDom));
  usedCount -= del;
  setText(usedCount, usedCountDom);
}

function doSpinner(td) {
  setInnerHtml('', td);
  // eslint-disable-next-line no-param-reassign
  td.className = 'guildTagSpinner';
  // eslint-disable-next-line no-param-reassign
  td.style.backgroundImage = `url('${cdn}ui/misc/spinner.gif')`;
}

function destroyed(data) {
  if (data.s && isArray(data.r)) {
    deleteVisible(data.r);
    updateUsedCount(data.r.length);
  }
}

function removeSpinner(td) { td.parentNode.remove(); }

function destroy(el) {
  return daDestroyComponent(el).then(destroyed);
}

function delCompType(target) { // jQuery.min
  const toDelete = componentList[target.dataset.compid].del;
  const td = target.parentNode;
  doSpinner(td);
  const prm = chunk(30, toDelete).map(destroy);
  allthen(prm, partial(removeSpinner, td));
}

function updateComponentCounts(itemId) {
  const delBtn = querySelector(`#fshTally [data-compid="${itemId}"]`);
  if (!delBtn) { return; }
  const countDom = delBtn.parentNode.parentNode.children[1];
  const count = Number(getText(countDom)) - 1;
  setText(count, countDom);
}

function compDeleted(target, itemId, data) {
  if (data.s) {
    updateComponentCounts(itemId);
    updateUsedCount(1);
    if (target.parentNode) { setInnerHtml('', target.parentNode); }
  }
}

function delComponent(target) { // jQuery.min
  const { tipped } = target.parentNode.children[0].children[0].dataset;
  const matches = tipped.match(itemRE);
  const itemId = matches[1];
  const componentId = matches[2];
  daDestroyComponent([componentId])
    .then(errorDialog)
    .then(partial(compDeleted, target, itemId));
}

const buttonLabels = [
  'Enable Quick Del',
  'Count Components',
  'Quick Extract Components',
];

function addButtons(acc, el) {
  insertElement(acc, decorateButton(el));
  return acc;
}

function componentBtnContainer() {
  return buttonLabels.reduce(addButtons, createDiv({ className: 'fshCenter' }));
}

function quickExtractHandler() {
  sendEvent('components', 'insertQuickExtract');
  jQueryDialog(insertQuickExtract);
}

function addDelBtn(el) {
  insertHtmlBeforeEnd(el.parentNode.parentNode,
    '<span class="compDelBtn">Del</span>');
}

function enableDelComponent(target) {
  sendEvent('components', 'enableDelComponent');
  const quickDelDiv = target.parentNode;
  hideElement(quickDelDiv);
  const cmDiv = quickDelDiv.parentNode;
  insertElement(cmDiv, decorateButton('Delete All Visible'));
  getArrayByTagName('img', getInvTable()).forEach(addDelBtn);
}

function delAllComponent(target) {
  sendEvent('components', 'delAllComponent');
  const thisInvTable = target.parentNode.parentNode.parentNode.children[0];
  getArrayByClassName('compDelBtn', thisInvTable).forEach(clickThis);
}

const classEvts = [
  ['quick-extract-components', quickExtractHandler],
  ['enable-quick-del', enableDelComponent],
  ['delete-all-visible', delAllComponent],
  ['compDelBtn', delComponent],
  ['count-components', countComponent],
  ['compDelType', delCompType],
];

function addComposingButtons(thisInvTable) {
  const compDiv = thisInvTable.parentNode;
  insertElement(compDiv, componentBtnContainer());
  onclick(compDiv, classHandler(classEvts));
}

function components() {
  const thisInvTable = getInvTable();
  if (!thisInvTable) { return; }
  addComposingButtons(thisInvTable);
}

export default components;
//# sourceMappingURL=components-61c74f10.js.map
