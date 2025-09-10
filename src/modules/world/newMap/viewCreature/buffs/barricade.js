// Barricade: +0.15% per point of Damage is transferred to Defense (casting level can be adjusted from your Preferences)
import getBuffLevel from './getBuffLevel';

export default function nightmareVisage(player) {
  const buffLevel = getBuffLevel(player, 98);
  if (!buffLevel) return {};
  const xfer = Math.floor(buffLevel * 0.0015 * player.damage);
  return {
    player: {
      damage: -xfer,
      defense: xfer,
    },
  };
}
