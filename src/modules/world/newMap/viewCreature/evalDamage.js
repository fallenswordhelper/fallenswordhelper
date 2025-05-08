import effectiveStat from './effectiveStat';

const calcHp = (combat) =>
  effectiveStat(combat, combat.callback.groupHPValue, combat.player.hpValue);

function evalFortitude(combat) {
  const hpValue = calcHp(combat);
  const { fortitudeLevel } = combat.player;
  combat.fortitudeExtraHPs = Math.floor(hpValue * fortitudeLevel * 0.001);
  if (fortitudeLevel > 0) {
    combat.extraNotes += `Fortitude Bonus HP = ${combat.fortitudeExtraHPs}<br>`;
  }
  combat.overallHPValue = hpValue + combat.fortitudeExtraHPs;
}

function evalChiStrike(combat) {
  const { chiStrikeLevel } = combat.player;
  combat.chiStrikeExtraDamage = Math.floor(
    combat.overallHPValue * chiStrikeLevel * 0.001,
  );
  if (chiStrikeLevel > 0) {
    combat.extraNotes += `Chi Strike Bonus Damage = ${
      combat.chiStrikeExtraDamage
    }<br>`;
  }
}

const calcOverallDmg = (combat) =>
  effectiveStat(
    combat,
    combat.callback.groupDamageValue,
    combat.player.damageValue,
  ) +
  combat.deathDealerBonusDamage +
  combat.counterAttackBonusDamage +
  combat.holyFlameBonusDamage +
  combat.chiStrikeExtraDamage;

const calcDmgDone = (combat) =>
  Math.floor(
    combat.overallDamageValue -
      (combat.generalVariable * combat.creature.armor +
        combat.hpVariable * combat.creature.hp),
  );

// Damage:
export default function evalDamage(combat) {
  evalFortitude(combat);
  evalChiStrike(combat);

  combat.overallDamageValue = calcOverallDmg(combat);
  combat.damageDone = calcDmgDone(combat);

  if (combat.hitByHowMuch > 0) {
    let dmgLessArmor = 1;
    if (
      combat.overallDamageValue >=
      combat.generalVariable * combat.creature.armor
    ) {
      dmgLessArmor =
        combat.overallDamageValue -
        combat.generalVariable * combat.creature.armor;
    }
    combat.numberOfHitsRequired = Math.ceil(
      (combat.hpVariable * combat.creature.hp) / dmgLessArmor,
    );
  } else {
    combat.numberOfHitsRequired = '-';
  }
}
