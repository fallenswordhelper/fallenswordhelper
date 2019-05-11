import calf from '../support/calf';
import getForage from './getForage';
import getProfile from './getProfile';
import {now} from '../support/now';
import playerName from '../common/playerName';
import setForage from './setForage';

function sendMyProfileToForage(data) {
  setForage('fsh_selfProfile', data);
  return data;
}

function addLastUpdateDate(data) {
  if (data) {
    data.lastUpdate = now;
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

export default function myStats(force) {
  if (force) {return getMyProfile();}
  return getForage('fsh_selfProfile')
    .then(getProfileFromForage);
}