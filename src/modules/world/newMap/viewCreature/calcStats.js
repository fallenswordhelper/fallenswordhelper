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

function reduceBuffs(buffs) {
  return buffs
    .reduce((acc, bonus) => {
      entries(bonus.bonuses).forEach(([source, stats]) => {
        entries(stats).forEach(([statName, statValue]) => {
          acc[source][statName] = (acc[source][statName] ?? 0) + statValue;
        });
      });
      return acc;
    }, {player: {}, enemy: {}});
}

export default function calcStats(player, enemy, buffs) {
  const bonuses = reduceBuffs(buffs);
  applyBonuses(player, bonuses.player);
  applyBonuses(enemy, bonuses.enemy);
  player.hits = playerHits(player, enemy);
  enemy.hits = enemyHits(player, enemy);
  return bonuses;
}
