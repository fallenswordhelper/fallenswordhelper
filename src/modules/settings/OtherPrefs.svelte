<script>
import FieldInput from './FieldInput.svelte';
import SettingRow from './SettingRow.svelte';
</script>

<tr>
  <td class="header" colspan="2">Other preferences</td>
</tr>
<SettingRow field="autoFillMinBidPrice" label="Auto Fill Min Bid Price">
  <div slot="tooltip">
    Automatically fill in the min bid price in the auction house.
  </div>
</SettingRow>
<SettingRow field="hideRecipes" label="Hide Specific Recipes">
  <div slot="tooltip">
    Hides recipes whose name matches the list (separated by commas).
    This works on Recipe Manager.
  </div>
  <div slot="input">
    <FieldInput field="hideRecipes" />
    <FieldInput field="hideRecipeNames" class="fshSettingsText" type="text" />
  </div>
</SettingRow>
<SettingRow field="hideRelicOffline" label="Hide Relic Offline">
  <div slot="tooltip">
    Hides the relic offline defenders checker.
  </div>
</SettingRow>
<SettingRow field="enterForSendMessage" label="Enter Sends Message">
  <div slot="tooltip">
    Send a message from the Send Message screen if you press enter.<br>
    You can still insert a new line by holding down shift when you press enter.
  </div>
</SettingRow>
<SettingRow field="enableMessageTemplates" label="Enable Message Templates">
  <div slot="tooltip">
    Add templates to the message dialog.
  </div>
</SettingRow>
<SettingRow field="joinAllLink" label="Join All Groups Link">
  <div slot="tooltip">
    Get a notification with a join all groups link in it when there are new groups.
  </div>
</SettingRow>
<SettingRow field="enableMaxGroupSizeToJoin" label="Max Group Size to Join">
  <div slot="tooltip">
    Only join groups less than a set size.
  </div>
  <div slot="input">
    <FieldInput field="enableMaxGroupSizeToJoin" />
    Max Size:
    <FieldInput field="maxGroupSizeToJoin" type="number" min="0" max="11" />
  </div>
</SettingRow>
<SettingRow unstable field="moveComposingButtons" label="Move Composing Buttons">
  <div slot="tooltip">
    Move composing buttons to the top of the composing screen.
  </div>
</SettingRow>
<SettingRow field="pageTwoLinks" label="Archive Page 2 Links">
  <div slot="tooltip">
    Add links to page 2 of each archive on the news page.
  </div>
</SettingRow>
<SettingRow field="addUfsgLinks" label="Add UFSG Links to News">
  <div slot="tooltip">
    Add UFSG links to news articles.
  </div>
</SettingRow>
<SettingRow unstable field="trackLadderReset" label="Track Ladder Reset">
  <div slot="tooltip">
    Tracks ladder resets from logs and news articles.
  </div>
</SettingRow>
<SettingRow network unstable field="optInOnLadderPage" label="Opt in on Ladder Page">
  <div slot="tooltip">
    Aadds Opt in to the Ladder page.
  </div>
</SettingRow>
<SettingRow field="storeLastScavPage" label="Store Last Scavenging Page">
  <div slot="tooltip">
    Remember last used scavenging settings.
  </div>
</SettingRow>
<SettingRow field="betaOptIn" label="FSH Beta Opt-In">
  <div slot="tooltip">
    Opt in to beta features and additional debugging info.<br>
    The beta features are often incomplete, possibly buggy and subject to change at any time.
  </div>
</SettingRow>
