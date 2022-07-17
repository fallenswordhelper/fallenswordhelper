let thisNow = 0;
let thisFiveMinutesAgo = 0;
let thisTwoDaysAgo = 0;
let thisNowSecs = 0;
let thisSecsTwoMinutesAgo = 0;
let thisOneDayAgo = 0;
let thisSecsSevenDaysAgo = 0;
let thisYearAgo = 0;

export function getNow() {
  if (!thisNow) thisNow = Date.now();
  return thisNow;
}

export function now() {
  if (!thisNow) thisNow = Date.now();
  return thisNow;
}

export function fiveMinutesAgo() {
  if (!thisFiveMinutesAgo) thisFiveMinutesAgo = now() - (5 * 60 * 1000);
  return thisFiveMinutesAgo;
}

export function twoDaysAgo() {
  if (!thisTwoDaysAgo) thisTwoDaysAgo = now() - (2 * 24 * 60 * 60 * 1000);
  return thisTwoDaysAgo;
}

export function nowSecs() {
  if (!thisNowSecs) thisNowSecs = Math.floor(now() / 1000);
  return thisNowSecs;
}

export function twoMinutesAgo() {
  if (!thisSecsTwoMinutesAgo) thisSecsTwoMinutesAgo = nowSecs() - 120;
  return thisSecsTwoMinutesAgo;
}

export function oneDayAgo() {
  if (!thisOneDayAgo) thisOneDayAgo = nowSecs() - (24 * 60 * 60);
  return thisOneDayAgo;
}

export function sevenDaysAgo() {
  if (!thisSecsSevenDaysAgo) thisSecsSevenDaysAgo = nowSecs() - (7 * 24 * 60 * 60);
  return thisSecsSevenDaysAgo;
}

export function oneYearAgo() {
  if (!thisYearAgo) thisYearAgo = nowSecs() - (365 * 24 * 60 * 60);
  return thisYearAgo;
}
