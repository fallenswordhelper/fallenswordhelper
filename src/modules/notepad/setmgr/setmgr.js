import instantiate from '../../modal/instantiate';
import SetMgr from './SetMgr.svelte';

const props = { visible: true };
let thisModal = 0;

export default function setmgr() {
  thisModal = instantiate(props, thisModal, SetMgr);
}
