import CombatLog from './CombatLog.svelte';

const props = { visible: true };
let thisModal = 0;

export default function combatLog() {
  if (thisModal) {
    thisModal.$set(props);
  } else {
    thisModal = new CombatLog({ props, target: document.body });
  }
}
