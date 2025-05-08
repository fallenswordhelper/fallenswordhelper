import { mount } from 'svelte';
import Mercs from './Mercs.svelte';

const props = $state({ visible: true });
let thisModal = 0;

export default function mountMercs() {
  if (thisModal) {
    props.visible = true;
  } else {
    thisModal = mount(Mercs, { props, target: document.body });
  }
}
