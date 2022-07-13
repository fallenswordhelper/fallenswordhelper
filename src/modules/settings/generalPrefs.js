import getValue from '../system/getValue';
import bunchOfSimple from './bunchOfSimple';
import makeHeaderRow from './makeHeaderRow';
import makeLabelRow from './makeLabelRow';
import { justCheckbox } from './simpleCheckbox';

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
  return makeLabelRow(
    'enableGuildInfoWidgets',
    `${justCheckbox('enableGuildInfoWidgets')}`
    + `&nbsp;<label>Hide Message&gt;${justCheckbox('hideGuildInfoMessage')}</label>`
    + `&nbsp;<label>Hide Buff&gt;${justCheckbox('hideGuildInfoBuff')}</label>`
    + `&nbsp;<label>Hide ST&gt;${justCheckbox('hideGuildInfoSecureTrade')}</label>`
    + `&nbsp;<label>Hide Trade&gt;${justCheckbox('hideGuildInfoTrade')}</label>`,
  );
}

function onlineAlliesEnemies() {
  return makeLabelRow(
    'showAlliesEnemies',
    `<label>Allies&nbsp;${justCheckbox('enableAllyOnlineList')}</label>&nbsp;&nbsp;`
    + `<label>Enemies&nbsp;${justCheckbox('enableEnemyOnlineList')}</label>&nbsp;&nbsp;`
    + `<input name="allyEnemyOnlineRefreshTime" class="fshSettingsNumber" type="number" value="${
      getValue('allyEnemyOnlineRefreshTime')}"> seconds refresh`,
  );
}

function quickLinksLocation() {
  return makeLabelRow(
    'quickLinksLocation',
    `Top: <input name="quickLinksTopPx" class="fshSettingsNumber" type="number" value="${
      getValue('quickLinksTopPx')}"> `
    + `Left: <input name="quickLinksLeftPx" class="fshSettingsNumber" type="number" value="${
      getValue('quickLinksLeftPx')}">`,
  );
}

export default function generalPrefs() {
  // General Prefs
  return `${makeHeaderRow('General preferences (apply to most screens)')}`
    + `${
      guildInfoWidgets()}${
      bunchOfSimple(topBlock)}${
      onlineAlliesEnemies()}${
      bunchOfSimple(middleBlock)}${
      quickLinksLocation()}${
      bunchOfSimple(bottomBlock)}`;
}
