import instantiate from '../../modal/instantiate';
import CreatureLog from './CreatureLog.svelte';

const props = { visible: true };
let thisModal = 0;

export default function creatureLog() {
  thisModal = instantiate(props, thisModal, CreatureLog);
}
