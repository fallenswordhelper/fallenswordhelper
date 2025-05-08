import { mount } from 'svelte';
import RecipeMgr from './RecipeMgr.svelte';

const props = $state({ visible: true });
let thisModal = 0;

export default function mountRecipeMgr() {
  if (thisModal) {
    props.visible = true;
  } else {
    thisModal = mount(RecipeMgr, { props, target: document.body });
  }
}
