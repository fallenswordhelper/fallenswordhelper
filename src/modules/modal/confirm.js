import Confirm from './Confirm.svelte';
import instantiate from './instantiate';

const props = { visible: true };
let thisModal;

function promiseConfirm(resolve) {
  thisModal = instantiate(props, thisModal, Confirm);
  thisModal.$on('yes', () => resolve(true));
  thisModal.$on('no', () => resolve(false));
}

export default function confirm(msg) {
  props.msg = msg;
  return new Promise(promiseConfirm);
}
