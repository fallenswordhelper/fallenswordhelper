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
    label="Cleanup Guild Log">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Cleanup Guild Log</span><br><br>
    Any log messages not related to the current player will be dimmed
    (e.g. recall messages from guild store)
  </div>
</SettingRow>
<SettingRow
    field="useNewGuildLog"
    label="Use New Guild Log">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Use New Guild Log</span><br><br>
    Replaces the standard guild log with the helper version of the guild log.
  </div>
</SettingRow>
<SettingRow
    field="newGuildLogHistoryPages"
    label="New Guild Log History">
  <div slot="tooltip">
    <span class='fshHelpTitle'>New Guild Log History (pages)</span><br><br>
    The number of pages that the new guild log screen will go back in history.
  </div>
  <FieldInput field="newGuildLogHistoryPages" type="number" min="1" max="25" slot="input" />
</SettingRow>
<SettingRow
    network
    unstable
    field="groupCombatItems"
    label="Group Combat Items">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Group Combat Items</span><br><br>
    Show looted items, if any, under groups combats in the guild log
  </div>
</SettingRow>
<SettingRow
    field="enableLogColoring"
    label="Enable Log Coloring">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Enable Log Coloring</span><br><br>
    Four logs will be colored: Guild Chat, Guild Log, Player Log and Messages.<br>
    It will show any new messages in yellow and anything older than 20 minutes in brown.
  </div>
</SettingRow>
<SettingRow
    field="defaultMessageSound"
    label="New Log Message Sound"
    type="text">
  <div slot="tooltip">
    <span class='fshHelpTitle'>New Log Message Sound</span><br><br>
    The .wav or .ogg file to play when you have unread log messages.
    This must be a .wav or .ogg file.
  </div>
</SettingRow>
<SettingRow
  field="playNewMessageSound"
    label="Play sound on unread log">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Play sound on unread log</span><br><br>
    Plays the above sound when you have unread log messages?
  </div>
</SettingRow>
<SettingRow
    field="enableChatParsing"
    label="Enable Chat Parsing">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Enable Chat Parsing</span><br><br>
    Character log will be parsed for chat messages and shows the chat message on the screen
    if you reply to that message.
  </div>
</SettingRow>
<SettingRow
    network
    field="addAttackLinkToLog"
    label="Add attack link to log">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Add attack link to log</span><br><br>
    If checked, this will add an Attack link to each message in your log.
  </div>
</SettingRow>
<SettingRow
    network
    field="colorPlayerNames"
    label="Color Player Names">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Color Player Names</span><br><br>
    Colors players' names in the log. Green for guild mates, Blue for allies, red for enemies.
  </div>
</SettingRow>
<SettingRow
    field="addIgnoreLink"
    label="Add Ignore Link">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Add Ignore Link</span><br><br>
    Adds an ignore link to chat messages.
  </div>
</SettingRow>
<SettingRow
    field="changeButtonLabels"
    label="Change Button Labels">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Change Button Labels</span><br><br>
    Changes Send button to be Trade and Trade button to be ST.
  </div>
</SettingRow>
<SettingRow
    field="privateMsgButtons"
    label="Private Message Buttons">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Private Message Buttons</span><br><br>
    Adds Buff, Send, and Trade buttons to private messages.
  </div>
</SettingRow>
<SettingRow
    unstable
    field="enhanceChatTextEntry"
    label="Enhance Chat Text Entry">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Enhance Chat Text Entry</span><br><br>
    Enhances the entry field for entering chat text on the guild chat page.
  </div>
</SettingRow>
<SettingRow
    unstable
    field="wrapGuildChat"
    label="Wrap Guild Chat">
  <div slot="tooltip">
    <span class='fshHelpTitle'>Wrap Guild Chat</span><br><br>
    Forces word wrap in guild chat.
  </div>
</SettingRow>
