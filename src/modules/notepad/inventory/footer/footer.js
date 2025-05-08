import { pcc } from '../../../support/layout';
import Footer from './Footer.svelte';

function mount(fshInv) {
  return new Footer({ props: { fshInv }, target: pcc() });
}

export default function footer(fshInv) {
  mount(fshInv);
}
