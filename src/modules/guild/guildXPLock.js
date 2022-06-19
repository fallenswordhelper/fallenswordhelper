import addCommas from '../system/addCommas';
import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';
import querySelector from '../common/querySelector';

function getIntFromRegExp(theText, rxSearch) {
  const matches = theText.replace(/,/g, '').match(rxSearch);
  return matches ? parseInt(matches[1], 10) : 0;
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
  const xpLock = querySelector('#pCC a[data-tipped^="<b>Guild XP</b>"]');
  if (xpLock) { injectLock(xpLock); }
}
