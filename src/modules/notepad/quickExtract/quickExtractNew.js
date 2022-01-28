import QuickExtract from './QuickExtract.svelte';

const props = { visible: true };
let thisModal;

export default function quickExtractNew() {
  if (thisModal) {
    thisModal.$set(props);
  } else {
    thisModal = new QuickExtract({ props, target: document.body });
  }
}
