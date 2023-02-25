import QuestBook from './QuestBook.svelte';
import { pcc } from '../support/layout';

let qb;
export default function injectQuestbook() {
  if (qb) {
    qb.$set({visible: true});
  } else {
    qb = new QuestBook({ target: pcc() });
  }
}
