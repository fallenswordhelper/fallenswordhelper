import querySelector from '../../common/querySelector';
import QuickButtons from './QuickButtons.svelte';

function startApp(anchor, target) {
  return new QuickButtons({
    anchor,
    target,
  });
}

export default function profileInjectQuickButton() {
  const avyImg = querySelector(
    '#profileLeftColumn img[src*="/avatars/"][width="200"]',
  );
  if (!avyImg) return;
  avyImg.parentNode.classList.add('fshRelative');
  startApp(avyImg.nextElementSibling, avyImg.parentNode);
}
