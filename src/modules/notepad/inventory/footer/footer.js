import { mount } from 'svelte';
import { pcc } from '../../../support/layout';
import Footer from './Footer.svelte';

export default function footer(fshInv) {
  mount(Footer, { props: { fshInv }, target: pcc() });
}
