import QuickButtons from './QuickButtons.svelte';
import querySelector from '../../common/querySelector';

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
  if (!avyImg) { return; }
  startApp(avyImg.nextElementSibling, avyImg.parentNode);
}
