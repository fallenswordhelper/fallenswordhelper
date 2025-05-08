import { derived, writable } from 'svelte/store';
import reduceBuffArray from '../../../common/reduceBuffArray';
import { ldProfile } from './defendersStore';
import { rawGroupStats } from './groupStore';
import {
  calcChiStrikeBonusDamage,
  calcDefWithConst,
  calcFlinchEffect,
  calcFortitudeBonusHp,
  calcNmvEffect,
  calcSanctuaryBonusArmor,
  calcTerrorizeEffect,
} from './helpers';

export const buffs = writable([]);

export const buffObj = derived(buffs, ($buffs, set) => {
  if (!$buffs) return;
  set(reduceBuffArray($buffs));
});

const buffEffect = derived(
  [buffObj, rawGroupStats],
  ([$buffObj, $rawGroupStats], set) => {
    if (!$buffObj || !$rawGroupStats) return;
    const defWithConst = calcDefWithConst(
      $rawGroupStats.defense,
      $buffObj.Constitution,
    );
    const hpWithFortitude =
      $rawGroupStats.hp +
      calcFortitudeBonusHp(defWithConst, $buffObj.Fortitude);
    set({
      dmgWithChiStrike:
        $rawGroupStats.damage +
        calcChiStrikeBonusDamage(hpWithFortitude, $buffObj['Chi Strike']),
      defWithConst,
      hpWithFortitude,
      nmv: calcNmvEffect($rawGroupStats.attack, $buffObj['Nightmare Visage']),
      sanctuary: calcSanctuaryBonusArmor(
        $rawGroupStats.armor,
        $buffObj.Sanctuary,
      ),
    });
  },
);

function calcBuffResults([$buffEffect, $ldProfile, $rawGroupStats], set) {
  if (!$buffEffect || !$ldProfile || !$rawGroupStats) return;
  const attackAfterNmv = $rawGroupStats.attack - $buffEffect.nmv;
  const flinchEffect = calcFlinchEffect(attackAfterNmv, $ldProfile.flinchLevel);
  const terrorizeEffect = calcTerrorizeEffect(
    $buffEffect.dmgWithChiStrike,
    $ldProfile.terrorizeLevel,
  );
  set({
    attack: attackAfterNmv - flinchEffect,
    defense: $buffEffect.defWithConst + $buffEffect.nmv,
    armor: $rawGroupStats.armor + $buffEffect.sanctuary,
    hp: $buffEffect.hpWithFortitude,
    damage: $buffEffect.dmgWithChiStrike - terrorizeEffect,
  });
}

export const buffResult = derived(
  [buffEffect, ldProfile, rawGroupStats],
  calcBuffResults,
);
