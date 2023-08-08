import dynamicAlert from '../alert/dynamicAlert';
import sendEvent from '../analytics/sendEvent';
import combatLog from '../chrome/pageSwitcher/loader/combatLog';
import creatureLog from '../chrome/pageSwitcher/loader/creatureLog';
import closestTr from '../common/closestTr';
import eventHandler5 from '../common/eventHandler5';
import getElementById from '../common/getElementById';
import hasClass from '../common/hasClass';
import numberIsNaN from '../common/numberIsNaN';
import onclick from '../common/onclick';
import querySelectorArray from '../common/querySelectorArray';
import selfIdIs from '../common/selfIdIs';
import confirm from '../modal/confirm';
import setValue from '../system/setValue';

async function clearStorage() {
  sendEvent('settingsPage', 'clearStorage');
  const canProceed = await confirm('Are you sure you want to clear you localStorage?');
  if (canProceed) localStorage.clear();
}

function saveNumeric(i) {
  if (!numberIsNaN(i.value) && i.value >= Number(i.min)) setValue(i.name, i.value);
}

function savePref(i) {
  if (i.name === 'combatEvaluatorBias') {
    setValue(i.name, Number(i.value));
  } else if (i.type === 'number') {
    saveNumeric(i);
  } else {
    setValue(i.name, i.type === 'checkbox' ? i.checked : i.value);
  }
}

function saveConfig() {
  sendEvent('settingsPage', 'saveConfig');
  const fields = querySelectorArray('.fsh-settings input[name], .fsh-settings select[name]');
  fields.forEach(savePref);
  dynamicAlert('FS Helper Settings Saved');
}

function showLogs() {
  sendEvent('settingsPage', 'combatLog');
  combatLog();
}

function showMonsterLogs() {
  sendEvent('settingsPage', 'injectMonsterLog');
  creatureLog();
}

function resetFootprintColor() {
  sendEvent('settingsPage', 'resetFootprintColor');
  getElementById('footprintColor').value = '#ee9252';
}

function toggle(target) {
  sendEvent('settingsPage', 'toggle');
  const label = closestTr(target).nextElementSibling;
  label.classList.toggle('fshHide');
}

const eventArray = [
  [selfIdIs('fsh-settings-clear-storage'), clearStorage],
  [selfIdIs('fsh-settings-show-combat-log'), showLogs],
  [selfIdIs('fsh-settings-show-monster-log'), showMonsterLogs],
  [selfIdIs('fsh-settings-footprint-reset'), resetFootprintColor],
  [selfIdIs('fsh-settings-save'), saveConfig],
  [(target) => hasClass('fsh-toggle', target), toggle],
];

export default function createEventListeners() {
  onclick(getElementById('fshSettings'), eventHandler5(eventArray));
}
