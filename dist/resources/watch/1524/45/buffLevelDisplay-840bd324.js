import { F as querySelectorArray, ab as insertHtmlAfterBegin } from './calfSystem-02fd040d.js';

const buffSelector = '#profileRightColumn img[src*="/skills/"]';

function injectLevel(i) {
  const matches = /Level: (\d+)/.exec(i.dataset.tipped);
  if (!matches) { return; }
  const lvl = matches[1];
  let target = i.nextElementSibling;
  if (!i.nextElementSibling) {
    target = i.parentNode.nextElementSibling;
  }
  insertHtmlAfterBegin(target, `<b>(${lvl})</b><br>`);
}

function buffLevelDisplay() {
  const buffImgs = querySelectorArray(buffSelector);
  buffImgs.forEach(injectLevel);
}

export default buffLevelDisplay;
//# sourceMappingURL=buffLevelDisplay-840bd324.js.map
