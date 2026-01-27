// Flinch: -0.1% per point to enemy Attack
import getBuffLevel from './getBuffLevel';

export default function flinch(player, enemy) {
  const buffLevel = getBuffLevel(player, 58);
  if (!buffLevel) return {};
  return { enemy: { attack: -Math.floor(buffLevel * 0.001 * enemy.attack) } };
}
