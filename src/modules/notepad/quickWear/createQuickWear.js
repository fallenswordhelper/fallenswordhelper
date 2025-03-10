import { mount } from 'svelte';
import QuickWear from './QuickWear.svelte';

function startQuickWear(appInv, qw) {
  return mount(QuickWear, {
    props: { appInv },
    target: qw,
  });
}

export default function createQuickWear(appInv, thisDiv) {
  startQuickWear(appInv, thisDiv);
}
