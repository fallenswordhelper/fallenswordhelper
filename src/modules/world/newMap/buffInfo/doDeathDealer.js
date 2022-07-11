import createSpan from '../../../common/cElement/createSpan';
import insertElement from '../../../common/insertElement';
import insertTextBeforeEnd from '../../../common/insertTextBeforeEnd';
import round from '../../../common/round';
import toggleForce from '../../../common/toggleForce';
import setText from '../../../dom/setText';

let ddDiv = 0;
let ddSpan = 0;

function initDdDiv(containerDiv) {
  // eslint-disable-next-line prefer-destructuring
  ddDiv = containerDiv.children[2];
  setText('Damage bonus: ', ddDiv);
  ddSpan = createSpan();
  insertElement(ddDiv, ddSpan);
  insertTextBeforeEnd(ddDiv, '%');
}

function getDdBonus(dd, killStreak) {
  if (dd) {
    const ddPerc = Math.min(Math.round(
      Math.floor(killStreak / 5) * Number(dd.level),
    ) * 0.01, 20);
    const ddBonus = round(ddPerc, 2);
    return ddBonus.toString();
  }
  return '0';
}

function hasDd(containerDiv, dd, ks) {
  if (ddDiv) {
    toggleForce(ddDiv, false);
  } else {
    initDdDiv(containerDiv);
  }
  setText(getDdBonus(dd, Number(ks)), ddSpan);
}

function hideDd() {
  if (ddDiv) {
    toggleForce(ddDiv, true);
  }
}

export default function doDeathDealer(containerDiv, dd, ks) {
  if (dd) {
    hasDd(containerDiv, dd, ks);
  } else {
    hideDd();
  }
}
