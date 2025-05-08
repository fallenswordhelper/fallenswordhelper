/* eslint-disable no-param-reassign */
function caIsRunning(combat) {
  return combat.player.counterAttackLevel > 0
    && combat.numberOfHitsRequired === 1;
}

const lowest = (bns, amt, val) => Math.max(Math.ceil((bns - amt + 1) / val / 0.0025), 0);

function calcLowest(combat) {
  combat.lowestCALevelToStillHit = lowest(
    combat.counterAttackBonusAttack,
    combat.hitByHowMuch,
    combat.player.attackValue,
  );
  combat.lowestCALevelToStillKill = lowest(
    combat.counterAttackBonusDamage,
    combat.damageDone,
    combat.player.damageValue,
  );
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

function fallsShort(combat, prop, type) {
  if (combat[prop] > 203) {
    combat.extraNotes
      += `Even with CA203 you cannot ${type} this creature<br>`;
  } else if (combat[prop] !== 0) {
    combat.extraNotes += `You need a minimum of CA${combat[prop]} to ${type} this creature<br>`;
  }
}

function caResult(combat) {
  calcLowest(combat);
  fallsShort(combat, 'lowestCALevelToStillHit', 'hit');
  fallsShort(combat, 'lowestCALevelToStillKill', '1-hit kill');
}

export default function evalCA(combat) {
  if (caIsRunning(combat)) {
    caRunning(combat);
  }
  if (needCa(combat)) {
    caResult(combat);
  }
}
