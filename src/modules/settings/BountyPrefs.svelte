<script>
import FieldInput from './FieldInput.svelte';
import SettingRow from './SettingRow.svelte';
</script>

<tr>
  <td class="header" colspan="2">Bounty hunting preferences</td>
</tr>
<SettingRow network field="enableActiveBountyList" label="Show Active Bounties">
  <div slot="tooltip">
    Shows your active bounties on the left hand side
  </div>
  <div slot="input">
    <FieldInput field="enableActiveBountyList" />
    <FieldInput field="bountyListRefreshTime" type="number" min="0" /> seconds refresh
  </div>
</SettingRow>
<SettingRow network field="enableWantedList" label="Show Wanted Bounties">
  <div slot="tooltip">
    Shows when someone you want is on the bounty board.
    The list is displayed on the left hand side
  </div>
  <div slot="input">
    <FieldInput field="enableWantedList" /> Refresh time is same as Active Bounties
  </div>
</SettingRow>
<SettingRow field="wantedNames" label="Wanted Names" type="text">
  <div slot="tooltip">
    The names of the people you want to see on the bounty board separated by commas (or * for all)
  </div>
</SettingRow>
<SettingRow field="wantedGuildMembers" label="Show Guild Members">
  <div slot="tooltip">
    Shows guild members in the wanted bounty list.
  </div>
</SettingRow>
<SettingRow network field="showPvPSummaryInLog" label="Show PvP Summary in Log">
  <div slot="tooltip">
    Shows a summary of the PvP results in the log.
  </div>
</SettingRow>
