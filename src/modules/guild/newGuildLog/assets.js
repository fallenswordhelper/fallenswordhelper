import {guildLogUrl} from '../../support/constants';

export var guildLogFilter =
  '<table id="fshNewGuildLog" class="fshInvFilter"><thead><tr>' +
  '<th colspan="11"><b>Guild Log Version 4</b></th>' +
  '<th colspan="3"><span id="rfsh" class="sendLink">Reset</span> ' +
  '<a href="' + guildLogUrl + '" class="sendLink">' +
  'Old Guild Log</a></th>' +
  '</tr></thead><tbody>' +
  '<tr><td rowspan="3"><b>&nbsp;Filters:</b></td>' +
  '<td class="fshRight">&nbsp;Potions:</td>' +
  '<td><input id="fshPotion" type="checkbox" item="1"/></td>' +
  '<td class="fshRight">&nbsp;Store/Recalls:</td>' +
  '<td><input id="fshStore" type="checkbox" item="2"/></td>' +
  '<td class="fshRight">&nbsp;Relics:</td>' +
  '<td><input id="fshRelic" type="checkbox" item="4"/></td>' +
  '<td class="fshRight">&nbsp;Mercenaries:</td>' +
  '<td><input id="fshMerc" type="checkbox" item="5"/></td>' +
  '<td class="fshRight">&nbsp;Group Combats:</td>' +
  '<td><input id="fshGroup" type="checkbox" item="6"/></td>' +
  '<td colspan="3">&nbsp;</td>' +
  '</tr><tr>' +
  '<td class="fshRight">&nbsp;Donations:</td>' +
  '<td><input id="fshDonation" type="checkbox" item="7"/></td>' +
  '<td class="fshRight">&nbsp;Rankings:</td>' +
  '<td><input id="fshRank" type="checkbox" item="8"/></td>' +
  '<td class="fshRight">&nbsp;GvGs:</td>' +
  '<td><input id="fshGvG" type="checkbox" item="9"/></td>' +
  '<td class="fshRight">&nbsp;Tag/UnTags:</td>' +
  '<td><input id="fshTag" type="checkbox" item="3"/></td>' +
  '<td class="fshRight">&nbsp;Titans:</td>' +
  '<td><input id="fshTitan" type="checkbox" item="10"/></td>' +
  '<td class="fshRight">&nbsp;Other:</td>' +
  '<td><input id="fshOther" type="checkbox" item="0"/></td>' +
  '<td>&nbsp;</td>' +
  '</tr><tr>' +
  '<td colspan="2">' +
  '&nbsp;[<span id="fshAll" class="fshLink">Select All</span>]</td>' +
  '<td colspan="2">' +
  '&nbsp;[<span id="fshNone" class="fshLink">Select None</span>]</td>' +
  '<td colspan="9"></td>' +
  '</tr><tr><td id="fshOutput" class="fshBlue" colspan="14">' +
  'Loading Page 1 ...</td></tr>' +
  '</tbody></table>' +
  '<table id="fshInjectHere">' +
  '</table>';
export var headerRow = '<tbody><tr>' +
  '<td class="header" width="16">&nbsp;</td>' +
  '<td class="header" width="20%">Date</td>' +
  '<td class="header" width="80%">Message</td></tr></tbody>';
export var defChecks = [true, true, true, true, true, true,
  true, true, true, true, true];
export var noChecks = [false, false, false, false, false, false,
  false, false, false, false, false];
