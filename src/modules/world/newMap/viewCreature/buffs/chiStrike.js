// Chi strike: 0.1% per point of your HP is added to your Damage during combat
import getBuffLevel from './getBuffLevel';

export default function chiStrike(player) {
  const buffLevel = getBuffLevel(player, 52);
  if (!buffLevel) return {};
  return { player: { damage: Math.floor(buffLevel * 0.001 * player.hp) } };
}
