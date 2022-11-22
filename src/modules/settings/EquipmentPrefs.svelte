<script>
import FieldInput from './FieldInput.svelte';
import SettingRow from './SettingRow.svelte';
</script>
<tr>
  <td class="header" colspan="2">Equipment screen preferences</td>
</tr>
<SettingRow
  network
  field="showExtraLinks"
  label="Show Extra Links"
  tooltip="<span class='fshHelpTitle'>Show Extra Links</span><br><br>If checked, this will add AH and UFSG links to equipment screens."
/>
<SettingRow
  network
  field="enableItemColoring"
  label="Enable Item Coloring"
  tooltip="<span class='fshHelpTitle'>Enable Item Coloring</span><br><br>This colors the item text based on the rarity of the item."
/>
<SettingRow
  network
  field="checkAllOfType"
  label="Check All of Type"
  tooltip="<span class='fshHelpTitle'>Check All of Type</span><br><br>This adds a button to select all of the same items."
/>
<SettingRow
  network
  field="enableFolderFilter"
  label="Enable Folder Filter"
  tooltip="<span class='fshHelpTitle'>Enable Folder Filter</span><br><br>This adds folder filtering to the Store Items page, including moving tagged items between folders"
/>
<SettingRow
  network
  field="showQuickSendLinks"
  label="Show Quick Send Item"
  tooltip="<span class='fshHelpTitle'>Show Quick Send on Manage Backpack</span><br><br>This will show a link beside each item which gives the option to quick send the item to this person"
>
  <FieldInput field="showQuickSendLinks"/>
  <label for="itemRecipient">
    Send Items To
    <FieldInput field="itemRecipient" type="text" style="width: 190px"/>
  </label>
</SettingRow>
<SettingRow
  network
  field="showQuickDropLinks"
  label="Show Quick Drop Item"
  tooltip="<span class='fshHelpTitle'>Show Quick Drop Item</span><br><br>This will show a link beside each item which gives the option to drop the item. WARNING: NO REFUNDS ON ERROR"
/>
<SettingRow
  field="sendClasses"
  label="Quick Select all of type in Send Screen"
  type="text"
  tooltip="<span class='fshHelpTitle'>Quick Select all of type in Send Screen</span><br><br>This allows you to customize what quick links you would like displayed in your send item screen.<br>Use the format [&quot;name&quot;,&quot;itemid&quot;],[&quot;othername&quot;,&quot;itemid2&quot;].<br>WARNING: NO REFUNDS ON ERROR"
/>
