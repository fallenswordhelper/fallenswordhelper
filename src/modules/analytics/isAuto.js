import regExpFirstCapture from '../common/regExpFirstCapture';

const refAry = [
  'www.keeprefreshing.com',
];

let autoRefferer = false;
let haveRefferer = false;

export default function isAuto() {
  if (!haveRefferer) {
    const docRef = regExpFirstCapture(/^https?:\/\/(?<id>[^/?#]+)(?:[/?#]|$)/i, document.referrer);
    autoRefferer = refAry.includes(docRef);
    haveRefferer = true;
  }
  return autoRefferer;
}
