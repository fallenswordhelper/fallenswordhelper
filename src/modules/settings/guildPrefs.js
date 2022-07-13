import getValue from '../system/getValue';
import bunchOfSimple from './bunchOfSimple';
import {
  justCheckbox,
  justLabel,
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
  return '<tr>'
    + `<td class="fshRight">${justLabel('highlightValidTargets')}:</td>`
    + '<td>'
    + `PvP: ${justCheckbox('highlightPlayersNearMyLvl')}`
    + ` GvG: ${justCheckbox('highlightGvGPlayersNearMyLvl')}`
    + '</td>'
    + '</tr>';
}

export default function guildPrefs() {
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
        'showBuffLinks',
      ])}`;
}
