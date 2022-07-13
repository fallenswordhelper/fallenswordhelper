import getValue from '../system/getValue';
import bunchOfSimple from './bunchOfSimple';
import makeCustomRow from './makeCustomRow';
import makeHeaderRow from './makeHeaderRow';
import makeLabelRow from './makeLabelRow';
import {
  justCheckbox,
  simpleCheckbox,
} from './simpleCheckbox';

function injectSettingsGuildData(guildType) {
  let title = '';
  let disabled = '';
  if (guildType === 'Self') {
    title = ' title="This is automatically detected"';
    disabled = ' disabled';
  }
  const guildValue = getValue(`guild${guildType}`);
  const guildMessage = getValue(`guild${guildType}Message`);
  return `<input${title} name="guild${guildType}" class="fshSettingsText" value="${
    guildValue}"${disabled}>`

    + '<br><span class="fshPoint" '
    + `id="toggleShowGuild${guildType}Message" data-linkto="showGuild${
      guildType}Message"> &#x00bb;</span>`

    + `<div id="showGuild${guildType}Message" class="fshHide">`
    + `<input name="guild${guildType}Message" class="fshSettingsText" value="${guildMessage}">`
    + '</div>';
}

function guildNames() {
  return '<tr><td colspan="2">Enter guild names, separated by commas</td></tr>'
    + `${makeCustomRow('Own Guild', injectSettingsGuildData('Self'))}`
    + `${makeCustomRow('Friendly Guilds', injectSettingsGuildData('Frnd'))}`
    + `${makeCustomRow('Old Guilds', injectSettingsGuildData('Past'))}`
    + `${makeCustomRow('Enemy Guilds', injectSettingsGuildData('Enmy'))}`;
}

function pvpTargets() {
  return makeLabelRow(
    'highlightValidTargets',
    `PvP: ${justCheckbox('highlightPlayersNearMyLvl')}`
    + ` GvG: ${justCheckbox('highlightGvGPlayersNearMyLvl')}`,
  );
}

export default function guildPrefs() {
  // Guild Manage
  return `${makeHeaderRow('Guild>Manage preferences')}`
    + `${
      simpleCheckbox('showGuildRelationship')}${
      guildNames()}${
      pvpTargets()}${
      bunchOfSimple([
        'showAdmin',
        'ajaxifyRankControls',
        'detailedConflictInfo',
        'enableHistoryCompressor',
        'showBuffLinks',
      ])}`;
}
