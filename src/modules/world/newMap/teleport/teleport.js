import querySelector from '../../../common/querySelector';
import TPCooldown from './TPCooldown.svelte';

function startApp(target, props) {
  return new TPCooldown({ target, props });
}

export default function teleport() {
  const tpButton = querySelector('.actionListHeaderButton.teleport');
  startApp(tpButton, { tpButton });
}
