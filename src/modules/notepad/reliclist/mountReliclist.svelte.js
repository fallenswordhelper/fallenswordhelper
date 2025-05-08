import { mount } from 'svelte';
import getValue from '../../system/getValue';
import Reliclist from './Reliclist.svelte';

const props = $state({ visible: true });
let thisModal = 0;

export default function mountReliclist() {
  if (!getValue('betaOptIn')) return;
  if (thisModal) {
    props.visible = true;
  } else {
    thisModal = mount(Reliclist, { props, target: document.body });
  }
}
