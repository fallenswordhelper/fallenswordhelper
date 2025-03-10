import { mount } from 'svelte';
import querySelector from '../../../common/querySelector';
import TPCooldown from './TPCooldown.svelte';

function startApp(target, props) {
  return mount(TPCooldown, { target, props });
}

export default function teleport() {
  const tpButton = querySelector('.actionListHeaderButton.teleport');
  startApp(tpButton, { tpButton });
}
