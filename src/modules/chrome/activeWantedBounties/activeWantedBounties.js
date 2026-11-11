import './activeWantedBounties.css';
import bountyPage from './bountyPage';
import sendEvent from '../../analytics/sendEvent';
import functionPasses from '../../common/functionPasses';
import jQueryNotPresent from '../../common/jQueryNotPresent';
import onclick from '../../common/onclick';
import calf from '../../support/calf';
import setValueJSON from '../../system/setValueJSON';
import { createDivs, getBountyListDiv, getWantedListDiv } from './createDivs';
import { getBountyListReset, injectBountyList } from './injectBountyList';
import { getWantedListReset, injectWantedList } from './injectWantedList';
import {
  doRefresh,
  getBountyList,
  getBwNeedsRefresh,
  getWantedList,
  invalidateCache,
} from './lists';
import parseBountyPageForWorld from './parseBountyPageForWorld';

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

async function retrieveBountyInfo() {
  invalidateCache(calf.enableActiveBountyList, calf.enableWantedList);
  if (needsRefresh()) {
    doRefresh();
    const page = await bountyPage(1);
    parseBountyPageForWorld(page);
  } else {
    notRefreshed(calf.enableActiveBountyList, calf.enableWantedList);
  }
}

function doReset(eventAction, listName) {
  sendEvent('activeWantedBounties', eventAction);
  setValueJSON(listName, null);
  retrieveBountyInfo();
}

function listClick(e) {
  // The game's own [data-confirm] handler does the accept
  if (e.target.dataset.confirmHref) sendEvent('activeWantedBounties', 'accept');
  if (e.target === getBountyListReset())
    doReset('getBountyListReset', 'bountyList');
  if (e.target === getWantedListReset())
    doReset('getWantedListReset', 'wantedList');
}

function doHandlers() {
  if (getBountyListDiv()) {
    onclick(getBountyListDiv(), listClick);
  }
  if (getWantedListDiv()) {
    onclick(getWantedListDiv(), listClick);
  }
}

export default function activeWantedBounties() {
  if (
    (!calf.enableWantedList && !calf.enableActiveBountyList) ||
    jQueryNotPresent()
  ) {
    return;
  }
  createDivs();
  doHandlers();
  retrieveBountyInfo();
}
