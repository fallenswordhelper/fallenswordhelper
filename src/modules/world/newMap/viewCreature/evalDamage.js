/* eslint-disable no-param-reassign */
import effectiveStat from './effectiveStat';

const calcHp = (combat) => effectiveStat(
  combat,
  combat.callback.groupHPValue,
  combat.player.hpValue,
);

const calcDmg = (combat) => effectiveStat(
  combat,
  combat.callback.groupDamageValue,
  combat.player.damageValue,
);

function evalFortitude(combat) {
  const hpValue = calcHp(combat);
  const { fortitudeLevel } = combat.player;
  combat.fortitudeExtraHPs = Math.floor(hpValue * fortitudeLevel * 0.001);
  if (fortitudeLevel > 0) {
    combat.extraNotes += `Fortitude Bonus HP = ${combat.fortitudeExtraHPs
    }<br>`;
  }
  combat.overallHPValue = hpValue + combat.fortitudeExtraHPs;
}

function evalChiStrike(combat) {
  const { chiStrikeLevel } = combat.player;
  combat.chiStrikeExtraDamage = Math.floor(combat.overallHPValue
    * chiStrikeLevel * 0.001);
  if (chiStrikeLevel > 0) {
    combat.extraNotes += `Chi Strike Bonus Damage = ${
      combat.chiStrikeExtraDamage}<br>`;
  }
}

export default function evalDamage(combat) {
  // Damage:
  evalFortitude(combat);
  evalChiStrike(combat);

  combat.overallDamageValue = calcDmg(combat)
    + combat.deathDealerBonusDamage + combat.counterAttackBonusDamage
    + combat.holyFlameBonusDamage + combat.chiStrikeExtraDamage;
  combat.damageDone = Math.floor(combat.overallDamageValue - (
    combat.generalVariable * combat.creature.armor
    + combat.hpVariable * combat.creature.hp));

  if (combat.hitByHowMuch > 0) {
    let dmgLessArmor = 1;
    if (combat.overallDamageValue
        >= combat.generalVariable * combat.creature.armor) {
      dmgLessArmor = combat.overallDamageValue - combat.generalVariable
        * combat.creature.armor;
    }
    combat.numberOfHitsRequired = Math.ceil((combat.hpVariable
      * combat.creature.hp) / dmgLessArmor);
  } else {
    combat.numberOfHitsRequired = '-';
  }
}
