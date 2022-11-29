import questbook from '../app/questbook';
import $dataAccess from './$dataAccess';

export default function daQuestBook() {
  return $dataAccess(questbook, questbook);
}
