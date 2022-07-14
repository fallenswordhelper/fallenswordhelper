/* eslint-disable no-param-reassign */
import effectiveStat from './effectiveStat';
import evalBuff from './evalBuff';

const calcArm = (combat) => effectiveStat(
  combat,
  combat.callback.groupArmorValue,
  combat.player.armorValue,
);

function overallArmour(combat) {
  const armorVal = calcArm(combat);
  combat.overallArmorValue = armorVal
    + Math.floor(combat.player.armorValue
    * combat.player.sanctuaryLevel * 0.001);
}

function evalSanctuary(combat) {
  evalBuff(combat, combat.player.sanctuaryLevel, 'Sanc Bonus Armor', combat.player.armorValue);
}

function calcTerrorizeEffect(combat) {
  combat.terrorizeEffect = Math.floor(combat.creature.damage
    * combat.player.terrorizeLevel * 0.001);
}

function evalTerrorize(combat) {
  if (combat.player.terrorizeLevel > 0) {
    combat.extraNotes += `Terrorize Creature Damage Effect = ${
      combat.terrorizeEffect * -1}<br>`;
  }
}

function calcDamageDone(combat) {
  combat.creatureDamageDone = Math.ceil(combat.generalVariable
    * combat.creature.damage - combat.overallArmorValue
    + combat.overallHPValue);
}

function creatureCanHit(combat) {
  const approxDmg = combat.generalVariable * combat.creature.damage;
  if (approxDmg < combat.overallArmorValue) {
    combat.numberOfCreatureHitsTillDead = combat.overallHPValue;
  } else {
    combat.numberOfCreatureHitsTillDead = Math.ceil(
      combat.overallHPValue / (approxDmg - combat.overallArmorValue),
    );
  }
}

function calcNumberOfHits(combat) {
  if (combat.creatureHitByHowMuch >= 0) {
    creatureCanHit(combat);
  } else {
    combat.numberOfCreatureHitsTillDead = '-';
  }
}

export default function evalArmour(combat) {
  overallArmour(combat);
  evalSanctuary(combat);
  calcTerrorizeEffect(combat);
  evalTerrorize(combat);
  combat.creature.damage -= combat.terrorizeEffect;
  calcDamageDone(combat);
  calcNumberOfHits(combat);
}
