import { derived, writable } from 'svelte/store';
import reliclist from '../../../app/guild/reliclist';
import round from '../../../common/round';
import { processingStatus } from './statusStore';

export const guildId = writable(0);

async function getRelicStuff($guildId, set) {
  if (!$guildId) return;
  processingStatus.set(['relicStore', 'Processing defending guild relics ... ']);
  const relics = await reliclist($guildId);
  const noOfRelics = relics.r.relics.length;
  const relicMultiplier = noOfRelics === 1 ? 1.5 : round(1 - noOfRelics / 10, 2);
  const leadDefenderBonus = `${String(relicMultiplier * 100)}%`;
  set({ noOfRelics, relicMultiplier, leadDefenderBonus });
  processingStatus.set(['relicStore', 'Done.']);
}

export const relicStuff = derived(guildId, ($guildId, set) => {
  getRelicStuff($guildId, set);
});
