import insertHtmlAfterBegin from '../common/insertHtmlAfterBegin';
import querySelectorArray from '../common/querySelectorArray';
import regExpFirstCapture from '../common/regExpFirstCapture';

const buffSelector = '#profileRightColumn img[src*="/skills/"]';

function injectLevel(i) {
  const lvl = regExpFirstCapture(/Level: (?<lvl>\d+)/, i.dataset.tipped);
  if (!lvl) return;
  let target = i.nextElementSibling;
  if (!i.nextElementSibling) {
    target = i.parentNode.nextElementSibling;
  }
  insertHtmlAfterBegin(target, `<b>(${lvl})</b><br>`);
}

export default function buffLevelDisplay() {
  const buffImgs = querySelectorArray(buffSelector);
  buffImgs.forEach(injectLevel);
}
