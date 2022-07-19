import { derived, writable } from 'svelte/store';
import daGroupStats from '../../../_dataAccess/daGroupStats';
import daMercsView from '../../../_dataAccess/daMercsView';
import daViewGroups from '../../../_dataAccess/daViewGroups';
import attribsToArray from '../../../common/attribsToArray';
import mercEffect from '../../../guild/groups/mercEffect';
import { processingStatus } from './statusStore';

export const hasGroup = writable(0);

const myGroup = (g) => g.members[0].name === GameData.player().username;

async function getGroupId() {
  const groups = await daViewGroups();
  return groups?.r?.find(myGroup)?.id;
}

async function getGroupStats(groupId) {
  const group = await daGroupStats(groupId);
  return attribsToArray(group?.r?.attributes);
}

async function statsWithoutMercs(groupStats) {
  const mercs = await daMercsView();
  const thisMercEffect = mercEffect(mercs);
  return groupStats?.map((stat, i) => stat - thisMercEffect[i]);
}

async function groupStuff($hasGroup, set) {
  if (!$hasGroup) return;
  processingStatus.set(['groupStore', 'Processing attacking group stats ... ']);
  const groupId = await getGroupId();
  const groupStats = groupId && await getGroupStats(groupId);
  const withoutMercs = groupStats && await statsWithoutMercs(groupStats);
  if (withoutMercs) {
    set({
      attack: withoutMercs[0],
      defense: withoutMercs[1],
      armor: withoutMercs[2],
      hp: withoutMercs[3],
      damage: withoutMercs[4],
    });
  }
  processingStatus.set(['groupStore', 'Done.']);
}

export const rawGroupStats = derived(hasGroup, ($hasGroup, set) => {
  groupStuff($hasGroup, set);
});
