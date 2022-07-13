import getValue from '../system/getValue';
import bunchOfSimple from './bunchOfSimple';
import makeHeaderRow from './makeHeaderRow';
import makeLabelRow from './makeLabelRow';
import { justCheckbox } from './simpleCheckbox';

export default function questPrefs() {
  // Quest Preferences
  return `${makeHeaderRow('Quest preferences')}`
    + `${makeLabelRow(
      'hideQuests',
      `${justCheckbox('hideQuests')}&nbsp;`
      + `<input name="hideQuestNames" class="fshSettingsText" value="${getValue('hideQuestNames')}">`,
    )}`
    + `${bunchOfSimple(['storeLastQuestPage', 'showNextQuestSteps'])}`;
}
