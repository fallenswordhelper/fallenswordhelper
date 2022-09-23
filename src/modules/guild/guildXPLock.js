import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';
import querySelector from '../common/querySelector';
import regExpFirstCapture from '../common/regExpFirstCapture';
import calf from '../support/calf';
import addCommas from '../system/addCommas';

function getIntFromRegExp(theText, rxSearch) {
  const matches = regExpFirstCapture(rxSearch, theText.replace(/,/g, ''));
  return matches ? parseInt(matches, 10) : 0;
}

function mightBePositive(actualXP, xpLockXP) {
  let sign = '';
  if (actualXP > xpLockXP) { sign = '+'; }
  return sign + addCommas(actualXP - xpLockXP);
}

function injectLock(xpLock) {
  const xpLockmouseover = xpLock.dataset.tipped;
  const xpLockXP = getIntFromRegExp(xpLockmouseover, /XP Lock: <b>(?<lockXp>\d*)/);
  const actualXP = getIntFromRegExp(xpLockmouseover, /XP: <b>(?<realXp>\d*)/);
  insertHtmlBeforeEnd(
    xpLock.parentNode.nextElementSibling,
    ` (<b>${mightBePositive(actualXP, xpLockXP)}</b>)`,
  );
}

export default function guildXPLock() {
  if (!calf.userIsDev) return; // guildXPLock
  const xpLock = querySelector('#pCC a[data-tipped^="<b>Guild XP</b>"]');
  if (xpLock) { injectLock(xpLock); }
}
