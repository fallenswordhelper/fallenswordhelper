// Entrench: 0.25% per point of Damage is transferred to Armor at the start of combat
import getBuffLevel from './getBuffLevel';
import transferBuff from './transferBuff';

export default function entrench(player) {
  const buffLevel = getBuffLevel(player, 85);
  return transferBuff(player, 'damage', 'armor', buffLevel, 0.0025);
}
