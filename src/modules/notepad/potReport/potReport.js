import PotReport from './PotReport.svelte';

const props = { visible: true };
let thisModal = 0;

export default function potReport() {
  if (thisModal) {
    thisModal.$set(props);
  } else {
    thisModal = new PotReport({ props, target: document.body });
  }
}
