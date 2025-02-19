import { mount } from 'svelte';
import { pcc } from '../support/layout';
import SuperElite from './SuperElite.svelte';

function startApp() {
  return mount(SuperElite, {
    target: pcc(),
  });
}

export default function superelite() {
  if (pcc()) startApp();
}
