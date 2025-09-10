// Aegis Shield: +0.15% per point of Defense is transferred to Armor (casting level can be adjusted from your Preferences)
import getBuffLevel from './getBuffLevel';

export default function nightmareVisage(player) {
  const buffLevel = getBuffLevel(player, 181);
  if (!buffLevel) return {};
  const xfer = Math.floor(buffLevel * 0.0015 * player.defense);
  return {
    player: {
      defense: -xfer,
      armor: xfer,
    },
  };
}
