import './activeWantedBounties.css';
import bountyPage from '../../ajax/bountyPage';
import calf from '../../support/calf';
import functionPasses from '../../common/functionPasses';
import jQueryNotPresent from '../../common/jQueryNotPresent';
import onclick from '../../common/onclick';
import parseBountyPageForWorld from './parseBountyPageForWorld';
import setValueJSON from '../../system/setValueJSON';
import { createDivs, getBountyListDiv, getWantedListDiv } from './createDivs';
import {
  doRefresh,
  getBountyList,
  getBwNeedsRefresh,
  getWantedList,
  invalidateCache,
} from './lists';
import { getBountyListReset, injectBountyList } from './injectBountyList';
import { getWantedListReset, injectWantedList } from './injectWantedList';

function notRefreshed(enableActiveBountyList, enableWantedList) {
  if (enableWantedList) {
    getWantedList().isRefreshed = false;
    injectWantedList();
  }
  if (enableActiveBountyList) {
    getBountyList().isRefreshed = false;
    injectBountyList();
  }
}

const refreshConditions = [
  () => !getBountyList(),
  () => !getWantedList(),
  () => getBwNeedsRefresh(),
];

function needsRefresh() {
  return refreshConditions.some(functionPasses);
}

function retrieveBountyInfo(enableActiveList, enableWantedList) {
  invalidateCache(enableActiveList, enableWantedList);
  if (needsRefresh()) {
    doRefresh();
    bountyPage(1).then(parseBountyPageForWorld);
  } else {
    notRefreshed(enableActiveList, enableWantedList);
  }
}

function resetList(e) {
  if (e.target === getBountyListReset()) {
    setValueJSON('bountyList', null);
    retrieveBountyInfo(calf.enableActiveBountyList, calf.enableWantedList);
  }
  if (e.target === getWantedListReset()) {
    setValueJSON('wantedList', null);
    retrieveBountyInfo(calf.enableActiveBountyList, calf.enableWantedList);
  }
}

function doHandlers() {
  if (getBountyListDiv()) { onclick(getBountyListDiv(), resetList); }
  if (getWantedListDiv()) { onclick(getWantedListDiv(), resetList); }
}

export default function activeWantedBounties() {
  if (jQueryNotPresent()) { return; }
  createDivs();
  doHandlers();
  retrieveBountyInfo(calf.enableActiveBountyList, calf.enableWantedList);
}
