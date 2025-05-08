import { mount } from 'svelte';
import BuffLog from './BuffLog.svelte';

const props = $state({ visible: true });
let thisModal = 0;

export default function mountBuffLog() {
  if (thisModal) {
    props.visible = true;
  } else {
    thisModal = mount(BuffLog, { props, target: document.body });
  }
}
