import combatLog from '../chrome/pageSwitcher/loader/combatLog';
import createBr from '../common/cElement/createBr';
import createSpan from '../common/cElement/createSpan';
import dynamicAlert from '../alert/dynamicAlert';
import getElementById from '../common/getElementById';
import insertElement from '../common/insertElement';
import jConfirm from '../common/jConfirm';
import jQueryDialog from '../chrome/jQueryDialog/jQueryDialog';
import monstorLog from '../chrome/pageSwitcher/loader/monstorLog';
import numberIsNaN from '../common/numberIsNaN';
import onclick from '../common/onclick';
import querySelector from '../common/querySelector';
import saveBoxes from './saveBoxes.json';
import sendEvent from '../analytics/sendEvent';
import setValue from '../system/setValue';
import toggleVisibilty from '../common/toggleVisibilty';

function findEl(el, name) {
  return querySelector(`.fshSettingsTable ${el}[name="${name}"]`);
}

function findInput(name) {
  return findEl('input', name);
}

function findSelect(name) {
  return findEl('select', name);
}

function toggleTickAllBuffs(e) { // jQuery
  const allItems = $('input[name^="blockedSkillList"]:visible', '#settingsTabs-4');
  const tckTxt = $(e.target);
  allItems.prop('checked', tckTxt.text() === 'Tick all buffs');
  if (tckTxt.text() === 'Tick all buffs') {
    tckTxt.text('Untick all buffs');
  } else {
    tckTxt.text('Tick all buffs');
  }
}

function clearStorage() {
  jConfirm(
    'Clear localStorage',
    'Are you sure you want to clear you localStorage?',
    () => { localStorage.clear(); },
  );
}

function saveValueForm(name) {
  const formElement = findInput(name);
  if (formElement.type === 'checkbox') {
    setValue(name, formElement.checked);
  } else {
    setValue(name, formElement.value);
  }
}

function saveNumeric(name) {
  const formElement = findSelect(name);
  setValue(name, Number(formElement.value));
}

function saveOther(name) {
  const formElement = findSelect(name);
  setValue(name, formElement.value);
}

function checkNumeric(name, min, def) {
  const myInput = findInput(name);
  const inputValue = Number(myInput.value);
  if (numberIsNaN(inputValue) || inputValue <= min) {
    myInput.value = def;
  }
}

function saveConfig() { // jQuery
  checkNumeric('newGuildLogHistoryPages', 1, 25);
  checkNumeric('maxGroupSizeToJoin', 1, 11);
  saveNumeric('combatEvaluatorBias');
  saveOther('enabledHuntingMode');
  saveBoxes.forEach(saveValueForm);
  dynamicAlert('FS Helper Settings Saved');
}

function showLogs() {
  sendEvent('settingsPage', 'combatLog');
  jQueryDialog(combatLog);
}

function showMonsterLogs() {
  sendEvent('settingsPage', 'injectMonsterLog');
  jQueryDialog(monstorLog);
}

function doTickAll() {
  const tickAll = createSpan({
    id: 'fshAllBuffs',
    className: 'fshLink',
    textContent: 'Tick all buffs',
  });
  onclick(tickAll, toggleTickAllBuffs);
  const inject = getElementById('settingsTabs-4').children[0].rows[0].cells[0];
  insertElement(inject, createBr());
  insertElement(inject, tickAll);
}

function listener(el) { onclick(getElementById(el[0]), el[1]); }

function clickHandlers() {
  [
    ['fshClearStorage', clearStorage],
    ['Helper:SaveOptions', saveConfig],
    ['Helper:ShowLogs', showLogs],
    ['Helper:ShowMonsterLogs', showMonsterLogs],
  ].forEach(listener);
}

function toggleListener(id) { onclick(getElementById(id), toggleVisibilty); }

function onVisibilityToggle() {
  [
    'toggleShowGuildSelfMessage',
    'toggleShowGuildFrndMessage',
    'toggleShowGuildPastMessage',
    'toggleShowGuildEnmyMessage',
  ].forEach(toggleListener);
}

export default function createEventListeners() { // Legacy
  doTickAll();
  clickHandlers();
  onVisibilityToggle();
}
