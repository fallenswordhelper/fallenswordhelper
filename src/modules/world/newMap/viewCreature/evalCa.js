/* eslint-disable no-param-reassign */
function caIsRunning(combat) {
  return combat.player.counterAttackLevel > 0
    && combat.numberOfHitsRequired === 1;
}

function calcLowest(combat) {
  combat.lowestCALevelToStillHit = Math.max(Math.ceil((
    combat.counterAttackBonusAttack - combat.hitByHowMuch + 1)
    / combat.player.attackValue / 0.0025), 0);
  combat.lowestCALevelToStillKill = Math.max(Math.ceil((
    combat.counterAttackBonusDamage - combat.damageDone + 1)
    / combat.player.damageValue / 0.0025), 0);
}

function stamAtLowestCa(combat) {
  if (combat.player.counterAttackLevel > 0) {
    return Math.ceil((1 + combat.player.doublerLevel / 50) * 0.0025
      * combat.lowestFeasibleCALevel);
  }
  return 0;
}

function lowestCaStats(combat) {
  combat.extraAttackAtLowestFeasibleCALevel = Math.floor(
    combat.player.attackValue * 0.0025 * combat.lowestFeasibleCALevel,
  );
  combat.extraDamageAtLowestFeasibleCALevel = Math.floor(
    combat.player.damageValue * 0.0025 * combat.lowestFeasibleCALevel,
  );
  combat.extraNotes += `Extra CA Att/Dam at this lowered CA level = ${
    combat.extraAttackAtLowestFeasibleCALevel} / ${
    combat.extraDamageAtLowestFeasibleCALevel}<br>`;
}

function caRunning(combat) {
  calcLowest(combat);
  combat.lowestFeasibleCALevel = Math.max(
    combat.lowestCALevelToStillHit,
    combat.lowestCALevelToStillKill,
  );
  combat.extraNotes += `Lowest CA to still 1-hit this creature = ${
    combat.lowestFeasibleCALevel}<br>`;
  if (combat.lowestFeasibleCALevel !== 0) {
    lowestCaStats(combat);
  }
  combat.extraStaminaPerHitAtLowestFeasibleCALevel = stamAtLowestCa(combat);
  if (combat.extraStaminaPerHitAtLowestFeasibleCALevel
    < combat.extraStaminaPerHit) {
    combat.extraNotes
      += `Extra Stam Used at this lowered CA level = ${
        combat.extraStaminaPerHitAtLowestFeasibleCALevel}<br>`;
  } else {
    combat.extraNotes
      += 'No reduction of stam used at the lower CA level<br>';
  }
}

function needCa(combat) {
  return combat.numberOfHitsRequired === '-'
    || combat.numberOfHitsRequired !== 1;
}

function evalCaKill(combat) {
  if (combat.lowestCALevelToStillHit > 175) {
    combat.extraNotes
      += 'Even with CA175 you cannot hit this creature<br>';
  } else if (combat.lowestCALevelToStillHit !== 0) {
    combat.extraNotes += `You need a minimum of CA${
      combat.lowestCALevelToStillHit
    } to hit this creature<br>`;
  }
}

function evalCaOneHit(combat) {
  if (combat.lowestCALevelToStillKill > 175) {
    combat.extraNotes
      += 'Even with CA175 you cannot 1-hit kill this creature<br>';
  } else if (combat.lowestCALevelToStillKill !== 0) {
    combat.extraNotes += `You need a minimum of CA${
      combat.lowestCALevelToStillKill
    } to 1-hit kill this creature<br>`;
  }
}

function caResult(combat) {
  calcLowest(combat);
  evalCaKill(combat);
  evalCaOneHit(combat);
}

export default function evalCA(combat) {
  if (caIsRunning(combat)) {
    caRunning(combat);
  }
  if (needCa(combat)) {
    caResult(combat);
  }
}
