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
  { buff: 'Anchored', fn: anchored },
  { buff: 'Chi Strike', fn: chiStrike },
  { buff: 'Constitution', fn: constitution },
  { buff: 'Coordinated Attack', fn: coordinatedAttack },
  { buff: 'Coordinated Defense', fn: coordinatedDefense },
  { buff: 'Counter Attack', fn: counterAttack },
  { buff: 'Dark Curse', fn: darkCurse },
  { buff: 'Death Dealer', fn: deathDealer },
  { buff: 'Flinch', fn: flinch },
  { buff: 'Fortitude', fn: fortitude },
  { buff: 'Holy Flame', fn: holyFlame },
  { buff: 'Nightmare Visage', fn: nightmareVisage },
  { buff: 'Sanctuary', fn: sanctuary },
  { buff: 'Super Elite Slayer', fn: superEliteSlayer },
  { buff: 'Terrorize', fn: terrorize },
  { buff: 'Wither', fn: wither },
];

export default function calcBuffBonuses(player, enemy) {
  return buffs.map(({buff, fn}) => ({buff, bonuses: fn(player, enemy)}));
}
