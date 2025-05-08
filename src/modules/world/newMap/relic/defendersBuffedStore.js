import { derived } from 'svelte/store';
import { buffObj } from './buffStore';
import { ldProfile, rawDefStats } from './defendersStore';
import {
  calcChiStrikeBonusDamage,
  calcDcValue,
  calcDefWithConst,
  calcFlinchEffect,
  calcFortitudeBonusHp,
  calcNmvEffect,
  calcSanctuaryBonusArmor,
  calcTerrorizeEffect,
} from './helpers';

const ldEffects = derived([ldProfile, rawDefStats], ([$ldProfile, $rawDefStats], set) => {
  if (!$ldProfile || !$rawDefStats) return;
  const nmv = calcNmvEffect($rawDefStats.attackValue, $ldProfile.nightmareVisageLevel);
  const defWithConst = calcDefWithConst($rawDefStats.defenseValue, $ldProfile.constitutionLevel);
  const fortitudeBonusHP = calcFortitudeBonusHp(defWithConst, $ldProfile.fortitudeLevel);
  const hpWithFortitude = $rawDefStats.hpValue + fortitudeBonusHP;
  const chiStrike = calcChiStrikeBonusDamage(hpWithFortitude, $ldProfile.chiStrikeLevel);
  const dmgWithChiStrike = $rawDefStats.damageValue + chiStrike;
  set({
    attackWithNmv: $rawDefStats.attackValue - nmv,
    chiStrike: $ldProfile.chiStrikeLevel,
    cloak: $ldProfile.cloakLevel ? 'Yes' : 'No',
    dmgWithChiStrike,
    defWithConst,
    hpWithFortitude,
    nmv,
    sanctuary: calcSanctuaryBonusArmor($rawDefStats.armorValue, $ldProfile.sanctuaryLevel),
  });
});

function calcDefBuffed([$buffObj, $ldEffects, $rawDefStats], set) {
  if (!$buffObj || !$ldEffects || !$rawDefStats) return;
  const flinchEffect = calcFlinchEffect($ldEffects.attackWithNmv, $buffObj.Flinch);
  const buffedDefense = $ldEffects.defWithConst + $ldEffects.nmv;
  const terrorizeEffect = calcTerrorizeEffect($ldEffects.dmgWithChiStrike, $buffObj.Terrorize);
  set({
    attack: $ldEffects.attackWithNmv - flinchEffect,
    dc225: calcDcValue(buffedDefense, 225),
    dc175: calcDcValue(buffedDefense, 175),
    defense: buffedDefense,
    armor: $rawDefStats.armorValue + $ldEffects.sanctuary,
    hp: $ldEffects.hpWithFortitude,
    damage: $ldEffects.dmgWithChiStrike - terrorizeEffect,
  });
}

// eslint-disable-next-line import/prefer-default-export
export const defBuffed = derived([buffObj, ldEffects, rawDefStats], calcDefBuffed);
