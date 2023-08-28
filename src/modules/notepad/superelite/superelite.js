import instantiate from '../../modal/instantiate';
import SuperEliteModal from './SuperEliteModal.svelte';

const props = { visible: true };
let thisModal = 0;

export default function superelite() {
  thisModal = instantiate(props, thisModal, SuperEliteModal);
}
