<script>
import FieldInput from './FieldInput.svelte';
import SettingRow from './SettingRow.svelte';
</script>

<tr>
  <td class="header" colspan="2">General preferences (apply to most screens)</td>
</tr>
<SettingRow label="Enable Guild Info Widgets" field="enableGuildInfoWidgets">
  <div slot="tooltip">
    Enabling this option will enable the Guild Info Widgets
    (coloring on the Guild Info panel)
  </div>
  <div slot="input">
    <FieldInput field="enableGuildInfoWidgets" />
    <label for="hideGuildInfoMessage">
      Hide Message&gt;
      <FieldInput field="hideGuildInfoMessage" />
    </label>
    <label for="hideGuildInfoBuff">
      Hide Buff&gt;
      <FieldInput field="hideGuildInfoBuff" />
    </label>
    <label for="hideGuildInfoSecureTrade">
      Hide ST&gt;
      <FieldInput field="hideGuildInfoSecureTrade" />
    </label>
    <label for="hideGuildInfoTrade">
      Hide Trade&gt;
      <FieldInput field="hideGuildInfoTrade" />
    </label>
  </div>
</SettingRow>
<SettingRow unstable label="Move Guild Info List" field="moveGuildList">
  <div slot="tooltip">
    This will Move the Guild Info List higher on the bar on the right
  </div>
</SettingRow>
<SettingRow unstable label="Move Online Allies List" field="moveOnlineAlliesList">
  <div slot="tooltip">
    This will Move the Online Allies List higher on the bar on the right
  </div>
</SettingRow>
<SettingRow network label="Show Online Allies/Enemies">
  <div slot="tooltip">
    This will show the allies/enemies online list on the left.
  </div>
  <div slot="input">
    <label for="enableAllyOnlineList">
      Allies
      <FieldInput field="enableAllyOnlineList" />
    </label>
    <label for="enableEnemyOnlineList">
      Enemies
      <FieldInput field="enableEnemyOnlineList" />
    </label>
    <label for="allyEnemyOnlineRefreshTime">
      <FieldInput
        class="fshSettingsNumber fsh-va-text-bottom"
        field="allyEnemyOnlineRefreshTime"
        min="0"
        type="number"
        value="300"
      />
      seconds refresh
    </label>
  </div>
</SettingRow>
<SettingRow field="enableOnlineAlliesWidgets" label="Enable Online Allies Widgets">
  <div slot="tooltip">
    Enabling this option will enable the Allies List Widgets (coloring on the Allies List panel)
  </div>
</SettingRow>
<SettingRow unstable field="moveDailyQuest" label="Move Daily Quest">
  <div slot="tooltip">
    This will move the Daily Quest to the left, under the menu, for better visibility.
  </div>
</SettingRow>
<SettingRow unstable field="moveXmasBox" label="Move Christmas Offer">
  <div slot="tooltip">
    This will move the Christmas Offer to the left, under the menu, for better visibility.
  </div>
</SettingRow>
<SettingRow unstable field="moveFSBox" label="Move FS box">
  <div slot="tooltip">
    This will move the FS box to the left, under the menu, for better visibility
    (unless it is already hidden.)
  </div>
</SettingRow>
<SettingRow unstable field="fsboxlog" label="Enable FS Box Log">
  <div slot="tooltip">
    This enables the functionality to keep a log of recent seen FS Box message.
  </div>
</SettingRow>
<SettingRow field="gameHelpLink" label='"Game Help" Settings Link'>
  <div slot="tooltip">
    This turns the Game Help text in the lower right box into a link to this settings page.
  </div>
</SettingRow>
<SettingRow network field="enableTempleAlert" label="Enable Temple Alert">
  <div slot="tooltip">
    Puts an alert on the LHS if you have not prayed at the temple today.
  </div>
</SettingRow>
<SettingRow network field="enableUpgradeAlert" label="Enable Gold Upgrade Alert">
  <div slot="tooltip">
    Puts an alert on the LHS if you have not upgraded your stamina with gold today.
  </div>
</SettingRow>
<SettingRow network field="enableComposingAlert" label="Enable Composing Alert">
  <div slot="tooltip">
    Puts an alert on the LHS if you have composing slots available.
  </div>
</SettingRow>
<SettingRow field="enhanceOnlineDots" label="Enhance Online Dots">
  <div slot="tooltip">
    Enhances the green/grey dots by player names to show online/offline status.
  </div>
</SettingRow>
<SettingRow unstable field="hideBuffSelected" label="Hide Buff Selected">
  <div slot="tooltip">
    Hides the buff selected functionality in the online allies and guild info section.
  </div>
</SettingRow>
<SettingRow field="hideHelperMenu" label="Hide Helper Menu">
  <div slot="tooltip">
    Hides the helper menu from top left.
  </div>
</SettingRow>
<SettingRow field="keepHelperMenuOnScreen" label="Keep Helper Menu On Screen">
  <div slot="tooltip">
    Keeps helper menu on screen as you scroll (helper menu must be enabled to work).
    Also works with quick links.
  </div>
</SettingRow>
<SettingRow field="draggableHelperMenu" label="Draggable Helper Menu">
  <div slot="tooltip">
    If enabled, allows the helper menu to be dragged around the screen.
  </div>
</SettingRow>
<SettingRow field="quickLinksLocation" label="Quick Links Screen Location">
  <div slot="tooltip">
    Determines where the quick links dialog shows on the screen. Default is top 22, left 0.
  </div>
  <div slot="input">
    <label for="quickLinksTopPx">
      Top:
      <FieldInput field="quickLinksTopPx" type="number" value="22" min="0" />
    </label>
    <label for="quickLinksLeftPx">
      Left:
      <FieldInput field="quickLinksLeftPx" type="number" value="0" min="0" />
    </label>
  </div>
</SettingRow>
<SettingRow field="draggableQuickLinks" label="Draggable Quick Links">
  <div slot="tooltip">
    If enabled, allows the quick link box to be dragged around the screen.
  </div>
</SettingRow>
<SettingRow field="expandMenuOnKeyPress" label="Expand Menu on Key Press">
  <div slot="tooltip">
    If enabled, expands the left hand menu when you use hotkeys.
  </div>
</SettingRow>
<SettingRow field="statBarLinks" label="Statbar links">
  <div slot="tooltip">
    This changes the statbar links to allow middle button clicks.
  </div>
</SettingRow>
<SettingRow field="staminaCalculator" label="Stamina Calculator">
  <div slot="tooltip">
    This displays when you will reach max stamina thru stamina gain.
  </div>
</SettingRow>
<SettingRow field="levelUpCalculator" label="Level Up Calculator">
  <div slot="tooltip">
    This displays when you will reach your next level thru XP gain.
  </div>
</SettingRow>
<SettingRow field="resizeQuickBuff" label="Resize Quick Buff Window">
  <div slot="tooltip">
    This makes the quick buff window a bit bigger.
  </div>
</SettingRow>
<SettingRow field="addServerNode" label="Add Server Node to Top Stats">
  <div slot="tooltip">
    This adds clickable online players and server node to top stats<br>
    if you have the options 'Show Game Stats At Top' enabled,<br>
    'Hide Games Stats' disabled and<br>
    'Game Stats Summary Only' disabled.<br>
    It also hides the Game Stats box.
  </div>
</SettingRow>
<SettingRow field="addScoutTowerLink" label="Add Scout Tower Link">
  <div slot="tooltip">
    This adds a Scout Tower link to the Spoils of War info box.
  </div>
</SettingRow>
