import { mount } from 'svelte';
import CombatLog from './CombatLog.svelte';

const props = $state({ visible: true });
let thisModal = 0;

export default function mountCombatLog() {
  if (thisModal) {
    props.visible = true;
  } else {
    thisModal = mount(CombatLog, { props, target: document.body });
  }
}
