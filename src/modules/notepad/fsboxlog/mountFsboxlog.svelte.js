import { mount } from 'svelte';
import FsBoxLog from './FsBoxLog.svelte';

const props = $state({ visible: true });
let thisModal = 0;

export default function mountFsboxlog() {
  if (thisModal) {
    props.visible = true;
  } else {
    thisModal = mount(FsBoxLog, { props, target: document.body });
  }
}
