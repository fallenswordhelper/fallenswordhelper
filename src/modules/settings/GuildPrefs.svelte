<script>
import FieldInput from './FieldInput.svelte';
import SettingRow from './SettingRow.svelte';

let friendMessage = false;
let oldMessage = false;
let enemyMessage = false;
</script>
<tr>
  <td class="header" colspan="2">Guild &gt; Manage preferences</td>
</tr>
<SettingRow
  unstable
  field="showGuildRelationship"
  label="Show Guild Relationship"
  tooltip="<span class='fshHelpTitle'>Show Guild Relationship</span><br><br>This show the guild relationship in players' profiles."
/>
<tr><td></td><td>Enter guild names, separated by commas</td></tr>
<SettingRow
  field="guildFrnd"
  label="Friendly Guilds"
>
  <FieldInput field="guildFrnd" class="fshSettingsText" type="text"/>
  <span class="fshPoint" id="toggleShowGuildFrndMessage" on:click={() => { friendMessage = !friendMessage; } }>»</span>
</SettingRow>
<SettingRow
  field="guildFrndMessage"
  type="text"
  label="Label"
  class="{friendMessage ? '' : 'fshHide'}"
/>
<SettingRow
  field="guildPast"
  label="Old Guilds"
>
  <FieldInput field="guildPast" class="fshSettingsText" type="text"/>
  <span class="fshPoint" id="toggleShowGuildPastMessage" on:click={() => { oldMessage = !oldMessage; } }>»</span>
  <div id="showGuildPastMessage" class="fshHide"></div>
</SettingRow>
<SettingRow
  field="guildPastMessage"
  label="Label"
  type="text"
  class="{oldMessage ? '' : 'fshHide'}"
/>
<SettingRow
  field="guildEnmy"
  label="Enemy Guilds"
>
  <FieldInput field="guildEnmy" type="text" class="fshSettingsText"/>
  <span class="fshPoint" id="toggleShowGuildEnmyMessage" data-linkto="showGuildEnmyMessage" on:click={() => { enemyMessage = !enemyMessage; }}>»</span>
</SettingRow>
<SettingRow
  field="guildEnmyMessage"
  label="Label"
  type="text"
  class="{enemyMessage ? '' : 'fshHide'}"
/>
<SettingRow
  field="highlightValidTargets"
  label="Highlight Valid PvP Targets"
  tooltip="<span class='fshHelpTitle'>Highlight Valid PvP Targets</span><br><br>Enabling this option will highlight targets in OTHER guilds that are within your level range to attack for PvP or GvG."
>
  <label for="highlightPlayersNearMyLvl">
    <FieldInput field="highlightPlayersNearMyLvl"/>
    PvP
  </label>
  <label for="highlightGvGPlayersNearMyLvl">
    <FieldInput field="highlightGvGPlayersNearMyLvl"/>
    GvG
  </label>
</SettingRow>
<SettingRow
  field="showAdmin"
  label="Show rank controls"
  tooltip="<span class='fshHelpTitle'>Show rank controls</span><br><br>Show ranking controls for guild management in member profile page - this works for guild founders only"
/>
<SettingRow
  field="ajaxifyRankControls"
  label="AJAXify rank controls"
  tooltip="<span class='fshHelpTitle'>AJAXify rank controls</span><br><br>Enables guild founders with ranking rights to change rank positions without a screen refresh."
/>
<SettingRow
  network
  field="detailedConflictInfo"
  label="Show Conflict Details"
  tooltip="<span class='fshHelpTitle'>Show Conflict Details</span><br><br>Inserts detailed conflict information onto your guild's manage page. Currently displays the target guild as well as the current score."
/>
<SettingRow
  field="enableHistoryCompressor"
  label="Guild History Compressor"
  tooltip="<span class='fshHelpTitle'>Guild History Compressor</span><br><br>This will compress long guild histories and provide a link to expand the compressed section."
/>
<SettingRow
  field="showBuffLinks"
  label="Show Buff Links"
  tooltip="<span class='fshHelpTitle'>Show Buff Links</span><br><br>This shows buffs links after guild members names"
/>
