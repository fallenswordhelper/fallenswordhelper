import evalBuff from './evalBuff';

/* eslint-disable no-param-reassign */
function calcDef(combat) {
  if (combat.callback.groupExists) {
    return combat.callback.groupDefenseValue;
  }
  return combat.player.defenseValue;
}

function evalConstitution(combat) {
  if (combat.player.constitutionLevel > 0) {
    combat.extraNotes += `Constitution Bonus Defense = ${
      Math.floor(calcDef(combat)
    * combat.player.constitutionLevel * 0.001)}<br>`;
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

export default function evalDefence(combat) {
  combat.overallDefenseValue = calcDef(combat)
    + Math.floor(calcDef(combat)
    * combat.player.constitutionLevel * 0.001)
    + combat.nightmareVisageAttackMovedToDefense;
  evalConstitution(combat);
  evalFlinch(combat);
  combat.creatureHitByHowMuch = Math.floor(combat.attackVariable
    * combat.creature.attack - combat.creature.attack
    * combat.player.flinchLevel * 0.001 - combat.overallDefenseValue);
  if (combat.combatEvaluatorBias === 3) {
    combat.creatureHitByHowMuch = Math.floor(combat.creature.attack
      - combat.creature.attack * combat.player.flinchLevel * 0.001
      - combat.overallDefenseValue - 50);
  }
}
