// Constitution: +0.1% per point to your Defense
import getBuffLevel from './getBuffLevel';

export default function constitution(player) {
  const buffLevel = getBuffLevel(player, 37);
  if (!buffLevel) return {};
  return { player: { defense: Math.floor(buffLevel * 0.001 * player.defense) } };
}
