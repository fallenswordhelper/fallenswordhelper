import getValue from '../system/getValue';
import bunchOfSimple from './bunchOfSimple';
import { justCheckbox, justLabel } from './simpleCheckbox';

export default function questPrefs() {
  // Quest Preferences
  return '<tr><th colspan="2"><b>Quest preferences</b></th></tr>'
    + '<tr>'
    + `<td class="fshRight">${justLabel('hideQuests')}</td>`
    + '<td>'
    + `${justCheckbox('hideQuests')}`
    + '&nbsp;'
    + `<input name="hideQuestNames" class="fshSettingsText" value="${getValue('hideQuestNames')}">`
    + '</td>'
    + '</tr>'
    + `${bunchOfSimple(['storeLastQuestPage', 'showNextQuestSteps'])}`;
}
