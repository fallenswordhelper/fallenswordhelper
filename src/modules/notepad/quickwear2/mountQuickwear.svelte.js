import { mount } from 'svelte';
import QuickWearModal from './QuickWearModal.svelte';

const props = $state({ visible: true });
let thisModal = 0;

export default function quickwear() {
  if (thisModal) {
    props.visible = true;
  } else {
    thisModal = mount(QuickWearModal, { props, target: document.body });
  }
}
