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
<SettingRow unstable field="showGuildRelationship" label="Show Guild Relationship">
  <div slot="tooltip">
    This shows the guild relationship in players' profiles.
  </div>
</SettingRow>
<SettingRow
  field="guildSelfMessage"
  label="Own Guild Message"
  type="text"
/>
<tr><td></td><td>Enter guild names, separated by commas</td></tr>
<SettingRow field="guildFrnd" label="Friendly Guilds">
  <div slot="input">
    <FieldInput field="guildFrnd" class="fshSettingsText" type="text" />
    <span
      class="fshPoint"
      id="toggleShowGuildFrndMessage"
      on:click={() => { friendMessage = !friendMessage; }}
      on:keyup={() => { friendMessage = !friendMessage; }}
    >
      &raquo;
    </span>
  </div>
</SettingRow>
<SettingRow
  class="{friendMessage ? '' : 'fshHide'}"
  field="guildFrndMessage"
  label="Friendly Guild Message"
  type="text"
/>
<SettingRow field="guildPast" label="Old Guilds">
  <div slot="input">
    <FieldInput field="guildPast" class="fshSettingsText" type="text" />
    <span
      class="fshPoint"
      id="toggleShowGuildPastMessage"
      on:click={() => { oldMessage = !oldMessage; } }
      on:keyup={() => { oldMessage = !oldMessage; } }
    >
      &raquo;
    </span>
    <div id="showGuildPastMessage" class="fshHide"></div>
  </div>
</SettingRow>
<SettingRow
  class="{oldMessage ? '' : 'fshHide'}"
  field="guildPastMessage"
  label="Old Guild Message"
  type="text"
/>
<SettingRow field="guildEnmy" label="Enemy Guilds">
  <div slot="input">
    <FieldInput field="guildEnmy" type="text" class="fshSettingsText" />
    <span
      class="fshPoint"
      id="toggleShowGuildEnmyMessage"
      data-linkto="showGuildEnmyMessage"
      on:click={() => { enemyMessage = !enemyMessage; }}
      on:keyup={() => { enemyMessage = !enemyMessage; }}
    >
      &raquo;
    </span>
  </div>
</SettingRow>
<SettingRow
  class="{enemyMessage ? '' : 'fshHide'}"
  field="guildEnmyMessage"
  label="Enemy Guild Message"
  type="text"
/>
<SettingRow field="highlightValidTargets" label="Highlight Valid PvP Targets">
  <div slot="tooltip">
    Highlights targets in OTHER guilds that are within your level range to attack
    for PvP or GvG.
  </div>
  <div slot="input">
    <label for="highlightPlayersNearMyLvl">
      <FieldInput field="highlightPlayersNearMyLvl" />
      PvP
    </label>
    <label for="highlightGvGPlayersNearMyLvl">
      <FieldInput field="highlightGvGPlayersNearMyLvl" />
      GvG
    </label>
  </div>
</SettingRow>
<SettingRow field="showAdmin" label="Show rank controls">
  <div slot="tooltip">
    Show ranking controls for guild management in member profile page
    - this works for guild founders only
  </div>
</SettingRow>
<SettingRow field="ajaxifyRankControls" label="AJAXify rank controls">
  <div slot="tooltip">
    Enables guild founders with ranking rights to change rank positions
    without a screen refresh.
  </div>
</SettingRow>
<SettingRow network field="detailedConflictInfo" label="Show Conflict Details">
  <div slot="tooltip">
    Inserts detailed conflict information onto your guild's manage page.
    Currently displays the target guild as well as the current score.
  </div>
</SettingRow>
<SettingRow field="enableHistoryCompressor" label="Guild History Compressor">
  <div slot="tooltip">
    Compresses long guild histories and provides a link to expand
    the compressed section.
  </div>
</SettingRow>
<SettingRow field="showBuffLinks" label="Show Buff Links">
  <div slot="tooltip">
    Shows buffs links after guild members names
  </div>
</SettingRow>
