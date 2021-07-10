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

export let statLevel;
export let statDefense;
export let statAttack;
export let statDamage;
export let statArmor;
export let statHp;

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
