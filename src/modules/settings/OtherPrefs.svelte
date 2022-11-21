<script>
import FieldInput from './FieldInput.svelte';
import SettingRow from './SettingRow.svelte';
</script>
<tr>
  <td class="header" colspan="2">Other preferences</td>
</tr>
<SettingRow
    field="autoFillMinBidPrice"
    label="Auto Fill Min Bid Price"
    tooltip="<span class='fshHelpTitle'>Auto Fill Min Bid Price</span><br><br>This enables the functionality to automatically fill in the min bid price so you just have to hit bid and your bid will be placed." />
<SettingRow
    field="hideRecipes"
    label="Hide Specific Recipes"
    tooltip="<span class='fshHelpTitle'>Hide Specific Recipes</span><br><br>If enabled, this hides recipes whose name matches the list (separated by commas). This works on Recipe Manager">
  <FieldInput field="hideRecipes" />
  <FieldInput field="hideRecipeNames" class="fshSettingsText" type="text" />
</SettingRow>
<SettingRow
    field="hideRelicOffline"
    label="Hide Relic Offline"
    tooltip="<span class='fshHelpTitle'>Hide Relic Offline</span><br><br>This hides the relic offline defenders checker." />
<SettingRow
    field="enterForSendMessage"
    label="Enter Sends Message"
    tooltip="<span class='fshHelpTitle'>Enter Sends Message</span><br><br>If enabled, will send a message from the Send Message screen if you press enter.<br>You can still insert a new line by holding down shift when you press enter." />
<SettingRow
    field="enableMessageTemplates"
    label="Enable Message Templates"
    tooltip="<span class='fshHelpTitle'>Enable Message Templates</span><br><br>This add templates to the message dialog." />
<SettingRow
    field="joinAllLink"
    label="Join All Groups Link"
    tooltip="<span class='fshHelpTitle'>Join All Groups Link</span><br><br>This makes a notification with a join all groups link in it when there are new groups." />
<SettingRow
    field="enableMaxGroupSizeToJoin"
    label="Max Group Size to Join"
    tooltip="<span class='fshHelpTitle'>Max Group Size to Join</span><br><br>This will disable HCSs Join All functionality and will only join groups less than a set size.">
  <FieldInput field="enableMaxGroupSizeToJoin" />
  Max Size:
  <FieldInput field="maxGroupSizeToJoin" type="number" min="0" max="11" />
</SettingRow>
<SettingRow
    unstable
    field="moveComposingButtons"
    label="Move Composing Buttons"
    tooltip="<span class='fshHelpTitle'>Move Composing Buttons</span><br><br>If enabled, will move composing buttons to the top of the composing screen." />
<SettingRow
    field="pageTwoLinks"
    label="Archive Page 2 Links"
    tooltip="<span class='fshHelpTitle'>Archive Page 2 Links</span><br><br>This makes links to page 2 of each archive on the news page." />
<SettingRow
    field="addUfsgLinks"
    label="Add UFSG Links to News"
    tooltip="<span class='fshHelpTitle'>Add UFSG Links to News</span><br><br>This adds UFSG links to news articles." />
<SettingRow
    unstable
    field="trackLadderReset"
    label="Track Ladder Reset"
    tooltip="<span class='fshHelpTitle'>Track Ladder Reset</span><br><br>This tracks ladder resets from logs and news articles." />
<SettingRow
    network
    unstable
    field="optInOnLadderPage"
    label="Opt in on Ladder Page"
    tooltip="<span class='fshHelpTitle'>Opt in on Ladder Page</span><br><br>This adds Opt in to the Ladder page." />
<SettingRow
    field="storeLastScavPage"
    label="Store Last Scavenging Page"
    tooltip="<span class='fshHelpTitle'>Store Last Scavenging Page</span><br><br>This will remember last used scavenging settings." />
<SettingRow
    field="betaOptIn"
    label="FSH Beta Opt-In"
    tooltip="<span class='fshHelpTitle'>FSH Beta Opt-In</span><br><br>This opts you in to beta features and additional debugging info.<br>The beta features are often incomplete, possibly buggy and subject to change at any time" />
