<script>
import FieldInput from './FieldInput.svelte';
import SettingRow from './SettingRow.svelte';
</script>

<tr>
  <td class="header" colspan="2">Equipment screen preferences</td>
</tr>
<SettingRow network field="showExtraLinks" label="Show Extra Links">
  <div slot="tooltip">
    Adds AH and UFSG links to equipment screens.
  </div>
</SettingRow>
<SettingRow network field="enableItemColoring" label="Enable Item Coloring">
  <div slot="tooltip">
    Colors the item text based on the rarity of the item.
  </div>
</SettingRow>
<SettingRow network field="checkAllOfType" label="Check All of Type">
  <div slot="tooltip">
    Adds a button to select all of the same items.
  </div>
</SettingRow>
<SettingRow network field="enableFolderFilter" label="Enable Folder Filter">
  <div slot="tooltip">
    Adds folder filtering to the Store Items page,
    including moving tagged items between folders
  </div>
</SettingRow>
<SettingRow network field="showQuickSendLinks" label="Show Quick Send Item">
  <div slot="tooltip">
    Shows a link beside each item which gives the option to quick send the item
    to this person
  </div>
  <div slot="input">
    <FieldInput field="showQuickSendLinks" />
    <label for="itemRecipient">
      Send Items To
      <FieldInput field="itemRecipient" type="text" style="width: 190px"/>
    </label>
  </div>
</SettingRow>
<SettingRow network field="showQuickDropLinks" label="Show Quick Drop Item">
  <div slot="tooltip">
    Shows a link beside each item which gives the option to drop the item.
    WARNING: NO REFUNDS ON ERROR
  </div>
</SettingRow>
<SettingRow field="sendClasses" label="Quick Select all of type in Send Screen" type="text">
  <div slot="tooltip">
    Allows you to customize what quick links you would like displayed in your send item
    screen.<br>
    Use the format ["name","itemid"],["othername","itemid2"].<br>
    WARNING: NO REFUNDS ON ERROR"
  </div>
</SettingRow>
