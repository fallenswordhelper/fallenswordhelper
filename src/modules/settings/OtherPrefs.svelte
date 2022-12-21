<script>
import FieldInput from './FieldInput.svelte';
import SettingRow from './SettingRow.svelte';
</script>
<tr>
  <td class="header" colspan="2">Other preferences</td>
</tr>
<SettingRow
    field="autoFillMinBidPrice"
    label="Auto Fill Min Bid Price">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Auto Fill Min Bid Price</span><br><br>
    Automatically fill in the min bid price in the auction house.
  </div>
</SettingRow>
<SettingRow
    field="hideRecipes"
    label="Hide Specific Recipes">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Hide Specific Recipes</span><br><br>
    Hides recipes whose name matches the list (separated by commas).
    This works on Recipe Manager.
  </div>
  <div slot="input">
    <FieldInput field="hideRecipes" />
    <FieldInput field="hideRecipeNames" class="fshSettingsText" type="text" />
  </div>
</SettingRow>
<SettingRow
    field="hideRelicOffline"
    label="Hide Relic Offline">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Hide Relic Offline</span><br><br>
    Hides the relic offline defenders checker.
  </div>
</SettingRow>
<SettingRow
    field="enterForSendMessage"
    label="Enter Sends Message">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Enter Sends Message</span><br><br>
    Send a message from the Send Message screen if you press enter.<br>
    You can still insert a new line by holding down shift when you press enter.
  </div>
</SettingRow>
<SettingRow
    field="enableMessageTemplates"
    label="Enable Message Templates">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Enable Message Templates</span><br><br>
    Add templates to the message dialog.
  </div>
</SettingRow>
<SettingRow
    field="joinAllLink"
    label="Join All Groups Link">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Join All Groups Link</span><br><br>
    Get a notification with a join all groups link in it when there are new groups.
  </div>
</SettingRow>
<SettingRow
    field="enableMaxGroupSizeToJoin"
    label="Max Group Size to Join">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Max Group Size to Join</span><br><br>
    Only join groups less than a set size.
  </div>
  <div slot="input">
    <FieldInput field="enableMaxGroupSizeToJoin" />
    Max Size:
    <FieldInput field="maxGroupSizeToJoin" type="number" min="0" max="11" />
  </div>
</SettingRow>
<SettingRow
    unstable
    field="moveComposingButtons"
    label="Move Composing Buttons">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Move Composing Buttons</span><br><br>
    Move composing buttons to the top of the composing screen.
  </div>
</SettingRow>
<SettingRow
    field="pageTwoLinks"
    label="Archive Page 2 Links">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Archive Page 2 Links</span><br><br>
    Add links to page 2 of each archive on the news page.
  </div>
</SettingRow>
<SettingRow
    field="addUfsgLinks"
    label="Add UFSG Links to News">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Add UFSG Links to News</span><br><br>
    Add UFSG links to news articles.
  </div>
</SettingRow>
<SettingRow
    unstable
    field="trackLadderReset"
    label="Track Ladder Reset">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Track Ladder Reset</span><br><br>
    Tracks ladder resets from logs and news articles.
  </div>
</SettingRow>
<SettingRow
    network
    unstable
    field="optInOnLadderPage"
    label="Opt in on Ladder Page">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Opt in on Ladder Page</span><br><br>
    Aadds Opt in to the Ladder page.
  </div>
</SettingRow>
<SettingRow
    field="storeLastScavPage"
    label="Store Last Scavenging Page">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Store Last Scavenging Page</span><br><br>
    Remember last used scavenging settings.
  </div>
</SettingRow>
<SettingRow
    field="betaOptIn"
    label="FSH Beta Opt-In">
  <div slot="tooltip">
    <span class='fshHelpTitle'>FSH Beta Opt-In</span><br><br>
    Opt in to beta features and additional debugging info.<br>
    The beta features are often incomplete, possibly buggy and subject to change at any time.
  </div>
</SettingRow>
