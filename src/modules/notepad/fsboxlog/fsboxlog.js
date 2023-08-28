import instantiate from '../../modal/instantiate';
import FsBoxLog from './FsBoxLog.svelte';

const props = { visible: true };
let thisModal = 0;

export default function fsboxlog() {
  thisModal = instantiate(props, thisModal, FsBoxLog);
}
