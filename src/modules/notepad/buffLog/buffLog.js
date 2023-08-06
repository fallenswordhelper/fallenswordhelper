import instantiate from '../../modal/instantiate';
import BuffLog from './BuffLog.svelte';

const props = { visible: true };
let thisModal = 0;

export default function fsboxlog() {
  thisModal = instantiate(props, thisModal, BuffLog);
}
