import view from '../app/questbook/view';
import $dataAccess from './$dataAccess';
import viewQuests from './fallbacks/viewQuests';

export default function daQuestBook() {
  return $dataAccess(view, viewQuests);
  // return $dataAccess(viewQuests, view);
}
