import getElementById from '../../../common/getElementById';
import getElementsByClassName from '../../../common/getElementsByClassName';
import valueText from '../../../common/valueText';
import {
  defStatArmor,
  defStatAttack,
  defStatDamage,
  defStatDefense,
  defStatHp,
} from '../../../support/constants';

let statLevel;
let statDefense;
let statAttack;
let statDamage;
let statArmor;
let statHp;

export const getStatLevel = () => statLevel;
export const getStatDefense = () => statDefense;
export const getStatAttack = () => statAttack;
export const getStatDamage = () => statDamage;
export const getStatArmor = () => statArmor;
export const getStatHp = () => statHp;

function getStatText(statTooltip, statClassName) {
  return valueText(getElementsByClassName(statClassName, statTooltip));
}

function getTooltipStats(statTooltip) {
  statAttack = getStatText(statTooltip, defStatAttack);
  statDefense = getStatText(statTooltip, defStatDefense);
  statArmor = getStatText(statTooltip, defStatArmor);
  statDamage = getStatText(statTooltip, defStatDamage);
  statHp = getStatText(statTooltip, defStatHp);
}

export function getMyStats() {
  statLevel = GameData.player().level;
  getTooltipStats(getElementById('statbar-character-tooltip-stats'));
}
