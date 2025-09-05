// Fortitude: 0.1% per point of your Defense stat is added to your HP
import getBuffLevel from './getBuffLevel';

export default function fortitude(player) {
  const buffLevel = getBuffLevel(player, 57);
  if (!buffLevel) return {};
  return { player: { hp: Math.floor(buffLevel * 0.001 * player.defense) } };
}
