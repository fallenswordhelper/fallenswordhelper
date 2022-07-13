import calf from '../support/calf';
import bunchOfSimple from './bunchOfSimple';
import { justCheckbox, justLabel } from './simpleCheckbox';

function showActiveBounties() {
  return '<tr>'
    + `<td class="fshRight">${justLabel('enableActiveBountyList')}</td>`
    + '<td>'
    + `${justCheckbox('enableActiveBountyList')}&nbsp;`
    + `<input name="bountyListRefreshTime" class="fshSettingsNumber" type="number" value="${calf.bountyListRefreshTime}"> seconds refresh`
    + '</td>'
    + '</tr>';
}

function showWantedBounties() {
  return '<tr>'
    + `<td class="fshRight">${justLabel('enableWantedList')}</td>`
    + '<td>'
    + `${justCheckbox('enableWantedList')} Refresh time is same as Active Bounties`
    + '</td>'
    + '</tr>';
}

function wantedNames() {
  return '<tr>'
    + `<td class="fshRight">${justLabel('wantedNames')}</td>`
    + '<td>'
    + `<input name="wantedNames" class="fshSettingsText" value="${calf.wantedNames}">`
    + '</td>'
    + '</tr>';
}

export default function bountyPrefs() {
  // Bounty hunting prefs
  return `<tr><th colspan="2"><b>Bounty hunting preferences</b></th></tr>${
    showActiveBounties()
  }${showWantedBounties()
  }${wantedNames()
  }${bunchOfSimple([
    'wantedGuildMembers',
    'showPvPSummaryInLog',
  ])}`;
}
