import QuickExtract from './QuickExtract.svelte';

const props = { visible: true };
let thisModal = 0;

export default function quickExtract() {
  if (thisModal) {
    thisModal.$set(props);
  } else {
    thisModal = new QuickExtract({ props, target: document.body });
  }
}
