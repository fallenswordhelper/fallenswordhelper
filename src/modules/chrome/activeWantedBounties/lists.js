import basicBounty from './basicBounty';
import extend from '../../common/extend';
import getElementById from '../../common/getElementById';
import getText from '../../common/getText';
import getValue from '../../system/getValue';
import getValueJSON from '../../system/getValueJSON';
import { nowSecs } from '../../support/now';
import setValue from '../../system/setValue';
import shouldBeArray from '../../system/shouldBeArray';

export let bountyList;
export let wantedList;
export let activeBountyListPosted;
let bountyListRefreshTime;
export let bwNeedsRefresh;
export let wantedArray;

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

export function getActiveBountyList(doc) { // Legacy
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

export function invalidateCache() {
  bountyList = getValueJSON('bountyList');
  wantedList = getValueJSON('wantedList');
  bountyListRefreshTime = getValue('bountyListRefreshTime');
  bwNeedsRefresh = getValue('bwNeedsRefresh');
  if (bwNeedsRefresh) { return; }
  if (testCacheInvalid()) {
    bwNeedsRefresh = true; // invalidate cache
  }
}

export function doRefresh() {
  wantedList = {};
  wantedList.bounty = [];
  wantedList.isRefreshed = true;
  wantedList.lastUpdate = nowSecs;
  activeBountyListPosted = false;
  wantedArray = shouldBeArray('wantedNames');
  setValue('bwNeedsRefresh', false);
}
