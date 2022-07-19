import { derived, writable } from 'svelte/store';
import profile from '../../../_dataAccess/export/profile';
import all from '../../../common/all';
import partial from '../../../common/partial';
import playerDataObject from '../../../common/playerDataObject';
import { defenderMultiplier } from '../../../support/constants';
import { relicStuff } from './relicStore';
import { processingStatus } from './statusStore';

export const defenders = writable([]);

async function getDefProfiles($defenders, set) {
  if (!$defenders.length) return;
  processingStatus.set(['defendersStore', 'Processing defending group stats ... ']);
  const tmp = [];
  await all($defenders.map(async (name, i) => {
    const thisProfile = await profile(name);
    tmp.push([i, playerDataObject(thisProfile)]);
    set(tmp);
  }));
  processingStatus.set(['defendersStore', 'Done.']);
}

export const defenderProfiles = derived(defenders, ($defenders, set) => {
  getDefProfiles($defenders, set);
});

export const ldProfile = derived(defenderProfiles, ($defenderProfiles, set) => {
  const ldp = $defenderProfiles?.find(([i]) => i === 0);
  if (ldp) set(ldp[1]);
});

const addVal = (relicMultiplier, i, val) => Math.ceil(
  val * (i === 0 ? relicMultiplier : defenderMultiplier),
);

function addStats(relicMultiplier, acc, [i, curr]) {
  return {
    armorValue: acc.armorValue + addVal(relicMultiplier, i, curr.armorValue),
    attackValue: acc.attackValue + addVal(relicMultiplier, i, curr.attackValue),
    damageValue: acc.damageValue + addVal(relicMultiplier, i, curr.damageValue),
    cloaked: acc.cloaked + (curr.cloakLevel ? 1 : 0),
    defenseValue: acc.defenseValue + addVal(relicMultiplier, i, curr.defenseValue),
    hpValue: acc.hpValue + addVal(relicMultiplier, i, curr.hpValue),
  };
}

const calcRawDefStats = ([$relicStuff, $defenderProfiles], set) => {
  if (!$relicStuff?.relicMultiplier || !$defenderProfiles?.length) return;
  const rds = $defenderProfiles?.reduce(partial(addStats, $relicStuff.relicMultiplier), {
    armorValue: 0,
    attackValue: 0,
    damageValue: 0,
    cloaked: 0,
    defenseValue: 0,
    hpValue: 0,
  });
  set(rds);
};

export const rawDefStats = derived([relicStuff, defenderProfiles], calcRawDefStats);
