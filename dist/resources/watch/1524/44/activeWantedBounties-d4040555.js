import { u as indexAjaxData, E as querySelector, C as getText, q as extend, z as getElementById, V as nowSecs, bL as getValueJSON, I as getValue, X as setValue, H as getTextTrim, c as calf, b as createDiv, bO as pCR, bM as setValueJSON, B as setInnerHtml, bR as bountyUrl, i as insertElement, f as insertHtmlBeforeEnd, t as createDocument, y as jQueryNotPresent, o as onclick } from './calfSystem-23094c64.js';
import { f as functionPasses } from './functionPasses-d25a8b97.js';
import { s as shouldBeArray } from './shouldBeArray-da7e3d1b.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-8efe6da6.js';
import { c as createSpan } from './createSpan-40b8971a.js';
import './csvSplit-d22d07ed.js';
import './insertElementBefore-7c440c87.js';

var css = ".xxsLink {\n  color: yellow;\n  cursor: pointer;\n  font-size: xx-small;\n  text-decoration: underline;\n}\n.xsGreen {\n  color: lawngreen;\n  cursor: pointer;\n  font-size: x-small;\n  text-decoration: underline;\n}\n.xsOrange {\n  color: orange;\n  font-size: x-small;\n}\n.xsKhaki {\n  color: khaki;\n  font-size: x-small;\n}\n";
var modules_d64d2379 = {};

function bountyPage(page) {
  return indexAjaxData({
    cmd: 'bounty',
    page,
  });
}

function getTarget$1(firstCell) {
  if (firstCell.children[0].tagName === 'A') { return firstCell.children[0]; }
  return firstCell.children[0].children[0];
}

function rewardType(theCells) {
  return querySelector('img', theCells[2]).title;
}

function basicBounty(theCells) {
  const targetData = getTarget$1(theCells[0]);
  return {
    target: getText(targetData),
    link: targetData.href,
    lvl: getText(targetData.nextSibling).replace(/[[|\]]/g, ''), // Text Node
    reward: getText(theCells[2]),
    rewardType: rewardType(theCells),
    posted: getText(theCells[3]),
    xpLoss: getText(theCells[4]),
  };
}

let bountyList;
let wantedList;
let activeBountyListPosted;
let bountyListRefreshTime;
let bwNeedsRefresh;
let wantedArray;

function hasActiveBounties(activeTable) {
  return !/No bounties active/.test(activeTable.rows[1].cells[0].innerHTML);
}

function bountyData(theCells) {
  return extend(basicBounty(theCells), { progress: getText(theCells[5]) });
}

function getAllBounties(activeTable) {
  for (let i = 1; i < activeTable.rows.length - 2; i += 2) {
    const theCells = activeTable.rows[i].cells;
    const thisBounty = bountyData(theCells);
    bountyList.bounty.push(thisBounty);
  }
}

function parseActiveBounty(activeTable) { // Legacy
  if (hasActiveBounties(activeTable)) {
    getAllBounties(activeTable);
  }
}

function getActiveBountyList(doc) { // Legacy
  const bountyInfo = getElementById('bounty-info', doc);
  if (!bountyInfo) { return; }
  const activeTable = bountyInfo.parentNode.parentNode
    .previousElementSibling.children[0].children[0];
  bountyList = {};
  bountyList.bounty = [];
  bountyList.isRefreshed = true;
  bountyList.lastUpdate = nowSecs;
  if (activeTable) { parseActiveBounty(activeTable); }
  activeBountyListPosted = true;
}

function testBountyList() {
  return bountyList
    && nowSecs - bountyList.lastUpdate > bountyListRefreshTime;
}

function testWantedList() {
  return wantedList
    && nowSecs - wantedList.lastUpdate > bountyListRefreshTime;
}

function testCacheInvalid() {
  return testBountyList() || testWantedList();
}

function invalidateCache() {
  bountyList = getValueJSON('bountyList');
  wantedList = getValueJSON('wantedList');
  bountyListRefreshTime = getValue('bountyListRefreshTime');
  bwNeedsRefresh = getValue('bwNeedsRefresh');
  if (bwNeedsRefresh) { return; }
  if (testCacheInvalid()) {
    bwNeedsRefresh = true; // invalidate cache
  }
}

function doRefresh() {
  wantedList = {};
  wantedList.bounty = [];
  wantedList.isRefreshed = true;
  wantedList.lastUpdate = nowSecs;
  activeBountyListPosted = false;
  wantedArray = shouldBeArray('wantedNames');
  setValue('bwNeedsRefresh', false);
}

function acceptBtn$1(theCells) {
  const cell = theCells[6];
  if (getTextTrim(cell) !== '[n/a]') {
    return cell.children[0].children[0].getAttribute('onclick');
  }
  return '';
}

function getTarget(theCells) {
  return extend(basicBounty(theCells), {
    offerer: getTextTrim(theCells[1].children[0].children[0]),
    tickets: getTextTrim(theCells[5]),
    accept: acceptBtn$1(theCells),
  });
}

const isWanted = [
  () => wantedArray.includes('*'),
  (target) => wantedArray.includes(target),
  (target, theRow) => calf.wantedGuildMembers
    && getTextTrim(theRow.cells[6]) === '[n/a]',
];

function wanted(target, theRow) {
  return getTextTrim(theRow.cells[6]) !== '[active]'
    && isWanted.some((el) => el(target, theRow));
}

function wantedTarget(target, theRow) {
  if (wanted(target, theRow)) {
    wantedList.bounty.push(getTarget(theRow.cells));
  }
}

function findTarget(activeTable) {
  for (let i = 1; i < activeTable.rows.length - 2; i += 2) {
    const theRow = activeTable.rows[i];
    const target = getTextTrim(theRow.cells[0].children[0].children[0]);
    if (target === '[ No bounties available. ]') { break; }
    wantedTarget(target, theRow);
  }
}

let bountyListDiv;
let wantedListDiv;

function createMiniBox() {
  return createDiv({ className: 'minibox' });
}

function createDivs() {
  if (calf.enableWantedList) {
    wantedListDiv = createMiniBox();
    insertElementAfterBegin(pCR, wantedListDiv);
  }
  if (calf.enableActiveBountyList) {
    bountyListDiv = createMiniBox();
    insertElementAfterBegin(pCR, bountyListDiv);
  }
}

let bountyListReset;

function makeMouseOver$1(el) {
  return `Level:  ${el.lvl
  }<br>Reward: ${el.reward} ${el.rewardType
  }<br>XP Loss Remaining: ${el.xpLoss
  }<br>Progress:  ${el.progress}`;
}

function injectBountyList() { // Legacy
  setValueJSON('bountyList', bountyList);
  setInnerHtml('', bountyListDiv);
  const heading = createDiv(
    { innerHTML: `<a href="${bountyUrl}">Active Bounties</a> ` },
  );
  bountyListReset = createSpan({ className: 'xxsLink', textContent: 'Reset' });
  insertElement(heading, bountyListReset);
  insertElement(bountyListDiv, heading);
  let output = '';
  if (bountyList.bounty.length === 0) {
    output += '<div class="xsOrange">[No active bounties]</div>';
  } else {
    for (let i = 0; i < bountyList.bounty.length; i += 1) {
      output += `<a href="${bountyList.bounty[i].link
      }" class="tip-static" data-tipped="${
        makeMouseOver$1(bountyList.bounty[i])}">${
        bountyList.bounty[i].target}</a><br>`;
    }
  }
  insertHtmlBeforeEnd(bountyListDiv, output);
}

let wantedListReset;

function makeMouseOver(el) {
  return `Target Level:  ${el.lvl
  }<br>Offerer: ${el.offerer
  }<br>Reward: ${el.reward} ${el.rewardType
  }<br>XP Loss Remaining: ${el.xpLoss
  }<br>Posted: ${el.posted
  }<br>Tickets Req.:  ${el.tickets}`;
}

function acceptBtn(bounty) {
  if (bounty.accept) {
    return `<span class="xsGreen" onclick="${bounty.accept
    }">[a]</span>&nbsp;`;
  }
  return '';
}

function injectWantedList() { // Legacy
  setValueJSON('wantedList', wantedList);
  setInnerHtml('', wantedListDiv);
  const heading = createDiv(
    { innerHTML: `<a href="${bountyUrl}">Wanted Bounties</a> ` },
  );
  wantedListReset = createSpan({ className: 'xxsLink', textContent: 'Reset' });
  insertElement(heading, wantedListReset);
  insertElement(wantedListDiv, heading);
  let output = '';
  if (wantedList.bounty.length === 0) {
    output += '<div class="xsOrange">[No wanted bounties]</div>';
  } else {
    for (let i = 0; i < wantedList.bounty.length; i += 1) {
      output += `${acceptBtn(wantedList.bounty[i])
      }<a class="xsKhaki tip-static" data-tipped="${
        makeMouseOver(wantedList.bounty[i])
      }" href="${wantedList.bounty[i].link}">${
        wantedList.bounty[i].target}</a><br>`;
    }
  }
  insertHtmlBeforeEnd(wantedListDiv, output);
}

let curPage;
let maxPage;

function getWantedBountyList(doc) {
  const page = querySelector('#pCC input[name="page"]', doc);
  if (!page) { return; }
  curPage = Number(page.value);
  maxPage = Number(page.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1]);
  const activeTable = getElementById('bounty-info', doc).parentNode.parentNode
    .nextElementSibling.children[0].children[0];
  if (activeTable) { findTarget(activeTable); }
}

function hazActiveBountyList(doc) {
  if (calf.enableActiveBountyList && !activeBountyListPosted) {
    getActiveBountyList(doc);
    injectBountyList();
  }
}

function parseBountyPageForWorld(details) {
  const doc = createDocument(details);
  hazActiveBountyList(doc);
  if (calf.enableWantedList) {
    getWantedBountyList(doc);
    if (curPage < maxPage) {
      bountyPage(curPage + 1).then(parseBountyPageForWorld);
    } else {
      injectWantedList();
    }
  }
}

function notRefreshed(enableActiveBountyList, enableWantedList) {
  if (enableWantedList) {
    wantedList.isRefreshed = false;
    injectWantedList();
  }
  if (enableActiveBountyList) {
    bountyList.isRefreshed = false;
    injectBountyList();
  }
}

const refreshConditions = [
  () => !bountyList,
  () => !wantedList,
  () => bwNeedsRefresh,
];

function needsRefresh() {
  return refreshConditions.some(functionPasses);
}

function retrieveBountyInfo(enableActiveList, enableWantedList) {
  invalidateCache();
  if (needsRefresh()) {
    doRefresh();
    bountyPage(1).then(parseBountyPageForWorld);
  } else {
    notRefreshed(enableActiveList, enableWantedList);
  }
}

function resetList(e) {
  if (e.target === bountyListReset) {
    setValueJSON('bountyList', null);
    retrieveBountyInfo(calf.enableActiveBountyList, calf.enableWantedList);
  }
  if (e.target === wantedListReset) {
    setValueJSON('wantedList', null);
    retrieveBountyInfo(calf.enableActiveBountyList, calf.enableWantedList);
  }
}

function doHandlers() {
  if (bountyListDiv) { onclick(bountyListDiv, resetList); }
  if (wantedListDiv) { onclick(wantedListDiv, resetList); }
}

function prepareBountyData() {
  if (jQueryNotPresent()) { return; }
  createDivs();
  doHandlers();
  retrieveBountyInfo(calf.enableActiveBountyList, calf.enableWantedList);
}

export default prepareBountyData;
//# sourceMappingURL=activeWantedBounties-d4040555.js.map
