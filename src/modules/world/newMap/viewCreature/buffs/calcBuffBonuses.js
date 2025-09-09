import anchored from './anchored';
import chiStrike from './chiStrike';
import constitution from './constitution';
import coordinatedAttack from './coordinatedAttack';
import coordinatedDefense from './coordinatedDefense';
import counterAttack from './counterAttack';
import darkCurse from './darkCurse';
import deathDealer from './deathDealer';
import flinch from './flinch';
import fortitude from './fortitude';
import holyFlame from './holyFlame';
import nightmareVisage from './nightmareVisage';
import sanctuary from './sanctuary';
import superEliteSlayer from './superEliteSlayer';
import terrorize from './terrorize';
import wither from './wither';
import entries from '../../../../common/entries';

const buffs = [
  anchored,
  chiStrike,
  constitution,
  coordinatedAttack,
  coordinatedDefense,
  counterAttack,
  darkCurse,
  deathDealer,
  flinch,
  fortitude,
  holyFlame,
  nightmareVisage,
  sanctuary,
  superEliteSlayer,
  terrorize,
  wither,
];

export default function calcBuffBonuses(player, enemy) {
  return buffs
    .map(fn => fn(player, enemy))
    .reduce((acc, bonus) => {
      entries(bonus).forEach(([source, stats]) => {
        entries(stats).forEach(([statName, statValue]) => {
          acc[source][statName] = (acc[source][statName] ?? 0) + statValue;
        });
      });
      return acc;
    }, {player: {}, enemy: {}});
}
