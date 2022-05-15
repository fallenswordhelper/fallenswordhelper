import QuickWear from './QuickWear.svelte';
import createDiv from '../../common/cElement/createDiv';

function startQuickWear(appInv, qw) {
  return new QuickWear({
    props: { appInv },
    target: qw,
  });
}

export default function createQuickWear(appInv) {
  const qw = createDiv({ className: 'qw' });
  startQuickWear(appInv, qw);
  return qw;
}
