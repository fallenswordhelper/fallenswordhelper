<script>
import FieldInput from './FieldInput.svelte';
import SettingRow from './SettingRow.svelte';
</script>
<tr>
  <td class="header" colspan="2">Log screen preferences</td>
</tr>
<SettingRow
    unstable
    field="hideNonPlayerGuildLogMessages"
    label="Cleanup Guild Log"
    tooltip="<span class='fshHelpTitle'>Cleanup Guild Log</span><br><br>Any log messages not related to the current player will be dimmed (e.g. recall messages from guild store)">
</SettingRow>
<SettingRow
    field="useNewGuildLog"
    label="Use New Guild Log"
    tooltip="<span class='fshHelpTitle'>Use New Guild Log</span><br><br>This will replace the standard guild log with the helper version of the guild log.">
</SettingRow>
<SettingRow
    field="newGuildLogHistoryPages"
    label="New Guild Log History"
    tooltip="<span class='fshHelpTitle'>New Guild Log History (pages)</span><br><br>This is the number of pages that the new guild log screen will go back in history.">
  <FieldInput field="newGuildLogHistoryPages" type="number" min="1" max="25" />
</SettingRow>
<SettingRow
    network
    unstable
    field="groupCombatItems"
    label="Group Combat Items"
    tooltip="<span class='fshHelpTitle'>Group Combat Items</span><br><br>This will show looted items, if any, under groups combats in the guild log">
</SettingRow>
<SettingRow
    field="enableLogColoring"
    label="Enable Log Coloring"
    tooltip="<span class='fshHelpTitle'>Enable Log Coloring</span><br><br>Four logs will be colored if this is enabled, Guild Chat, Guild Log, Player Log and Messages.<br>It will show any new messages in yellow and anything older than 20 minutes in brown.">
</SettingRow>
<SettingRow
    field="defaultMessageSound"
    label="New Log Message Sound"
    type="text"
    tooltip="<span class='fshHelpTitle'>New Log Message Sound</span><br><br>The .wav or .ogg file to play when you have unread log messages. This must be a .wav or .ogg file." />
<SettingRow
  field="playNewMessageSound"
    label="Play sound on unread log"
    tooltip="<span class='fshHelpTitle'>Play sound on unread log</span><br><br>Should the above sound play when you have unread log messages?">
  <FieldInput field="playNewMessageSound" />
  <label>
    Show speaker on world
    [ <span class="fshLink tip-static" data-tipped="<span class='fshHelpTitle'>Show speaker on world</span><br><br>Should the toggle play sound speaker show on the world map?">?</span> ]:
    <FieldInput field="showSpeakerOnWorld" />
  </label>
</SettingRow>
<SettingRow
    field="enableChatParsing"
    label="Enable Chat Parsing"
    tooltip="<span class='fshHelpTitle'>Enable Chat Parsing</span><br><br>If this is checked, your character log will be parsed for chat messages and show the chat message on the screen if you reply to that message.">
</SettingRow>
<SettingRow
    network
    field="addAttackLinkToLog"
    label="Add attack link to log"
    tooltip="<span class='fshHelpTitle'>Add attack link to log</span><br><br>If checked, this will add an Attack link to each message in your log.">
</SettingRow>
<SettingRow
    network
    field="colorPlayerNames"
    label="Color Player Names"
    tooltip="<span class='fshHelpTitle'>Color Player Names</span><br><br>This colors players' names in the log. Green for guild mates, Blue for allies, red for enemies.">
</SettingRow>
<SettingRow
    field="addIgnoreLink"
    label="Add Ignore Link"
    tooltip="<span class='fshHelpTitle'>Add Ignore Link</span><br><br>This adds an ignore link to chat messages.">
</SettingRow>
<SettingRow
    field="changeButtonLabels"
    label="Change Button Labels"
    tooltip="<span class='fshHelpTitle'>Change Button Labels</span><br><br>This changes Send button to be Trade and Trade button to be ST.">
</SettingRow>
<SettingRow
    field="privateMsgButtons"
    label="Private Message Buttons"
    tooltip="<span class='fshHelpTitle'>Private Message Buttons</span><br><br>This adds buttons (Buff, Send, Trade) to private messages.">
</SettingRow>
<SettingRow
    unstable
    field="enhanceChatTextEntry"
    label="Enhance Chat Text Entry"
    tooltip="<span class='fshHelpTitle'>Enhance Chat Text Entry</span><br><br>If checked, this will enhance the entry field for entering chat text on the guild chat page.">
</SettingRow>
<SettingRow
    unstable
    field="wrapGuildChat"
    label="Wrap Guild Chat"
    tooltip="<span class='fshHelpTitle'>Wrap Guild Chat</span><br><br>This forces word wrap in guild chat.">
</SettingRow>
