import { D as querySelector, W as setValue, X as sendEvent, Y as jQueryDialog, Z as injectNotepadShowLogs, _ as injectMonsterLog, o as onclick, y as getElementById, i as insertElement, c as calf, H as getValue, $ as getCalfPrefs, a0 as escapeHtml, a1 as theLinks, a2 as playerIdUrl, a3 as notepadBlankUrl, x as jQueryNotPresent } from './calfSystem-d1de1997.js';
import { c as createBr, t as toggleVisibilty } from './toggleVisibilty-3bfeef14.js';
import { c as createSpan } from './createSpan-630374f0.js';
import { d as dialogMsg } from './dialogMsg-2f52cc12.js';
import { j as jConfirm } from './jConfirm-9b23a948.js';
import { n as numberIsNaN } from './numberIsNaN-738f2a3f.js';
import { s as simpleCheckbox, n as networkIcon, h as helpLink, i as isValueChecked, j as justLabel, a as justCheckbox } from './simpleCheckbox-d91a8af3.js';
import { i as isChecked } from './isChecked-d96c8dec.js';
import { f as functionPasses } from './functionPasses-055e6e36.js';
import { h as huntingBuffs } from './huntingBuffs-f5ee3378.js';
import { i as isSelected } from './isSelected-2ed90a64.js';

var saveBoxes = ["gameHelpLink","guildSelf","guildSelfMessage","guildFrnd","guildFrndMessage","guildPast","guildPastMessage","guildEnmy","guildEnmyMessage","showAdmin","ajaxifyRankControls","detailedConflictInfo","enableLogColoring","enableChatParsing","enableCreatureColoring","hideNonPlayerGuildLogMessages","buyBuffsGreeting","renderSelfBio","renderOtherBios","defaultMessageSound","showSpeakerOnWorld","playNewMessageSound","highlightPlayersNearMyLvl","highlightGvGPlayersNearMyLvl","showCombatLog","showMonsterLog","showCreatureInfo","keepLogs","enableGuildInfoWidgets","enableOnlineAlliesWidgets","hideGuildInfoMessage","hideGuildInfoBuff","hideGuildInfoSecureTrade","hideGuildInfoTrade","huntingBuffs","huntingBuffsName","huntingBuffs2","huntingBuffs2Name","huntingBuffs3","huntingBuffs3Name","showHuntingBuffs","moveGuildList","moveOnlineAlliesList","moveFSBox","moveDailyQuest","hideQuests","hideQuestNames","hideRecipes","hideRecipeNames","doNotKillList","enableBioCompressor","sendGoldonWorld","goldRecipient","goldAmount","keepBuffLog","showQuickSendLinks","showQuickDropLinks","sendClasses","itemRecipient","currentGoldSentTotal","enableAllyOnlineList","enableEnemyOnlineList","allyEnemyOnlineRefreshTime","quickLinksTopPx","quickLinksLeftPx","draggableQuickLinks","enableActiveBountyList","bountyListRefreshTime","enableWantedList","wantedNames","wantedGuildMembers","fsboxlog","huntingMode","hideRelicOffline","enterForSendMessage","storeLastQuestPage","addAttackLinkToLog","showStatBonusTotal","newGuildLogHistoryPages","useNewGuildLog","enhanceChatTextEntry","enableMaxGroupSizeToJoin","maxGroupSizeToJoin","enableTempleAlert","enableUpgradeAlert","enableComposingAlert","autoFillMinBidPrice","showPvPSummaryInLog","enableQuickDrink","enhanceOnlineDots","hideBuffSelected","fixBuffSelected","hideHelperMenu","keepHelperMenuOnScreen","draggableHelperMenu","showNextQuestSteps","hideChampionsGroup","hideElitesGroup","hideSEGroup","hideTitanGroup","hideLegendaryGroup","disableDeactivatePrompts","moveComposingButtons","showExtraLinks","expandMenuOnKeyPress","highlightPvpProtection","enableHistoryCompressor","statBarLinks","staminaCalculator","levelUpCalculator","resizeQuickBuff","joinAllLink","pageTwoLinks","addUfsgLinks","trackLadderReset","addServerNode","addScoutTowerLink","storeLastScavPage","recipeManagerLink","medalGuideLink","inventoryManagerLink","buffLogLink","combatLogLink","creatureLogLink","quickLinksLink","auctionSearchLink","onlinePlayersLink","findOtherLink","findBuffsLink","guildInventoryLink","newGuildLogLink","topRatedLink","enableMessageTemplates","wrapGuildChat","colorPlayerNames","addIgnoreLink","changeButtonLabels","fastDebuff","countAllyEnemy","fixFolderImages","componentWidgets","quickWearLink","selectAllLink","nekidButton","ajaxifyProfileSections","injectBuffGuide","statisticsWrap","showGuildRelationship","showQuickButtons","showBuffLevel","enableItemColoring","checkAllOfType","enableFolderFilter","moveXmasBox"];

function findEl(el, name) {
  return querySelector(`#fshSettingsTable ${el}[name="${name}"]`);
}

function findInput(name) {
  return findEl('input', name);
}

function findSelect(name) {
  return findEl('select', name);
}

function toggleTickAllBuffs(e) { // jQuery
  const allItems = $('input[name^="blockedSkillList"]:visible',
    '#settingsTabs-4');
  const tckTxt = $(e.target);
  allItems.prop('checked', tckTxt.text() === 'Tick all buffs');
  if (tckTxt.text() === 'Tick all buffs') {
    tckTxt.text('Untick all buffs');
  } else {
    tckTxt.text('Tick all buffs');
  }
}

function clearStorage() {
  jConfirm('Clear localStorage',
    'Are you sure you want to clear you localStorage?',
    () => { localStorage.clear(); });
}

function saveValueForm(name) {
  const formElement = findInput(name);
  if (formElement.type === 'checkbox') {
    setValue(name, formElement.checked);
  } else {
    setValue(name, formElement.value);
  }
}

function saveNumeric(name) {
  const formElement = findSelect(name);
  setValue(name, Number(formElement.value));
}

function saveOther(name) {
  const formElement = findSelect(name);
  setValue(name, formElement.value);
}

function checkNumeric(name, min, def) {
  const myInput = findInput(name);
  const inputValue = Number(myInput.value);
  if (numberIsNaN(inputValue) || inputValue <= min) {
    myInput.value = def;
  }
}

function saveConfig() { // jQuery
  checkNumeric('newGuildLogHistoryPages', 1, 25);
  checkNumeric('maxGroupSizeToJoin', 1, 11);
  saveNumeric('combatEvaluatorBias');
  saveOther('enabledHuntingMode');
  saveBoxes.forEach(saveValueForm);
  dialogMsg('FS Helper Settings Saved');
}

function showLogs() {
  sendEvent('settingsPage', 'injectNotepadShowLogs');
  jQueryDialog(injectNotepadShowLogs);
}

function showMonsterLogs() {
  sendEvent('settingsPage', 'injectMonsterLog');
  jQueryDialog(injectMonsterLog);
}

function doTickAll() {
  const tickAll = createSpan({
    id: 'fshAllBuffs',
    className: 'fshLink',
    textContent: 'Tick all buffs',
  });
  onclick(tickAll, toggleTickAllBuffs);
  const inject = getElementById('settingsTabs-4').children[0].rows[0].cells[0];
  insertElement(inject, createBr());
  insertElement(inject, tickAll);
}

function listener(el) { onclick(getElementById(el[0]), el[1]); }

function clickHandlers() {
  [
    ['fshClearStorage', clearStorage],
    ['Helper:SaveOptions', saveConfig],
    ['Helper:ShowLogs', showLogs],
    ['Helper:ShowMonsterLogs', showMonsterLogs],
  ].forEach(listener);
}

function toggleListener(id) { onclick(getElementById(id), toggleVisibilty); }

function onVisibilityToggle() {
  [
    'toggleShowGuildSelfMessage',
    'toggleShowGuildFrndMessage',
    'toggleShowGuildPastMessage',
    'toggleShowGuildEnmyMessage',
  ].forEach(toggleListener);
}

function createEventListeners() { // Legacy
  doTickAll();
  clickHandlers();
  onVisibilityToggle();
}

function mapCalfPref(el) { calf[el[0]] = getValue(el[1]); }

function mappedVars() {
  [
    ['showBuffs', 'showHuntingBuffs'],
    ['buffs', 'huntingBuffs'],
    ['buffsName', 'huntingBuffsName'],
    ['buffs2', 'huntingBuffs2'],
    ['buffs2Name', 'huntingBuffs2Name'],
    ['buffs3', 'huntingBuffs3'],
    ['buffs3Name', 'huntingBuffs3Name'],
  ].forEach(mapCalfPref);
}

function simpleVars() {
  [
    'doNotKillList',
    'bountyListRefreshTime',
    'wantedNames',
    'combatEvaluatorBias',
    'enabledHuntingMode',
  ].forEach(getCalfPrefs);
}

function getVars() {
  mappedVars();
  simpleVars();
  calf.storage = ((JSON.stringify(localStorage).length / (5 * 1024 * 1024))
    * 100).toFixed(2);
}

function concatSimple(acc, curr) {
  return acc + simpleCheckbox(curr);
}

function bunchOfSimple(ary) {
  return ary.reduce(concatSimple, '');
}

function showActiveBounties() {
  return `<tr><td align= "right">${networkIcon
  }Show Active Bounties${
    helpLink('Show Active Bounties',
      'This will show your active bounties on the right hand side')
  }:</td><td colspan="3"><input name="enableActiveBountyList" `
    + `type = "checkbox" value = "on"${
      isChecked(calf.enableActiveBountyList)}>&nbsp;`
    + `<input name="bountyListRefreshTime" size="3" value="${
      calf.bountyListRefreshTime}"> seconds refresh</td></tr>`;
}

function showWantedBounties() {
  return `<tr><td align= "right">${networkIcon
  }Show Wanted Bounties${
    helpLink('Show Wanted Bounties',
      'This will show when someone you want is on the bounty board, '
      + 'the list is displayed on the right hand side')
  }:</td><td colspan="3"><input name="enableWantedList" `
    + `type="checkbox" value="on"${
      isChecked(calf.enableWantedList)
    }> Refresh time is same as Active Bounties`;
}

function wantedNames() {
  return `<tr><td align= "right">Wanted Names${
    helpLink('Wanted Names',
      'The names of the people you want to see on the bounty board '
      + 'separated by commas (or * for all)')}:</td><td colspan="3">`
    + `<input name="wantedNames" size="60" value="${calf.wantedNames
    }"></td></tr>`;
}

function bountyPrefs() {
  // Bounty hunting prefs
  return `<tr><th colspan="2"><b>Bounty hunting preferences</b></th></tr>${
    showActiveBounties()
  }${showWantedBounties()
  }${wantedNames()
  }${bunchOfSimple([
    'wantedGuildMembers',
    'showPvPSummaryInLog',
  ])}`;
}

function quickSend() {
  return `<tr><td class="fshRight">${networkIcon}Show Quick Send Item${
    helpLink('Show Quick Send on Manage Backpack',
      'This will show a link beside each item which gives the option to '
      + 'quick send the item to this person')
  }:</td><td><input name="showQuickSendLinks" type="checkbox" `
    + `value="on"${
      isValueChecked('showQuickSendLinks')}>`
    + '&nbsp;&nbsp;Send Items To '
    + `<input name="itemRecipient" size="10" value="${
      getValue('itemRecipient')}">`;
}

function makeSendClasses() {
  return `<tr><td class="fshRight">Quick Select all of type in Send Screen${
    helpLink('Quick Select all of type in Send Screen',
      'This allows you to customize what quick links you would like '
      + 'displayed in your send item screen.<br>Use the format '
      + '[&quot;name&quot;,&quot;itemid&quot;],[&quot;othername&quot;,'
      + '&quot;itemid2&quot;].<br>WARNING: NO REFUNDS ON ERROR')
  }:</td><td><input name="sendClasses" size="60" value="${
    escapeHtml(getValue('sendClasses'))}">`;
}

function equipPrefs() {
  // Equipment screen prefs
  return '<tr><th colspan="2"><b>Equipment screen preferences</b></th></tr>'
    + `${bunchOfSimple([
      'showExtraLinks',
      'enableItemColoring',
      'checkAllOfType',
      'enableFolderFilter',
    ])}${
      quickSend()}${
      simpleCheckbox('showQuickDropLinks')}${
      makeSendClasses()}`;
}

const topBlock = [
  'moveGuildList',
  'moveOnlineAlliesList',
];
const middleBlock = [
  'enableOnlineAlliesWidgets',
  'moveDailyQuest',
  'moveXmasBox',
  'moveFSBox',
  'fsboxlog',
  'gameHelpLink',
  'enableTempleAlert',
  'enableUpgradeAlert',
  'enableComposingAlert',
  'enhanceOnlineDots',
  'hideBuffSelected',
  'fixBuffSelected',
  'hideHelperMenu',
  'keepHelperMenuOnScreen',
  'draggableHelperMenu',
];
const bottomBlock = [
  'draggableQuickLinks',
  'expandMenuOnKeyPress',
  'statBarLinks',
  'staminaCalculator',
  'levelUpCalculator',
  'resizeQuickBuff',
  'addServerNode',
  'addScoutTowerLink',
];

function guildInfoWidgets() {
  return '<tr><td class="fshRight"><label for="enableGuildInfoWidgets">'
    + `Enable Guild Info Widgets${helpLink('Enable Guild Info Widgets',
      'Enabling this option will enable the Guild Info Widgets '
      + '(coloring on the Guild Info panel)')}:</label></td><td>`
    + '<input id="enableGuildInfoWidgets" name="enableGuildInfoWidgets" '
    + `type="checkbox" value="on"${isChecked(calf.enableGuildInfoWidgets)}>`
    + '&nbsp;<label>Hide Message&gt;'
    + `<input name="hideGuildInfoMessage" type="checkbox" value="on"${
      isChecked(calf.hideGuildInfoMessage)}></label>`
    + '&nbsp;<label>Hide Buff&gt;'
    + `<input name="hideGuildInfoBuff" type="checkbox" value="on"${
      isChecked(calf.hideGuildInfoBuff)}></label>`
    + '&nbsp;<label>Hide ST&gt;'
    + `<input name="hideGuildInfoSecureTrade" type="checkbox" value="on"${
      isChecked(calf.hideGuildInfoSecureTrade)}></label>`
    + '&nbsp;<label>Hide Trade&gt;'
    + `<input name="hideGuildInfoTrade" type="checkbox" value="on"${
      isChecked(calf.hideGuildInfoTrade)}></label></td></tr>`;
}

function onlineAlliesEnemies() {
  return `<tr><td class="fshRight">${networkIcon}Show Online Allies/Enemies${
    helpLink('Show Online Allies/Enemies',
      'This will show the allies/enemies online list on the right.')}:</td>`
    + '<td><label>Allies&nbsp;'
    + `<input name="enableAllyOnlineList" type="checkbox" value="on"${
      isChecked(calf.enableAllyOnlineList)}></label>&nbsp;&nbsp;`
    + '<label>Enemies&nbsp;'
    + `<input name="enableEnemyOnlineList" type="checkbox" value="on"${
      isChecked(calf.enableEnemyOnlineList)}></label>&nbsp;&nbsp;`
    + `<input name="allyEnemyOnlineRefreshTime" size="3" value="${
      getValue('allyEnemyOnlineRefreshTime')}"> seconds refresh</td></tr>`;
}

function quickLinksLocation() {
  return `<tr><td class="fshRight">Quick Links Screen Location${
    helpLink('Quick Links Screen Location',
      'Determines where the quick links dialog shows on the screen. '
      + 'Default is top 22, left 0.')}:</td>`
    + `<td>Top: <input name="quickLinksTopPx" size="3" value="${
      getValue('quickLinksTopPx')}"> `
    + `Left: <input name="quickLinksLeftPx" size="3" value="${
      getValue('quickLinksLeftPx')}"></td></tr>`;
}

function generalPrefs() {
  // General Prefs
  return '<tr><th colspan="2"><b>General preferences '
    + `(apply to most screens)</b></th></tr>${
      guildInfoWidgets()}${
      bunchOfSimple(topBlock)}${
      onlineAlliesEnemies()}${
      bunchOfSimple(middleBlock)}${
      quickLinksLocation()}${
      bunchOfSimple(bottomBlock)}`;
}

function injectSettingsGuildData(guildType) {
  let title = '';
  let disabled = '';
  if (guildType === 'Self') {
    title = ' title="This is automatically detected"';
    disabled = ' disabled';
  }
  return `<input${title} name="guild${guildType}" size="60" value="${
    getValue(`guild${guildType}`)}"${disabled}>`

    + '<span class="fshPoint" '
    + `id="toggleShowGuild${guildType}Message" data-linkto="showGuild${
      guildType}Message"> &#x00bb;</span>`

    + `<div id="showGuild${guildType}Message" class="fshHide">`
    + `<input name="guild${guildType}Message" size="60" value="${
      getValue(`guild${guildType}Message`)}">`
    + '</div>';
}

function guildNames() {
  return '<tr><td colspan="2">'
      + 'Enter guild names, separated by commas</td></tr>'
    + `<tr><td class="fshRight">Own Guild</td><td>${
      injectSettingsGuildData('Self')}</td></tr>`
    + `<tr><td class="fshRight">Friendly Guilds</td><td>${
      injectSettingsGuildData('Frnd')}</td></tr>`
    + `<tr><td class="fshRight">Old Guilds</td><td>${
      injectSettingsGuildData('Past')}</td></tr>`
    + `<tr><td class="fshRight">Enemy Guilds</td><td>${
      injectSettingsGuildData('Enmy')}</td></tr>`;
}

function pvpTargets() {
  return `<tr><td class="fshRight">Highlight Valid PvP Targets${
    helpLink('Highlight Valid PvP Targets',
      'Enabling this option will highlight targets in OTHER guilds that '
      + 'are within your level range to attack for PvP or GvG.')
  }:</td><td>PvP: <input name="highlightPlayersNearMyLvl" `
    + `type="checkbox" value="on"${
      isValueChecked('highlightPlayersNearMyLvl')
    }> GvG: <input name="highlightGvGPlayersNearMyLvl" `
    + `type="checkbox" value="on"${
      isValueChecked('highlightGvGPlayersNearMyLvl')
    }></td></tr>`;
}

function guildPrefs() {
  // Guild Manage
  return '<tr><th colspan="2"><b>Guild>Manage preferences'
    + `</b></th></tr>${
      simpleCheckbox('showGuildRelationship')}${
      guildNames()}${
      pvpTargets()}${
      bunchOfSimple([
        'showAdmin',
        'ajaxifyRankControls',
        'detailedConflictInfo',
        'enableHistoryCompressor',
      ])}`;
}

function leftHandLinks() {
  return '<tr><th colspan="2"><b>Left Hand Menu Additional Links</b></th></tr>'
    + '<tr><th colspan="2">Warning: Changes to the left hand menu have a '
    + 'significant impact on page load performance</th></tr>'
    + `${bunchOfSimple(theLinks)}`;
}

function newGuildLogHistory() {
  return `<tr><td class="fshRight">New Guild Log History${
    helpLink('New Guild Log History (pages)',
      'This is the number of pages that the new guild log '
      + 'screen will go back in history.')
  }:</td><td><input name="newGuildLogHistoryPages" size="3" value="${
    getValue('newGuildLogHistoryPages')}"></td></td></tr>`;
}

function newLogMessageSound() {
  return `<tr><td class="fshRight">New Log Message Sound${
    helpLink('New Log Message Sound',
      'The .wav or .ogg file to play when you have unread log messages. '
      + 'This must be a .wav or .ogg file. This option can be turned on/off '
      + 'on the world page. Only works in Firefox 3.5+')
  }:</td><td colspan="3"><input name="defaultMessageSound" size="60" `
    + `value="${getValue('defaultMessageSound')
    }"></td></tr>`;
}

function playSoundOnUnreadLog() {
  return `<tr><td class="fshRight">Play sound on unread log${
    helpLink('Play sound on unread log',
      'Should the above sound play when you have unread log messages? '
      + '(will work on Firefox 3.5+ only)')
  }:</td><td><input name="playNewMessageSound" type="checkbox" `
    + `value="on"${
      isValueChecked('playNewMessageSound')}>`
    + ` Show speaker on world${
      helpLink('Show speaker on world',
        'Should the toggle play sound speaker show on the world map? '
      + '(This icon is next to the Fallensword wiki icon and will only '
      + 'display on Firefox 3.5+)')
    }:<input name="showSpeakerOnWorld" type="checkbox" value="on"${
      isValueChecked('showSpeakerOnWorld')
    }></tr></td>`;
}

function logPrefs() {
  // Log screen prefs
  return `<tr><th colspan="2"><b>Log screen preferences</b></th></tr>${
    bunchOfSimple([
      'hideNonPlayerGuildLogMessages',
      'useNewGuildLog',
    ])
  }${newGuildLogHistory()
  }${simpleCheckbox('enableLogColoring')
  }${newLogMessageSound()
  }${playSoundOnUnreadLog()
  }${bunchOfSimple([
    'enableChatParsing',
    'keepBuffLog',
    'addAttackLinkToLog',
    'colorPlayerNames',
    'addIgnoreLink',
    'changeButtonLabels',
    'enhanceChatTextEntry',
    'wrapGuildChat',
  ])}`;
}

function recipeHiding() {
  return `<tr><td class="fshRight">Hide Specific Recipes${
    helpLink('Hide Specific Recipes',
      'If enabled, this hides recipes whose name matches the list '
      + '(separated by commas). This works on Recipe Manager')
  }:</td><td colspan="3"><input name="hideRecipes" `
    + `type="checkbox" value="on"${
      isValueChecked('hideRecipes')}>`
    + `&nbsp;<input name="hideRecipeNames" size="60" value="${
      getValue('hideRecipeNames')}"></td></tr>`;
}

function groupJoinSize() {
  return `<tr><td align= "right">Max Group Size to Join${
    helpLink('Max Group Size to Join',
      'This will disable HCSs Join All functionality and will only join '
      + 'groups less than a set size. ')
  }:</td><td colspan="3"><input name="enableMaxGroupSizeToJoin" `
    + `type = "checkbox" value = "on"${
      isValueChecked('enableMaxGroupSizeToJoin')
    }>&nbsp;&nbsp;Max Size: `
    + `<input name="maxGroupSizeToJoin" size="3" value="${
      getValue('maxGroupSizeToJoin')}"></td></tr>`;
}

function otherPrefs() {
  // Other prefs
  return `<tr><th colspan="2"><b>Other preferences</b></th></tr>${
    simpleCheckbox('autoFillMinBidPrice')}${
    recipeHiding()}${
    bunchOfSimple([
      'hideRelicOffline',
      'enterForSendMessage',
      'enableMessageTemplates',
      'joinAllLink',
    ])}${
    groupJoinSize()}${
    bunchOfSimple([
      'moveComposingButtons',
      'pageTwoLinks',
      'addUfsgLinks',
      'trackLadderReset',
      'storeLastScavPage',
    ])}`;
}

function worldGroup() {
  // World Screen
  return `<tr><td class="fshRight">Hide Create Group Button${
    helpLink('Hide Create Group Button',
      'Enabling this option will hide the Create Group button')
  }:</td><td>`
    + `<input name="hideChampionsGroup" type="checkbox" value="on"${
      isValueChecked('hideChampionsGroup')}>`
    + '&nbsp;Champions&nbsp;&nbsp;'
    + `<input name="hideElitesGroup" type="checkbox" value="on"${
      isValueChecked('hideElitesGroup')}>`
    + '&nbsp;Elites&nbsp;&nbsp;'
    + `<input name="hideSEGroup" type="checkbox" value="on"${
      isValueChecked('hideSEGroup')}>`
    + '&nbsp;Super Elite&nbsp;&nbsp;'
    + `<input name="hideTitanGroup" type="checkbox" value="on"${
      isValueChecked('hideTitanGroup')}>`
    + '&nbsp;Titan&nbsp;&nbsp;'
    + `<input name="hideLegendaryGroup" type="checkbox" value="on"${
      isValueChecked('hideLegendaryGroup')}>`
    + '&nbsp;Legendary'
    + '</td></tr>';
}

function keepCombatLogs() {
  return `<tr><td class="fshRight">Keep Combat Logs${
    helpLink('Keep Combat Logs',
      'Save combat logs to a temporary variable. '
      + 'Press <u>Show logs</u> on the right to display and copy them')
  }:</td><td><input name="keepLogs" type="checkbox" value="on"${
    isValueChecked('keepLogs')}>&nbsp;&nbsp;`
    + '<input type="button" class="custombutton" value="Show Logs" '
    + 'id="Helper:ShowLogs"></td></tr>';
}

function combatEvalBias() {
  return `<tr><td class="fshRight">Combat Evaluator Bias${
    helpLink('Combat Evaluator Bias',
      'This changes the bias of the combat evaluator for the damage and '
      + 'HP evaluation. It will not change the attack bias (1.1053).'
      + '<br>Conservative = 1.1053 and 1.1 (Safest)'
      + '<br>Semi-Conservative = 1.1 and 1.053'
      + '<br>Adventurous = 1.053 and 1 (Bleeding Edge)'
      + '<br>Conservative+ = 1.1053 and 1 with the attack calculation '
      + 'changed to +-48 per RJEM')
  }:</td><td><select name="combatEvaluatorBias">`
    + `<option value="0"${
      isSelected(calf.combatEvaluatorBias, 0)
    }>Conservative</option>`
    + `<option value="1"${
      isSelected(calf.combatEvaluatorBias, 1)
    }>Semi-Conservative</option>`
    + `<option value="2"${
      isSelected(calf.combatEvaluatorBias, 2)
    }>Adventurous</option>`
    + `<option value="3"${
      isSelected(calf.combatEvaluatorBias, 3)
    }>Conservative+</option></select></td></tr>`;
}

function keepCreatureLog() {
  return `<tr><td class="fshRight">${justLabel('showMonsterLog')
  }</td><td>${justCheckbox('showMonsterLog')
  }&nbsp;&nbsp;<input type="button" class="custombutton" `
    + 'value="Show" id="Helper:ShowMonsterLogs"></td></tr>';
}

function showSendGold() {
  return `<tr><td class="fshRight">Show Send Gold${
    helpLink('Show Gold on World Screen',
      'This will show an icon below the world map to allow you to '
      + 'quickly send gold to a Friend.')
  }:</td><td><input name="sendGoldonWorld" type="checkbox" value="on"${
    isValueChecked('sendGoldonWorld')}>`
    + `&nbsp;&nbsp;Send <input name="goldAmount" size="5" value="${
      getValue('goldAmount')}"> `
    + `gold to <input name="goldRecipient" size="10" value="${
      getValue('goldRecipient')}">`
    + ` Current total: <input name="currentGoldSentTotal" size="5" value="${
      getValue('currentGoldSentTotal')}"></td></tr>`;
}

function theDoNotKillList() {
  return `<tr><td class="fshRight">Do Not Kill List${
    helpLink('Do Not Kill List',
      'List of creatures that will not be killed by quick kill. '
      + 'You must type the full name of each creature, separated by commas. '
      + 'Creature name will show up in red color on world screen and will '
      + 'not be killed by keyboard entry (but can still be killed by '
      + 'mouseclick). Quick kill must be enabled for this function to work.')
  }:</td><td colspan="3"><input name="doNotKillList" size="60" value="${
    calf.doNotKillList}"></td></tr>`;
}

function huntingBuffsList(modeLabel, modeName, buffsName, buffs) {
  return `<tr><td class="fshRight">${modeLabel} Hunting Buff List${
    helpLink(`${modeLabel} Hunting Buff List`,
      `${modeLabel} list of hunting buffs.`)
  }:</td><td colspan="3"><input name="${modeName
  }" title="Hunting mode name" size="7" value="${modeLabel
  }"><input name="${buffsName}" size="49" value="${buffs
  }"></td></tr>`;
}

function huntingBuffsLists() {
  return huntingBuffsList(
    calf.buffsName, 'huntingBuffsName', 'huntingBuffs', calf.buffs,
  ) + huntingBuffsList(
    calf.buffs2Name, 'huntingBuffs2Name', 'huntingBuffs2', calf.buffs2,
  ) + huntingBuffsList(
    calf.buffs3Name, 'huntingBuffs3Name', 'huntingBuffs3', calf.buffs3,
  );
}

function joinFuncs() {
  return [
    combatEvalBias(),
    keepCreatureLog(),
    showSendGold(),
    theDoNotKillList(),
    huntingBuffs(),
    huntingBuffsLists(),
  ].join('');
}

function prefs() {
  // World Screen
  return '<tr><th colspan="2"><b>'
    + `World screen/Hunting preferences</b></th></tr>${
      worldGroup()}${
      keepCombatLogs()}${
      bunchOfSimple([
        'showCombatLog',
        'enableCreatureColoring',
        'showCreatureInfo',
      ])}${
      joinFuncs()}${
      simpleCheckbox('huntingMode')}`;
}

const part1 = [
  'showQuickButtons',
  'renderSelfBio',
  'renderOtherBios',
  'enableBioCompressor',
];

function buffGreet() {
  return `<tr><td class="fshRight">Buy Buffs Greeting${
    helpLink('Buy Buffs Greeting',
      'This is the default text to open a message with when asking to '
      + 'buy buffs. You can use {playername} to insert the target players '
      + 'name. You can also use {buffs} to insert the list of buffs. You '
      + 'can use {cost} to insert the total cost of the buffs.')
  }:</td><td colspan="3"><input name="buyBuffsGreeting" size="60" `
    + `value="${getValue('buyBuffsGreeting')}"></td></tr>`;
}

const part2 = [
  'showStatBonusTotal',
  'ajaxifyProfileSections',
  'statisticsWrap',
  'quickWearLink',
  'nekidButton',
  'selectAllLink',
  'enableQuickDrink',
  'fixFolderImages',
  'componentWidgets',
  'fastDebuff',
  'disableDeactivatePrompts',
  'injectBuffGuide',
  'showBuffLevel',
  'countAllyEnemy',
  'highlightPvpProtection',
];

function profilePrefs() {
  // profile prefs
  return `<tr><th colspan="2"><b>Profile preferences</b></th></tr>${
    bunchOfSimple(part1)
  }${buffGreet()
  }${bunchOfSimple(part2)}`;
}

function questPrefs() {
  // Quest Preferences
  return '<tr><th colspan="2"><b>Quest preferences</b></th></tr>'

    + `<tr><td class="fshRight">Hide Specific Quests${
      helpLink('Hide Specific Quests',
        'If enabled, this hides quests whose name matches the list '
        + '(separated by commas).')
    }:</td><td colspan="3"><input name="hideQuests" type="checkbox" `
      + `value="on"${
        isValueChecked('hideQuests')}>`
      + `&nbsp;<input name="hideQuestNames" size="60" value="${
        getValue('hideQuestNames')}"></td></tr>${

        bunchOfSimple([
          'storeLastQuestPage',
          'showNextQuestSteps',
        ])}`;
}

function storageDetails() {
  return '<tr><td align=center><input id="fshClearStorage" type="button" '
    + 'class="awesome magenta tip-static" value="Clear Storage" '
    + 'data-tipped="<span class=\'fshHelpTitle\'>Clear Storage'
    + '</span><br><br>This will clear all localStorage related to '
    + 'fallensword.com<br>It will reset all your Helper settings to '
    + 'defaults<br>Use it if your storage has overflowed or become '
    + 'corrupt"></td><td align=center>'
    + `<span style="font-size:x-small">(Current version: ${
      calf.fshVer}(${calf.calfVer})) (Storage Used: ${
      calf.storage}% Remaining: ${
      (100 - calf.storage).toFixed(2)}%)</span></td></tr>`;
}

function linkToWebsite() {
  return '<tr><td colspan="2" align=center>'
    + '<span style="font-weight:bold;">Visit the '
    + '<a href="https://github.com/fallenswordhelper/fallenswordhelper">'
    + 'Fallen Sword Helper web site</a> '
    + 'for any suggestions, requests or bug reports</span></td></tr>';
}

function coderLink(acc, curr, ind, ary) {
  let ret = `${acc}<a href="${playerIdUrl}${
    curr[0]}">${curr[1]}</a>`;
  if (ind === ary.length - 2) {
    ret += ' and ';
  } else if (ind !== ary.length - 1) { ret += ', '; }
  return ret;
}

function listOfCoders(ary) {
  return ary.reduce(coderLink, '');
}

function codedBy() {
  return '<tr><td colspan="2" align=center>'
    + `<span class="fshXXSmall">Fallen Sword Helper was coded by ${
      listOfCoders([['1393340', 'Coccinella'], ['1599987', 'yuuzhan'],
        ['1963510', 'PointyHair'], ['1346893', 'Tangtop'],
        ['2536682', 'dkwizard'], ['1570854', 'jesiegel'],
        ['2156859', 'ByteBoy'], ['2169401', 'McBush']])
    }, with valuable contributions by ${
      listOfCoders([['524660', 'Nabalac'], ['37905', 'Ananasii'],
        ['1674838', 'Lusterless']])
    }</span></td></tr>`;
}

function corePrefs() {
  return [
    // General Prefs
    generalPrefs,
    leftHandLinks,
    // Guild Manage
    guildPrefs,
    // World Screen
    prefs,
    // Log screen prefs
    logPrefs,
    // Equipment screen prefs
    equipPrefs,
    // Quest Preferences
    questPrefs,
    // profile prefs
    profilePrefs,
    // Bounty hunting prefs
    bountyPrefs,
    // Other prefs
    otherPrefs,
  ].map(functionPasses).join('');
}

function setupConfigData() {
  calf.configData = '<form><table id="fshSettingsTable">'
    + '<thead><th colspan="2"><b>Fallen Sword Helper configuration '
      + `Settings</b></th></thead>${
        storageDetails()}${linkToWebsite()}${corePrefs()
        // save button
      }<tr><td colspan="2" align=center><input type="button" class=`
      + '"custombutton" value="Save" id="Helper:SaveOptions"></td></tr>'
    // Export or Load Settings
    + '<tr><td colspan="2" align=center>'
      + `<a href="${notepadBlankUrl}savesettings">`
      + `Export or Load Settings!</a></td></tr>${
        codedBy()
      }</table></form>`;
}

function addTab(tabs) { // jQuery
  tabs.find('.ui-tabs-nav')
    .append('<li><a href="#fshSettings">FSH</a></li>');
  tabs.append(`<div id="fshSettings"><p>${calf.configData}</p></div>`);
  tabs.tabs('refresh');
}

function doFshSettings(settingsTabs) {
  getVars();
  setupConfigData();
  addTab(settingsTabs);
  createEventListeners();
  setValue('minGroupLevel',
    querySelector('input[name="min_group_level"]').value);
}

function injectSettings() { // jQuery
  if (jQueryNotPresent()) { return; }
  const settingsTabs = $('#settingsTabs');
  const tabsInstance = settingsTabs.tabs('instance');
  if (tabsInstance) { doFshSettings(settingsTabs); }
}

export default injectSettings;
//# sourceMappingURL=injectSettings-8bf8571e.js.map
