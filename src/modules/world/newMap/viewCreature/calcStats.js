import calcBuffBonuses from './buffs/calcBuffBonuses';
import entries from '../../../common/entries';
import calf from '../../../support/calf';

function enemyHits(player, enemy) {
  const dmg = calf.generalVariable * enemy.damage;
  return Math.ceil(player.hp / Math.max(dmg - player.armor, 1));
}

function playerHits(player, enemy) {
  const armor = calf.generalVariable * enemy.armor;
  return Math.ceil(enemy.hp / Math.max(player.damage - armor, 1));
}

function applyBonuses(source, bonuses) {
  entries(bonuses)
    .forEach(([statName, statValue]) => {
      source[statName] = Math.max(source[statName] + statValue, 0);
    });
}

export default function calcStats(player, enemy) {
  const bonuses = calcBuffBonuses(player, enemy);
  applyBonuses(player, bonuses.player);
  applyBonuses(enemy, bonuses.enemy);
  player.hits = playerHits(player, enemy);
  enemy.hits = enemyHits(player, enemy);
  return bonuses;
}
