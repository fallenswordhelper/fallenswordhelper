import { a7 as now, c as calf } from './calfSystem-476ab75d.js';
import { g as getProfile } from './getProfile-b8ff6670.js';
import { p as playerName } from './playerName-f6639bfd.js';
import { g as get, s as set } from './idb-07a4f1ba.js';

function sendMyProfileToForage(data) {
  set('fsh_selfProfile', data);
  return data;
}

function addLastUpdateDate(data) {
  if (data) {
    return { ...data, lastUpdate: now };
  }
  return data;
}

function getMyProfile() {
  return getProfile(playerName())
    .then(addLastUpdateDate)
    .then(sendMyProfileToForage);
}

function getProfileFromForage(data) {
  if (!data || data.lastUpdate < now - calf.allyEnemyOnlineRefreshTime) {
    return getMyProfile();
  }
  return data;
}

function myStats(force) {
  if (force) { return getMyProfile(); }
  return get('fsh_selfProfile')
    .then(getProfileFromForage);
}

export { myStats as m };
//# sourceMappingURL=myStats-e7d202ce.js.map
