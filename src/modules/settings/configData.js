import './configData.css';
import functionPasses from '../common/functionPasses';
import playerLink from '../common/playerLink';
import calf from '../support/calf';
import { notepadBlankUrl } from '../support/constants';
import bountyPrefs from './bountyPrefs';
import equipPrefs from './equipPrefs';
import generalPrefs from './generalPrefs';
import guildPrefs from './guildPrefs';
import leftHandLinks from './leftHandLinks';
import logPrefs from './logPrefs';
import makeHeaderRow from './makeHeaderRow';
import otherPrefs from './otherPrefs';
import profilePrefs from './profilePrefs';
import questPrefs from './questPrefs';
import worldPrefs from './worldPrefs';

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

function coderLink(acc, [id, name], ind, ary) {
  let ret = `${acc}${playerLink(id, name)}`;
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
      listOfCoders([
        ['1393340', 'Coccinella'],
        ['1963510', 'PointyHair'],
        ['1674838', 'Lusterless'],
        ['1599987', 'yuuzhan'],
        ['1346893', 'Tangtop'],
        ['2536682', 'dkwizard'],
        ['1570854', 'jesiegel'],
        ['2156859', 'ByteBoy'],
        ['2169401', 'McBush'],
      ])
    }, with valuable contributions by ${
      listOfCoders([
        ['524660', 'Nabalac'],
        ['37905', 'Ananasii'],
      ])
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
    worldPrefs,
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

export default function ConfigData() {
  calf.configData = '<form><table class="fshSettingsTable"><tbody>'
    + `${makeHeaderRow('Fallen Sword Helper configuration Settings')}`
      + `${
        storageDetails()}${
        linkToWebsite()}${
        corePrefs()
        // save button
      }`
      + '<tr><td colspan="2" align=center>'
      + '<input type="button" class="custombutton" value="Save" id="Helper:SaveOptions">'
      + '</td></tr>'
    // Export or Load Settings
    + '<tr><td colspan="2" align=center>'
      + `<a href="${notepadBlankUrl}savesettings">`
      + `Export or Load Settings!</a></td></tr>${
        codedBy()
      }</tbody></table></form>`;
}
