import calf from '../support/calf';
import isSelected from '../system/isSelected';
import {
  justCheckbox,
  justLabel,
  simpleCheckboxHtml,
} from './simpleCheckbox';

const defShowHuntingBuffs = 'showHuntingBuffs';

function huntMode() {
  return `${justLabel('enabledHuntingMode')}`
    + '<select name="enabledHuntingMode">'
    + `<option value="1"${isSelected(calf.enabledHuntingMode, '1')}>${calf.buffsName}</option>`
    + `<option value="2"${isSelected(calf.enabledHuntingMode, '2')}>${calf.buffs2Name}</option>`
    + `<option value="3"${isSelected(calf.enabledHuntingMode, '3')}>${calf.buffs3Name}</option>`
    + '</select>';
}

export function huntingBuffsHtml() {
  return `${simpleCheckboxHtml(defShowHuntingBuffs)} ${huntMode()}`;
}

export function huntingBuffs() {
  return '<tr>'
    + `<td class="fshRight">${justLabel(defShowHuntingBuffs)}</td>`
    + `<td>${justCheckbox(defShowHuntingBuffs)} ${huntMode()}</td>`
    + '</tr>';
}
