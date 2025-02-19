import SuperEliteModal from './SuperEliteModal.svelte';

const props = { visible: true };
let thisModal = 0;

export default function superelite() {
  if (thisModal) {
    thisModal.$set(props);
  } else {
    thisModal = new SuperEliteModal({ props, target: document.body });
  }
}
