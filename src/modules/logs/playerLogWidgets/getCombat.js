import daViewCombat from '../../_dataAccess/daViewCombat';
import entries from '../../common/entries';
import fromEntries from '../../common/fromEntries';
import getTextTrim from '../../common/getTextTrim';
import partial from '../../common/partial';
import { nowSecs, oneDayAgo, sevenDaysAgo } from '../../support/now';
import { get, set } from '../../system/idb';
import parseDateAsTimestamp from '../../system/parseDateAsTimestamp';

const storageKey = 'fsh_pvpCombat';

let combatPrm = null;
let newCache = 0;

function currentCombatRecord(sevenDays, [key, val]) {
  return key === 'lastCheck' || (val.logTime && val.logTime > sevenDays);
}

function getRecent(internal) {
  const pairs = entries(internal);
  const filtered = pairs.filter(partial(currentCombatRecord, sevenDaysAgo()));
  const recent = { ...fromEntries(filtered), lastCheck: nowSecs() };
  set(storageKey, recent);
  return recent;
}

async function prepareCache() {
  const internal = await get(storageKey);
  if (!internal) { return { lastCheck: nowSecs() }; }
  if (!internal.lastCheck || internal.lastCheck < oneDayAgo()) {
    return getRecent(internal);
  }
  return internal;
}

async function newCombat(r, combatId, combatCache) {
  const thisCombat = await daViewCombat(combatId);
  if (!thisCombat || !thisCombat.s) { return; }
  if (!newCache) {
    newCache = { ...combatCache };
  }
  newCache[combatId] = {
    ...thisCombat,
    logTime: parseDateAsTimestamp(getTextTrim(r.cells[1])) / 1000,
  };
  set(storageKey, newCache);
  return thisCombat;
}

export default async function getCombat(r, combatId) {
  if (!combatPrm) {
    combatPrm = prepareCache();
  }
  const combatCache = await combatPrm;
  if (combatCache[combatId] && combatCache[combatId].logTime) {
    return combatCache[combatId];
  }
  return newCombat(r, combatId, combatCache);
}
