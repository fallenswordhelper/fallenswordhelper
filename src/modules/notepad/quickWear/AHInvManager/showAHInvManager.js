import { mount } from 'svelte';
import AHInvManager from './AHInvManager.svelte';

function startAHInvMgr(itemList, im) {
  return mount(AHInvManager, {
    props: { itemList },
    target: im,
  });
}

export default function showAHInvManager(itemList, thisDiv) {
  startAHInvMgr(itemList, thisDiv);
}
