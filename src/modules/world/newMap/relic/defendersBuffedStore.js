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

function setDerived([
  $ldProfile,
  $rawDefStats,
  set,
  nmv,
  defWithConst,
  hpWithFortitude,
]) {
  set({
    attackWithNmv: $rawDefStats.attackValue - nmv,
    chiStrike: $ldProfile.chiStrikeLevel,
    cloak: $ldProfile.cloakLevel ? 'Yes' : 'No',
    dmgWithChiStrike:
      $rawDefStats.damageValue +
      calcChiStrikeBonusDamage(hpWithFortitude, $ldProfile.chiStrikeLevel),
    defWithConst,
    hpWithFortitude,
    nmv,
    sanctuary: calcSanctuaryBonusArmor(
      $rawDefStats.armorValue,
      $ldProfile.sanctuaryLevel,
    ),
  });
}

const ldEffects = derived(
  [ldProfile, rawDefStats],
  ([$ldProfile, $rawDefStats], set) => {
    if (!$ldProfile || !$rawDefStats) return;
    const nmv = calcNmvEffect(
      $rawDefStats.attackValue,
      $ldProfile.nightmareVisageLevel,
    );
    const defWithConst = calcDefWithConst(
      $rawDefStats.defenseValue,
      $ldProfile.constitutionLevel,
    );
    const hpWithFortitude =
      $rawDefStats.hpValue +
      calcFortitudeBonusHp(defWithConst, $ldProfile.fortitudeLevel);
    setDerived([
      $ldProfile,
      $rawDefStats,
      set,
      nmv,
      defWithConst,
      hpWithFortitude,
    ]);
  },
);

function calcDefBuffed([$buffObj, $ldEffects, $rawDefStats], set) {
  if (!$buffObj || !$ldEffects || !$rawDefStats) return;
  const flinchEffect = calcFlinchEffect(
    $ldEffects.attackWithNmv,
    $buffObj.Flinch,
  );
  const buffedDefense = $ldEffects.defWithConst + $ldEffects.nmv;
  const terrorizeEffect = calcTerrorizeEffect(
    $ldEffects.dmgWithChiStrike,
    $buffObj.Terrorize,
  );
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

export const defBuffed = derived(
  [buffObj, ldEffects, rawDefStats],
  calcDefBuffed,
);
