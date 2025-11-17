// Nightmare Visage: Transfer 0.25% per point of your Attack to your Defense
import getBuffLevel from './getBuffLevel';
import transferBuff from './transferBuff';

export default function nightmareVisage(player) {
  const buffLevel = getBuffLevel(player, 60);
  return transferBuff(player, 'attack', 'defense', buffLevel, 0.0025);
}
