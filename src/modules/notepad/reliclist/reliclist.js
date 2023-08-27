import instantiate from '../../modal/instantiate';
import getValue from '../../system/getValue';
import Reliclist from './Reliclist.svelte';

const props = { visible: true };
let thisModal = 0;

export default function reliclist() {
  if (!getValue('betaOptIn')) return;
  thisModal = instantiate(props, thisModal, Reliclist);
}
