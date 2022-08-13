import calf from '../support/calf';
import bunchOfSimple from './bunchOfSimple';
import makeHeaderRow from './makeHeaderRow';
import makeLabelRow from './makeLabelRow';
import { justCheckbox } from './simpleCheckbox';

function showActiveBounties() {
  return makeLabelRow(
    'enableActiveBountyList',
    `${justCheckbox('enableActiveBountyList')}&nbsp;`
      + `<input name="bountyListRefreshTime" class="fshSettingsNumber" type="number" value="${
        calf.bountyListRefreshTime}" min="0"> seconds refresh`,
  );
}

function showWantedBounties() {
  return makeLabelRow(
    'enableWantedList',
    `${justCheckbox('enableWantedList')} Refresh time is same as Active Bounties`,
  );
}

function wantedNames() {
  return makeLabelRow(
    'wantedNames',
    `<input name="wantedNames" class="fshSettingsText" value="${calf.wantedNames}">`,
  );
}

export default function bountyPrefs() {
  // Bounty hunting prefs
  return `${makeHeaderRow('Bounty hunting preferences')}${
    showActiveBounties()}${
    showWantedBounties()}${
    wantedNames()}${
    bunchOfSimple([
      'wantedGuildMembers',
      'showPvPSummaryInLog',
    ])}`;
}
