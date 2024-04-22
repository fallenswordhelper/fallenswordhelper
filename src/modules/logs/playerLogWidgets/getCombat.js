import daViewCombat from '../../_dataAccess/daViewCombat';
import entries from '../../common/entries';
import fromEntries from '../../common/fromEntries';
import { nowSecs, oneDayAgo, sevenDaysAgo } from '../../support/now';
import { get, set } from '../../system/idb';

const storageKey = 'fsh_pvpCombat';

let combatPrm = null;
let newCache = 0;

const testRecent = (sevenDays) => ([key, val]) => key === 'lastCheck' || val?.logTime > sevenDays;

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
  else if ((internal?.lastCheck ?? 0) < oneDayAgo()) newCache = getRecent(internal);
  else newCache = internal;
  return newCache;
}

async function newCombat(logTime, combatId) {
  const thisCombat = await daViewCombat(combatId);
  if (!thisCombat?.s) return;
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
  if (combatCache[combatId]?.logTime) return combatCache[combatId];
  return newCombat(logTime, combatId);
}
