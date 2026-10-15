// Super Elite Slayer: +0.2% per point reduction to Super Elite Creature Damage, Attack, Defense and Armor
import getBuffLevel from './getBuffLevel';

const adjust = (buffLevel, stat) => Math.floor(buffLevel * 0.002 * stat);

export default function superEliteSlayer(player, enemy) {
  if (!enemy.name.includes("(Super Elite)")) return {};
  const buffLevel = getBuffLevel(player, 31);
  if (!buffLevel) return {};
  return {
    enemy: {
      damage: adjust(buffLevel, enemy.damage),
      attack: adjust(buffLevel, enemy.attack),
      defense: adjust(buffLevel, enemy.defense),
      armor: adjust(buffLevel, enemy.armor),
    }
  };
}
