import closestTr from '../../common/closestTr';
import csvSplit from '../../common/csvSplit';
import dateUtc from '../../common/dateUtc';
import doBuffLinks from '../../common/doBuffLinks';
import getArrayByClassName from '../../common/getArrayByClassName';
import getText from '../../common/getText';
import insertElement from '../../common/insertElement';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import onlineDot from '../../common/onlineDot';
import partial from '../../common/partial';
import playerLinkFromMembrList from '../../common/playerLinkFromMembrList';
import regExpExec from '../../common/regExpExec';
import setInnerHtml from '../../dom/setInnerHtml';
import { months, playerIdUrl } from '../../support/constants';
import { time, timeEnd } from '../../support/debug';
import getValue from '../../system/getValue';

const dateRe = /(?<day>[a-zA-Z]{3}), (?<date>\d{1,2}) (?<month>[a-zA-Z]{3}) (?<hr>\d{1,2}):(?<min>\d{2}):(?<sec>\d{2}) UTC/;

function guessYear(targetMonth) {
  let curYear = new Date().getFullYear();
  const thisMonth = months[new Date().getMonth()];
  if (thisMonth === 'Dec' && targetMonth === 'Jan') {
    curYear += 1;
  }
  return curYear;
}

function dateLocalFromUtc([,, date, month, hr, min]) {
  return new Date(dateUtc([
    guessYear(month),
    month,
    date,
    hr,
    min,
  ]));
}

function groupLocalTime(row) {
  const theDateCell = row.cells[3];
  const dateMatches = regExpExec(dateRe, getText(theDateCell));
  insertHtmlBeforeEnd(theDateCell, `<br><span class="fshBlue fshXSmall">Local: ${
    dateLocalFromUtc(dateMatches).toString().slice(0, 21)}</span>`);
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
  const memberLinks = listArr.map(partial(playerLinkFromMembrList, membrlist));
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

export default function doGroupPaint(membrlist) {
  const betaOptIn = getValue('betaOptIn');
  if (betaOptIn) { //  Timing output
    time('groups.doGroupPaint');
  }
  getArrayByClassName('group-action-container')
    .map((c) => closestTr(c))
    .forEach(partial(doGroupRow, membrlist));
  if (betaOptIn) { //  Timing output
    timeEnd('groups.doGroupPaint');
  }
}
