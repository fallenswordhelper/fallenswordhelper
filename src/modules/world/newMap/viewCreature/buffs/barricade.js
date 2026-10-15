// Barricade: +0.15% per point of Damage is transferred to Defense (casting level can be adjusted from your Preferences)
import transferBuff from './transferBuff';
import getBuffLevel from './getBuffLevel';

export default function barricade(player) {
  const buffLevel = getBuffLevel(player, 98);
  return transferBuff(player, 'damage', 'defense', buffLevel, 0.0015);
}
