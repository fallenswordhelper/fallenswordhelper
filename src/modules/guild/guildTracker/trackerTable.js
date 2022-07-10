import './trackerTable.css';
import {
  act, cur, gxp, lvl, max, utc, vl,
} from '../../chrome/lookForHcsData/priorityThree/indexConstants';
import alpha from '../../common/alpha';
import createDiv from '../../common/cElement/createDiv';
import createTable from '../../common/cElement/createTable';
import createTBody from '../../common/cElement/createTBody';
import createTh from '../../common/cElement/createTh';
import formatLocalDateTime from '../../common/formatLocalDateTime';
import insertElement from '../../common/insertElement';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import isUndefined from '../../common/isUndefined';
import keys from '../../common/keys';
import on from '../../common/on';
import partial from '../../common/partial';
import setInnerHtml from '../../dom/setInnerHtml';
import task from '../../support/task';

let actBody = 0;
let selMember = '';
let tgCont = 0;
let memberSelect = 0;
let myMembers = 0;

const addOption = (acc, member) => `${acc}<option value="${member}">${member}</option>`;
const buildOptions = (memberNames) => `<select name="member">${
  memberNames.reduce(addOption, '')}</select>`;
const memberFilter = (memberKey) => selMember !== memberKey;

function toText(val) {
  if (isUndefined(val)) { return '#DEF'; }
  return val.toLocaleString();
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

const memberRows = () => keys(myMembers).reduce(selectedMember, '');

function drawRows() {
  if (myMembers) { setInnerHtml(memberRows(), actBody); }
  tgCont.classList.remove('fshSpinner');
}

function queueDrawRows() {
  tgCont.classList.add('fshSpinner');
  task(3, drawRows);
}

function myChange(e) {
  selMember = e.target.value;
  queueDrawRows();
}

export function initTable(theMembers) {
  if (theMembers) {
    myMembers = theMembers;
    const memberNames = keys(theMembers).sort(alpha);
    [selMember] = memberNames;
    setInnerHtml(buildOptions(memberNames), memberSelect);
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

export function makeTg() {
  const tg = createTable({ id: 'tg' });
  headerRow(tg);
  makeActBody(tg);
  on(tg, 'change', myChange);
  tgCont = createDiv({ className: 'tgCont fshSpinner64' });
  insertElement(tgCont, tg);
  return tgCont;
}
