import instantiate from '../../modal/instantiate';
import Mercs from './Mercs.svelte';

const props = { visible: true };
let thisModal = 0;

export default function mercs() {
  thisModal = instantiate(props, thisModal, Mercs);
}
