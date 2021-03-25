import { a7 as now, c as calf } from './calfSystem-6840a38e.js';
import { g as getProfile } from './getProfile-cb4d581c.js';
import { p as playerName } from './playerName-2d72a4c8.js';
import { g as get, s as set } from './idb-e00287d8.js';

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
//# sourceMappingURL=myStats-015eee2e.js.map
