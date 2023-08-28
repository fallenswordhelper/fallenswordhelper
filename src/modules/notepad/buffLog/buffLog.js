import instantiate from '../../modal/instantiate';
import BuffLog from './BuffLog.svelte';

const props = { visible: true };
let thisModal = 0;

export default function buffLog() {
  thisModal = instantiate(props, thisModal, BuffLog);
}
