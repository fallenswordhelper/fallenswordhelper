import { c as closestTr } from './closestTr-b3bccbcf.js';
import { c as csvSplit } from './csvSplit-ec367ad9.js';
import { d as doBuffLinks, g as getGroupStats } from './getGroupStats-acb9074d.js';
import { g as getArrayByClassName } from './getArrayByClassName-ed0c6e83.js';
import { as as time, s as partial, at as timeEnd, ae as months, C as getText, f as insertHtmlBeforeEnd, a4 as playerIdUrl, i as insertElement, B as setInnerHtml, o as onclick, F as querySelectorArray, E as querySelector, c as calf, c0 as defJoinallgroupsundersize, u as indexAjaxData, b as createDiv, Y as sendEvent, y as jQueryNotPresent, I as getValue } from './calfSystem-d5c49dc8.js';
import { o as onlineDot } from './onlineDot-b65474c0.js';
import { g as getMembrList } from './getMembrList-9ea3b7f2.js';
import { c as createInput } from './createInput-329265d6.js';
import { h as hideElement } from './hideElement-d197c06b.js';
import './closest-97a04dcf.js';
import './chunk-f573f88c.js';
import './createButton-2d755a99.js';
import './createLi-a00d43ac.js';
import './createUl-8d700944.js';
import './openQuickBuffByName-cf6100f7.js';
import './fshOpen-bc09bf81.js';
import './groupViewStats-97d637ca.js';
import './intValue-f6303c59.js';
import './currentGuildId-5c2ac6d6.js';
import './cmdExport-7bf7ec6d.js';
import './indexAjaxJson-bce38bad.js';
import './idb-83942350.js';

const xRE = /([a-zA-Z]+), (\d+) ([a-zA-Z]+) (\d+):(\d+):(\d+) UTC/;

function dateFromUTC(x, curYear) {
  const groupDate = new Date();
  groupDate.setUTCDate(x[2]);
  groupDate.setUTCMonth(months.indexOf(x[3]));
  groupDate.setUTCFullYear(curYear);
  groupDate.setUTCHours(x[4]);
  groupDate.setUTCMinutes(x[5]);
  return groupDate;
}

function groupLocalTime(row) {
  const theDateCell = row.cells[3];
  const x = xRE.exec(getText(theDateCell));
  const curYear = new Date().getFullYear(); // TODO Boundary condition
  insertHtmlBeforeEnd(theDateCell, `<br><span class="fshBlue fshXSmall">Local: ${
    dateFromUTC(x, curYear).toString().substr(0, 21)}</span>`);
}

function creatorDotAndLink(membrlist, creatorCell) {
  const creator = getText(creatorCell.children[0]);
  if (membrlist[creator]) {
    return `${onlineDot({ last_login: membrlist[creator].last_login })}&nbsp;<a href="${
      playerIdUrl}${membrlist[creator].id}"><b>${creator}</b></a> [${membrlist[creator].level}]`;
  }
  return `<b>${creator}</b>`;
}

function memberLevel(membrlist, member) {
  if (membrlist[member]) { return membrlist[member].level; }
  return 0;
}

function byMemberLevel(membrlist, a, b) {
  return memberLevel(membrlist, b) - memberLevel(membrlist, a);
}

function profileLink(membrlist, name) {
  if (!membrlist[name]) { return name; }
  return `<a href="${playerIdUrl}${membrlist[name].id}">${name}</a>`;
}

function groupMembers(membrlist, membersCell) {
  const listArr = csvSplit(membersCell.innerHTML);
  if (listArr.length > 1) { listArr.sort(partial(byMemberLevel, membrlist)); }
  return listArr;
}

function ourMembers(name) {
  return name !== '[none]' && name.indexOf('<font') === -1;
}

function buffLinks(creatorCell, listArr) {
  const buffList = listArr.filter(ourMembers);
  if (buffList.length > 0) { insertElement(creatorCell, doBuffLinks(buffList)); }
  insertHtmlBeforeEnd(creatorCell, `<span class="fshXSmall">Members: ${buffList.length}</span>`);
}

function memberProfileLinks(membrlist, membersCell, listArr) {
  const memberLinks = listArr.map(partial(profileLink, membrlist));
  setInnerHtml(`<span>${memberLinks.join(', ')}</span>`, membersCell);
}

function doGroupRow(membrlist, row) {
  const creatorCell = row.cells[0];
  setInnerHtml(creatorDotAndLink(membrlist, creatorCell), creatorCell);
  const membersCell = row.cells[1];
  const listArr = groupMembers(membrlist, membersCell);
  buffLinks(creatorCell, listArr);
  memberProfileLinks(membrlist, membersCell, listArr);
  groupLocalTime(row);
}

function doGroupPaint(membrlist) {
  // eslint-disable-next-line no-unused-labels, no-labels
  betaLbl: { //  Timing output
    time('groups.doGroupPaint');
  }
  getArrayByClassName('group-action-container')
    .map((c) => closestTr(c))
    .forEach(partial(doGroupRow, membrlist));
  // eslint-disable-next-line no-unused-labels, no-labels
  betaLbl: { //  Timing output
    timeEnd('groups.doGroupPaint');
  }
}

function addButton(target, val) {
  const theButton = createInput({
    className: 'custombutton',
    type: 'button',
    value: val,
  });
  insertHtmlBeforeEnd(target, '&nbsp;');
  insertElement(target, theButton);
  return theButton;
}

var css = ".fshgrpstat {\n  font-size: x-small;\n  border-top: 2px black solid;\n}\n";
var modules_f5af3be2 = {};

function parseGroupData(linkElement, obj) {
  const extraText = '<table class="fshgrpstat">'
    + '<tr>'
    + '<td class="fshBrown">Attack</td>'
    + `<td class="fshRight">${obj.attack}</td>`
    + '<td class="fshBrown">Defense</td>'
    + `<td class="fshRight">${obj.defense}</td>`
    + '</tr><tr>'
    + '<td class="fshBrown">Armor</td>'
    + `<td class="fshRight">${obj.armor}</td>`
    + '<td class="fshBrown">Damage</td>'
    + `<td class="fshRight">${obj.damage}</td>`
    + '</tr><tr>'
    + '<td class="fshBrown">HP</td>'
    + `<td class="fshRight">${obj.hp}</td>`
    + '<td colspan="2"></td>'
    + '</tr></table>';
  const expiresLocation = linkElement.parentNode.parentNode
    .previousElementSibling;
  insertHtmlBeforeEnd(expiresLocation, extraText);
}

function thisLink(aLink) {
  getGroupStats(aLink.href).then(partial(parseGroupData, aLink));
}

function fetchGroupData(evt) {
  // eslint-disable-next-line no-param-reassign
  evt.target.disabled = true;
  querySelectorArray('#pCC a[href*="=viewstats&"]').forEach(thisLink);
}

function fetchGroupStatsButton(buttonRow) {
  const fetchStats = addButton(buttonRow, 'Fetch Group Stats');
  onclick(fetchStats, fetchGroupData);
}

function filterMercs(e) { return !e.includes('#000099'); }

function joined(container) {
  setInnerHtml('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',
    container);
}

function joinGroup(groupID, container) { // jQuery.min
  indexAjaxData({
    cmd: 'guild',
    subcmd: 'groups',
    subcmd2: 'join',
    group_id: groupID,
  }).then(partial(joined, container));
}

function doJoinUnderSize(joinButton) {
  const memList = joinButton.parentNode.parentNode.parentNode.cells[1];
  const memListArrayWithMercs = csvSplit(getText(memList));
  const memListArrayWithoutMercs = memListArrayWithMercs
    .filter(filterMercs);
  if (memListArrayWithoutMercs.length < calf.maxGroupSizeToJoin) {
    const container = createDiv({
      className: 'group-action-link fshRelative',
      innerHTML: '<span class="fshSpinner fshSpinner12"></span>',
      style: { height: '19px', width: '19px' },
    });
    joinButton.parentNode.replaceChild(container, joinButton);
    const groupID = /confirmJoin\((\d+)\)/.exec(joinButton.href)[1];
    joinGroup(groupID, container);
  }
}

function joinAllGroupsUnderSize() {
  sendEvent('groups', 'joinAllGroupsUnderSize');
  querySelectorArray('#pCC a[href*="confirmJoin"]').forEach(doJoinUnderSize);
}

function joinUnderButton(buttonRow) {
  const joinUnder = addButton(buttonRow, `Join All Groups < ${calf.maxGroupSizeToJoin} Members`);
  onclick(joinUnder, joinAllGroupsUnderSize);
}

function groupButtons() {
  const joinAll = querySelector('#pCC input[value="Join All Available Groups"]');
  if (!joinAll) { return; }
  const buttonRow = joinAll.parentNode;
  if (calf.enableMaxGroupSizeToJoin) {
    hideElement(joinAll);
    joinUnderButton(buttonRow);
  }

  fetchGroupStatsButton(buttonRow);

  if (calf.subcmd2 === defJoinallgroupsundersize) {
    joinAllGroupsUnderSize();
  }
}

function displayMinGroupLevel() {
  const minGroupLevel = getValue('minGroupLevel');
  if (minGroupLevel) {
    insertHtmlBeforeEnd(querySelector('#pCC > table > tbody > tr > td > table td'),
      `<div class="fshBlue"> Current Min Level Setting: ${minGroupLevel}</div>`);
  }
}

function fixTable() {
  // Cows don't add!
  const tds = querySelectorArray('#pCC td.header-dark');
  if (tds.length < 5) { return; }
  tds[0].setAttribute('width', '20%');
  tds[1].setAttribute('width', '44%');
  tds[2].setAttribute('width', '7%');
  tds[3].setAttribute('width', '22%');
  tds[4].setAttribute('width', '7%');
}

function injectGroups() { // jQuery
  if (jQueryNotPresent()) { return; }
  getMembrList(false).then(doGroupPaint);
  displayMinGroupLevel();
  groupButtons();
  fixTable();
}

export default injectGroups;
//# sourceMappingURL=groups-cfb86c5e.js.map
