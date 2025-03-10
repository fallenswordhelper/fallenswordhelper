import { mount } from 'svelte';
import QuestBook from './QuestBook.svelte';

const props = $state({ visible: true });
let qb = null;

export default function mountQuestBook() {
  if (qb) {
    props.visible = true;
  } else {
    qb = mount(QuestBook, { props, target: document.body });
  }
  return qb;
}
