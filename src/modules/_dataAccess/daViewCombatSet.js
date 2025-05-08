import indexAjaxDoc from '../ajax/indexAjaxDoc';
import appViewCombatSet from '../app/profile/viewcombatset';
import arrayFrom from '../common/arrayFrom';
import querySelector from '../common/querySelector';
import $dataAccess from './$dataAccess';

const notNew = (_e, i) => i > 0;
const setId = (o) => ({ id: Number(o.value) });

// Incomplete
async function viewCombatSets() {
  const doc = await indexAjaxDoc({ cmd: 'profile' });
  if (!doc) return { s: false };
  const select = querySelector('select[name="combatSetId"]', doc);
  if (!select) {
    return { s: false };
  }
  return {
    r: arrayFrom(select.children).filter(notNew).map(setId),
    s: true,
  };
}

export default function daViewCombatSet() {
  return $dataAccess(appViewCombatSet, viewCombatSets);
}
