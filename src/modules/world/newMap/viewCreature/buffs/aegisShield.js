// Aegis Shield: +0.15% per point of Defense is transferred to Armor (casting level can be adjusted from your Preferences)
import getBuffLevel from './getBuffLevel';
import transferBuff from './transferBuff';

export default function aegisShield(player) {
  const buffLevel = getBuffLevel(player, 181);
  return transferBuff(player, 'defense', 'armor', buffLevel, 0.0015);
}
