import { darkCurseMultiplier } from '../../../support/constants';
import fallback from '../../../system/fallback';

export const calcBuffEffect = (base, lvl, effect) => Math.ceil(base * fallback(lvl, 0) * effect);
export const calcNmvEffect = (atk, nmv) => calcBuffEffect(atk, nmv, 0.0025);

const modifier = (base, lvl) => calcBuffEffect(base, lvl, 0.001);

export const calcFortitudeBonusHp = modifier;
export const calcChiStrikeBonusDamage = modifier;
export const calcSanctuaryBonusArmor = modifier;
export const calcFlinchEffect = modifier;
export const calcTerrorizeEffect = modifier;

export const calcDefWithConst = (def, cnsttn) => Math.ceil(def * (1 + fallback(cnsttn, 0) * 0.001));

const calcDcEffect = (points) => 1 - points * darkCurseMultiplier;
export const calcDcValue = (buffedDefense, lvl) => Math.ceil(buffedDefense * calcDcEffect(lvl));
