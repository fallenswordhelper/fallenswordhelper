import './worldPrefs.css';
import calf from '../support/calf';
import getValue from '../system/getValue';
import isSelected from '../system/isSelected';
import bunchOfSimple from './bunchOfSimple';
import { huntingBuffs } from './huntingBuffs';
import isValueChecked from './isValueChecked';
import {
  helpLink,
  justCheckbox,
  justLabel,
  simpleCheckbox,
} from './simpleCheckbox';

function worldGroup() {
  // World Screen
  return `<tr><td class="fshRight">Hide Create Group Button${
    helpLink('Hide Create Group Button', 'Enabling this option will hide the Create Group button')
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
    helpLink(
      'Keep Combat Logs',
      'Save combat logs to a temporary variable. '
      + 'Press <u>Show logs</u> on the right to display and copy them',
    )
  }:</td><td><input name="keepLogs" type="checkbox" value="on"${
    isValueChecked('keepLogs')}>&nbsp;&nbsp;`
    + '<input type="button" class="custombutton" value="Show Logs" '
    + 'id="Helper:ShowLogs"></td></tr>';
}

function combatEvalBias() {
  return `<tr><td class="fshRight">Combat Evaluator Bias${
    helpLink(
      'Combat Evaluator Bias',
      'This changes the bias of the combat evaluator for the damage and '
      + 'HP evaluation. It will not change the attack bias (1.1053).'
      + '<br>Conservative = 1.1053 and 1.1 (Safest)'
      + '<br>Semi-Conservative = 1.1 and 1.053'
      + '<br>Adventurous = 1.053 and 1 (Bleeding Edge)'
      + '<br>Conservative+ = 1.1053 and 1 with the attack calculation changed to +-48 per RJEM',
    )
  }:</td><td><select name="combatEvaluatorBias">`
    + `<option value="0"${isSelected(calf.combatEvaluatorBias, 0)}>Conservative</option>`
    + `<option value="1"${isSelected(calf.combatEvaluatorBias, 1)}>Semi-Conservative</option>`
    + `<option value="2"${isSelected(calf.combatEvaluatorBias, 2)}>Adventurous</option>`
    + `<option value="3"${
      isSelected(calf.combatEvaluatorBias, 3)}>Conservative+</option></select></td></tr>`;
}

function keepCreatureLog() {
  return `<tr><td class="fshRight">${justLabel('showMonsterLog')
  }</td><td>${justCheckbox('showMonsterLog')
  }&nbsp;&nbsp;<input type="button" class="custombutton" `
    + 'value="Show" id="Helper:ShowMonsterLogs"></td></tr>';
}

function showSendGold() {
  return `<tr><td class="fshRight">Show Send Gold${
    helpLink(
      'Show Gold on World Screen',
      'This will show an icon below the world map to allow you to '
      + 'quickly send gold to a Friend.',
    )
  }:</td><td><input name="sendGoldonWorld" type="checkbox" value="on"${
    isValueChecked('sendGoldonWorld')}>`
    + `&nbsp;&nbsp;Send <input name="goldAmount" type="number" value="${
      getValue('goldAmount')}"> `
    + `gold to <input name="goldRecipient" value="${
      getValue('goldRecipient')}">`
    + ` Current total: <input name="currentGoldSentTotal" type="number" value="${
      getValue('currentGoldSentTotal')}"></td></tr>`;
}

function theDoNotKillList() {
  return `<tr><td class="fshRight">Do Not Kill List${
    helpLink(
      'Do Not Kill List',
      'List of creatures that will not be killed by quick kill. '
      + 'You must type the full name of each creature, separated by commas. '
      + 'Creature name will show up in red color on world screen and will '
      + 'not be killed by keyboard entry (but can still be killed by '
      + 'mouseclick). Quick kill must be enabled for this function to work.',
    )
  }:</td><td><input name="doNotKillList" class="fshSettingsText" value="${
    calf.doNotKillList}"></td></tr>`;
}

function huntingBuffsList(modeLabel, modeName, buffsName, buffs) {
  const help = helpLink(`${modeLabel} Hunting Buff List`, `${modeLabel} list of hunting buffs.`);
  return `<tr><td class="fshRight">${modeLabel} Hunting Buff List${help}:</td><td><input name="${
    modeName}" title="Hunting mode name" value="${modeLabel}"><input name="${buffsName}" value="${
    buffs}"></td></tr>`;
}

function huntingBuffsLists() {
  return huntingBuffsList(calf.buffsName, 'huntingBuffsName', 'huntingBuffs', calf.buffs)
    + huntingBuffsList(calf.buffs2Name, 'huntingBuffs2Name', 'huntingBuffs2', calf.buffs2)
    + huntingBuffsList(calf.buffs3Name, 'huntingBuffs3Name', 'huntingBuffs3', calf.buffs3);
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

export default function worldPrefs() {
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
