<script>
// eslint-disable a11y-label-has-associated-control
import sendEvent from '../analytics/sendEvent';
import jQueryDialog from '../chrome/jQueryDialog/jQueryDialog';
import combatLog from '../chrome/pageSwitcher/loader/combatLog';
import monstorLog from '../chrome/pageSwitcher/loader/monstorLog';
import getElementById from '../common/getElementById';
import getValue from '../system/getValue';
import FieldInput from './FieldInput.svelte';
import FieldSelect from './FieldSelect.svelte';
import SettingRow from './SettingRow.svelte';

function showLogs() {
  sendEvent('settingsPage', 'combatLog');
  jQueryDialog(combatLog);
}

function showMonsterLogs() {
  sendEvent('settingsPage', 'injectMonsterLog');
  jQueryDialog(monstorLog);
}

function getHuntingModeOptions() {
  return [
    { value: '1', text: getValue('huntingBuffsName') },
    { value: '2', text: getValue('huntingBuffs2Name') },
    { value: '3', text: getValue('huntingBuffs3Name') },
  ];
}

function resetFootprintColor() {
  getElementById('footprintColor').value = '#ee9252';
}
</script>
<!-- eslint-disable a11y-label-has-associated-control -->
<tr>
  <td class="header" colspan="2">World screen/Hunting preferences</td>
</tr>
<SettingRow
    field="hideCreateGroupButton"
    label="Hide Create Group Button"
    tooltip="<span class='fshHelpTitle'>Hide Create Group Button</span><br><br>Enabling this option will hide the Create Group button">
  <label>
    <FieldInput field="hideChampionsGroup" />
    Champions
  </label>
  <label>
    <FieldInput field="hideElitesGroup" />
    Elite
  </label>
  <label>
    <FieldInput field="hideSEGroup" />
    Super Elite
  </label>
  <label>
    <FieldInput field="hideTitanGroup" />
    Titan
  </label>
  <label>
    <FieldInput field="hideLegendaryGroup" />
    Legendary
  </label>
</SettingRow>
<SettingRow
    field="keepLogs"
    label="Keep Combat Logs"
    tooltip="<span class='fshHelpTitle'>Keep Combat Logs</span><br><br>Save combat logs to a temporary variable. Press <u>Show logs</u> on the right to display and copy them">
    <FieldInput field="keepLogs" />
    <input type="button" class="custombutton" value="Show Logs" on:click={showLogs}>
</SettingRow>
<SettingRow
    field="showCombatLog"
    label="Show Combat Log"
    tooltip="<span class='fshHelpTitle'>Show Combat Log</span><br><br>This will show the combat log for each automatic battle below the monster list.">
</SettingRow>
<SettingRow
    field="enableCreatureColoring"
    label="Color Special Creatures"
    tooltip="<span class='fshHelpTitle'>Color Special Creatures</span><br><br>Creatures will be colored according to their rarity. Champions will be colored green, Elites yellow and Super Elites red.">
</SettingRow>
<SettingRow
    network
    field="showCreatureInfo"
    label="Show Creature Info"
    tooltip="<span class='fshHelpTitle'>Show Creature Info</span><br><br>This will show the information from the view creature link when you mouseover the link.">
</SettingRow>
<SettingRow
    field="combatEvaluatorBias"
    label="Combat Evaluator Bias"
    tooltip="<span class='fshHelpTitle'>Combat Evaluator Bias</span><br><br>This changes the bias of the combat evaluator for the damage and HP evaluation. It will not change the attack bias (1.1053).<br>Conservative = 1.1053 and 1.1 (Safest)<br>Semi-Conservative = 1.1 and 1.053<br>Adventurous = 1.053 and 1 (Bleeding Edge)<br>Conservative+ = 1.1053 and 1 with the attack calculation changed to +-48 per RJEM">
  <FieldSelect
      field="combatEvaluatorBias"
      options={[
        { value: '0', text: 'Conservative' },
        { value: '1', text: 'Semi-Conservative' },
        { value: '2', text: 'Adventurous' },
        { value: '3', text: 'Conservative+' },
      ]} />
</SettingRow>
<SettingRow
    network
    field="showMonsterLog"
    label="Keep Creature Log"
    tooltip="<span class='fshHelpTitle'>Keep Creature Log</span><br><br>This will show the creature log for each creature you see when you travel.">
  <FieldInput field="showMonsterLog" />
  <input type="button" class="custombutton" value="Show" on:click={showMonsterLogs}>
</SettingRow>
<SettingRow
    field="sendGoldonWorld"
    label="Show Send Gold"
    tooltip="<span class='fshHelpTitle'>Show Gold on World Screen</span><br><br>This will show a button in the gold dropdown to allow you to quickly send gold to a Friend.">
  <FieldInput field="sendGoldonWorld" />
  <label>
    Send
    <FieldInput field="goldAmount" type="number" min="0" width="4" />
  </label>
  <label>
    gold to
    <FieldInput field="goldRecipient" type="text" style="width: 60px"/>
  </label>
  <label>
    Current total:
    <FieldInput field="currentGoldSentTotal" type="number" min="0" width="4" />
  </label>
</SettingRow>
<SettingRow
    field="doNotKillList"
    label="Do Not Kill List"
    type="text"
    tooltip="<span class='fshHelpTitle'>Do Not Kill List</span><br><br>List of creatures that will not be killed by quick kill. You must type the full name of each creature, separated by commas. Creature name will show up in blue color on world screen and will not be killed by keyboard entry (but can still be killed by mouseclick)." />
<SettingRow
    field="showHuntingBuffs"
    label="Hunting Buffs"
    tooltip="<span class='fshHelpTitle'>Hunting Buffs</span><br><br>Customize which buffs are designated as hunting buffs. You must type the full name of each buff, separated by commas. Use the checkbox to enable/disable them.">
</SettingRow>
<SettingRow
    field="enabledHuntingMode"
    label="Enabled Hunting Mode"
    tooltip="<span class='fshHelpTitle'>Enabled Hunting Mode</span><br><br>This will determine which list of buffs gets checked on the world screen.">
  <FieldSelect
      field="enableHuntingMode"
      options={getHuntingModeOptions()} />
</SettingRow>
<SettingRow
    label="default Hunting Buff List"
    tooltip="<span class='fshHelpTitle'>default Hunting Buff List</span><br><br>default list of hunting buffs.">
  <FieldInput field="huntingBuffsName" title="Hunting mode name" type="text" />
  <FieldInput field="huntingBuffs" type="text" />
</SettingRow>
<SettingRow
    label="PvP Hunting Buff List"
    tooltip="<span class='fshHelpTitle'>PvP Hunting Buff List</span><br><br>PvP list of hunting buffs.">
  <FieldInput field="huntingBuffs2Name" title="Hunting mode name" type="text" />
  <FieldInput field="huntingBuffs2" type="text" />
</SettingRow>
<SettingRow
    label="SE Hunting Buff List"
    tooltip="<span class='fshHelpTitle'>SE Hunting Buff List</span><br><br>SE list of hunting buffs.">
  <FieldInput field="huntingBuffs3Name" title="Hunting mode name" type="text" />
  <FieldInput field="huntingBuffs3" type="text" />
</SettingRow>
<SettingRow
    field="huntingMode"
    label="Enable Hunting Mode"
    tooltip="<span class='fshHelpTitle'>Enable Hunting Mode</span><br><br>This disable menu and some visual features to speed up the calf.">
</SettingRow>
<SettingRow
    field="messageStack"
    label="Stack repeating world messages"
    tooltip="<span class='fshHelpTitle'>Stack repeating world messages</span><br><br>Messages on the world screen that have the same text will combine into a single stack, saving some screen space.">
</SettingRow>
<SettingRow
    field="footprintColor"
    label="Footprint color"
    tooltip="<span class='fshHelpTitle'>Change footprint color</span><br><br>Alters the color of footprints left on the world map.">
  <input id="footprintColor" name="footprintColor" type="color" value={getValue('footprintColor')}>
  <button type="button" class="custombutton" on:click={resetFootprintColor}>Reset</button>
</SettingRow>
<style>
input[type=color] {
  height: 1.5em;
  width: 2em;
  margin-right: 4px;
  vertical-align: middle;
}
</style>
