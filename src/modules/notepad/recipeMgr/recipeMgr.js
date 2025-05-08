import instantiate from '../../modal/instantiate';
import RecipeMgr from './RecipeMgr.svelte';

const props = { visible: true };
let thisModal = 0;

export default function recipeMgr() {
  thisModal = instantiate(props, thisModal, RecipeMgr);
}
