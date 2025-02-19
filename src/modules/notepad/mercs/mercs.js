import Mercs from './Mercs.svelte';

const props = { visible: true };
let thisModal = 0;

export default function mercs() {
  if (thisModal) {
    thisModal.$set(props);
  } else {
    thisModal = new Mercs({ props, target: document.body });
  }
}
