import regExpFirstCapture from '../../common/regExpFirstCapture';

const tipRe = /Last Activity:<\/td><td>(?<mins>\d+) mins/;

export default function contactColour(el, obj) {
  const onMouseOver = el.dataset.tipped;
  const lastActivityMinutes = regExpFirstCapture(tipRe, onMouseOver);
  if (lastActivityMinutes < 2) {
    el.classList.add(obj.l1);
  } else if (lastActivityMinutes < 5) {
    el.classList.add(obj.l2);
  } else {
    el.classList.add(obj.l3);
  }
}
