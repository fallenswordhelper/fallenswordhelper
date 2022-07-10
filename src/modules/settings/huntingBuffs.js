import calf from '../support/calf';
import isChecked from '../system/isChecked';
import isSelected from '../system/isSelected';
import { helpLink } from './simpleCheckbox';

function huntBuff() {
  return `Hunting Buffs${helpLink(
    'Hunting Buffs',
    'Customize which buffs are designated as hunting buffs. '
    + 'You must type the full name of each buff, separated by commas. '
    + 'Use the checkbox to enable/disable them.',
  )}:`;
}

function huntBuffCheck() {
  return '<input name="showHuntingBuffs" '
    + `class="fshVMid" type="checkbox" value="on"${
      isChecked(calf.showBuffs)}>`;
}

function huntMode() {
  return `Enabled Hunting Mode${
    helpLink(
      'Enabled Hunting Mode',
      'This will determine which list of buffs gets checked on the world screen.',
    )}:<select name="enabledHuntingMode">`
    + `<option value="1"${
      isSelected(calf.enabledHuntingMode, '1')}>${calf.buffsName}</option>`
    + `<option value="2"${
      isSelected(calf.enabledHuntingMode, '2')}>${calf.buffs2Name}</option>`
    + `<option value="3"${
      isSelected(calf.enabledHuntingMode, '3')}>${calf.buffs3Name}</option>`
    + '</select>';
}

export function huntingBuffsHtml() {
  return `${huntBuff() + huntBuffCheck()} ${huntMode()}`;
}

export function huntingBuffs() {
  return `<tr><td class="fshRight">${huntBuff()}</td><td>${
    huntBuffCheck()} ${huntMode()}</td></tr>`;
}
