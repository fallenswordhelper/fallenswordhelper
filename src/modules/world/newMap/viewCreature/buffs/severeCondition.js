// Severe Condition: +0.25% per point of your Attack, Defense, Damage and Armor stats are transferred to your HP at the start of combat (casting level can be adjusted from your Preferences)
import getBuffLevel from './getBuffLevel';
import transferBuff from './transferBuff';

export default function nightmareVisage(player) {
  const buffLevel = getBuffLevel(player, 101);
  return transferBuff(
    player,
    ['attack', 'defense', 'damage', 'armor'],
    'hp',
    buffLevel,
    0.0025,
  );
}
