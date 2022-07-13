import './worldPrefs.css';
import calf from '../support/calf';
import getValue from '../system/getValue';
import isSelected from '../system/isSelected';
import bunchOfSimple from './bunchOfSimple';
import { huntingBuffs } from './huntingBuffs';
import {
  helpLink,
  justCheckbox,
  justLabel,
  simpleCheckbox,
} from './simpleCheckbox';

function worldGroup() {
  // World Screen
  return '<tr>'
    + `<td class="fshRight">${justLabel('hideCreateGroupButton')}</td>`
    + '<td>'
    + `${justCheckbox('hideChampionsGroup')}&nbsp;Champions&nbsp;&nbsp;`
    + `${justCheckbox('hideElitesGroup')}&nbsp;Elites&nbsp;&nbsp;`
    + `${justCheckbox('hideSEGroup')}&nbsp;Super Elite&nbsp;&nbsp;`
    + `${justCheckbox('hideTitanGroup')}&nbsp;Titan&nbsp;&nbsp;`
    + `${justCheckbox('hideLegendaryGroup')}&nbsp;Legendary`
    + '</td>'
    + '</tr>';
}

function keepCombatLogs() {
  return '<tr>'
    + `<td class="fshRight">${justLabel('keepLogs')}</td>`
    + '<td>'
    + `${justCheckbox('keepLogs')}&nbsp;&nbsp;`
    + '<input type="button" class="custombutton" value="Show Logs" id="Helper:ShowLogs">'
    + '</td>'
    + '</tr>';
}

function combatEvalBias() {
  return '<tr>'
    + `<td class="fshRight">${justLabel('combatEvaluatorBias')}</td>`
    + '<td>'
    + '<select name="combatEvaluatorBias">'
    + `<option value="0"${isSelected(calf.combatEvaluatorBias, 0)}>Conservative</option>`
    + `<option value="1"${isSelected(calf.combatEvaluatorBias, 1)}>Semi-Conservative</option>`
    + `<option value="2"${isSelected(calf.combatEvaluatorBias, 2)}>Adventurous</option>`
    + `<option value="3"${isSelected(calf.combatEvaluatorBias, 3)}>Conservative+</option>`
    + '</select>'
    + '</td>'
    + '</tr>';
}

function keepCreatureLog() {
  return '<tr>'
    + `<td class="fshRight">${justLabel('showMonsterLog')}</td>`
    + '<td>'
    + `${justCheckbox('showMonsterLog')}&nbsp;&nbsp;`
    + '<input type="button" class="custombutton" value="Show" id="Helper:ShowMonsterLogs">'
    + '</td>'
    + '</tr>';
}

function showSendGold() {
  return '<tr>'
    + `<td class="fshRight">${justLabel('sendGoldonWorld')}</td>`
    + '<td>'
    + `${justCheckbox('sendGoldonWorld')}&nbsp;&nbsp;`
    + `Send <input name="goldAmount" type="number" value="${getValue('goldAmount')}"> `
    + `gold to <input name="goldRecipient" value="${getValue('goldRecipient')}">`
    + ` Current total: <input name="currentGoldSentTotal" type="number" value="${getValue('currentGoldSentTotal')}">`
    + '</td>'
    + '</tr>';
}

function theDoNotKillList() {
  return '<tr>'
  + `<td class="fshRight">${justLabel('doNotKillList')}</td>`
  + '<td>'
  + `<input name="doNotKillList" class="fshSettingsText" value="${calf.doNotKillList}">`
  + '</td>'
  + '</tr>';
}

function huntingBuffsList(modeLabel, modeName, buffsName, buffs) {
  const help = helpLink(`${modeLabel} Hunting Buff List`, `${modeLabel} list of hunting buffs.`);
  return '<tr>'
    + `<td class="fshRight">${modeLabel} Hunting Buff List${help}:</td>`
    + '<td>'
    + `<input name="${modeName}" title="Hunting mode name" value="${modeLabel}">`
    + `<input name="${buffsName}" value="${buffs}">`
    + '</td>'
    + '</tr>';
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
