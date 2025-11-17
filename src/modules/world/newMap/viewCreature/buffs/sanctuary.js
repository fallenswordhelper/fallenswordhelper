// Sanctuary: +0.1% per point to your Armor
import getBuffLevel from './getBuffLevel';

export default function sanctuary(player) {
  const buffLevel = getBuffLevel(player, 44);
  if (!buffLevel) return {};
  return { player: { armor: Math.floor(buffLevel * 0.001 * player.armor) } };
}
