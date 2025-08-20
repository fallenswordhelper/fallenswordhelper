import daViewCombat from '../../_dataAccess/daViewCombat';
import entries from '../../common/entries';
import fromEntries from '../../common/fromEntries';
import { nowSecs, oneDayAgo, sevenDaysAgo } from '../../support/now';
import { get, set } from '../../system/idb';

const storageKey = 'fsh_pvpCombat';

let combatPrm = null;
let newCache = {};
const prmCache = {};

const testRecent =
  (sevenDays) =>
  ([key, val]) =>
    key === 'lastCheck' || val?.logTime > sevenDays;

function getRecent(internal) {
  const pairs = entries(internal);
  const filtered = pairs.filter(testRecent(sevenDaysAgo()));
  const recent = { ...fromEntries(filtered), lastCheck: nowSecs() };
  set(storageKey, recent);
  return recent;
}

async function prepareCache() {
  const internal = await get(storageKey);
  if (!internal) newCache = { lastCheck: nowSecs() };
  else if ((internal?.lastCheck ?? 0) < oneDayAgo())
    newCache = getRecent(internal);
  else newCache = internal;
  return newCache;
}

async function newCombat(logTime, combatId) {
  prmCache[combatId] = daViewCombat(combatId);
  const thisCombat = await prmCache[combatId];
  if (!thisCombat?.s) {
    delete prmCache[combatId];
    return;
  }
  newCache[combatId] = {
    ...thisCombat,
    logTime,
  };
  set(storageKey, newCache);
  return thisCombat;
}

export default async function getCombat(logTime, combatId) {
  if (!combatPrm) {
    combatPrm = prepareCache();
  }
  const combatCache = await combatPrm;
  if (combatCache[combatId]) return combatCache[combatId];
  if (prmCache[combatId]) return prmCache[combatId];
  return newCombat(logTime, combatId);
}
