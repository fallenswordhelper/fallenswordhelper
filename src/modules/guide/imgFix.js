import getElementsByTagName from '../common/getElementsByTagName';
import once from '../common/once';

function isBroken(img) {
  return img.complete && img.naturalHeight === 0;
}

function imgToPng(img) {
  return img.src
    .replace(
      /^http:\/\/cdn\.fallensword\.com\/skin\/gold_button\.gif$/,
      'https://cdn2.fallensword.com/currency/0.png',
    ) // shop currency images
    .replace(/\.jpg$/, '.png') // creature & master realm image
    .replace(/^http:/, 'https:') // creature image
    .replace(/\.gif$/, '.png'); // master realm images
}

export default function imgFix() {
  const imgs = getElementsByTagName('img');
  for (const img of imgs) {
    // Before image load
    once(img, 'error', () => { img.src = imgToPng(img); });
    // After image load
    if (isBroken(img)) { img.src = imgToPng(img); }
  }
}
