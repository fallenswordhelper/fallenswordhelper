import instantiate from '../../modal/instantiate';
import QuickExtract from './QuickExtract.svelte';

const props = { visible: true };
let thisModal = 0;

export default function quickExtract() {
  thisModal = instantiate(props, thisModal, QuickExtract);
}
