import { s as partial, al as fromEntries, a7 as now, ah as isObject, c as calf } from './calfSystem-476ab75d.js';
import { c as currentGuildId } from './currentGuildId-1f42e657.js';
import { c as cmdExport } from './cmdExport-5254d9ed.js';
import { s as set, g as get } from './idb-07a4f1ba.js';

function guildMembers$1(guildId) {
  return cmdExport({ guild_id: guildId, subcmd: 'guild_members' });
}

function saveMembrListInForage(membrList, data) {
  const oldMemList = data || {};
  set('fsh_membrList', $.extend(oldMemList, membrList));
}

function addMembrListToForage(membrList) {
  get('fsh_membrList')
    .then(partial(saveMembrListInForage, membrList));
  return membrList;
}

function membrListToHash(guildId, data) {
  if (!data) { return; }
  const memberObj = fromEntries(data.map((o) => [o.username, o]));
  return { [guildId]: { lastUpdate: now, ...memberObj } };
}

function getGuildMembers(guildId) {
  return guildMembers$1(guildId).then(partial(membrListToHash, guildId));
}

function getAndCacheGuildMembers(guildId) {
  return getGuildMembers(guildId).then(addMembrListToForage);
}

const testList = [
  (guildId, membrList) => membrList,
  (guildId, membrList) => isObject(membrList),
  (guildId, membrList) => isObject(membrList[guildId]),
  (guildId, membrList) => typeof membrList[guildId].lastUpdate === 'number',
  (guildId, membrList) => membrList[guildId].lastUpdate > now - 300000,
];

function condition(guildId, membrList, e) { return e(guildId, membrList); }

function isValid(guildId, membrList) {
  return testList.every(partial(condition, guildId, membrList));
}

function getMembrListFromForage(guildId, membrList) {
  if (isValid(guildId, membrList)) {
    return membrList;
  }
  return getAndCacheGuildMembers(guildId);
}

function guildMembers(force, guildId) {
  if (force) {
    return getAndCacheGuildMembers(guildId);
  }
  return get('fsh_membrList')
    .then(partial(getMembrListFromForage, guildId));
}

function setHelperMembrList(guildId, membrList) {
  if (membrList) {
    calf.membrList = membrList[guildId];
    return calf.membrList;
  }
}

function getMembrList(force) {
  const guildId = currentGuildId();
  if (guildId) {
    return guildMembers(force, guildId)
      .then(partial(setHelperMembrList, guildId));
  }
  return Promise.reject(new Error('no guild id'));
}

export { getMembrList as g };
//# sourceMappingURL=getMembrList-09228c51.js.map
