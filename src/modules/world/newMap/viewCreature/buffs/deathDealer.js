// Death Dealer: +0.01% extra Damage per point per 5 Creature kills in a row without dying (Max 20%)
import getBuffLevel from './getBuffLevel';

function deathDealerBonus(killStreak, buffLevel) {
  const bonusFactor = Math.floor(killStreak / 5 * 0.01 * buffLevel) / 100;
  return Math.min(0.2, bonusFactor);
}

export default function deathDealer(player) {
  const buffLevel = getBuffLevel(player, 50);
  if (!buffLevel) return {};
  return { player: { damage: player.damage * deathDealerBonus(player.killStreakValue, buffLevel) } };
}
