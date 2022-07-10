import playerName from '../common/playerName';
import calf from '../support/calf';
import { getNow } from '../support/now';
import { get, set } from '../system/idb';
import getProfile from './getProfile';

function sendMyProfileToForage(data) {
  set('fsh_selfProfile', data);
  return data;
}

function addLastUpdateDate(data) {
  if (data) {
    return { ...data, lastUpdate: getNow() };
  }
  return data;
}

function getMyProfile() {
  return getProfile(playerName())
    .then(addLastUpdateDate)
    .then(sendMyProfileToForage);
}

function getProfileFromForage(data) {
  if (!data || data.lastUpdate < getNow() - calf.allyEnemyOnlineRefreshTime) {
    return getMyProfile();
  }
  return data;
}

export default function myStats(force) {
  if (force) { return getMyProfile(); }
  return get('fsh_selfProfile')
    .then(getProfileFromForage);
}
