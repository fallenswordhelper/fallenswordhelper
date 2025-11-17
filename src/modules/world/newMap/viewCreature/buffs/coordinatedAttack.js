// Coordinated Attack: +0.05% per point to Attack and Damage if all equipped gear is part of a set
import getBuffLevel from './getBuffLevel';

const adjust = (buffLevel, stat) => Math.floor(buffLevel * 0.0025 * stat);

export default function coordinatedAttack(player) {
  const buffLevel = getBuffLevel(player, 118);
  if (!buffLevel) return {};
  return {
    player: {
      attack: adjust(buffLevel, player.attack),
      damage: adjust(buffLevel, player.damage),
    },
  };
}
