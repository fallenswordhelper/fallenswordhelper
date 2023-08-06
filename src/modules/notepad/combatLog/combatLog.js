import instantiate from '../../modal/instantiate';
import CombatLog from './CombatLog.svelte';

const props = { visible: true };
let thisModal = 0;

export default function newCombatLog() {
  thisModal = instantiate(props, thisModal, CombatLog);
}
