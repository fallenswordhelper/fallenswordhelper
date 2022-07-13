import getValue from '../system/getValue';
import bunchOfSimple from './bunchOfSimple';
import { justCheckbox, justLabel } from './simpleCheckbox';

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
  return '<tr>'
    + `<td class="fshRight">${justLabel('enableGuildInfoWidgets')}</td>`
    + '<td>'
    + `${justCheckbox('enableGuildInfoWidgets')}`
    + `&nbsp;<label>Hide Message&gt;${justCheckbox('hideGuildInfoMessage')}</label>`
    + `&nbsp;<label>Hide Buff&gt;${justCheckbox('hideGuildInfoBuff')}</label>`
    + `&nbsp;<label>Hide ST&gt;${justCheckbox('hideGuildInfoSecureTrade')}</label>`
    + `&nbsp;<label>Hide Trade&gt;${justCheckbox('hideGuildInfoTrade')}</label>`
    + '</td>'
    + '</tr>';
}

function onlineAlliesEnemies() {
  return '<tr>'
    + `<td class="fshRight">${justLabel('showAlliesEnemies')}</td>`
    + '<td>'
    + `<label>Allies&nbsp;${justCheckbox('enableAllyOnlineList')}</label>&nbsp;&nbsp;`
    + `<label>Enemies&nbsp;${justCheckbox('enableEnemyOnlineList')}</label>&nbsp;&nbsp;`
    + `<input name="allyEnemyOnlineRefreshTime" class="fshSettingsNumber" type="number" value="${
      getValue('allyEnemyOnlineRefreshTime')}"> seconds refresh`
    + '</td>'
    + '</tr>';
}

function quickLinksLocation() {
  return '<tr>'
    + `<td class="fshRight">${justLabel('quickLinksLocation')}</td>`
    + '<td>'
    + `Top: <input name="quickLinksTopPx" class="fshSettingsNumber" type="number" value="${getValue('quickLinksTopPx')}"> `
    + `Left: <input name="quickLinksLeftPx" class="fshSettingsNumber" type="number" value="${getValue('quickLinksLeftPx')}">`
    + '</td>'
    + '</tr>';
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
