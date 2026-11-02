// Coordinated Defense: +0.05% per point to Defense and Armor if all equipped gear is part of a set
import getBuffLevel from './getBuffLevel';

const adjust = (buffLevel, stat) => Math.floor(buffLevel * 0.0025 * stat);

export default function coordinatedDefense(player) {
  const buffLevel = getBuffLevel(player, 119);
  if (!buffLevel) return {};
  return {
    player: {
      defense: adjust(buffLevel, player.defense),
      armor: adjust(buffLevel, player.armor),
    },
  };
}
