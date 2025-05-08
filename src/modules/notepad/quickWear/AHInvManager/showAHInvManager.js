import AHInvManager from './AHInvManager.svelte';

function startAHInvMgr(itemList, im) {
  return new AHInvManager({
    props: { itemList },
    target: im,
  });
}

export default function showAHInvManager(itemList, thisDiv) {
  startAHInvMgr(itemList, thisDiv);
}
