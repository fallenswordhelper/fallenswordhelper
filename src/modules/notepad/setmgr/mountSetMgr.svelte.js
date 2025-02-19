import { mount } from 'svelte';
import SetMgr from './SetMgr.svelte';

const props = $state({ visible: true });
let thisModal = 0;

export default function mountSetMgr() {
  if (thisModal) {
    props.visible = true;
  } else {
    thisModal = mount(SetMgr, { props, target: document.body });
  }
}
