import { mount } from 'svelte';
import QuickExtract from './QuickExtract.svelte';

const props = $state({ visible: true });
let thisModal = 0;

export default function mountQuickExtract() {
  if (thisModal) {
    props.visible = true;
  } else {
    thisModal = mount(QuickExtract, { props, target: document.body });
  }
}
