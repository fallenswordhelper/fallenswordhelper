import getElementById from '../../common/getElementById';
import getText from '../../common/getText';
import { nowSecs } from '../../support/now';
import getValue from '../../system/getValue';
import getValueJSON from '../../system/getValueJSON';
import setValue from '../../system/setValue';
import shouldBeArray from '../../system/shouldBeArray';
import basicBounty from './basicBounty';

let bountyListRefreshTime = 0;

let bountyList = {};
let wantedList = {};
let activeBountyListPosted = false;
let bwNeedsRefresh = false;
let wantedArray = [];

export const getBountyList = () => bountyList;
export const getWantedList = () => wantedList;
export const getActiveBountyListPosted = () => activeBountyListPosted;
export const getBwNeedsRefresh = () => bwNeedsRefresh;
export const getWantedArray = () => wantedArray;

function hasActiveBounties(activeTable) {
  return !/No bounties active/.test(activeTable.rows[1].cells[0].innerHTML);
}

function bountyData(theCells) {
  return { ...basicBounty(theCells), progress: getText(theCells[5]) };
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
  bountyList.lastUpdate = nowSecs();
  if (activeTable) { parseActiveBounty(activeTable); }
  activeBountyListPosted = true;
}

function testBountyList(enableActiveList) {
  if (enableActiveList) {
    return bountyList && nowSecs() - bountyList.lastUpdate > bountyListRefreshTime;
  }
}

function testWantedList(enableWantedList) {
  if (enableWantedList) {
    return wantedList && nowSecs() - wantedList.lastUpdate > bountyListRefreshTime;
  }
}

function testCacheInvalid(enableActiveList, enableWantedList) {
  return testBountyList(enableActiveList) || testWantedList(enableWantedList);
}

export function invalidateCache(enableActiveList, enableWantedList) {
  bountyList = getValueJSON('bountyList');
  wantedList = getValueJSON('wantedList');
  bountyListRefreshTime = getValue('bountyListRefreshTime');
  bwNeedsRefresh = getValue('bwNeedsRefresh');
  if (bwNeedsRefresh) { return; }
  if (testCacheInvalid(enableActiveList, enableWantedList)) {
    bwNeedsRefresh = true; // invalidate cache
  }
}

export function doRefresh() {
  wantedList = {};
  wantedList.bounty = [];
  wantedList.isRefreshed = true;
  wantedList.lastUpdate = nowSecs();
  activeBountyListPosted = false;
  wantedArray = shouldBeArray('wantedNames');
  setValue('bwNeedsRefresh', false);
}
