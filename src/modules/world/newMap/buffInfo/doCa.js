import createSpan from '../../../common/cElement/createSpan';
import insertElement from '../../../common/insertElement';
import insertTextBeforeEnd from '../../../common/insertTextBeforeEnd';
import toggleForce from '../../../common/toggleForce';
import setText from '../../../dom/setText';

let caDiv = 0;
let caSpan = 0;

function initCaDiv(containerDiv) {
  // eslint-disable-next-line prefer-destructuring
  caDiv = containerDiv.children[3];
  caDiv.className = 'fshBlue';
  setText('CA ', caDiv);
  caSpan = createSpan();
  insertElement(caDiv, caSpan);
  insertTextBeforeEnd(caDiv, ' active');
}

function hasCa(containerDiv, ca) {
  if (caDiv) {
    toggleForce(caDiv, false);
  } else {
    initCaDiv(containerDiv);
  }
  setText(ca.level, caSpan);
}

function hideCa() {
  if (caDiv) {
    toggleForce(caDiv, true);
  }
}

export default function doCa(containerDiv, ca) {
  if (ca) {
    hasCa(containerDiv, ca);
  } else {
    hideCa();
  }
}
