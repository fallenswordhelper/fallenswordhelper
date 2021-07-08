import bunchOfSimple from './bunchOfSimple';
import getValue from '../system/getValue';
import { helpLink } from './simpleCheckbox';
import isValueChecked from './isValueChecked';

export default function questPrefs() {
  // Quest Preferences
  return '<tr><th colspan="2"><b>Quest preferences</b></th></tr>'

    + `<tr><td class="fshRight">Hide Specific Quests${
      helpLink('Hide Specific Quests',
        'If enabled, this hides quests whose name matches the list '
        + '(separated by commas).')
    }:</td><td><input name="hideQuests" type="checkbox" `
      + `value="on"${
        isValueChecked('hideQuests')}>`
      + `&nbsp;<input name="hideQuestNames" class="fshSettingsText" value="${
        getValue('hideQuestNames')}"></td></tr>${

        bunchOfSimple([
          'storeLastQuestPage',
          'showNextQuestSteps',
        ])}`;
}
