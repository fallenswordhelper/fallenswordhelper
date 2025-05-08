import instantiate from '../../modal/instantiate';
import QuickWearModal from './QuickWearModal.svelte';

const props = { visible: true };
let thisModal = 0;

export default function quickwear() {
  thisModal = instantiate(props, thisModal, QuickWearModal);
}
