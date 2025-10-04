// Counter Attack: +0.25% per point to Attack and Damage at the cost of +0.25% per point Stamina (PvE only, casting level can be adjusted from your Preferences)
import getBuffLevel from './getBuffLevel';

const adjust = (buffLevel, stat) => Math.floor(buffLevel * 0.0025 * stat);

export default function counterAttack(player) {
  const buffLevel = getBuffLevel(player, 54);
  if (!buffLevel) return {};
  return { player: {
    attack: adjust(buffLevel, player.attack),
    damage: adjust(buffLevel, player.damage),
  } };
}
