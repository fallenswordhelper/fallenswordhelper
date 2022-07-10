import instantiate from '../../modal/instantiate';
import QuickExtract from './QuickExtract.svelte';

const props = { visible: true };
let thisModal;

export default function quickExtract() {
  thisModal = instantiate(props, thisModal, QuickExtract);
}
