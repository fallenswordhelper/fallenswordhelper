import getGuild from '../_dataAccess/export/guildMembers';
import currentGuildId from '../common/currentGuildId';
import fromEntries from '../common/fromEntries';
import isArray from '../common/isArray';
import isObject from '../common/isObject';
import partial from '../common/partial';
import calf from '../support/calf';
import { fiveMinutesAgo, now } from '../support/now';
import { get, set } from '../system/idb';

function saveMembrListInForage(membrList, data) {
  const oldMemList = data || {};
  set('fsh_membrList', $.extend(oldMemList, membrList));
}

async function addMembrListToForage(membrList) {
  const data = await get('fsh_membrList');
  saveMembrListInForage(membrList, data);
  return membrList;
}

function membrListToHash(guildId, data) {
  if (!isArray(data)) return;
  const memberObj = fromEntries(data.map((o) => [o.username, o]));
  return { [guildId]: { lastUpdate: now(), ...memberObj } };
}

async function getGuildMembers(guildId) {
  const data = await getGuild(guildId);
  return membrListToHash(guildId, data);
}

async function getAndCacheGuildMembers(guildId) {
  const membrList = await getGuildMembers(guildId);
  addMembrListToForage(membrList);
  return membrList;
}

const testList = [
  (_guildId, membrList) => membrList,
  (_guildId, membrList) => isObject(membrList),
  (guildId, membrList) => isObject(membrList[guildId]),
  (guildId, membrList) => typeof membrList[guildId].lastUpdate === 'number',
  (guildId, membrList) => membrList[guildId].lastUpdate > fiveMinutesAgo(),
];

function condition(guildId, membrList, e) {
  return e(guildId, membrList);
}

function isValid(guildId, membrList) {
  return testList.every(partial(condition, guildId, membrList));
}

function getMembrListFromForage(guildId, membrList) {
  if (isValid(guildId, membrList)) {
    return membrList;
  }
  return getAndCacheGuildMembers(guildId);
}

async function guildMembers(force, guildId) {
  if (force) {
    return getAndCacheGuildMembers(guildId);
  }
  const membrList = await get('fsh_membrList');
  return getMembrListFromForage(guildId, membrList);
}

function setHelperMembrList(guildId, membrList) {
  if (membrList) {
    calf.membrList = membrList[guildId];
    return calf.membrList;
  }
}

export default async function getMembrList(force) {
  const guildId = currentGuildId();
  if (guildId) {
    const membrList = await guildMembers(force, guildId);
    return setHelperMembrList(guildId, membrList);
  }
  throw new Error('no guild id');
}
