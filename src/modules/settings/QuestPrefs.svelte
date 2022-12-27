<script>
import FieldInput from './FieldInput.svelte';
import SettingRow from './SettingRow.svelte';
</script>

<tr>
  <td class="header" colspan="2">Quest preferences</td>
</tr>
<SettingRow field="hideQuests" label="Hide Specific Quests">
  <div slot="tooltip">
    Hides quests whose name matches the list (separated by commas).
  </div>
  <div slot="input">
    <FieldInput field="hideQuests" />
    <FieldInput field="hideQuestNames" class="fshSettingsText" type="text" />
  </div>
</SettingRow>
<SettingRow field="storeLastQuestPage" label="Store Last Quest Page">
  <div slot="tooltip">
    Stores the page and sort order of each of the three quest book sections
    for next time you visit.<br>If you need to reset the links, turn this option off,
    click on the link you wish to reset and then turn this option back on again.
  </div>
</SettingRow>
<SettingRow field="showNextQuestSteps" label="Show Next Quest Steps">
  <div slot="tooltip">
    Shows all quest steps in the UFSG.
  </div>
</SettingRow>
