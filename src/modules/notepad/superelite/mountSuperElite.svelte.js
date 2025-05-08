import { mount } from 'svelte';
import SuperEliteModal from './SuperEliteModal.svelte';

const props = $state({ visible: true });
let thisModal = 0;

export default function mountSuperElite() {
  if (thisModal) {
    props.visible = true;
  } else {
    thisModal = mount(SuperEliteModal, { props, target: document.body });
  }
}
