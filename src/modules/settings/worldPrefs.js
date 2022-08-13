import './worldPrefs.css';
import calf from '../support/calf';
import getValue from '../system/getValue';
import isSelected from '../system/isSelected';
import bunchOfSimple from './bunchOfSimple';
import { huntingBuffs } from './huntingBuffs';
import makeCustomRow from './makeCustomRow';
import makeHeaderRow from './makeHeaderRow';
import makeLabelRow from './makeLabelRow';
import {
  helpLink,
  justCheckbox,
  simpleCheckbox,
} from './simpleCheckbox';

function worldGroup() {
  // World Screen
  return makeLabelRow(
    'hideCreateGroupButton',
    `${justCheckbox('hideChampionsGroup')}&nbsp;Champions&nbsp;&nbsp;`
    + `${justCheckbox('hideElitesGroup')}&nbsp;Elites&nbsp;&nbsp;`
    + `${justCheckbox('hideSEGroup')}&nbsp;Super Elite&nbsp;&nbsp;`
    + `${justCheckbox('hideTitanGroup')}&nbsp;Titan&nbsp;&nbsp;`
    + `${justCheckbox('hideLegendaryGroup')}&nbsp;Legendary`,
  );
}

function keepCombatLogs() {
  return makeLabelRow(
    'keepLogs',
    `${justCheckbox('keepLogs')}&nbsp;&nbsp;`
    + '<input type="button" class="custombutton" value="Show Logs" id="Helper:ShowLogs">',
  );
}

function combatEvalBias() {
  return makeLabelRow(
    'combatEvaluatorBias',
    '<select name="combatEvaluatorBias">'
    + `<option value="0"${isSelected(calf.combatEvaluatorBias, 0)}>Conservative</option>`
    + `<option value="1"${isSelected(calf.combatEvaluatorBias, 1)}>Semi-Conservative</option>`
    + `<option value="2"${isSelected(calf.combatEvaluatorBias, 2)}>Adventurous</option>`
    + `<option value="3"${isSelected(calf.combatEvaluatorBias, 3)}>Conservative+</option>`
    + '</select>',
  );
}

function keepCreatureLog() {
  return makeLabelRow(
    'showMonsterLog',
    `${justCheckbox('showMonsterLog')}&nbsp;&nbsp;`
    + '<input type="button" class="custombutton" value="Show" id="Helper:ShowMonsterLogs">',
  );
}

function showSendGold() {
  return makeLabelRow(
    'sendGoldonWorld',
    `${justCheckbox('sendGoldonWorld')}&nbsp;&nbsp;`
    + `Send <input name="goldAmount" type="number" value="${getValue('goldAmount')}" min="0"> `
    + `gold to <input name="goldRecipient" value="${getValue('goldRecipient')}">`
    + ` Current total: <input name="currentGoldSentTotal" type="number" value="${
      getValue('currentGoldSentTotal')}" min="0">`,
  );
}

function theDoNotKillList() {
  return makeLabelRow(
    'doNotKillList',
    `<input name="doNotKillList" class="fshSettingsText" value="${calf.doNotKillList}">`,
  );
}

function huntingBuffsList(modeLabel, modeName, buffsName, buffs) {
  const help = helpLink(`${modeLabel} Hunting Buff List`, `${modeLabel} list of hunting buffs.`);
  return makeCustomRow(
    `${modeLabel} Hunting Buff List${help}:`,
    `<input name="${modeName}" title="Hunting mode name" value="${modeLabel}">`
    + `<input name="${buffsName}" value="${buffs}">`,
  );
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
  return `${makeHeaderRow('World screen/Hunting preferences')}`
    + `${
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
