import QuestBook from '../../../questbook/QuestBook.svelte';
import { pcc } from '../../../support/layout';

export default function injectQuestbook() {
  return new QuestBook({ target: pcc() });
}
