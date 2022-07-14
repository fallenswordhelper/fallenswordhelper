import textSpan from '../../../common/cElement/textSpan';
import insertElement from '../../../common/insertElement';
import toggleForce from '../../../common/toggleForce';
import setText from '../../../dom/setText';

let cdDiv = 0;
let cooldownSpan = 0;
let lastTp = 0;

function initCdDiv(containerDiv, cd) {
  // eslint-disable-next-line prefer-destructuring
  cdDiv = containerDiv.children[5];
  setText('Teleport Cooldown: ', cdDiv);
  cooldownSpan = textSpan(cd.toString());
  insertElement(cdDiv, cooldownSpan);
}

function hasCd(containerDiv, cd) {
  if (cdDiv) {
    toggleForce(cdDiv, false);
  } else {
    initCdDiv(containerDiv, cd);
  }
}

function hideCd() {
  if (cdDiv) {
    toggleForce(cdDiv, true);
  }
}

function updateCooldown() {
  const secs = Math.max(Math.ceil((lastTp - Date.now()) / 1000), 0);
  setText(secs, cooldownSpan);
  if (secs > 0) {
    setTimeout(updateCooldown, 500);
  }
}

export function doCountdown(teleportCooldown) {
  if (cooldownSpan) {
    lastTp = Date.now() + teleportCooldown * 1000;
    updateCooldown();
  }
}

export function tpCooldown(containerDiv, cd) {
  if (cd) {
    hasCd(containerDiv, cd);
  } else {
    hideCd();
  }
}
