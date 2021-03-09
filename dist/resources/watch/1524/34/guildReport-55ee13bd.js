import { o as onclick, bO as classHandler, g as getElementsByTagName, p as pCC, al as cdn, A as setInnerHtml, b$ as playerIDRE, s as partial, X as sendEvent, aw as playerId, c0 as classPair, b as createDiv, aR as keys, Q as once, i as insertElement, n as cElement, z as setText, f as insertHtmlBeforeEnd, e as entries, k as on, a as add, q as extend, a4 as fallback, ab as querySelectorAll, c as calf, a2 as playerIdUrl, B as getText, S as getUrlParameter, E as querySelectorArray, at as contains, aC as containsText, x as jQueryNotPresent } from './calfSystem-d1de1997.js';
import { e as equipItem } from './useItem-92d074b4.js';
import { a as queueRecallItem } from './queue-d7e72889.js';
import { g as getMembrList } from './getMembrList-27b9942b.js';
import { b as batch } from './batch-aa534794.js';
import { e as eventHandler5 } from './eventHandler5-be53e012.js';
import { i as isChecked } from './isChecked-d96c8dec.js';
import { s as selfIdIs } from './selfIdIs-9289fbc8.js';
import { a as alpha } from './alpha-18b53f44.js';
import { t as testRange } from './testRange-d919f908.js';
import { c as createInput } from './createInput-6dd456d3.js';
import { c as createSelect } from './createSelect-a5ad79c3.js';
import { c as createTable } from './createTable-99cd84de.js';
import { c as createTr } from './createTr-ed86358a.js';
import { s as set, g as get } from './idb-261893ee.js';
import { o as onlineDot } from './onlineDot-01aad102.js';
import './dialog-a123f46e.js';
import './dialogMsg-2f52cc12.js';
import './indexAjaxJson-b07a637a.js';
import './daUseItem-2a706301.js';
import './errorDialog-da819f92.js';
import './guildInventory-08f7c5dc.js';
import './guild-cdbb2bef.js';
import './currentGuildId-5f3c5fc9.js';
import './cmdExport-52f81513.js';
import './toLowerCase-82b2a5d7.js';
import './numberIsNaN-738f2a3f.js';

var css = ".guildReportSpinner {\n  width: 25px;\n  height: 25px;\n  display: inline-block;\n  background-size: contain;\n}\n";
var modules_c2468a38 = {};

function itemId(href) {
  return href.match(/&id=(\d+)/)[1];
}

const spinner = '<span class="guildReportSpinner" '
  + `style="background-image: url('${cdn}ui/misc/spinner.gif');"></span>`;

function recalled(theTd) {
  setInnerHtml('<span class="fastWorn">You successfully recalled the item'
    + '</span>', theTd);
}

function wornItem(theTd) {
  setInnerHtml('<span class="fastWorn">Worn</span>', theTd);
}

function replyTo(target) {
  window.openQuickMsgDialog(target.getAttribute('target_player'));
}

function targetPlayerId(href) {
  return href.match(playerIDRE)[1];
}

function recallResult(action, theTd, data) {
  if (data.r === 1) { return; }
  if (action === 'recall') {
    recalled(theTd);
  } else {
    wornItem(theTd);
  }
}

function doRecall(theTd, href, mode, action) {
  queueRecallItem(itemId(href), targetPlayerId(href), mode, action)
    .then(partial(recallResult, action, theTd));
}

function recallTo(theTd, href, mode) {
  doRecall(theTd, href, mode, 'recall');
}

function doFastBp(theTd, href) {
  sendEvent('GuildReport', 'Fast BP');
  recallTo(theTd, href, 0);
}

function doFastGs(theTd, href) {
  sendEvent('GuildReport', 'Fast GS');
  recallTo(theTd, href, 1);
}

function doFastWear(theTd, href) {
  sendEvent('GuildReport', 'Fast Wear');
  if (Number(targetPlayerId(href)) === playerId()) {
    equipItem(itemId(href)).then(partial(wornItem, theTd));
  } else {
    doRecall(theTd, href, 0, 'wear');
  }
}

const subClass = [
  ['fast-bp', doFastBp],
  ['fast-gs', doFastGs],
  ['fast-wear', doFastWear],
];

function doFastRecall(target) {
  const theTd = target.parentNode.parentNode;
  if (!theTd) { return; }
  const { href } = theTd.children[0];
  if (!href) { return; }
  subClass.find(partial(classPair, target))[1](theTd, href);
  setInnerHtml(spinner, theTd);
}

const classEvts = [
  ['sendLink', doFastRecall],
  ['a-reply', replyTo],
];

function eventHandlers() {
  onclick(getElementsByTagName('table', pCC)[1], classHandler(classEvts));
}

const fastBpHtml = '<span class="sendLink fast-bp">Fast BP</span> | ';
const fastGsHtml = '<span class="sendLink fast-gs">Fast GS</span>';
const fastWearHtml = ' | <span class="sendLink fast-wear">Fast Wear</span>';
let wearRE;
let gs;
let bp;
let wearableBp;
let wearableGs;

function getWearRe() {
  if (!wearRE) {
    wearRE = new RegExp('<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|'
      + 'Gut Rot Head Splitter|Serum');
  }
  return wearRE;
}

function fastBp() {
  if (!bp) { bp = createDiv({ innerHTML: fastBpHtml + fastGsHtml }); }
  return bp.cloneNode(true);
}

function fastWearableBp() {
  if (!wearableBp) {
    wearableBp = createDiv({ innerHTML: fastBpHtml + fastGsHtml + fastWearHtml });
  }
  return wearableBp.cloneNode(true);
}

function fastGs() {
  if (!gs) { gs = createDiv({ innerHTML: fastGsHtml }); }
  return gs.cloneNode(true);
}

function fastWearableGs() {
  if (!wearableGs) {
    wearableGs = createDiv({ innerHTML: fastGsHtml + fastWearHtml });
  }
  return wearableGs.cloneNode(true);
}

const lookup = [
  [true, true, fastWearableBp],
  [true, false, fastWearableGs],
  [false, true, fastBp],
  [false, false, fastGs],
];

function theArray(thisWearable, thisBp, arr) {
  return arr[0] === thisWearable && arr[1] === thisBp;
}

function makeFastRecall(el) {
  const thisWearable = !getWearRe().test(el.previousElementSibling.innerHTML);
  const thisBp = el.children.length === 2;
  return lookup.find(partial(theArray, thisWearable, thisBp))[2]();
}

var css$1 = "#potReport {text-align: center;}\n#potReport > input {display: none;}\n#potReport > div {display: none;}\n#potReport > div > div {\n  display: none;\n  vertical-align: top;\n}\n#potReport label {background: #fece2f; color: #4c3000; padding: .5em 1em;}\n#potReport > #panels {padding: .5em 1em 0;}\n#potReport > #panels > div {padding: .5em 1em 0;}\n#potReport > #panels > #thresholds input {\n  display: block;\n  background-color: #f7ebd3;\n  border-style: solid;\n  border-width: 1px;\n  border-color: #a9772c #f3d99d #f3d99d #a9772c;\n  width: 4em;\n}\n#potReport > input:checked + label {background: #ffa614; color: #381f00;}\n#potReport > #pottab1:checked ~ #panels,\n#potReport > #pottab2:checked ~ #panels,\n#potReport > #pottab3:checked ~ #panels {display: block;}\n#potReport > #pottab1:checked ~ #panels > #inventory,\n#potReport > #pottab2:checked ~ #panels > #mapping,\n#potReport > #pottab3:checked ~ #panels > #thresholds {display: inline-block;}\n#potReport > input + label:hover {\n  background: #f0be00;\n  color: #381f00;\n  cursor: pointer;\n}\n#potReport tr {height: 19px;}\n";
var modules_92b38b40 = {};

function cloneObj(obj, acc, key) {
  acc[key] = obj[key];
  return acc;
}

function sortKeys(obj) {
  return keys(obj).sort(alpha).reduce(partial(cloneObj, obj), {});
}

let inventory;

function pivotPotObj(potOpts, potObj, acc, pot) {
  if (potOpts.myMap[pot] !== 'Ignore') {
    if (acc[potOpts.myMap[pot]]) {
      acc[potOpts.myMap[pot]] += potObj[pot];
    } else {
      acc[potOpts.myMap[pot]] = potObj[pot];
    }
  }
  return acc;
}

function perc2color(percent) {
  const perc = Math.max(Math.min(percent, 100), 0);
  let r;
  let g;
  const b = 0;
  if (perc < 50) {
    r = 255;
    g = Math.round(5.1 * perc);
  } else {
    g = 255;
    r = Math.round(510 - 5.10 * perc);
  }
  const h = r * 0x10000 + g * 0x100 + b;
  return `#${(`000000${h.toString(16)}`).slice(-6)}`;
}

function makeRowsFromPivot(potOpts, pivot, acc, pot) {
  return `${acc}<tr><td>${pot
  }</td><td style="background-color: ${
    perc2color(((pivot[pot] - potOpts.minpoint)
    / (potOpts.maxpoint - potOpts.minpoint)) * 100)};">${
    pivot[pot].toString()}</td></tr>`;
}

function drawInventory(potOpts, potObj) {
  sendEvent('potReport', 'drawInventory');
  const pivot = sortKeys(keys(potObj)
    .reduce(partial(pivotPotObj, potOpts, potObj), {}));
  setInnerHtml(`<table><tbody>${
    keys(pivot).reduce(partial(makeRowsFromPivot, potOpts, pivot), '')
  }</tbody></table>`, inventory);
}

function initInventory(potOpts, potObj, panels) {
  inventory = createDiv({ id: 'inventory' });
  if (potOpts.pottab1) {
    drawInventory(potOpts, potObj);
  } else {
    once(panels.parentNode.children[0], 'change',
      partial(drawInventory, potOpts, potObj));
  }
  insertElement(panels, inventory);
}

function createOption(props) {
  return cElement('option', props);
}

let mapping;
let selectRowTmp;

function getRow() {
  const rowTmp = createTr();
  rowTmp.insertCell(-1);
  rowTmp.insertCell(-1);
  return rowTmp;
}

function setOption(value) {
  const option = createOption();
  option.value = value;
  option.text = value;
  return option;
}

function insertOption(selectTmp, el) {
  insertElement(selectTmp, setOption(el[0]));
}

function getSelect() {
  const selectTmp = createSelect({
    className: 'tip-static',
    dataset: { tipped: 'Set to "Ignore" to exclude from report' },
    style: { width: '130px' },
  });
  return selectTmp;
}

function getSelectRow() {
  if (!selectRowTmp) {
    selectRowTmp = getRow();
    const select = getSelect();
    insertElement(selectRowTmp.cells[1], select);
  }
  return selectRowTmp.cloneNode(true);
}

function insertRows(mapTbl, el) {
  const selectRow = getSelectRow();
  setText(el[0], selectRow.cells[0]);
  const select = selectRow.cells[1].children[0];
  insertElement(select, setOption(el[1]));
  [select.name, select.value] = el;
  insertElement(mapTbl.tBodies[0], selectRow);
}

function makeButton(row, id, val) {
  const btn = createInput({
    id,
    type: 'button',
    value: val,
  });
  insertElement(row.cells[1], btn);
}

function insertFinal(mapTbl) {
  const row = getRow();
  makeButton(row, 'fshIgnoreAll', 'Ignore All');
  insertHtmlBeforeEnd(row.cells[1], '&nbsp;');
  makeButton(row, 'fshReset', 'Reset');
  insertElement(mapTbl.tBodies[0], row);
}

function renderDropDown(myMap, e) {
  if (e.target.tagName === 'SELECT') {
    const select = e.target;
    const { value } = select;
    setInnerHtml('', select);
    insertElement(select, setOption('Ignore'));
    entries(myMap).forEach(partial(insertOption, select));
    select.value = value;
  }
}

function drawMapping(potOpts) {
  sendEvent('potReport', 'drawMapping');
  const mapTbl = createTable({ innerHTML: '<tbody></tbody>' });
  mapping.replaceChild(mapTbl, mapping.children[0]);
  on(mapping, 'mousedown', partial(renderDropDown, potOpts.myMap));
  add(3, batch, [
    [
      5,
      3,
      entries(potOpts.myMap),
      0,
      partial(insertRows, mapTbl),
      partial(insertFinal, mapTbl),
    ],
  ]);
}

function initMapping(potOpts, panels) {
  mapping = createDiv({ id: 'mapping', innerHTML: '<p></p>' });
  if (potOpts.pottab2) {
    drawMapping(potOpts);
  } else {
    once(panels.parentNode.children[2], 'change',
      partial(drawMapping, potOpts));
  }
  insertElement(panels, mapping);
}

const storeMap = 'fsh_potMap';
const defaultOpts = {
  pottab1: false,
  pottab2: false,
  pottab3: false,
  myMap: {},
  minpoint: 12,
  maxpoint: 20,
};

function update(potOpts, pot) {
  // eslint-disable-next-line no-param-reassign
  if (!potOpts.myMap[pot]) { potOpts.myMap[pot] = pot; }
}

function buildMap(potOpts, potObj) {
  keys(potObj).forEach(partial(update, potOpts));
  return sortKeys(potOpts.myMap);
}

function createContainer(potOpts) {
  return createDiv({
    id: 'potReport',
    innerHTML: `<input id="pottab1" type="checkbox"${
      isChecked(potOpts.pottab1)}>`
      + '<label for="pottab1">Composed Potion Inventory</label>'
      + `<input id="pottab2" type="checkbox"${
        isChecked(potOpts.pottab2)}>`
      + '<label for="pottab2">Mapping</label>'
      + `<input id="pottab3" type="checkbox"${
        isChecked(potOpts.pottab3)}>`
      + '<label for="pottab3">Thresholds</label>',
  });
}

function createThresholds(potOpts, panels) {
  const thresholds = createDiv({
    id: 'thresholds',
    innerHTML: `Min:<input id="minpoint" type="number" value="${
      potOpts.minpoint}" min="0" max="999">`
      + `Max:<input id="maxpoint" type="number" value="${
        potOpts.maxpoint}" min="0" max="999">`,
  });
  insertElement(panels, thresholds);
}

function onChange(potOpts, potObj, e) {
  if (e.target.tagName === 'SELECT') {
    // eslint-disable-next-line no-param-reassign
    potOpts.myMap[e.target.name] = e.target.value;
    set(storeMap, potOpts);
    drawInventory(potOpts, potObj);
  }
}

function reMap(ignore, acc, pot) {
  if (ignore) {
    acc[pot] = 'Ignore';
  } else {
    acc[pot] = pot;
  }
  return acc;
}

function resetMap(potOpts, potObj, ignore) {
  // eslint-disable-next-line no-param-reassign
  potOpts.myMap = keys(potObj).reduce(partial(reMap, ignore), {});
}

function doReset(potOpts, potObj, ignore) {
  resetMap(potOpts, potObj, ignore);
  set(storeMap, potOpts);
  drawMapping(potOpts);
  drawInventory(potOpts, potObj);
}

function toggleTab(target) { return /^pottab\d$/.test(target.id); }

function saveState(potOpts, target) {
  const option = target.id;
  // eslint-disable-next-line no-param-reassign
  potOpts[option] = target.checked;
  set(storeMap, potOpts);
}

function clickEvents(potOpts, potObj) {
  return [
    [selfIdIs('fshIgnoreAll'), partial(doReset, potOpts, potObj, true)],
    [selfIdIs('fshReset'), partial(doReset, potOpts, potObj, null)],
    [toggleTab, partial(saveState, potOpts)],
  ];
}

function onInput(potOpts, potObj, e) {
  const target = e.target.id;
  const maybeValue = testRange(e.target.value, 0, 999);
  if (maybeValue) {
    // eslint-disable-next-line no-param-reassign
    potOpts[target] = maybeValue;
    set(storeMap, potOpts);
    drawInventory(potOpts, potObj);
  }
}

function cellEventHandlers(potOpts, potObj, myCell) {
  on(myCell, 'change', partial(onChange, potOpts, potObj));
  onclick(myCell, eventHandler5(clickEvents(potOpts, potObj)));
  on(myCell, 'input', partial(onInput, potOpts, potObj));
}

function injectCell(potOpts, potObj) {
  const myCell = pCC.lastElementChild.insertRow(2).insertCell(-1);
  cellEventHandlers(potOpts, potObj, myCell);
  return myCell;
}

function buildPanels(potOpts, potObj) {
  const container = createContainer(potOpts);
  const panels = createDiv({ id: 'panels' });
  insertElement(container, panels);
  initInventory(potOpts, potObj, panels);
  initMapping(potOpts, panels);
  createThresholds(potOpts, panels);
  insertElement(injectCell(potOpts, potObj), container);
}

function gotMap(potObj, data) {
  const potOpts = extend({}, defaultOpts); // deep clone
  extend(potOpts, fallback(data, {}));
  potOpts.myMap = buildMap(potOpts, potObj);
  set(storeMap, potOpts);
  buildPanels(potOpts, potObj);
}

function potReport(potObj) {
  get(storeMap).then(partial(gotMap, potObj));
}

let nodeArray;
let nodeList;
let potObj;

function doPaintChild(inject, localCounter) {
  const el = nodeList[localCounter];
  insertElement(el, inject);
}

function addPotObj(item) {
  if (item.endsWith(' (Potion)')) {
    const itemName = item.slice(0, -9);
    potObj[itemName] = (potObj[itemName] || 0) + 1;
  }
}

function doSpan(el) {
  nodeArray.push(makeFastRecall(el));
  addPotObj(el.previousElementSibling.innerHTML);
}

function finishSpan() {
  batch([5, 3, nodeArray, 0, doPaintChild, partial(potReport, potObj)]);
}

function prepareChildRows() {
  nodeList = querySelectorAll('#pCC table table '
    + 'tr:not(.fshHide) td:nth-of-type(3n)');
  potObj = {};
  nodeArray = [];
  batch([5, 3, nodeList, 0, doSpan, finishSpan]);
}

function memberHeader(oldhtml) {
  return `${onlineDot({ last_login: calf.membrList[oldhtml].last_login })
  }<a href="${playerIdUrl}${calf.membrList[oldhtml].id
  }">${oldhtml}</a> [ <span class="a-reply fshLink" target_player=${
    oldhtml}>m</span> ]`;
}

function updateMemberHeader(el) {
  const oldhtml = getText(el);
  if (calf.membrList[oldhtml]) {
    setInnerHtml(memberHeader(oldhtml), el);
  }
}

function reportHeader() {
  const headers = querySelectorAll('#pCC table table '
    + 'tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b');
  batch([5, 3, headers, 0, updateMemberHeader]);
}

let findUser;
let foundUser;

function hideOther(el) {
  if (el.children[0].hasAttribute('bgcolor')) {
    foundUser = containsText(findUser, el.children[0].children[0]);
  }
  if (!foundUser) {
    // eslint-disable-next-line no-param-reassign
    el.className = 'fshHide';
  }
}

function searchUser() {
  findUser = getUrlParameter('user');
  if (!findUser) { return; }
  const userNodes = querySelectorArray(
    '#pCC table table td[bgcolor="#DAA534"] b',
  );
  const userNode = userNodes.some(contains(findUser));
  if (!userNode) { return; }
  const nodeList = querySelectorAll('#pCC table table tr');
  batch([5, 2, nodeList, 0, hideOther]);
}

function doReportHeader() { add(3, reportHeader); }

function injectReportPaint() { // jQuery
  if (jQueryNotPresent()) { return; }
  getMembrList(false).then(doReportHeader);
  add(2, searchUser);
  add(3, prepareChildRows);
  eventHandlers();
}

export default injectReportPaint;
//# sourceMappingURL=guildReport-55ee13bd.js.map
