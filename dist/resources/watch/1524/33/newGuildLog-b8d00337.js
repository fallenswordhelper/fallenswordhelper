import { a as addGuildLogWidgets } from './addGuildLogWidgets-07282806.js';
import { a as addLogColoring } from './addLogColoring-40e56e2f.js';
import { a as all } from './all-978030c9.js';
import { u as indexAjaxData, bq as isString, s as partial, br as guildLogUrl, x as jQueryNotPresent, t as createDocument, D as querySelector, B as getText, z as setText, G as getTextTrim, J as getElementsByClassName, A as setInnerHtml, f as insertHtmlBeforeEnd, y as getElementById, p as pCC, m as getArrayByTagName, H as getValue, o as onclick } from './calfSystem-cc2b30b5.js';
import { c as createTable } from './createTable-3efe6870.js';
import { e as eventHandler5 } from './eventHandler5-579e070b.js';
import { f as functionPasses } from './functionPasses-bfa8b450.js';
import { h as hideElement } from './hideElement-eb117e0e.js';
import { p as parseDateAsTimestamp } from './parseDateAsTimestamp-14489206.js';
import { s as selfIdIs } from './selfIdIs-3252f988.js';
import { t as toggleForce } from './toggleForce-6831dfcc.js';
import { g as get, s as set } from './idb-cc82dc55.js';
import './dataRows-f8ab85cf.js';
import './playerName-bc6aeb96.js';
import './searchPlayerHref-f42c9c74.js';
import './createStyle-695938de.js';
import './doBuffLinkClick-0687d87f.js';
import './openQuickBuffByName-9466cf44.js';
import './fshOpen-946a9f05.js';

var css = ".newGuildLog {\n  background-image: url('https://cdn2.fallensword.com/ui/misc/log_1.png');\n  display: inline-block;\n  height: 16px;\n  width: 16px;\n}\n";
var modules_99aa00b4 = {};

function getGuildLogPage(page) {
  return indexAjaxData({
    cmd: 'guild',
    subcmd: 'log',
    page,
  });
}

const lookup = [
  [],
  ['(Potion)'],
  ['recalled the item', 'took the item', 'auto-returned the',
    'stored the item'],
  ['has added flags to', 'has removed flags to'],
  ['relic. This relic now has an empower level of',
    'relic. The relic empower level has been reset to zero.',
    'failed to capture the relic', 'captured the relic', 'captured your relic',
    'has captured the undefended relic', 'attempted to capture your relic',
    / empowered the .+ relic/, / removed the empowerment from the .+ relic/],
  ['disbanded a mercenary.', 'hired the mercenary'],
  ['has disbanded one of their groups',
    /A group from your guild was (.*) in combat./],
  [/deposited ([,0-9]+) gold into the guild bank/,
    /deposited ([,0-9]+) Fallen Sword Points into the guild./],
  ['has added a new rank entitled', 'has deleted the rank',
    'has requested to join the guild', 'has invited the player',
    'has officially joined the guild', 'has been kicked from the guild by',
    'has left the guild', 'has been assigned the rank',
    'has added/updated a rank entitled'],
  [/resulted in (.*) with a final score of/,
    'resulted in a draw. Your GvG rating ',
    'has just initiated a conflict with the guild',
    'has initiated a conflict with your guild',
    'is participating in the conflict against the guild'],
  ['bought the Titan Reward item',
    'from your guild\'s contribution to the defeat of the titan',
    'a 7 day cooldown has been activated on your guild for this titan'],
];

function isMatch(data, el) {
  if (isString(el)) {
    return data.includes(el);
  }
  return el.test(data);
}

function logType(data, ary) { return ary.some(partial(isMatch, data)); }

function rowProfile(data) {
  const myIndex = lookup.findIndex(partial(logType, data));
  if (myIndex === -1) { return 0; }
  return myIndex;
}

const guildLogFilter = '<table id="fshNewGuildLog" '
  + 'class="fshInvFilter"><thead><tr>'
  + '<th colspan="11"><b>Guild Log Version 4</b></th>'
  + '<th colspan="3"><span id="rfsh" class="sendLink">Reset</span> '
  + `<a href="${guildLogUrl}" class="sendLink">`
  + 'Old Guild Log</a></th>'
  + '</tr></thead><tbody>'
  + '<tr><td rowspan="3"><b>&nbsp;Filters:</b></td>'
  + '<td class="fshRight">&nbsp;Potions:</td>'
  + '<td><input id="fshPotion" type="checkbox" item="1"/></td>'
  + '<td class="fshRight">&nbsp;Store/Recalls:</td>'
  + '<td><input id="fshStore" type="checkbox" item="2"/></td>'
  + '<td class="fshRight">&nbsp;Relics:</td>'
  + '<td><input id="fshRelic" type="checkbox" item="4"/></td>'
  + '<td class="fshRight">&nbsp;Mercenaries:</td>'
  + '<td><input id="fshMerc" type="checkbox" item="5"/></td>'
  + '<td class="fshRight">&nbsp;Group Combats:</td>'
  + '<td><input id="fshGroup" type="checkbox" item="6"/></td>'
  + '<td colspan="3">&nbsp;</td>'
  + '</tr><tr>'
  + '<td class="fshRight">&nbsp;Donations:</td>'
  + '<td><input id="fshDonation" type="checkbox" item="7"/></td>'
  + '<td class="fshRight">&nbsp;Rankings:</td>'
  + '<td><input id="fshRank" type="checkbox" item="8"/></td>'
  + '<td class="fshRight">&nbsp;GvGs:</td>'
  + '<td><input id="fshGvG" type="checkbox" item="9"/></td>'
  + '<td class="fshRight">&nbsp;Tag/UnTags:</td>'
  + '<td><input id="fshTag" type="checkbox" item="3"/></td>'
  + '<td class="fshRight">&nbsp;Titans:</td>'
  + '<td><input id="fshTitan" type="checkbox" item="10"/></td>'
  + '<td class="fshRight">&nbsp;Other:</td>'
  + '<td><input id="fshOther" type="checkbox" item="0"/></td>'
  + '<td>&nbsp;</td>'
  + '</tr><tr>'
  + '<td colspan="2">'
  + '&nbsp;[<span id="fshAll" class="fshLink">Select All</span>]</td>'
  + '<td colspan="2">'
  + '&nbsp;[<span id="fshNone" class="fshLink">Select None</span>]</td>'
  + '<td colspan="9"></td>'
  + '</tr><tr><td id="fshOutput" class="fshBlue" colspan="14">'
  + 'Loading Page 1 ...</td></tr>'
  + '</tbody></table>'
  + '<table id="fshInjectHere">'
  + '</table>';
const headerRow = '<tbody><tr>'
  + '<td class="header" width="16">&nbsp;</td>'
  + '<td class="header" width="20%">Date</td>'
  + '<td class="header" width="80%">Message</td></tr></tbody>';
const defChecks = [true, true, true, true, true, true,
  true, true, true, true, true];
const noChecks = [false, false, false, false, false, false,
  false, false, false, false, false];

let options = {};
let fshNewGuildLog;
let fshOutput;
let maxPagesToFetch;
let maxPage;
let doc;
let currPage;
let lastPage;
let tmpGuildLog = [];
let completeReload = true;
let myTable;

function parsePage(data) {
  doc = createDocument(data);
  const pageInput = querySelector('input[name="page"]', doc);
  if (pageInput) {
    currPage = Number(pageInput.value);
    lastPage = Number(/\d+/.exec(getText(pageInput.parentNode))[0]);
    if (currPage === 1) { maxPage = Math.min(lastPage, maxPagesToFetch); }
    setText(`Loading ${currPage} of ${maxPage}...`, fshOutput);
  }
}

function seenRowBefore(timestamp, myMsg) {
  return [
    () => currPage === 1,
    () => options.log,
    () => options.log[0],
    () => options.log[0][0],
    () => timestamp === options.log[0][0],
    () => myMsg === options.log[0][2],
  ].every(functionPasses);
}

function getTableList(tableList) {
  const theTable = tableList[0];
  const limit = theTable.rows.length - 1;
  for (let i = 1; i < limit; i += 2) {
    const myRow = theTable.rows[i];
    const myDate = getTextTrim(myRow.cells[1]);
    const timestamp = parseDateAsTimestamp(myDate);
    const myMsg = myRow.cells[2].innerHTML;
    if (seenRowBefore(timestamp, myMsg)) {
      completeReload = false;
      break;
    }
    tmpGuildLog.push([currPage * 100 + i, timestamp, myDate, myMsg,
      rowProfile(myMsg)]);
  }
}

function parseTable() {
  const tableList = getElementsByClassName('width_full', doc);
  if (tableList.length === 1) { getTableList(tableList); }
}

function processPage(data) {
  parsePage(data);
  parseTable();
}

function useCache(e) { tmpGuildLog.push([0].concat(e)); }

function getOtherPages() {
  const prm = [];
  if (completeReload) {
    for (let i = 2; i <= maxPage; i += 1) {
      prm.push(getGuildLogPage(i).then(processPage));
    }
  } else {
    options.log.forEach(useCache);
  }
  return all(prm);
}

function storeOptions() { set('fsh_guildLog', options); }

function notThisMinute(nowUtc, ary) { return ary[1] !== nowUtc; }

function cacheValues(ary) { return ary.slice(1, 5); }

function updateOptionsLog() {
  // Don't cache current minute as it may be incomplete
  options.log = tmpGuildLog
    .filter(partial(notThisMinute, new Date().setSeconds(0, 0)))
    .map(cacheValues);
  storeOptions();
}

function makeCell(row, html) {
  const thisCell = row.insertCell(-1);
  setInnerHtml(html, thisCell);
  thisCell.className = 'row';
}

function dataRow(r) {
  const myRow = myTable.insertRow(-1);
  r.push(myRow);
  if (!options.checks[r[4]]) { myRow.className = 'fshHide'; }
  makeCell(myRow,
    '<span class="newGuildLog"></span>');
  makeCell(myRow, `<nobr>${r[2]}</nobr>`);
  makeCell(myRow, r[3]);
}

function separatorRow(r) {
  const sepRow = myTable.insertRow(-1);
  r.push(sepRow);
  if (!options.checks[r[4]]) { sepRow.className = 'fshHide'; }
  const sep = sepRow.insertCell(-1);
  sep.className = 'divider';
  sep.colSpan = 3;
}

function buildRow(r) {
  dataRow(r);
  separatorRow(r);
}

function buildTable() {
  myTable = createTable({ id: 'fshInjectHere', className: 'width_full' });
  insertHtmlBeforeEnd(myTable, headerRow);

  tmpGuildLog.forEach(buildRow);

  const injector = getElementById('fshInjectHere');
  pCC.replaceChild(myTable, injector);
  addLogColoring('myGuildLog', 1);
  addGuildLogWidgets();
}

function doChecked(el) {
  // eslint-disable-next-line no-param-reassign
  el.checked = options.checks[el.getAttribute('item')];
}

function setChecks() {
  getArrayByTagName('input', fshNewGuildLog).forEach(doChecked);
  storeOptions();
}

function byFirstElement(a, b) { return a[0] - b[0]; }

function gotOtherPages() {
  if (completeReload) { tmpGuildLog.sort(byFirstElement); }
  setText('Loading complete.', fshOutput);
  updateOptionsLog();
  buildTable();
}

function processFirstPage(data) {
  processPage(data);
  getOtherPages().then(gotOtherPages);
}

function toggle(item, hide, r) {
  if (r[4] !== item) { return; }
  toggleForce(r[5], hide);
  toggleForce(r[6], hide);
}

function toggleItem(target) {
  const item = Number(target.getAttribute('item'));
  options.checks[item] = !options.checks[item];
  storeOptions();
  tmpGuildLog.forEach(partial(toggle, item, !options.checks[item]));
}

function removeHide(el) {
  if (el && el.classList) { el.classList.remove('fshHide'); }
}

function show(r) {
  removeHide(r[5]);
  removeHide(r[6]);
}

function selectAll() {
  options.checks = defChecks.slice(0);
  setChecks();
  tmpGuildLog.forEach(show);
}

function doHide(r) {
  hideElement(r[5]);
  hideElement(r[6]);
}

function selectNone() {
  options.checks = noChecks.slice(0);
  setChecks();
  tmpGuildLog.forEach(doHide);
}

function refresh() {
  options.log = false;
  storeOptions();
  setText('Loading Page 1 ...', fshOutput);
  tmpGuildLog = [];
  completeReload = true;
  setInnerHtml('', getElementById('fshInjectHere'));
  getGuildLogPage(1).then(processFirstPage);
}

function guildLogEvents() {
  return [
    [(target) => target.tagName === 'INPUT', toggleItem],
    [selfIdIs('fshAll'), selectAll],
    [selfIdIs('fshNone'), selectNone],
    [selfIdIs('rfsh'), refresh],
  ];
}

function setOpts(guildLog) {
  options = guildLog || options;
  options.checks = options.checks || defChecks.slice(0);
}

function getElements() {
  fshNewGuildLog = getElementById('fshNewGuildLog');
  fshOutput = getElementById('fshOutput');
}

function setMaxPage() {
  maxPagesToFetch = Number(getValue('newGuildLogHistoryPages'));
  maxPage = maxPagesToFetch;
}

function gotOptions(guildLog) {
  setOpts(guildLog);
  setInnerHtml(guildLogFilter, pCC);
  getElements();
  onclick(fshNewGuildLog, eventHandler5(guildLogEvents()));
  setChecks();
  setMaxPage();
  getGuildLogPage(1).then(processFirstPage);
}

function injectNewGuildLog() { // jQuery.min
  if (jQueryNotPresent()) { return; }
  get('fsh_guildLog').then(gotOptions);
}

export default injectNewGuildLog;
//# sourceMappingURL=newGuildLog-b8d00337.js.map
