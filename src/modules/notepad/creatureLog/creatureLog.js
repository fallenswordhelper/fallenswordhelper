import CreatureLog from './CreatureLog.svelte';

const props = { visible: true };
let thisModal = 0;

export default function creatureLog() {
  if (thisModal) {
    thisModal.$set(props);
  } else {
    thisModal = new CreatureLog({ props, target: document.body });
  }
}
