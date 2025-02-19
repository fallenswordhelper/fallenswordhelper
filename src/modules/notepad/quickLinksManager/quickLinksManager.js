import QuickLinksModal from './QuickLinksModal.svelte';

const props = { visible: true };
let thisModal = 0;

export default function quickLinksManager() {
  if (thisModal) {
    thisModal.$set(props);
  } else {
    thisModal = new QuickLinksModal({ props, target: document.body });
  }
}
