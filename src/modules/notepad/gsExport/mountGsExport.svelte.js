import { mount } from 'svelte';
import GsExportModal from './GsExportModal.svelte';

const props = $state({ visible: true });
let thisModal = 0;

export default function mountGsExport() {
  if (thisModal) {
    props.visible = true;
  } else {
    thisModal = mount(GsExportModal, { props, target: document.body });
  }
}
