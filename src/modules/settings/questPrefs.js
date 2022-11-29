import bunchOfSimple from './bunchOfSimple';
import makeHeaderRow from './makeHeaderRow';

export default function questPrefs() {
  // Quest Preferences
  return `${makeHeaderRow('Quest preferences')} `
    + `${bunchOfSimple(['newQuestBook', 'storeLastQuestPage', 'showNextQuestSteps'])}`;
}
