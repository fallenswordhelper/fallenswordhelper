// Holy Flame: +0.2% per point to Damage vs. Undead
import getBuffLevel from './getBuffLevel';

export default function holyFlame(player, enemy) {
  if (enemy.class !== "Undead") return {};
  const buffLevel = getBuffLevel(player, 6);
  if (!buffLevel) return {};
  return { player: { damage: Math.floor(
    Math.max(player.damage - enemy.armor, 1) *
    buffLevel *
    0.002,
  )}};
}
