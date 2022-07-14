import setTextCommas from '../../../common/setTextCommas';
import toggleForce from '../../../common/toggleForce';
import initBuffDiv from './initBuffDiv';

let ksDiv = 0;
let killStreakSpan = 0;

function initKsDiv(containerDiv) {
  // eslint-disable-next-line prefer-destructuring
  ksDiv = containerDiv.children[1];
  killStreakSpan = initBuffDiv(ksDiv, '', 'Kill Streak: ', '');
}

function showKs(containerDiv, ks) {
  if (ksDiv) {
    toggleForce(ksDiv, false);
  } else {
    initKsDiv(containerDiv);
  }
  setTextCommas(ks, killStreakSpan);
}

function hideKs() {
  if (ksDiv) {
    toggleForce(ksDiv, true);
  }
}

export default function doKs(containerDiv, dd, titanActive, ks) {
  if (dd || titanActive) {
    showKs(containerDiv, ks);
  } else {
    hideKs();
  }
}
