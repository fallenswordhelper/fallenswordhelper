/* eslint-disable no-param-reassign */
import effectiveStat from './effectiveStat';
import evalBuff from './evalBuff';

const calcDef = (combat) => effectiveStat(
  combat,
  combat.callback.groupDefenseValue,
  combat.player.defenseValue,
);

const constitutionEffect = (combat) => Math.floor(
  calcDef(combat) * combat.player.constitutionLevel * 0.001,
);

function evalConstitution(combat) {
  if (combat.player.constitutionLevel > 0) {
    combat.extraNotes += `Constitution Bonus Defense = ${constitutionEffect(combat)}<br>`;
  }
}

function evalFlinch(combat) {
  evalBuff(
    combat,
    combat.player.flinchLevel,
    'Flinch Bonus Attack Reduction',
    combat.creature.attack,
  );
}

const creatureHit = (combat) => combat.creature.attack - combat.creature.attack
  * combat.player.flinchLevel * 0.001 - combat.overallDefenseValue;

export default function evalDefence(combat) {
  combat.overallDefenseValue = calcDef(combat) + constitutionEffect(combat)
    + combat.nightmareVisageAttackMovedToDefense;
  evalConstitution(combat);
  evalFlinch(combat);
  combat.creatureHitByHowMuch = Math.floor(combat.attackVariable * creatureHit(combat));
  if (combat.combatEvaluatorBias === 3) {
    combat.creatureHitByHowMuch = Math.floor(creatureHit(combat) - 50);
  }
}
