import attribsToArray from '../../common/attribsToArray';
import { defenderMultiplier } from '../../support/constants';

const effect = (value) => Math.ceil(value * defenderMultiplier);
const justEffect = ({ attributes }) => attribsToArray(attributes).map(effect);
const addEffects = (acc, merc) => acc.map((stat, i) => stat + merc[i]);

export default function mercEffect(mercs) {
  return mercs?.r?.mercs?.map(justEffect).reduce(addEffects, [0, 0, 0, 0, 0]);
}
