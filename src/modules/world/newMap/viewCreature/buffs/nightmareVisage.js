// Nightmare Visage: Transfer 0.25% per point of your Attack to your Defense
import getBuffLevel from './getBuffLevel';

export default function nightmareVisage(player) {
  const buffLevel = getBuffLevel(player, 60);
  if (!buffLevel) return {};
  const xfer = Math.floor(buffLevel * 0.0025 * player.attack);
  return {
    player: {
      attack: -xfer,
      defense: xfer,
    },
  };
}
