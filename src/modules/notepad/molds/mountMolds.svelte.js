import { mount } from 'svelte';
import MoldsModal from './MoldsModal.svelte';

const props = $state({ visible: true });
let thisModal = 0;

export default function mountMolds() {
  if (thisModal) {
    props.visible = true;
  } else {
    thisModal = mount(MoldsModal, { props, target: document.body });
  }
}
