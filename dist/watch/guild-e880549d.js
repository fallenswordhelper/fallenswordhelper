import { n as getArrayByTagName, p as pCC, b6 as contains, M as querySelectorArray, ac as addCommas, bQ as lastActivityRE, k as insertHtmlBeforeEnd, b as defTable, G as getValue, Y as getUrlParameter, b4 as currentGuildId, aA as querySelectorAll, a8 as playerIdUrl, o as onclick, au as openQuickBuffByName, w as indexAjaxData, C as setInnerHtml, x as guildSubcmdUrl, u as partial, S as querySelector, v as createDocument, a1 as setValue, e as createDiv, l as on, i as insertElement, f as insertElementAfterBegin, r as cElement, az as keys, an as isUndefined, bR as utc, bS as lvl, bT as vl, bU as cur, bV as max, bW as act, bX as gxp, a as add, aV as jsonParse, aj as set, a2 as sendEvent, R as once, bY as draggable, ai as get, c as calf, A as getElementById, bZ as defEnableGuildActivityTracker, g as getElementsByTagName, T as createSpan, h as hideElement, b_ as recallUserUrl, ae as playerName, z as jQueryNotPresent } from './calfSystem-1499e8da.js';
import './numberIsNaN-02f5e218.js';
import './toLowerCase-c03a5a1f.js';
import { c as createInput } from './createInput-130831c0.js';
import { l as lastActivityMins } from './onlineDot-bdc3542d.js';
import { b as batch } from './batch-c565a2ed.js';
import { c as compressBio, a as colouredDots } from './compressBio-08be3a24.js';
import { c as createLabel } from './createLabel-4af5355a.js';
import { p as pvpLowerLevel, a as pvpUpperLevel, g as gvgLowerLevel, b as gvgUpperLevel, c as calculateBoundaries } from './levelHighlight-fae1ded5.js';
import { d as dataRows } from './dataRows-82e1798f.js';
import { c as createUl } from './createUl-1368f95e.js';
import './isChecked-cfcd6ace.js';
import { b as simpleCheckboxHtml } from './simpleCheckbox-ddca127b.js';
import { a as alpha } from './alpha-49738986.js';
import { c as createTBody } from './createTBody-1200d84b.js';
import { c as createTable } from './createTable-41c9e160.js';
import './isDate-043977c3.js';
import { f as formatLocalDateTime } from './formatLocalDateTime-74e79cf9.js';
import { c as createBr } from './createBr-b76039e1.js';
import { c as createButton } from './createButton-612ac40f.js';
import { c as createTextArea } from './createTextArea-3244c008.js';
import { d as dialogMsg } from './dialogMsg-eb4f8460.js';
import { p as publish, s as subscribeOnce } from './pubsub-e787efd5.js';
import { f as fshTabSet } from './fshTabSet-1257278d.js';
import { c as createStyle } from './createStyle-0e72d0fd.js';
import { t as toggleVisibilty } from './toggleVisibilty-40a1f340.js';

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
    const dots = querySelectorArray('#pCC a[data-tipped*="Last Activity"]');
    const memberStats = getActive(dots);
    members.classList.add('tip-static');
    members.dataset.tipped = `Active: ${memberStats[ACTIVE]}/${
      dots.length}<br>`
      + `Stamina: ${addCommas(memberStats[STAMINA])}`;
  }
}

// import querySelector from '../common/querySelector';

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
}

function guildXPLock() {
  let xpLock;
  // var xpLock = querySelector('#pCC a[data-tipped^="<b>Guild XP</b>"]');
  if (xpLock) { injectLock(xpLock); }
}

function compressHistory() {
  compressBio(
    getArrayByTagName(defTable, pCC).slice(-2, -1)[0].rows[0].cells[0],
  );
}

let highlightPlayersNearMyLvl;
let highlightGvGPlayersNearMyLvl;

function isPvpTarget(vlevel) {
  return highlightPlayersNearMyLvl
    && vlevel >= pvpLowerLevel
    && vlevel <= pvpUpperLevel;
}

function isGvgTarget(vlevel) {
  return highlightGvGPlayersNearMyLvl
    && vlevel >= gvgLowerLevel
    && vlevel <= gvgUpperLevel;
}

function isActive(el, tipped) {
  const vlevel = Number(/VL:.+?(\d+)/.exec(tipped)[1]);
  const aRow = el.parentNode.parentNode;
  if (isPvpTarget(vlevel)) {
    aRow.classList.add('lvlHighlight');
  } else if (isGvgTarget(vlevel)) {
    aRow.classList.add('lvlGvGHighlight');
  }
}

function highlightMembers(el) {
  const { tipped } = el.dataset;
  const lastActDays = lastActivityRE.exec(tipped)[1];
  if (lastActDays < 7) { isActive(el, tipped); }
}

function shouldHighlight() {
  return Number(getUrlParameter('guild_id')) !== currentGuildId()
    && (highlightPlayersNearMyLvl || highlightGvGPlayersNearMyLvl);
}

function doHighlights() {
  if (shouldHighlight()) {
    calculateBoundaries();
    querySelectorArray('#pCC a[data-tipped*="<td>VL:</td>"]')
      .forEach(highlightMembers);
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

function togglePref(evt) {
  if (evt.target.id === 'enableGuildActivityTracker') {
    setValue('enableGuildActivityTracker',
      !getValue('enableGuildActivityTracker'));
  }
}

function injectShowTracker() {
  const gs = querySelector('#pCC img.guild_openGuildStore');
  const td = gs.parentNode;
  const container = createDiv({ className: 'fsh-tracker' });
  const myDiv = createDiv({
    innerHTML: `${simpleCheckboxHtml('enableGuildActivityTracker')
    }&nbsp;<label class="custombutton" for="tracker">Show</label>`,
  });
  on(myDiv, 'change', togglePref);
  insertElement(container, gs);
  insertElement(container, myDiv);
  insertElementAfterBegin(td, container);
}

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

function makeDialog(name) {
  const thisContainer = createDiv({ className: 'fshDialog' });
  const thisInput = createInput({ id: name, type: 'checkbox' });
  insertElement(thisContainer, thisInput);
  const thisOverlay = createDiv({ className: 'ui-widget-overlay' });
  const thisLabel = createLabel({ htmlFor: name });
  insertElement(thisOverlay, thisLabel);
  insertElement(thisContainer, thisOverlay);
  const thisPopup = createDiv(
    { className: 'ui-dialog ui-tabs ui-widget ui-widget-content ui-corner-all' },
  );
  publish(`${name}-popup`, thisPopup);
  insertElement(thisContainer, thisPopup);
  insertElement(document.body, thisContainer);
}

function fshModalDialog(name) {
  const thisInput = getElementById(name);
  if (thisInput) { thisInput.checked = true; } else {
    makeDialog(name);
  }
}

function injectTabSet(name, tabs, thisPopup) {
  fshTabSet(thisPopup, tabs, `${name}-tab`);
}

function fshTabbedModal(name, tabs) {
  subscribeOnce(`${name}-popup`, partial(injectTabSet, name, tabs));
  // subscribeOnce('qwtab-header', makePref);
  fshModalDialog(name);
}

// import on from '../../common/on';
// import partial from '../../common/partial';

let actBody$1;
let tgCont$1;
let memberSelect$1;

function makeMemberHeader$1() {
  const memberHead = createTh({ textContent: 'Member' });
  memberSelect$1 = createDiv();
  insertElement(memberHead, memberSelect$1);
  return memberHead;
}

function headerRow$1(tg) {
  const hrow = tg.createTHead().insertRow(-1);
  insertHtmlBeforeEnd(hrow, '<th>Date</th>');
  const memberHead = makeMemberHeader$1();
  insertElement(hrow, memberHead);
  insertHtmlBeforeEnd(hrow, '<th>Level</th><th>VL</th>'
    + '<th>Stam</th><th>Max<br>Stam</th><th>Stam<br>%</th>'
    + '<th>Last<br>Activity<br>(Days)</th><th>GXP</th>');
}

function makeActBody$1(tg) {
  actBody$1 = createTBody();
  insertElement(tg, actBody$1);
}

function makeTg$1() {
  const tg = createTable({ id: 'tg' });
  headerRow$1(tg);
  makeActBody$1(tg);
  // on(tg, 'change', myChange);
  tgCont$1 = createDiv({ className: 'tgCont fshSpinner fshSpinner64' });
  insertElement(tgCont$1, tg);
  return tgCont$1;
}

function togglePref$1(evt) {
  if (evt.target.id === defEnableGuildActivityTracker) {
    setValue(defEnableGuildActivityTracker,
      !getValue(defEnableGuildActivityTracker));
  }
}

function injectContent(thisFn, thisDiv) {
  insertElement(thisDiv, thisFn());
}

function showDialog() {
  subscribeOnce('tracker-tab0', partial(injectContent, makeTg$1));
  // subscribeOnce('tracker-tab1', partial(injectContent, showAHInvManager, appInv));
  fshTabbedModal('tracker', ['Guild Activity Tracker', 'Import/Export']);
}

function injectShowTracker$1() {
  const gs = querySelector('#pCC img.guild_openGuildStore');
  const td = gs.parentNode;
  const container = createDiv({ className: 'fsh-tracker' });
  const myDiv = createDiv({
    innerHTML: `${simpleCheckboxHtml(defEnableGuildActivityTracker)
    }&nbsp;`,
  });
  on(myDiv, 'change', togglePref$1);
  const showTrackerDialog = createLabel({
    className: 'custombutton',
    htmlFor: 'tracker',
    textContent: 'Show',
  });
  once(showTrackerDialog, 'click', showDialog);
  insertElement(myDiv, showTrackerDialog);
  insertElement(container, gs);
  insertElement(container, myDiv);
  insertElementAfterBegin(td, container);
}

function guildTrackerV2() {
  injectShowTracker$1();
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
  return '#fshMemberList '
    + `tr:nth-child(${a.parentNode.parentNode.rowIndex + 1}) {`
    + `background: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${perc}%, `
    + `transparent ${perc + 1}%)}`;
}

function injectStyle() {
  const tables = getElementsByTagName(defTable, pCC);
  const memberList = tables[tables.length - 1];
  memberList.id = 'fshMemberList';
  const memberLinks = querySelectorArray('a[href*="&player_id="]', memberList);
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

function doGuildTracker() {
  const test = 0;
  if (test === 0) {
    add(4, guildTracker);
  } else {
    add(4, guildTrackerV2);
  }
}

function ajaxStuff(leftHandSideColumnTable) {
  if (jQueryNotPresent()) { return; }
  // Detailed conflict information
  if (getValue('detailedConflictInfo')) {
    add(3, conflictInfo, [leftHandSideColumnTable]);
  }
  doGuildTracker();
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
//# sourceMappingURL=guild-e880549d.js.map
