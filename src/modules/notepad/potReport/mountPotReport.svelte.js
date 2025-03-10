import { mount } from 'svelte';
import PotReport from './PotReport.svelte';

const props = $state({ visible: true });
let thisModal = 0;

export default function mountPotReport() {
  if (thisModal) {
    props.visible = true;
  } else {
    thisModal = mount(PotReport, { props, target: document.body });
  }
}
