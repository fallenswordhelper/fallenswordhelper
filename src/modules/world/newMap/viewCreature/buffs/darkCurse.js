// Dark Curse: +0.2% reduction per point to enemy Defense
import getBuffLevel from './getBuffLevel';
import { darkCurseMultiplier } from '../../../../support/constants';

export default function darkCurse(player, enemy) {
  const buffLevel = getBuffLevel(player, 7);
  if (!buffLevel) return {};
  return { enemy: { defense: -Math.floor(
    buffLevel *
    darkCurseMultiplier *
    enemy.defense,
  )}};
}
