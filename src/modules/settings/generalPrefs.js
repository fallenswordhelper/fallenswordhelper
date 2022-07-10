import calf from '../support/calf';
import getValue from '../system/getValue';
import isChecked from '../system/isChecked';
import bunchOfSimple from './bunchOfSimple';
import networkIcon from './networkIcon';
import { helpLink } from './simpleCheckbox';

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
    + `Enable Guild Info Widgets${helpLink(
      'Enable Guild Info Widgets',
      'Enabling this option will enable the Guild Info Widgets (coloring on the Guild Info panel)',
    )}:</label></td><td>`
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
  return `<tr><td class="fshNoWrap fshRight">${networkIcon}Show Online Allies/Enemies${
    helpLink(
      'Show Online Allies/Enemies',
      'This will show the allies/enemies online list on the right.',
    )}:</td>`
    + '<td><label>Allies&nbsp;'
    + `<input name="enableAllyOnlineList" type="checkbox" value="on"${
      isChecked(calf.enableAllyOnlineList)}></label>&nbsp;&nbsp;`
    + '<label>Enemies&nbsp;'
    + `<input name="enableEnemyOnlineList" type="checkbox" value="on"${
      isChecked(calf.enableEnemyOnlineList)}></label>&nbsp;&nbsp;`
    + `<input name="allyEnemyOnlineRefreshTime" class="fshSettingsNumber" type="number" value="${
      getValue('allyEnemyOnlineRefreshTime')}"> seconds refresh</td></tr>`;
}

function quickLinksLocation() {
  return `<tr><td class="fshRight">Quick Links Screen Location${
    helpLink(
      'Quick Links Screen Location',
      'Determines where the quick links dialog shows on the screen. Default is top 22, left 0.',
    )}:</td>`
    + `<td>Top: <input name="quickLinksTopPx" class="fshSettingsNumber" type="number" value="${
      getValue('quickLinksTopPx')}"> `
    + `Left: <input name="quickLinksLeftPx" class="fshSettingsNumber" type="number" value="${
      getValue('quickLinksLeftPx')}"></td></tr>`;
}

export default function generalPrefs() {
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
