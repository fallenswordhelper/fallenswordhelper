import toggleForce from '../../../common/toggleForce';
import setText from '../../../dom/setText';
import initBuffDiv from './initBuffDiv';

let dblDiv = 0;
let dblSpan = 0;

function initDblDiv(containerDiv) {
  // eslint-disable-next-line prefer-destructuring
  dblDiv = containerDiv.children[4];
  dblSpan = initBuffDiv(dblDiv, 'fshRed', 'Doubler ', ' active');
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
