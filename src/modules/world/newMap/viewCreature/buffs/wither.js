// Wither: +0.2% per point chance to reduce enemy HP by 50% at combat start
import getBuffLevel from './getBuffLevel';

export default function wither(player, enemy) {
  const buffLevel = getBuffLevel(player, 154);
  if (buffLevel || buffLevel < 500) return {};
  return { enemy: { hp: Math.ceil(enemy.hp / 2) } };
}
