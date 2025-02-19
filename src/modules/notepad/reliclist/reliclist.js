import getValue from '../../system/getValue';
import Reliclist from './Reliclist.svelte';

const props = { visible: true };
let thisModal = 0;

export default function reliclist() {
  if (!getValue('betaOptIn')) return;
  if (thisModal) {
    thisModal.$set(props);
  } else {
    thisModal = new Reliclist({ props, target: document.body });
  }
}
