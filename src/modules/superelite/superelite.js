import { pcc } from '../support/layout';
import SuperElite from './SuperElite.svelte';

function startApp() {
  return new SuperElite({
    target: pcc(),
  });
}

export default function superelite() {
  if (pcc()) startApp();
}
