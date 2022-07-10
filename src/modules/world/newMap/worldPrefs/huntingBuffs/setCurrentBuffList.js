import isArray from '../../../../common/isArray';
import calf from '../../../../support/calf';

let huntingBuffs = 0;
let huntingBuffsName = '';

export const getHuntingBuffs = () => huntingBuffs;
export const getHuntingBuffsName = () => huntingBuffsName;

export function setCurrentBuffList() {
  const lookup = [null,
    [calf.buffs, calf.buffsName],
    [calf.buffs2, calf.buffs2Name],
    [calf.buffs3, calf.buffs3Name],
  ][calf.enabledHuntingMode];
  if (isArray(lookup)) {
    [huntingBuffs, huntingBuffsName] = lookup;
  }
}
