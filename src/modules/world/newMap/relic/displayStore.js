import { derived } from 'svelte/store';
import { buffResult } from './buffStore';
import { defBuffed } from './defendersBuffedStore';
import { defenderProfiles, ldProfile, rawDefStats } from './defendersStore';
import { rawGroupStats } from './groupStore';
import { relicStuff } from './relicStore';

export const relicDisplay = derived(relicStuff, ($relicStuff, set) => {
  set({
    noOfRelics: $relicStuff?.noOfRelics ?? '',
    leadDefenderBonus: $relicStuff?.leadDefenderBonus ?? '',
  });
});

export const ldcloak = derived(ldProfile, ($ldProfile, set) => {
  if (!$ldProfile) return set('');
  if ($ldProfile.cloakLevel) {
    set('Yes');
  } else {
    set('No');
  }
});

export const rawDefDisplay = derived(rawDefStats, ($rawDefStats, set) => {
  set({
    armorValue: $rawDefStats?.armorValue ?? '',
    attackValue: $rawDefStats?.attackValue ?? '',
    damageValue: $rawDefStats?.damageValue ?? '',
    cloaked: $rawDefStats?.cloaked ?? '',
    defenseValue: $rawDefStats?.defenseValue ?? '',
    hpValue: $rawDefStats?.hpValue ?? '',
  });
});

export const processed = derived(defenderProfiles, ($defenderProfiles, set) => {
  set($defenderProfiles?.length ?? '');
});

export const defBuffedDisplay = derived(defBuffed, ($defBuffed, set) => {
  set({
    attack: $defBuffed?.attack ?? '',
    dc225: $defBuffed?.dc225 ?? '',
    dc175: $defBuffed?.dc175 ?? '',
    defense: $defBuffed?.defense ?? '',
    armor: $defBuffed?.armor ?? '',
    hp: $defBuffed?.hp ?? '',
    damage: $defBuffed?.damage ?? '',
  });
});

const statsDisplay = (stats) => ({
  attack: stats?.attack ?? '',
  defense: stats?.defense ?? '',
  armor: stats?.armor ?? '',
  hp: stats?.hp ?? '',
  damage: stats?.damage ?? '',
});

export const rawGroupDisplay = derived(rawGroupStats, ($rawGroupStats, set) => {
  set(statsDisplay($rawGroupStats));
});

export const buffResultDisplay = derived(buffResult, ($buffResult, set) => {
  set(statsDisplay($buffResult));
});
