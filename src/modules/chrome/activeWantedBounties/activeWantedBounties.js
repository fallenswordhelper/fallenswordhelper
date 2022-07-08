import './activeWantedBounties.css';
import bountyPage from '../../ajax/bountyPage';
import calf from '../../support/calf';
import functionPasses from '../../common/functionPasses';
import jQueryNotPresent from '../../common/jQueryNotPresent';
import onclick from '../../common/onclick';
import parseBountyPageForWorld from './parseBountyPageForWorld';
import setValueJSON from '../../system/setValueJSON';
import {
  bountyList,
  bwNeedsRefresh,
  doRefresh,
  invalidateCache,
  wantedList,
} from './lists';
import { bountyListDiv, createDivs, wantedListDiv } from './createDivs';
import { bountyListReset, injectBountyList } from './injectBountyList';
import { injectWantedList, wantedListReset } from './injectWantedList';

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
  invalidateCache(enableActiveList, enableWantedList);
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

export default function activeWantedBounties() {
  if (jQueryNotPresent()) { return; }
  createDivs();
  doHandlers();
  retrieveBountyInfo(calf.enableActiveBountyList, calf.enableWantedList);
}
