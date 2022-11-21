<script>
import FieldInput from './FieldInput.svelte';
import SettingRow from './SettingRow.svelte';
</script>
<tr>
  <td class="header" colspan="2">Bounty hunting preferences</td>
</tr>
<SettingRow
    network
    field="enableActiveBountyList"
    label="Show Active Bounties"
    tooltip="<span class='fshHelpTitle'>Show Active Bounties</span><br><br>This will show your active bounties on the left hand side">
  <FieldInput field="enableActiveBountyList" />
  <FieldInput field="bountyListRefreshTime" type="number" min="0" /> seconds refresh
</SettingRow>
<SettingRow
    network
    field="enableWantedList"
    label="Show Wanted Bounties"
    tooltip="<span class='fshHelpTitle'>Show Wanted Bounties</span><br><br>This will show when someone you want is on the bounty board, the list is displayed on the left hand side">
  <FieldInput field="enableWantedList" /> Refresh time is same as Active Bounties
</SettingRow>
<SettingRow
    field="wantedNames"
    label="Wanted Names"
    type="text"
    tooltip="<span class='fshHelpTitle'>Wanted Names</span><br><br>The names of the people you want to see on the bounty board separated by commas (or * for all)" />
<SettingRow
    field="wantedGuildMembers"
    label="Show Guild Members"
    tooltip="<span class='fshHelpTitle'>Show Guild Members</span><br><br>If enabled, will show guild members in the wanted bounty list." />
<SettingRow
    network
    field="showPvPSummaryInLog"
    label="Show PvP Summary in Log"
    tooltip="<span class='fshHelpTitle'>Show PvP Summary in Log</span><br><br>This will show a summary of the PvP results in the log." />
