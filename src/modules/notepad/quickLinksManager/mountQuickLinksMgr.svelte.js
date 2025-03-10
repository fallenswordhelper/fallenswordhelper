import { mount } from 'svelte';
import QuickLinksModal from './QuickLinksModal.svelte';

const props = $state({ visible: true });
let thisModal = 0;

export default function quickLinksManager() {
  if (thisModal) {
    props.visible = true;
  } else {
    thisModal = mount(QuickLinksModal, { props, target: document.body });
  }
}
