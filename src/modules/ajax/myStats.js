import profile from '../_dataAccess/export/profile';
import playerName from '../common/playerName';
import calf from '../support/calf';
import { now } from '../support/now';
import { get, set } from '../system/idb';

async function getMyProfile(force) {
  const json = await profile(playerName(), force);
  const data = json ? { ...json, lastUpdate: now() } : json;
  set('fsh_selfProfile', data);
  return data;
}

const isStale = (data) => now() - calf.allyEnemyOnlineRefreshTime > data?.lastUpdate;

function getProfileFromForage(data) {
  if (isStale(data)) return getMyProfile();
  return data;
}

export default async function myStats(force) {
  if (force) return getMyProfile(force);
  const data = await get('fsh_selfProfile');
  return getProfileFromForage(data);
}
