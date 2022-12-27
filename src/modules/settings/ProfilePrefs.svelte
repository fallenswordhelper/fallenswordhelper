<script>
import SettingRow from './SettingRow.svelte';
</script>

<tr>
  <td class="header" colspan="2">Profile preferences</td>
</tr>
<SettingRow unstable field="showQuickButtons" label="Show Quick Buttons">
  <div slot="tooltip">
    Shows quick access buttons under the avatar in players' profiles.
  </div>
</SettingRow>
<SettingRow field="renderSelfBio" label="Render self bio">
  <div slot="tooltip">
    Render your own profile with the FSH special bio tags.
  </div>
</SettingRow>
<SettingRow field="renderOtherBios" label="Render other players' bios">
  <div slot="tooltip">
    Render players' profiles with the FSH special bio tags.
  </div>
</SettingRow>
<SettingRow field="enableBioCompressor" label="Enable Bio Compressor">
  <div slot="tooltip">
    Compress long bios and provide a link to expand the compressed section.
  </div>
</SettingRow>
<SettingRow field="buyBuffsGreeting" label="Buy Buffs Greeting" type="text">
  <div slot="tooltip">
    This is the default text to open a message with when asking to buy buffs.
    You can use playername to insert the target players name. You can also use
    buffs to insert the list of buffs. You can use cost to insert the total cost of the buffs.
  </div>
</SettingRow>
<SettingRow field="showStatBonusTotal" label="Show Stat Bonus Total">
  <div slot="tooltip">
    Shows total item stats when you mouseover an item on the profile screen.
  </div>
</SettingRow>
<SettingRow field="ajaxifyProfileSections" label="Ajaxify Profile Sections">
  <div slot="tooltip">
    Collapse and expand profile sections without a page reload.
  </div>
</SettingRow>
<SettingRow unstable field="statisticsWrap" label="Statistics Wrap">
  <div slot="tooltip">
    Fixes the wrapping of the statistics section.
  </div>
</SettingRow>
<SettingRow field="quickWearLink" label="Quick Wear Link">
  <div slot="tooltip">
    Adds a quick wear link to the inventory section header.
  </div>
</SettingRow>
<SettingRow field="nekidButton" label="Nekid Button">
  <div slot="tooltip">
    Adds Nekid button below worn items.
  </div>
</SettingRow>
<SettingRow field="selectAllLink" label="Select All Link">
  <div slot="tooltip">
    Adds a select all link to the backpack section header.
  </div>
</SettingRow>
<SettingRow field="enableQuickDrink" label="Enable Quick Drink/Wear">
  <div slot="tooltip">
    Enables the quick drink/wear functionality on the profile page.
  </div>
</SettingRow>
<SettingRow field="componentWidgets" label="Component Widgets">
  <div slot="tooltip">
    Adds quick delete, counts and quick extract buttons to the components section.
  </div>
</SettingRow>
<SettingRow field="fastDebuff" label="Fast Debuff">
  <div slot="tooltip">
    Debuff without a page reload.
  </div>
</SettingRow>
<SettingRow field="disableDeactivatePrompts" label="Disable Deactivate Prompts">
  <div slot="tooltip">
    Disables the prompts for deactivating buffs on the profile page.
  </div>
</SettingRow>
<SettingRow field="injectBuffGuide" label="Inject Buff Guide">
  <div slot="tooltip">
    Estimates the stat movement for barricade, entrench and nightmare visage.<br>
    These calculations are NOT cumulative and are intended only as a guide.
  </div>
</SettingRow>
<SettingRow field="showBuffLevel" label="Show Buff Level">
  <div slot="tooltip">
    Shows level underneath buffs in players' profiles.
  </div>
</SettingRow>
<SettingRow field="countAllyEnemy" label="Count Ally Enemy">
  <div slot="tooltip">
    Shows a count of the number of allies and enemies.
  </div>
</SettingRow>
<SettingRow field="highlightPvpProtection" label="Highlight Pvp Protection">
  <div slot="tooltip">
    Put a red box around PvP Protection.
  </div>
</SettingRow>
