<script>
import SettingRow from './SettingRow.svelte';
</script>
<tr>
  <td class="header" colspan="2">Left Hand Menu Additional Links</td>
</tr>
<tr>
  <td colspan="2">Warning: Changes to the left hand menu have a significant impact on page load performance</td>
</tr>
<SettingRow
    field="recipeManagerLink"
    label="Recipe Manager"
    tooltip="<span class='fshHelpTitle'>Recipe Manager</span><br><br>Recipe Manager Link (Helper Menu)" />
<SettingRow
    field="medalGuideLink"
    label="Medal Guide"
    tooltip="<span class='fshHelpTitle'>Medal Guide</span><br><br>Medal Guide Link (Profile Page)" />
<SettingRow
    field="inventoryManagerLink"
    label="Inventory Manager"
    tooltip="<span class='fshHelpTitle'>Inventory Manager</span><br><br>Inventory Manager Link (Helper Menu)" />
<SettingRow
    field="buffLogLink"
    label="Buff Log"
    tooltip="<span class='fshHelpTitle'>Buff Log</span><br><br>Buff Log Link (Helper Menu)" />
<SettingRow
    field="combatLogLink"
    label="Combat Log"
    tooltip="<span class='fshHelpTitle'>Combat Log</span><br><br>Combat Log Link (Helper Menu)" />
<SettingRow
    field="creatureLogLink"
    label="Creature Log"
    tooltip="<span class='fshHelpTitle'>Creature Log</span><br><br>Creature Log Link (Helper Menu)" />
<SettingRow
    field="quickLinksLink"
    label="Quick Links"
    tooltip="<span class='fshHelpTitle'>Quick Links</span><br><br>Quick Links Link (Helper Menu)" />
<SettingRow
    field="auctionSearchLink"
    label="AH Quick Search"
    tooltip="<span class='fshHelpTitle'>AH Quick Search</span><br><br>AH Quick Search Link (Helper Menu)" />
<SettingRow
    field="onlinePlayersLink"
    label="Online Players"
    tooltip="<span class='fshHelpTitle'>Online Players</span><br><br>Online Players Link (Helper Menu)" />
<SettingRow
    field="findOtherLink"
    label="Find Other"
    tooltip="<span class='fshHelpTitle'>Find Other</span><br><br>Find Other Link (Helper Menu)" />
<SettingRow
    field="findBuffsLink"
    label="Find Buffs"
    tooltip="<span class='fshHelpTitle'>Find Buffs</span><br><br>Find Buffs Link (Helper Menu)" />
<SettingRow
    field="guildInventoryLink"
    label="Guild Inventory"
    tooltip="<span class='fshHelpTitle'>Guild Inventory</span><br><br>Guild Inventory Link (Helper Menu)" />
<SettingRow
    field="newGuildLogLink"
    label="New Guild Log"
    tooltip="<span class='fshHelpTitle'>New Guild Log</span><br><br>New Guild Log Link (Helper Menu)<br>When you are not using new guild log by default" />
<SettingRow
    field="topRatedLink"
    label="Top 250 Players"
    tooltip="<span class='fshHelpTitle'>Top 250 Players</span><br><br>Top 250 Players Link (Top 100 Players)" />
