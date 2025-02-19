import QuickWearModal from './QuickWearModal.svelte';

const props = { visible: true };
let thisModal = 0;

export default function quickwear() {
  if (thisModal) {
    thisModal.$set(props);
  } else {
    thisModal = new QuickWearModal({ props, target: document.body });
  }
}
