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
  if (!avyImg) { return; }
  startApp(avyImg.nextElementSibling, avyImg.parentNode);
}
