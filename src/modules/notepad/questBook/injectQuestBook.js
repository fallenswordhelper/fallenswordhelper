import QuestBook from './QuestBook.svelte';

let qb;

export default function injectQuestBook() {
  if (qb) {
    qb.$set({ visible: true });
  } else {
    qb = new QuestBook({ target: document.body });
  }
  return qb;
}
