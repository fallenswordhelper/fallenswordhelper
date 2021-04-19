import { a as addCommas } from './addCommas-37fb94e0.js';
import { m as getArrayByTagName, p as pCC, aD as contains, bw as lastActivityRE, H as getTextTrim, E as querySelector, f as insertHtmlBeforeEnd, d as defTable, b as createDiv, B as setInnerHtml, i as insertElement, I as getValue, F as querySelectorArray, T as getUrlParameter, g as getElementsByTagName, ad as querySelectorAll, a4 as playerIdUrl, o as onclick, u as indexAjaxData, v as guildSubcmdUrl, s as partial, t as createDocument, bB as defEnableGuildActivityTracker, X as setValue, k as on, n as cElement, aY as keys, aQ as isUndefined, a as add, bc as jsonParse, Y as sendEvent, R as once, bC as draggable, c as calf, G as playerLinkSelector, bD as recallUserUrl, y as jQueryNotPresent } from './calfSystem-d5c49dc8.js';
import { g as getPlayers, c as colouredDots } from './colouredDots-1748bbce.js';
import { l as lastActivityMins } from './onlineDot-b65474c0.js';
import { s as setTipped } from './setTipped-70cff648.js';
import { c as closestTr } from './closestTr-b3bccbcf.js';
import { i as intValue } from './intValue-f6303c59.js';
import { s as sum } from './sum-48ca1ce6.js';
import compressBio from './compressBio-a0a15c15.js';
import { c as createStyle } from './createStyle-868451d5.js';
import { c as currentGuildId } from './currentGuildId-5c2ac6d6.js';
import { g as getLowerPvpLevel, a as getUpperPvpLevel, b as getLowerGvGLevel, c as getUpperGvgLevel } from './levelHighlight-482e8edc.js';
import { b as batch } from './batch-b640894a.js';
import { o as openQuickBuffByName } from './openQuickBuffByName-cf6100f7.js';
import { d as dataRows } from './dataRows-08660e1c.js';
import { c as createInput } from './createInput-329265d6.js';
import { c as createUl } from './createUl-8d700944.js';
import { s as set, g as get } from './idb-83942350.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-c68ff582.js';
import { b as simpleCheckboxHtml } from './simpleCheckbox-8c4408ef.js';
import { a as alpha } from './alpha-9f4f77c3.js';
import { c as createTBody } from './createTBody-729f056c.js';
import { c as createTable } from './createTable-3b73c3e3.js';
import { f as formatLocalDateTime } from './formatLocalDateTime-2385e9c5.js';
import { u as utc, l as lvl, v as vl, c as cur, m as max, a as act, g as gxp } from './indexConstants-91c1487d.js';
import { c as createBr, t as toggleVisibilty } from './toggleVisibilty-69ce2173.js';
import { c as createButton } from './createButton-2d755a99.js';
import { c as createTextArea } from './createTextArea-1213c292.js';
import { d as dialogMsg } from './dialogMsg-a960ad1e.js';
import { p as playerName } from './playerName-73fd680e.js';
import { c as createSpan } from './createSpan-8fa44734.js';
import { h as hideElement } from './hideElement-d197c06b.js';
import './closest-97a04dcf.js';
import './createLabel-50b0e14e.js';
import './insertElementBefore-68b894c4.js';
import './valueText-8cb2a936.js';
import './fshOpen-bc09bf81.js';
import './isChecked-6d3ab351.js';
import './toLowerCase-179aa35f.js';
import './isDate-cef09439.js';
import './numberIsNaN-d0e4b349.js';
import './padZ-5c8671fc.js';

const ACTIVE = 0;
const STAMINA = 1;

function countActive(acc, curr) {
  const lastActivity = lastActivityRE.exec(curr.dataset.tipped);
  const mins = lastActivityMins({
    min: lastActivity[3],
    hour: lastActivity[2],
    day: lastActivity[1],
  });
  if (mins < 44640) {
    acc[ACTIVE] += 1;
    acc[STAMINA]
      += Number(/Stamina:<\/td><td>(\d+)/.exec(curr.dataset.tipped)[1]);
  }
  return acc;
}

function getActive(dots) {
  return dots.reduce(countActive, [0, 0]);
}

function activeMembers() {
  const members = getArrayByTagName('b', pCC).find(contains('Members'));
  if (members) {
    const dots = getPlayers();
    const memberStats = getActive(dots);
    members.classList.add('tip-static');
    setTipped(`Active: ${memberStats[ACTIVE]}/${dots.length}<br>Stamina: ${
      addCommas(memberStats[STAMINA])}`, members);
  }
}

const getGxp = (playerName) => intValue(getTextTrim(closestTr(playerName).cells[4]));

function calcGxp() {
  // eslint-disable-next-line no-console
  console.log(addCommas(getPlayers().map(getGxp).reduce(sum, 0)));
}

function getIntFromRegExp(theText, rxSearch) {
  let result;
  const matches = theText.replace(/,/g, '').match(rxSearch);
  if (matches) {
    result = parseInt(matches[1], 10);
  } else {
    result = 0;
  }
  return result;
}

function mightBePositive(actualXP, xpLockXP) {
  let sign = '';
  if (actualXP > xpLockXP) { sign = '+'; }
  return sign + addCommas(actualXP - xpLockXP);
}

function injectLock(xpLock) {
  const xpLockmouseover = xpLock.dataset.tipped;
  const xpLockXP = getIntFromRegExp(xpLockmouseover, /XP Lock: <b>(\d*)/);
  const actualXP = getIntFromRegExp(xpLockmouseover, /XP: <b>(\d*)/);
  insertHtmlBeforeEnd(xpLock.parentNode.nextElementSibling,
    ` (<b>${mightBePositive(actualXP, xpLockXP)}</b>)`);
  // eslint-disable-next-line no-unused-labels, no-labels
  devLbl: { //  calculate GXP
    calcGxp();
  }
}

function guildXPLock() {
  const xpLock = querySelector('#pCC a[data-tipped^="<b>Guild XP</b>"]');
  if (xpLock) { injectLock(xpLock); }
}

function compressHistory() {
  const thisCell = getArrayByTagName(defTable, pCC).slice(-2, -1)[0]
    .rows[0].cells[0];
  const newDiv = createDiv({
    id: 'profile-bio',
    innerHTML: thisCell.innerHTML,
  });
  setInnerHtml('', thisCell);
  insertElement(thisCell, newDiv);
  compressBio();
}

let highlightPlayersNearMyLvl;
let highlightGvGPlayersNearMyLvl;

function isPvpTarget(vlevel) {
  return highlightPlayersNearMyLvl
    && vlevel >= getLowerPvpLevel()
    && vlevel <= getUpperPvpLevel();
}

function isGvgTarget(vlevel) {
  return highlightGvGPlayersNearMyLvl
    && vlevel >= getLowerGvGLevel()
    && vlevel <= getUpperGvgLevel();
}

const getLastActivity = (a) => [a, lastActivityRE.exec(a.dataset.tipped)[1]];
const recentActivity = ([, lastActDays]) => lastActDays < 7;
const getVLevel = ([a]) => [a, Number(/VL:.+?(\d+)/.exec(a.dataset.tipped)[1])];
const getFlags = ([a, vlevel]) => [
  a.parentNode.parentNode.rowIndex,
  isPvpTarget(vlevel),
  isGvgTarget(vlevel),
];

function getPlayerLinks() {
  return querySelectorArray('#pCC a[data-tipped*="<td>VL:</td>"]')
    .map(getLastActivity)
    .filter(recentActivity)
    .map(getVLevel)
    .map(getFlags);
}

function shouldHighlight() {
  return Number(getUrlParameter('guild_id')) !== currentGuildId()
    && (highlightPlayersNearMyLvl || highlightGvGPlayersNearMyLvl);
}

const selector = (targets) => targets
  .map(([rowIndex]) => `.fshHighlight tr:nth-child(${rowIndex + 1})`)
  .join(',');

function pvpTargetStyle(pvpTargets) {
  if (pvpTargets.length) {
    const pvpStyle = `${selector(pvpTargets)} {background-color: #4671C8;}`;
    insertElement(document.body, createStyle(pvpStyle));
  }
}

function gvgTargetStyle(gvgTargets) {
  if (gvgTargets.length) {
    const gvgStyle = `${selector(gvgTargets)} {background-color: #FF9900;}`;
    insertElement(document.body, createStyle(gvgStyle));
  }
}

function memberListStyle(pvpTargets, gvgTargets) {
  if (pvpTargets.length + gvgTargets.length) {
    const tables = getElementsByTagName(defTable, pCC);
    const memberList = tables[tables.length - 1];
    memberList.classList.add('fshHighlight');
  }
}

function actuallyHighlight() {
  const playerLinks = getPlayerLinks();
  const pvpTargets = playerLinks.filter(([, pvpTarget]) => pvpTarget);
  const gvgTargets = playerLinks.filter(([, pvpTarget, gvgTarget]) => !pvpTarget && gvgTarget);
  pvpTargetStyle(pvpTargets);
  gvgTargetStyle(gvgTargets);
  memberListStyle(pvpTargets, gvgTargets);
}

function doHighlights() {
  if (shouldHighlight()) {
    actuallyHighlight();
  }
}

function injectViewGuild() {
  highlightPlayersNearMyLvl = getValue('highlightPlayersNearMyLvl');
  highlightGvGPlayersNearMyLvl = getValue('highlightGvGPlayersNearMyLvl');
  doHighlights();
  if (getValue('enableHistoryCompressor')) { compressHistory(); }
}

function insertBuffLink(el) {
  insertHtmlBeforeEnd(el.parentNode, ' <span class="smallLink">[b]</span>');
}

function openQuickBuff(evt) {
  if (evt.target.className !== 'smallLink') { return; }
  openQuickBuffByName(evt.target.previousElementSibling.text);
}

function buffLinks() {
  // TODO preference
  const members = querySelectorAll(`#pCC a[href^="${playerIdUrl}"]`);
  batch([5, 3, members, 0, insertBuffLink]);
  onclick(pCC, openQuickBuff);
}

function conflicts(page) {
  return indexAjaxData({
    cmd: 'guild',
    subcmd: 'conflicts',
    page,
  });
}

function makeCell(newRow, html) {
  setInnerHtml(html, newRow.insertCell(-1));
}

function buildRow(insertHere, html1, html2) {
  const newRow = insertHere.insertRow(insertHere.rows.length - 2);
  makeCell(newRow, html1);
  makeCell(newRow, html2);
}

function conflictHeader(insertHere) {
  buildRow(insertHere, `<a href="${guildSubcmdUrl
  }conflicts">Active Conflicts</a>`, 'Score');
}

function conflictRow(insertHere, aRow) {
  buildRow(insertHere,
    aRow.cells[0].innerHTML, `<b>${aRow.cells[6].innerHTML}</b>`);
}

function hazConflict(conflictTable, curPage, insertHere) { // Legacy
  if (curPage === 1) {
    conflictHeader(insertHere);
  }
  dataRows(conflictTable.rows, 7, 0).forEach(partial(conflictRow, insertHere));
}

function activeConflicts(doc, curPage, insertHere) { // Legacy
  const conflictTable = querySelector(
    '#pCC > table > tbody > tr > td > table', doc,
  );
  if (conflictTable && conflictTable.rows.length > 3) {
    hazConflict(conflictTable, curPage, insertHere);
  }
}

function getMaxPage(page) {
  return Number(page.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1]);
}

function getNextPage(curPage, fn, callback) {
  conflicts(curPage + 1).then(partial(fn, callback));
}

function gotConflictInfo(callback, responseText) { // Legacy
  const doc = createDocument(responseText);
  const page = querySelector('#pCC input[name="page"]', doc);
  if (!page) { return; }
  const curPage = Number(page.value);
  const maxPage = getMaxPage(page);
  activeConflicts(doc, curPage, callback.node);
  if (maxPage > curPage) {
    getNextPage(curPage, gotConflictInfo, callback);
  }
}

function conflictInfo(leftHandSideColumnTable) { // jQuery.min
  const statCtrl = leftHandSideColumnTable.rows[6].cells[0].children[0];
  if (statCtrl) {
    conflicts(1).then(partial(gotConflictInfo, { node: statCtrl }));
  }
}

var css$3 = ".fsh-dialog-overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.5);\n  transform: translateX(-100vw);\n}\n.fsh-dialog-cancel {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.fsh-dialog-popup {\n  width: 644px;\n  top: 75px;\n  left: 50%;\n  margin-left: -322px;\n  right: 0;\n  transform: translateX(-100vw);\n  position: absolute;\n}\n.fsh-dialog-open,\n.fsh-tab-open {\n  display: none;\n}\n.fsh-dialog-content > div {\n  transform: translateX(-100vw);\n}\n.fsh-dialog-open:checked ~ div {\n  transform: none;\n}\n.fsh-tab-label {\n  cursor: pointer;\n  display: block;\n  padding: 0.5em 0.5em;\n}\n.fsh-dialog .fsh-dialog-close {\n  top: 13px;\n  opacity: 0.8;\n  transition: opacity 200ms;\n  font-size: 24px;\n  font-weight: bold;\n  text-decoration: none;\n  color: #666666;\n  cursor: pointer;\n  padding: 0;\n}\n.fsh-dialog .fsh-dialog-close:hover {\n  opacity: 1;\n}\n.fsh-tab-open:nth-child(1):checked ~ ul li:nth-child(1),\n.fsh-tab-open:nth-child(2):checked ~ ul li:nth-child(2) {\n  background: #ffa614 url(https://www.fallensword.com/media/dist/img/jQueryUITheme/ui-bg_gloss-wave_30_ffa614_500x100.png) 50% 50% repeat;\n  margin-bottom: -1px;\n  padding-bottom: 1px;\n  border: solid #655e4e;\n  border-width: 1px 1px 0;\n  color: #381f00;\n}\n.fsh-tab-open:nth-child(1):checked ~ ul li:nth-child(1) label:hover,\n.fsh-tab-open:nth-child(2):checked ~ ul li:nth-child(2) label:hover {\n  cursor: text;\n}\n.fsh-tab-open:nth-child(1):checked ~ ul li:nth-child(2):hover,\n.fsh-tab-open:nth-child(2):checked ~ ul li:nth-child(1):hover {\n  border: 1px solid #a45b13;\n  border-bottom-width: 0;\n  background: #f0be00 url(https://www.fallensword.com/media/dist/img/jQueryUITheme/ui-bg_gloss-wave_70_f0be00_500x100.png) 50% 50% repeat-x;\n  color: #381f00;\n}\n.fsh-dialog-content {\n  margin: 12px;\n  position: relative;\n}\n.fsh-dialog-content > div:first-of-type {\n  position: relative;\n}\n.fsh-dialog-content > div:nth-of-type(n+2) {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.fsh-tab-open:nth-child(1):checked ~ .fsh-dialog-content > div:nth-child(1),\n.fsh-tab-open:nth-child(2):checked ~ .fsh-dialog-content > div:nth-child(2) {\n  transform: none;\n}\n";
var modules_2eba1328 = {};

var css$2 = ".fsh-tracker {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n";
var modules_b27e1023 = {};

function togglePref(evt) {
  if (evt.target.id === defEnableGuildActivityTracker) {
    setValue(defEnableGuildActivityTracker,
      !getValue(defEnableGuildActivityTracker));
  }
}

function injectShowTracker() {
  const gs = querySelector('#pCC img.guild_openGuildStore');
  const td = gs.parentNode;
  const container = createDiv({ className: 'fsh-tracker' });
  const myDiv = createDiv({
    innerHTML: `${simpleCheckboxHtml(defEnableGuildActivityTracker)
    }&nbsp;<label class="custombutton" for="tracker">Show</label>`,
  });
  on(myDiv, 'change', togglePref);
  insertElement(container, gs);
  insertElement(container, myDiv);
  insertElementAfterBegin(td, container);
}

var css$1 = "#tg {\n  border: none;\n  width: 620px;\n  table-layout: fixed;\n}\n#tg th {text-align: center;}\n#tg td, #tg th{\n  overflow-x: hidden;\n  padding: 0.1em 0.1em 0.1em 0.1em;\n}\n#tg td{\n  padding: 0.1em 0.1em 0.1em 0.1em;\n  border-bottom: 1px solid gray;\n}\n#tg td:nth-child(1), #tg th:nth-child(1) {width: 125px;}\n#tg td:nth-child(2), #tg th:nth-child(2) {width: 80px;}\n#tg td:nth-child(3), #tg th:nth-child(3) {width: 40px;}\n#tg td:nth-child(4), #tg th:nth-child(4) {width: 40px;}\n#tg td:nth-child(5), #tg th:nth-child(5) {width: 50px;}\n#tg td:nth-child(6), #tg th:nth-child(6) {width: 50px;}\n#tg td:nth-child(7), #tg th:nth-child(7) {width: 30px;}\n#tg td:nth-child(8), #tg th:nth-child(8) {width: 40px;}\n#tg td:nth-child(9), #tg th:nth-child(9) {width: 115px;}\n#tg thead tr {\n  display: block;\n  position: relative;\n  background-color: #CD9E4B;\n}\n#tg tbody {\n  display: block;\n  height: 60vh;\n  overflow-y: scroll;\n  width: 100%;\n}\n#tg tr:last-child td {border-bottom: none;}\n#tg thead tr select {width: 79px;}\n";
var modules_9808e1e2 = {};

function createTh(props) {
  return cElement('th', props);
}

let actBody;
let selMember;
let tgCont;
let memberSelect;
let myMembers;

function addOption(acc, member) {
  return `${acc}<option value="${member}">${member}</option>`;
}

function buildOptions(ourMembers) {
  return '<select name="member">'
    + `<option value="- All -" selected>- All -</option>${
      keys(ourMembers).sort(alpha).reduce(addOption, '')}</select>`;
}

function toText(val) {
  if (isUndefined(val)) { return '#DEF'; }
  return val.toLocaleString();
}

function memberFilter(memberKey) {
  return selMember && selMember !== '- All -' && selMember !== memberKey;
}

function aMembersActivityRows(memberKey, inside, activity) {
  return `${inside}<tr>`
    + `<td>${
      formatLocalDateTime(new Date(activity[utc] * 1000))
    }</td>`
    + `<td>${memberKey}</td>`
    + `<td class="fshRight">${toText(activity[lvl])}</td>`
    + `<td class="fshRight">${toText(activity[vl])}</td>`
    + `<td class="fshRight">${toText(activity[cur])}</td>`
    + `<td class="fshRight">${toText(activity[max])}</td>`
    + `<td class="fshRight">${
      Math.floor((activity[cur] / activity[max]) * 100)
    }</td>`
    + `<td class="fshRight">${activity[act]}</td>`
    + `<td class="fshRight">${toText(activity[gxp])}</td>`
    + '</tr>';
}

function selectedMember(outside, memberKey) {
  if (memberFilter(memberKey)) { return outside; }
  return outside
    + myMembers[memberKey].reduce(partial(aMembersActivityRows, memberKey), '');
}

function memberRows() {
  return keys(myMembers).reduce(selectedMember, '');
}

function drawRows() {
  if (myMembers) { setInnerHtml(memberRows(), actBody); }
  tgCont.classList.remove('fshSpinner');
}

function queueDrawRows() {
  tgCont.classList.add('fshSpinner');
  add(3, drawRows);
}

function myChange(e) {
  selMember = e.target.value;
  queueDrawRows();
}

function initTable(theMembers) {
  if (theMembers) {
    myMembers = theMembers;
    setInnerHtml(buildOptions(theMembers), memberSelect);
    queueDrawRows();
  }
}

function makeMemberHeader() {
  const memberHead = createTh({ textContent: 'Member' });
  memberSelect = createDiv();
  insertElement(memberHead, memberSelect);
  return memberHead;
}

function headerRow(tg) {
  const hrow = tg.createTHead().insertRow(-1);
  insertHtmlBeforeEnd(hrow, '<th>Date</th>');
  const memberHead = makeMemberHeader();
  insertElement(hrow, memberHead);
  insertHtmlBeforeEnd(hrow, '<th>Level</th><th>VL</th>'
    + '<th>Stam</th><th>Max<br>Stam</th><th>Stam<br>%</th>'
    + '<th>Last<br>Activity<br>(Days)</th><th>GXP</th>');
}

function makeActBody(tg) {
  actBody = createTBody();
  insertElement(tg, actBody);
}

function makeTg() {
  const tg = createTable({ id: 'tg' });
  headerRow(tg);
  makeActBody(tg);
  on(tg, 'change', myChange);
  tgCont = createDiv({ className: 'tgCont fshSpinner64' });
  insertElement(tgCont, tg);
  return tgCont;
}

var css = "#io {\n  text-align: center;\n  width: 620px;\n}\n#io button {margin: 1em 1em;}\n#io textarea {\n  height: 55vh;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  width: 550px;\n  word-break: break-all;\n}\n";
var modules_ec295da5 = {};

let ioText;
let saveBtn;
let resetBtn;
let io;

function drawRawData(trackerData) {
  ioText.value = trackerData;
  io.classList.remove('fshSpinner');
}

function queueRawData(trackerData) {
  if (trackerData) {
    io.classList.add('fshSpinner');
    add(4, drawRawData, [trackerData]);
  }
}

function doReset() {
  ioText.value = '{"lastUpdate": 0, "members": {}}';
}

function successMsg(newData) {
  dialogMsg('Update successful');
  initTable(newData.members);
}

function doSave() {
  const newData = jsonParse(ioText.value);
  set('fsh_guildActivity', newData)
    .then(partial(successMsg, newData))
    .catch(dialogMsg);
}

function customButton(text, fn) {
  const btn = createButton({
    className: 'custombutton',
    textContent: text,
  });
  onclick(btn, fn);
  return btn;
}

function makeIoText() {
  ioText = createTextArea();
  ioText.setAttribute('autocapitalize', 'off');
  ioText.setAttribute('autocomplete', 'off');
  ioText.setAttribute('autocorrect', 'off');
  ioText.setAttribute('spellcheck', 'false');
}

function makeInOut() {
  io = createDiv({ id: 'io', className: 'fshSpinner64' });
  makeIoText();
  saveBtn = customButton('Save', doSave);
  resetBtn = customButton('Reset', doReset);
  insertElement(io, ioText);
  insertElement(io, createBr());
  insertElement(io, saveBtn);
  insertElement(io, resetBtn);
  return io;
}

let trackerData;
let tracker;
let trDialog;
let acttab2;

function isClosed() {
  return !tracker.checked;
}

function isOpen() {
  return tracker.checked;
}

function closeDialog() {
  tracker.checked = false;
}

function keydownHandler(evt) {
  if (isOpen() && evt.code === 'Escape') {
    closeDialog();
  }
}

function maybeClose(ret) {
  // eslint-disable-next-line no-param-reassign
  if (isClosed()) { ret.style.transform = null; }
}

function makeDragHandle() {
  return createUl({
    className: 'fshMove ui-tabs-nav ui-widget-header ui-corner-all '
      + 'ui-helper-reset ui-helper-clearfix',
    innerHTML: '<li class="ui-state-default ui-corner-top">'
      + '<label class="fsh-tab-label" for="acttab1">'
      + 'Guild Activity Tracker</label></li>'
      + '<li class="ui-state-default ui-corner-top">'
      + '<label class="fsh-tab-label" for="acttab2">Import/Export</label></li>'
      + '<label for="tracker" class="fsh-dialog-close '
      + 'ui-dialog-titlebar-close">&times;</label>',
  });
}

function updateRawData() {
  sendEvent('guildTracker', 'updateRawData');
  if (trackerData) { queueRawData(trackerData); }
}

function makeInnerPopup() {
  const dialogPopup = createDiv({
    className: 'fsh-dialog-popup '
      + 'ui-dialog ui-tabs ui-widget ui-widget-content ui-corner-all',
    innerHTML: '<input id="acttab1" class="fsh-tab-open" '
      + 'name="acttabs" checked type="radio">',
  });
  acttab2 = createInput({
    className: 'fsh-tab-open',
    id: 'acttab2',
    name: 'acttabs',
    type: 'radio',
  });
  once(acttab2, 'change', updateRawData);
  insertElement(dialogPopup, acttab2);
  return dialogPopup;
}

function makeRet() {
  const ret = makeInnerPopup();
  const hdl = makeDragHandle();
  insertElement(ret, hdl);
  draggable(hdl, ret);
  return ret;
}

function makeContainer() {
  const container = createDiv({ className: 'fsh-dialog-content' });
  insertElement(container, makeTg());
  insertElement(container, makeInOut());
  return container;
}

function makePopup() {
  const ret = makeRet();
  const container = makeContainer();
  insertElement(ret, container);
  on(tracker, 'change', partial(maybeClose, ret));
  insertElement(trDialog, ret);
}

function addOverlay() {
  insertHtmlBeforeEnd(trDialog,
    '<div class="fsh-dialog-overlay">'
    + '<label class="fsh-dialog-cancel" for="tracker"></label>'
    + '</div>');
}

function gotActivity(data) {
  if (data) {
    trackerData = JSON.stringify(data);
    initTable(data.members);
  }
}

function openDialog() {
  sendEvent('guildTracker', 'openDialog');
  get('fsh_guildActivity').then(gotActivity);
  calf.dialogIsClosed = isClosed;
  addOverlay();
  makePopup();
}

function injectTracker() {
  tracker = createInput({
    id: 'tracker',
    className: 'fsh-dialog-open',
    type: 'checkbox',
  });
  once(tracker, 'change', openDialog);
  trDialog = createDiv({ className: 'fsh-dialog' });
  insertElement(trDialog, tracker);
  on(document.body, 'keydown', keydownHandler);
  insertElement(document.body, trDialog);
}

function guildTracker() {
  injectShowTracker();
  injectTracker();
}

const prefEnableStamBars = 'enableStamBars';
let enableStamBars;
let thisStyle;

function getStamPerc(a) {
  const mo = a.dataset.tipped.match(/(\d+) \/ (\d+)/);
  return Math.min(Math.round((Number(mo[1]) / Number(mo[2])) * 100), 100);
}

function stamBarStyle(a) {
  const perc = getStamPerc(a);
  return '.fshProgressBar '
    + `tr:nth-child(${a.parentNode.parentNode.rowIndex + 1}) {`
    + `background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${perc}%, `
    + `transparent ${perc + 1}%)}`;
}

function injectStyle() {
  const tables = getElementsByTagName(defTable, pCC);
  const memberList = tables[tables.length - 1];
  memberList.classList.add('fshProgressBar');
  const memberLinks = querySelectorArray(playerLinkSelector, memberList);
  const myTest = memberLinks.map(stamBarStyle).join('\n');
  thisStyle = insertElement(document.body, createStyle(myTest)).sheet;
}

function toggleStyle() {
  if (!thisStyle) {
    injectStyle();
  } else {
    thisStyle.disabled = !enableStamBars;
  }
}

function changePref() {
  enableStamBars = !enableStamBars;
  setValue(prefEnableStamBars, enableStamBars);
  toggleStyle();
  sendEvent('guildManage', 'StamBars');
}

function injectPref() {
  const gs = querySelector('#pCC img.guild_openGuildStore');
  const td = gs.parentNode;
  const prefContainer = insertElement(td,
    createDiv({
      className: 'fshCenter',
      innerHTML: simpleCheckboxHtml(prefEnableStamBars),
    }));
  on(prefContainer, 'change', changePref);
}

function progressBar() {
  injectPref();
  enableStamBars = getValue(prefEnableStamBars);
  if (enableStamBars) { toggleStyle(); }
}

function makeButton(linkto) {
  return createSpan({
    className: 'fshLink tip-static',
    dataset: { linkto, tipped: 'Toggle Section' },
    textContent: 'X',
  });
}

function wrapper(btn) {
  const wrap = createSpan({ innerHTML: '[&nbsp;' });
  insertElement(wrap, btn);
  insertHtmlBeforeEnd(wrap, '&nbsp;]');
  return wrap;
}

function thisToggle(inject, panel, linkto) {
  const thisButton = makeButton(linkto);
  insertElement(inject, wrapper(thisButton));
  // eslint-disable-next-line no-param-reassign
  panel.id = linkto;
  if (getValue(linkto)) { hideElement(panel); }
  onclick(thisButton, toggleVisibilty);
}

function logoToggle(leftHandSideColumnTable) {
  thisToggle(
    leftHandSideColumnTable.rows[0].cells[1].children[0],
    leftHandSideColumnTable.rows[2].cells[0].children[0],
    'guildLogoControl',
  );
}

function statToggle(leftHandSideColumnTable) {
  const leaveGuildCell = leftHandSideColumnTable.rows[4].cells[1].children[0];
  setInnerHtml(leaveGuildCell.innerHTML.trim(), leaveGuildCell);
  thisToggle(leaveGuildCell,
    leftHandSideColumnTable.rows[6].cells[0].children[0],
    'statisticsControl');
}

function structureToggle(leftHandSideColumnTable) {
  thisToggle(leftHandSideColumnTable.rows[15].cells[1].children[0],
    leftHandSideColumnTable.rows[17].cells[0].children[0],
    'guildStructureControl');
}

function relicControl(leftHandSideColumnTable) {
  const relic = getArrayByTagName('b', leftHandSideColumnTable)
    .filter(contains('Relics'));
  if (relic.length !== 1) { return; }
  const thisFont = relic[0].parentNode.nextElementSibling.children[0];
  setInnerHtml(`[ <a href="${guildSubcmdUrl}reliclist">Control</a> ]&nbsp;`,
    thisFont);
}

function selfRecallLink(leftHandSideColumnTable) {
  // self recall
  const getLi = getElementsByTagName('li', leftHandSideColumnTable);
  const selfRecall = getLi[getLi.length - 1].parentNode;
  insertHtmlBeforeEnd(selfRecall,
    `<li><a href="${recallUserUrl}${playerName()
    }" class="tip-static" data-tipped="Self Recall">Self Recall</a></li>`);
}

function getLhsColTab() {
  return pCC.lastElementChild.rows[2].cells[0].children[0];
}

function lhsAdd(leftHandSideColumnTable, fn) {
  add(3, fn, [leftHandSideColumnTable]);
}

function lhsAdditions(leftHandSideColumnTable) {
  [
    logoToggle,
    statToggle,
    structureToggle,
    relicControl,
    selfRecallLink,
  ].forEach(partial(lhsAdd, leftHandSideColumnTable));
}

function ajaxStuff(leftHandSideColumnTable) {
  if (jQueryNotPresent()) { return; }
  // Detailed conflict information
  if (getValue('detailedConflictInfo')) {
    add(3, conflictInfo, [leftHandSideColumnTable]);
  }
  add(4, guildTracker);
}

function manage() {
  const leftHandSideColumnTable = getLhsColTab();
  lhsAdditions(leftHandSideColumnTable);
  add(3, buffLinks);
  ajaxStuff(leftHandSideColumnTable);
  progressBar();
}

function wrapUrl(guildLogo) {
  const url = guildLogo.nextElementSibling.nextElementSibling;
  if (url) { url.classList.add('fshBreakAll'); }
}

function removeGuildAvyImgBorder() {
  const guildLogo = querySelector('#pCC img[src*="/guilds/"][width="200"]');
  if (!guildLogo) { return; }
  guildLogo.removeAttribute('style');
  wrapUrl(guildLogo);
}

function injectGuild() {
  add(3, colouredDots);
  add(3, removeGuildAvyImgBorder);
  add(3, guildXPLock);
  add(3, activeMembers);

  if (calf.subcmd === 'manage') { manage(); }
  if (calf.subcmd === 'view') { injectViewGuild(); }
}

export default injectGuild;
//# sourceMappingURL=guild-962521dd.js.map
