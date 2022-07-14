/* eslint-disable no-param-reassign */
import partial from '../../../common/partial';

function evalMiss(combat) {
  if (combat.numberOfCreatureHitsTillDead - combat.numberOfHitsRequired <= 1) {
    return ', dies on miss';
  }
  return ', survives a miss';
}

function evalHits(hits, otherHits) {
  if (otherHits === '-') return hits;
  if (hits === '-' || hits > otherHits) return '-';
  return hits;
}

const evalFightStatus = [
  [
    (combat) => combat.playerHits === '-' && combat.creatureHits === '-',
    () => 'Unresolved',
  ],
  [(combat) => combat.playerHits === '-', () => 'Player dies'],
  [
    (combat) => combat.playerHits === 1,
    (combat) => `Player 1 hits${evalMiss(combat)}`,
  ],
  [
    (combat) => combat.playerHits > 1,
    (combat) => `Player > 1 hits${evalMiss(combat)}`,
  ],
];

function condition(combat, el) { return el[0](combat); }

function getStatus(combat) {
  const status = evalFightStatus.find(partial(condition, combat));
  if (status) {
    return status[1](combat);
  }
  return 'Unknown';
}

export default function evalAnalysis(combat) {
  // Analysis:
  combat.playerHits = evalHits(combat.numberOfHitsRequired, combat.numberOfCreatureHitsTillDead);
  combat.creatureHits = evalHits(combat.numberOfCreatureHitsTillDead, combat.numberOfHitsRequired);
  combat.fightStatus = getStatus(combat);
}
