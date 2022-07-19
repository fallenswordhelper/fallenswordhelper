import { derived, writable } from 'svelte/store';
import daGroupStats from '../../../_dataAccess/daGroupStats';
import daMercsView from '../../../_dataAccess/daMercsView';
import daViewGroups from '../../../_dataAccess/daViewGroups';
import attribsToArray from '../../../common/attribsToArray';
import mercEffect from '../../../guild/groups/mercEffect';
import { processingStatus } from './statusStore';

export const hasGroup = writable(0);

const myGroup = (g) => g.members[0].name === GameData.player().username;

async function groupStuff($hasGroup, set) {
  if (!$hasGroup) return;
  processingStatus.set(['groupStore', 'Processing attacking group stats ... ']);
  const groups = await daViewGroups();
  const groupId = groups?.r?.find(myGroup)?.id;
  const group = groupId && await daGroupStats(groupId);
  const groupStats = attribsToArray(group?.r?.attributes);
  const mercs = groupStats && await daMercsView();
  const thisMercEffect = mercEffect(mercs);
  const withoutMercs = groupStats?.map((stat, i) => stat - thisMercEffect[i]);
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
