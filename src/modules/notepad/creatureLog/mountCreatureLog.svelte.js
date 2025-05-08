import { mount } from 'svelte';
import CreatureLog from './CreatureLog.svelte';

const props = $state({ visible: true });
let thisModal = 0;

export default function mountCreatureLog() {
  if (thisModal) {
    props.visible = true;
  } else {
    thisModal = mount(CreatureLog, { props, target: document.body });
  }
}
