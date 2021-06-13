const refAry = [
  'keeprefreshing.com',
  'lazywebtools.co.uk',
  'pagereboot.com',
  'refreshthing.com',
  'refreshthis.com',
];

let autoRefferer = false;
let haveRefferer = false;

export default function isAuto() {
  if (!haveRefferer) {
    const referrer = document.referrer
      .match(/^https?:\/\/([^/?#]+)(?:[/?#]|$)/i);
    let docRef;
    if (referrer) { [, docRef] = referrer; }
    autoRefferer = refAry.includes(docRef);
    haveRefferer = true;
  }
  return autoRefferer;
}
