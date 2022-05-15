import AHInvManager from './AHInvManager.svelte';
import createDiv from '../../common/cElement/createDiv';

function startAHInvMgr(itemList, im) {
  return new AHInvManager({
    props: { itemList },
    target: im,
  });
}

export default function showAHInvManager(itemList) {
  const im = createDiv();
  startAHInvMgr(itemList, im);
  return im;
}
