// Anchored: +0.05% per point Damage is added to HP during combat
import getBuffLevel from './getBuffLevel';

export default function anchored(player) {
  const buffLevel = getBuffLevel(player, 154);
  return { player: { hp: Math.floor(buffLevel * 0.0005 * player.damage) } };
}
