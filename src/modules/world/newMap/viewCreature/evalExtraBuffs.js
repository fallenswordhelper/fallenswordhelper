/* eslint-disable no-param-reassign */
function evalSes(combat) {
  if (combat.player.superEliteSlayerLevel > 0) {
    combat.extraNotes += `SES Stat Reduction Multiplier = ${
      combat.player.superEliteSlayerMultiplier}<br>`;
  }
}

function evalHolyFlame(combat) {
  combat.holyFlameBonusDamage = 0;
  if (combat.creature.class !== 'Undead') { return; }
  combat.holyFlameBonusDamage = Math.max(Math.floor(
    (combat.player.damageValue - combat.creature.armor)
    * combat.player.holyFlameLevel * 0.002,
  ), 0);
  if (combat.player.holyFlameLevel > 0) {
    combat.extraNotes += `HF Bonus Damage = ${combat.holyFlameBonusDamage
    }<br>`;
  }
}

function calcDdBonus(combat) {
  combat.deathDealerBonusDamage = Math.floor(combat.player.damageValue * (Math.min(Math.floor(
    combat.player.killStreakValue / 5,
  ) * 0.01
      * combat.player.deathDealerLevel, 20) / 100));
}

function calcCaBonus(combat) {
  combat.counterAttackBonusAttack = Math.floor(combat.player.attackValue * 0.0025
    * combat.player.counterAttackLevel);
  combat.counterAttackBonusDamage = Math.floor(combat.player.damageValue * 0.0025
    * combat.player.counterAttackLevel);
}

function evalExtraStam(combat) {
  combat.extraStaminaPerHit = 0;
  if (combat.player.counterAttackLevel > 0) {
    combat.extraStaminaPerHit = Math.ceil(
      (1 + combat.player.doublerLevel / 50)
      * 0.0025 * combat.player.counterAttackLevel,
    );
  }
}

function evalDeathDealer(combat) {
  if (combat.player.deathDealerLevel > 0) {
    combat.extraNotes += `DD Bonus Damage = ${
      combat.deathDealerBonusDamage}<br>`;
  }
}

function evalCounterAttack(combat) {
  if (combat.player.counterAttackLevel > 0) {
    combat.extraNotes += `CA Bonus Attack/Damage = ${
      combat.counterAttackBonusAttack} / ${
      combat.counterAttackBonusDamage}<br>`
      + `CA Extra Stam Used = ${combat.extraStaminaPerHit}<br>`;
  }
}

export default function evalExtraBuffs(combat) {
  combat.extraNotes = '';
  evalSes(combat);
  // math section ... analysis
  // Holy Flame adds its bonus after the
  // armor of the creature has been taken off.
  evalHolyFlame(combat);
  // Death Dealer and Counter Attack both applied at the same time
  calcDdBonus(combat);
  calcCaBonus(combat);
  evalExtraStam(combat);
  evalDeathDealer(combat);
  evalCounterAttack(combat);
}
