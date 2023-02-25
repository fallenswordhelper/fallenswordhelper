import QuestBook from '../../../notepad/questBook/QuestBook.svelte';
import { pcc } from '../../../support/layout';

let qb;
export default function injectQuestBook() {
  if (qb) {
    qb.$set({ visible: true });
  } else {
    qb = new QuestBook({ target: pcc() });
  }
}
