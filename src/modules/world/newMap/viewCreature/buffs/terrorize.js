// Terrorize: -0.1% per point to enemy Damage
import getBuffLevel from './getBuffLevel';

export default function terrorize(player, enemy) {
  const buffLevel = getBuffLevel(player, 59);
  if (!buffLevel) return {};
  return { enemy: { damage: -Math.floor(buffLevel * 0.001 * enemy.Damage) } };
}
