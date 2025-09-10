// Severe Condition: +0.25% per point of your Attack, Defense, Damage and Armor stats are transferred to your HP at the start of combat (casting level can be adjusted from your Preferences)
import getBuffLevel from './getBuffLevel';

export default function nightmareVisage(player) {
  const buffLevel = getBuffLevel(player, 101);
  if (!buffLevel) return {};
  const xferFactor = buffLevel * 0.0025;
  const attack = -Math.floor(xferFactor * player.attack);
  const defense = -Math.floor(xferFactor * player.defense);
  const damage = -Math.floor(xferFactor * player.damage);
  const armor = -Math.floor(xferFactor * player.armor);
  return {
    player: {
      attack,
      defense,
      damage,
      armor,
      hp: attack + defense + damage + armor,
    },
  };
}
