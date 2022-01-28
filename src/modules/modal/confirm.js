import Confirm from './Confirm.svelte';

const props = { visible: true };
let thisModal;

function promiseConfirm(resolve) {
  if (thisModal) {
    thisModal.$set(props);
  } else {
    thisModal = new Confirm({ props, target: document.body });
  }
  thisModal.$on('yes', () => resolve(true));
  thisModal.$on('no', () => resolve(false));
}

export default function confirm(msg) {
  props.msg = msg;
  return new Promise(promiseConfirm);
}
