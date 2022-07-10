import calf from '../support/calf';
import isChecked from '../system/isChecked';
import bunchOfSimple from './bunchOfSimple';
import networkIcon from './networkIcon';
import { helpLink } from './simpleCheckbox';

function showActiveBounties() {
  return `<tr><td align= "right">${networkIcon
  }Show Active Bounties${
    helpLink(
      'Show Active Bounties',
      'This will show your active bounties on the right hand side',
    )
  }:</td><td><input name="enableActiveBountyList" `
    + `type = "checkbox" value = "on"${
      isChecked(calf.enableActiveBountyList)}>&nbsp;`
    + `<input name="bountyListRefreshTime" class="fshSettingsNumber" type="number" value="${
      calf.bountyListRefreshTime}"> seconds refresh</td></tr>`;
}

function showWantedBounties() {
  return `<tr><td align= "right">${networkIcon
  }Show Wanted Bounties${
    helpLink(
      'Show Wanted Bounties',
      'This will show when someone you want is on the bounty board, '
      + 'the list is displayed on the right hand side',
    )
  }:</td><td><input name="enableWantedList" `
    + `type="checkbox" value="on"${
      isChecked(calf.enableWantedList)
    }> Refresh time is same as Active Bounties`;
}

function wantedNames() {
  return `<tr><td align= "right">Wanted Names${helpLink(
    'Wanted Names',
    'The names of the people you want to see on the bounty board '
    + 'separated by commas (or * for all)',
  )}:</td><td><input name="wantedNames" class="fshSettingsText" value="${
    calf.wantedNames}"></td></tr>`;
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
