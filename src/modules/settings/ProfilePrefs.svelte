<script>
import SettingRow from './SettingRow.svelte';
</script>
<tr>
  <td class="header" colspan="2">Profile preferences</td>
</tr>
<SettingRow
    unstable
    field="showQuickButtons"
    label="Show Quick Buttons"
    tooltip="<span class='fshHelpTitle'>Show Quick Buttons</span><br><br>This shows quick access buttons under the avatar in players' profiles." />
<SettingRow
    field="renderSelfBio"
    label="Render self bio"
    tooltip="<span class='fshHelpTitle'>Render self bio (SLOW)</span><br><br>This determines if your own bio will render the FSH special bio tags." />
<SettingRow
    field="renderOtherBios"
    label="Render other players' bios"
    tooltip="<span class='fshHelpTitle'>Render other players' bios (SLOW)</span><br><br>This determines if other players bios will render the FSH special bio tags." />
<SettingRow
    field="enableBioCompressor"
    label="Enable Bio Compressor"
    tooltip="<span class='fshHelpTitle'>Enable Bio Compressor</span><br><br>This will compress long bios and provide a link to expand the compressed section." />
<SettingRow
    field="buyBuffsGreeting"
    label="Buy Buffs Greeting"
    type="text"
    tooltip="<span class='fshHelpTitle'>Buy Buffs Greeting</span><br><br>This is the default text to open a message with when asking to buy buffs. You can use playername to insert the target players name. You can also use buffs to insert the list of buffs. You can use cost to insert the total cost of the buffs.">
</SettingRow>
<SettingRow
    field="showStatBonusTotal"
    label="Show Stat Bonus Total"
    tooltip="<span class='fshHelpTitle'>Show Stat Bonus Total</span><br><br>This will show a total of the item stats when you mouseover an item on the profile screen." />
<SettingRow
    field="ajaxifyProfileSections"
    label="Ajaxify Profile Sections"
    tooltip="<span class='fshHelpTitle'>Ajaxify Profile Sections</span><br><br>This collapses and expands profile sections without a page reload." />
<SettingRow
    unstable
    field="statisticsWrap"
    label="Statistics Wrap"
    tooltip="<span class='fshHelpTitle'>Statistics Wrap</span><br><br>This fixes the wrapping of the statistics section." />
<SettingRow
    field="quickWearLink"
    label="Quick Wear Link"
    tooltip="<span class='fshHelpTitle'>Quick Wear Link</span><br><br>This adds a quick wear link to the inventory section header." />
<SettingRow
    field="nekidButton"
    label="Nekid Button"
    tooltip="<span class='fshHelpTitle'>Nekid Button</span><br><br>This adds Nekid button below worn items." />
<SettingRow
    field="selectAllLink"
    label="Select All Link"
    tooltip="<span class='fshHelpTitle'>Select All Link</span><br><br>This adds a select all link to the backpack section header." />
<SettingRow
    field="enableQuickDrink"
    label="Enable Quick Drink/Wear"
    tooltip="<span class='fshHelpTitle'>Enable Quick Drink/Wear</span><br><br>This enables the quick drink/wear functionality on the profile page." />
<SettingRow
    field="componentWidgets"
    label="Component Widgets"
    tooltip="<span class='fshHelpTitle'>Component Widgets</span><br><br>This adds buttons to the components section. Quick delete, counts and quick extract." />
<SettingRow
    field="fastDebuff"
    label="Fast Debuff"
    tooltip="<span class='fshHelpTitle'>Fast Debuff</span><br><br>This allows debuffing without a page reload." />
<SettingRow
    field="disableDeactivatePrompts"
    label="Disable Deactivate Prompts"
    tooltip="<span class='fshHelpTitle'>Disable Deactivate Prompts</span><br><br>This disables the prompts for deactivating buffs on the profile page." />
<SettingRow
    field="injectBuffGuide"
    label="Inject Buff Guide"
    tooltip="<span class='fshHelpTitle'>Inject Buff Guide</span><br><br>This attempts to calculate stat movement for barricade, entrench and nightmare visage.<br>These calculations are NOT cumulative and are intended only as a guide." />
<SettingRow
    field="showBuffLevel"
    label="Show Buff Level"
    tooltip="<span class='fshHelpTitle'>Show Buff Level</span><br><br>This shows level underneath buffs in players' profiles." />
<SettingRow
    field="countAllyEnemy"
    label="Count Ally Enemy"
    tooltip="<span class='fshHelpTitle'>Count Ally Enemy</span><br><br>This shows a count of the number of allies and enemies." />
<SettingRow
    field="highlightPvpProtection"
    label="Highlight Pvp Protection"
    tooltip="<span class='fshHelpTitle'>Highlight Pvp Protection</span><br><br>If enabled, will put a red box around PvP Protection." />
