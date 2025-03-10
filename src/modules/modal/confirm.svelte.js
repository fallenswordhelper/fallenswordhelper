import Confirm from './ModalConfirm.svelte';
import { mount } from 'svelte';

const props = $state({ visible: true });
let thisModal = null;

function promiseConfirm(resolve) {
  props.resolve = resolve;
  if (thisModal) {
    props.visible = true;
  } else {
    thisModal = mount(Confirm, { props, target: document.body });
  }
}

export default function confirm(msg) {
  props.msg = msg;
  return new Promise(promiseConfirm);
}
