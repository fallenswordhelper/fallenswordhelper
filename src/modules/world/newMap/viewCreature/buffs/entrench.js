// Entrench: 0.25% per point of Damage is transferred to Armor at the start of combat
import getBuffLevel from './getBuffLevel';

export default function entrench(player) {
  const buffLevel = getBuffLevel(player, 85);
  if (!buffLevel) return {};
  const xfer = Math.floor(buffLevel * 0.0025 * player.damage);
  return {
    player: {
      damage: -xfer,
      armor: xfer,
    },
  };
}
