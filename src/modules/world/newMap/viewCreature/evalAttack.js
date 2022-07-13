/* eslint-disable no-param-reassign */
import { darkCurseMultiplier } from '../../../support/constants';
import effectiveStat from './effectiveStat';

const calcAttack = (combat) => effectiveStat(
  combat,
  combat.callback.groupAttackValue,
  combat.player.attackValue,
);

function calcDc(combat) {
  return Math.floor(combat.creature.defense * combat.player.darkCurseLevel
    * darkCurseMultiplier);
}

function calcHitByHowMuch(combat) {
  const remainingDef = combat.creature.defense - calcDc(combat);
  if (combat.combatEvaluatorBias === 3) {
    return combat.overallAttackValue - Math.ceil(remainingDef) - 50;
  }
  return combat.overallAttackValue
    - Math.ceil(combat.attackVariable * remainingDef);
}

export default function evalAttack(combat) {
  const atkValue = calcAttack(combat);
  // Attack:
  if (combat.player.darkCurseLevel > 0) {
    combat.extraNotes += `DC Bonus Attack = ${calcDc(combat)}<br>`;
  }
  combat.nightmareVisageAttackMovedToDefense = Math.floor((atkValue
    + combat.counterAttackBonusAttack)
    * combat.player.nightmareVisageLevel * 0.0025);
  if (combat.player.nightmareVisageLevel > 0) {
    combat.extraNotes += `NMV Attack moved to Defense = ${
      combat.nightmareVisageAttackMovedToDefense}<br>`;
  }
  combat.overallAttackValue = atkValue
    + combat.counterAttackBonusAttack
    - combat.nightmareVisageAttackMovedToDefense;
  combat.hitByHowMuch = calcHitByHowMuch(combat);
}
