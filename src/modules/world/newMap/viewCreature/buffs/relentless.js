// Relentless: +0.15% per point of Damage is transferred to Attack (casting level can be adjusted from your Preferences)
import getBuffLevel from './getBuffLevel';
import transferBuff from './transferBuff';

export default function nightmareVisage(player) {
  const buffLevel = getBuffLevel(player, 179);
  return transferBuff(player, 'damage', 'attack', buffLevel, 0.0015);
}
