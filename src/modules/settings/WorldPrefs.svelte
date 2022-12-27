<script>
import sendEvent from '../analytics/sendEvent';
import jQueryDialog from '../chrome/jQueryDialog/jQueryDialog';
import combatLog from '../chrome/pageSwitcher/loader/combatLog';
import monstorLog from '../chrome/pageSwitcher/loader/monstorLog';
import getElementById from '../common/getElementById';
import getValue from '../system/getValue';
import FieldInput from './FieldInput.svelte';
import FieldSelect from './FieldSelect.svelte';
import SettingRow from './SettingRow.svelte';

const huntingBuffsName = getValue('huntingBuffsName');
const huntingBuffs2Name = getValue('huntingBuffs2Name');
const huntingBuffs3Name = getValue('huntingBuffs3Name');

function showLogs() {
  sendEvent('settingsPage', 'combatLog');
  jQueryDialog(combatLog);
}

function showMonsterLogs() {
  sendEvent('settingsPage', 'injectMonsterLog');
  jQueryDialog(monstorLog);
}

function resetFootprintColor() {
  getElementById('footprintColor').value = '#ee9252';
}
</script>

<tr>
  <td class="header" colspan="2">World screen/Hunting preferences</td>
</tr>
<SettingRow field="hideCreateGroupButton" label="Hide Create Group Button">
  <div slot="tooltip">
    Hides the Create Group button
  </div>
  <div slot="input">
    <label for="hideChampionsGroup">
      <FieldInput field="hideChampionsGroup" />
      Champions
    </label>
    <label for="hideElitesGroup">
      <FieldInput field="hideElitesGroup" />
      Elite
    </label>
    <label for="hideSEGroup">
      <FieldInput field="hideSEGroup" />
      Super Elite
    </label>
    <label for="hideTitanGroup">
      <FieldInput field="hideTitanGroup" />
      Titan
    </label>
    <label for="hideLegendaryGroup">
      <FieldInput field="hideLegendaryGroup" />
      Legendary
    </label>
  </div>
</SettingRow>
<SettingRow field="keepLogs" label="Keep Combat Logs">
  <div slot="tooltip">
    Save combat logs to a temporary variable. Press <u>Show logs</u>
    on the right to display and copy them
  </div>
  <div slot="input">
    <FieldInput field="keepLogs" />
    <button class="custombutton" on:click={showLogs} type="button">Show Logs</button>
  </div>
</SettingRow>
<SettingRow field="showCombatLog" label="Show Combat Log">
  <div slot="tooltip">
    Show the combat log for each automatic battle below the monster list.
  </div>
</SettingRow>
<SettingRow field="enableCreatureColoring" label="Color Special Creatures">
  <div slot="tooltip">
    Creatures will be colored according to their rarity.
    Champions will be colored green, Elites yellow and Super Elites red.
  </div>
</SettingRow>
<SettingRow network field="showCreatureInfo" label="Show Creature Info">
  <div slot="tooltip">
    Shows information from the view creature link when you mouseover monsters.
  </div>
</SettingRow>
<SettingRow field="combatEvaluatorBias" label="Combat Evaluator Bias">
  <div slot="tooltip">
    Changes the bias of the combat evaluator for the damage and HP evaluation.
    It will not change the attack bias (1.1053).<br>
    Conservative = 1.1053 and 1.1 (Safest)<br>
    Semi-Conservative = 1.1 and 1.053<br>
    Adventurous = 1.053 and 1 (Bleeding Edge)<br>
    Conservative+ = 1.1053 and 1 with the attack calculation changed to &plusmn;48 per RJEM
  </div>
  <div slot="input">
    <FieldSelect
      field="combatEvaluatorBias"
      options={[
        { value: '0', text: 'Conservative' },
        { value: '1', text: 'Semi-Conservative' },
        { value: '2', text: 'Adventurous' },
        { value: '3', text: 'Conservative+' },
      ]}
    />
  </div>
</SettingRow>
<SettingRow network field="showMonsterLog" label="Keep Creature Log"><!-- duplicated -->
  <div slot="tooltip">
    Shows the creature log for each creature you see when you travel.
  </div>
  <div slot="input">
    <FieldInput field="showMonsterLog" />
    <button class="custombutton" on:click={showMonsterLogs} type="button">Show</button>
  </div>
</SettingRow>
<SettingRow field="sendGoldonWorld" label="Show Send Gold">
  <div slot="tooltip">
    Creates a button in the gold dropdown to allow you to quickly send gold to a friend.
  </div>
  <div slot="input">
    <FieldInput field="sendGoldonWorld" />
    <label for="goldAmount">
      Send
      <FieldInput field="goldAmount" type="number" min="0" width="4" />
    </label>
    <label for="goldRecipient">
      gold to
      <FieldInput field="goldRecipient" type="text" style="width: 60px"/>
    </label>
    <label for="currentGoldSentTotal">
      Current total:
      <FieldInput field="currentGoldSentTotal" type="number" min="0" width="4" />
    </label>
  </div>
</SettingRow>
<SettingRow field="doNotKillList" label="Do Not Kill List" type="text">
  <div slot="tooltip">
    List of creatures that will not be killed by quick kill.
    You must type the full name of each creature, separated by commas.
    Creature name will show up in blue color on world screen and will not be killed by
    keyboard entry (but can still be killed by mouseclick).
  </div>
</SettingRow>
<SettingRow field="showHuntingBuffs" label="Hunting Buffs">
  <div slot="tooltip">
    Customize which buffs are designated as hunting buffs. You must type the full name of
    each buff, separated by commas. Use the checkbox to enable/disable them.
  </div>
</SettingRow>
<SettingRow field="enabledHuntingMode" label="Enabled Hunting Mode"><!-- duplicated -->
  <div slot="tooltip">
    Determines which list of buffs gets checked on the world screen.
  </div>
  <div slot="input">
    <FieldSelect
      field="enabledHuntingMode"
      options={[
        { value: '1', text: huntingBuffsName },
        { value: '2', text: huntingBuffs2Name },
        { value: '3', text: huntingBuffs3Name },
      ]}
    />
  </div>
</SettingRow>
<SettingRow label="{huntingBuffsName} Hunting Buff List">
  <div slot="tooltip">
    {huntingBuffsName} list of hunting buffs.
  </div>
  <div slot="input">
    <FieldInput field="huntingBuffsName" title="Hunting mode name" type="text" />
    <FieldInput field="huntingBuffs" type="text" />
  </div>
</SettingRow>
<SettingRow label="{huntingBuffs2Name} Hunting Buff List">
  <div slot="tooltip">
    {huntingBuffs2Name} list of hunting buffs.
  </div>
  <div slot="input">
    <FieldInput field="huntingBuffs2Name" title="Hunting mode name" type="text" />
    <FieldInput field="huntingBuffs2" type="text" />
  </div>
</SettingRow>
<SettingRow label="{huntingBuffs3Name} Hunting Buff List">
  <div slot="tooltip">
    {huntingBuffs3Name} list of hunting buffs.
  </div>
  <div slot="input">
    <FieldInput field="huntingBuffs3Name" title="Hunting mode name" type="text" />
    <FieldInput field="huntingBuffs3" type="text" />
  </div>
</SettingRow>
<SettingRow field="huntingMode" label="Enable Hunt Mode">
  <div slot="tooltip">
    Disables menu and some visual features to speed up FSH.
  </div>
</SettingRow>
<SettingRow field="messageStack" label="Stack repeating world messages">
  <div slot="tooltip">
    Messages on the world screen that have the same text will combine into a single stack,
    saving some screen space.
  </div>
</SettingRow>
<SettingRow field="footprintColor" label="Footprint color">
  <div slot="tooltip">
    Alters the color of footprints left on the world map.
  </div>
  <div slot="input">
    <input
      id="footprintColor"
      name="footprintColor"
      type="color"
      value={getValue('footprintColor')}
    >
    <button class="custombutton" on:click={resetFootprintColor} type="button">Reset</button>
  </div>
</SettingRow>

<style>
input[type=color] {
  height: 1.5em;
  width: 2em;
  margin-right: 4px;
  vertical-align: middle;
}
</style>
