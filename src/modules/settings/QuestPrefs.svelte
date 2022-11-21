<script>
import FieldInput from './FieldInput.svelte';
import SettingRow from './SettingRow.svelte';
</script>
<tr>
  <td class="header" colspan="2">Quest preferences</td>
</tr>
<SettingRow
    field="hideQuests"
    label="Hide Specific Quests"
    tooltip="<span class='fshHelpTitle'>Hide Specific Quests</span><br><br>If enabled, this hides quests whose name matches the list (separated by commas).">
  <FieldInput field="hideQuests" />
  <FieldInput field="hideQuestNames" class="fshSettingsText" type="text" />
</SettingRow>
<SettingRow
    field="storeLastQuestPage"
    label="Store Last Quest Page"
    tooltip="<span class='fshHelpTitle'>Store Last Quest Page</span><br><br>This will store the page and sort order of each of the three quest selection pages for next time you visit.<br>If you need to reset the links, turn this option off, click on the link you wish to reset and then turn this option back on again." />
<SettingRow
    field="showNextQuestSteps"
    label="Show Next Quest Steps"
    tooltip="<span class='fshHelpTitle'>Show Next Quest Steps</span><br><br>Shows all quest steps in the UFSG." />
