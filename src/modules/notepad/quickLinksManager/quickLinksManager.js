import instantiate from '../../modal/instantiate';
import QuickLinksModal from './QuickLinksModal.svelte';

const props = { visible: true };
let thisModal = 0;

export default function quickLinksManager() {
  thisModal = instantiate(props, thisModal, QuickLinksModal);
}
