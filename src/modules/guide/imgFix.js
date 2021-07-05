import getElementsByTagName from '../common/getElementsByTagName';
import on from '../common/on';

function isBroken(img) {
  return img.complete && img.naturalHeight === 0;
}

function imgToPng(img) {
  const root = img.src.substring(0, img.src.length - 4);
  return `${root}.png`;
}

export default function imgFix() {
  const imgs = getElementsByTagName('img');
  for (const img of imgs) {
    // Before image load
    on(img, 'error', () => { img.src = imgToPng(img); });
    // After image load
    if (isBroken(img)) { img.src = imgToPng(img); }
  }
}
