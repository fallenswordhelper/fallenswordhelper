<script>
import SettingRow from './SettingRow.svelte';
</script>
<tr>
  <td class="header" colspan="2">Profile preferences</td>
</tr>
<SettingRow
    unstable
    field="showQuickButtons"
    label="Show Quick Buttons">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Show Quick Buttons</span><br><br>
    Shows quick access buttons under the avatar in players' profiles.
  </div>
</SettingRow>
<SettingRow
    field="renderSelfBio"
    label="Render self bio">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Render self bio (SLOW)</span><br><br>
    Render your own profile with the FSH special bio tags.
  </div>
</SettingRow>
<SettingRow
    field="renderOtherBios"
    label="Render other players' bios">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Render other players' bios (SLOW)</span><br><br>
    Render players' profiles with the FSH special bio tags.
  </div>
</SettingRow>
<SettingRow
    field="enableBioCompressor"
    label="Enable Bio Compressor">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Enable Bio Compressor</span><br><br>
    Compress long bios and provide a link to expand the compressed section.
  </div>
</SettingRow>
<SettingRow
    field="buyBuffsGreeting"
    label="Buy Buffs Greeting"
    type="text">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Buy Buffs Greeting</span><br><br>
    This is the default text to open a message with when asking to buy buffs.
    You can use playername to insert the target players name. You can also use
    buffs to insert the list of buffs. You can use cost to insert the total cost of the buffs.
  </div>
</SettingRow>
<SettingRow
    field="showStatBonusTotal"
    label="Show Stat Bonus Total">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Show Stat Bonus Total</span><br><br>
    Shows total item stats when you mouseover an item on the profile screen.
  </div>
</SettingRow>
<SettingRow
    field="ajaxifyProfileSections"
    label="Ajaxify Profile Sections">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Ajaxify Profile Sections</span><br><br>
    Collapse and expand profile sections without a page reload.
  </div>
</SettingRow>
<SettingRow
    unstable
    field="statisticsWrap"
    label="Statistics Wrap">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Statistics Wrap</span><br><br>
    Fixes the wrapping of the statistics section.
  </div>
</SettingRow>
<SettingRow
    field="quickWearLink"
    label="Quick Wear Link">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Quick Wear Link</span><br><br>
    Adds a quick wear link to the inventory section header.
  </div>
</SettingRow>
<SettingRow
    field="nekidButton"
    label="Nekid Button">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Nekid Button</span><br><br>
    Adds Nekid button below worn items.
  </div>
</SettingRow>
<SettingRow
    field="selectAllLink"
    label="Select All Link">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Select All Link</span><br><br>
    Adds a select all link to the backpack section header.
  </div>
</SettingRow>
<SettingRow
    field="enableQuickDrink"
    label="Enable Quick Drink/Wear">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Enable Quick Drink/Wear</span><br><br>
    Enables the quick drink/wear functionality on the profile page.
  </div>
</SettingRow>
<SettingRow
    field="componentWidgets"
    label="Component Widgets">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Component Widgets</span><br><br>
    Adds quick delete, counts and quick extract buttons to the components section.
  </div>
</SettingRow>
<SettingRow
    field="fastDebuff"
    label="Fast Debuff">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Fast Debuff</span><br><br>
    Debuff without a page reload.
  </div>
</SettingRow>
<SettingRow
    field="disableDeactivatePrompts"
    label="Disable Deactivate Prompts">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Disable Deactivate Prompts</span><br><br>
    Disables the prompts for deactivating buffs on the profile page.
  </div>
</SettingRow>
<SettingRow
    field="injectBuffGuide"
    label="Inject Buff Guide">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Inject Buff Guide</span><br><br>
    Estimates the stat movement for barricade, entrench and nightmare visage.<br>
    These calculations are NOT cumulative and are intended only as a guide.
  </div>
</SettingRow>
<SettingRow
    field="showBuffLevel"
    label="Show Buff Level">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Show Buff Level</span><br><br>
    Shows level underneath buffs in players' profiles.
  </div>
</SettingRow>
<SettingRow
    field="countAllyEnemy"
    label="Count Ally Enemy">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Count Ally Enemy</span><br><br>
    Shows a count of the number of allies and enemies.
  </div>
</SettingRow>
<SettingRow
    field="highlightPvpProtection"
    label="Highlight Pvp Protection">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Highlight Pvp Protection</span><br><br>
    Put a red box around PvP Protection.
  </div>
</SettingRow>
