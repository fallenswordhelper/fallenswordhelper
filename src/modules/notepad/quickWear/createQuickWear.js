import QuickWear from './QuickWear.svelte';

function startQuickWear(appInv, qw) {
  return new QuickWear({
    props: { appInv },
    target: qw,
  });
}

export default function createQuickWear(appInv, thisDiv) {
  startQuickWear(appInv, thisDiv);
}
