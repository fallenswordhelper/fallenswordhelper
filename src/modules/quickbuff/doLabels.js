import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';
import querySelectorArray from '../common/querySelectorArray';
import setTipped from '../common/setTipped';
import { excludeBuff } from './assets';
import parseBuffLevel from './parseBuffLevel';

function addStamCost(el, nameSpan) {
  const dataTipped = nameSpan.dataset.tipped;
  const { cost } = el.previousElementSibling.dataset;
  setTipped(dataTipped.replace('</center>', `<br>Stamina Cost: ${cost}$&`), nameSpan);
  insertHtmlBeforeEnd(el.parentNode, `<span></span> <span class="fshDodgerBlue tooltip-bottom-right" data-tooltip="Stamina Cost">${cost}</span>`);
}

function canBeDimmed(el, nameSpan) {
  return !excludeBuff.includes(Number(el.htmlFor.slice(6)))
    && parseBuffLevel(nameSpan.children[0]) < 125;
}

function dimPreReqs(el, nameSpan) {
  if (canBeDimmed(el, nameSpan)) {
    el.classList.add('fshDim');
  }
}

function decorate(el) {
  const nameSpan = el.children[0];
  addStamCost(el, nameSpan);
  dimPreReqs(el, nameSpan);
}

export default function doLabels() {
  querySelectorArray('#buff-outer label[for^="skill-"]').forEach(decorate);
}
