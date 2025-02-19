import BuffLog from './BuffLog.svelte';

const props = { visible: true };
let thisModal = 0;

export default function buffLog() {
  if (thisModal) {
    thisModal.$set(props);
  } else {
    thisModal = new BuffLog({ props, target: document.body });
  }
}
