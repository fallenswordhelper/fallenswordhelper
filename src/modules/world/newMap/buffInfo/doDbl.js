import createSpan from '../../../common/cElement/createSpan';
import insertElement from '../../../common/insertElement';
import insertTextBeforeEnd from '../../../common/insertTextBeforeEnd';
import toggleForce from '../../../common/toggleForce';
import setText from '../../../dom/setText';

let dblDiv = 0;
let dblSpan = 0;

function initDblDiv(containerDiv) {
  // eslint-disable-next-line prefer-destructuring
  dblDiv = containerDiv.children[4];
  dblDiv.className = 'fshRed';
  setText('Doubler ', dblDiv);
  dblSpan = createSpan();
  insertElement(dblDiv, dblSpan);
  insertTextBeforeEnd(dblDiv, ' active');
}

function hasDbl(containerDiv, dbl) {
  if (dblDiv) {
    toggleForce(dblDiv, false);
  } else {
    initDblDiv(containerDiv);
  }
  setText(dbl.level, dblSpan);
}

function hideDbl() {
  if (dblDiv) {
    toggleForce(dblDiv, true);
  }
}

export default function doDbl(containerDiv, dbl) {
  if (dbl) {
    hasDbl(containerDiv, dbl);
  } else {
    hideDbl();
  }
}
