import indexAjaxDoc from '../../ajax/indexAjaxDoc';
import arrayFrom from '../../common/arrayFrom';
import querySelector from '../../common/querySelector';

const notNew = (_e, i) => i > 0;
const setId = (o) => ({ id: Number(o.value) });

// Incomplete
export default async function viewCombatSets() {
  const doc = await indexAjaxDoc({ cmd: 'profile' });
  const select = querySelector('select[name="combatSetId"]', doc);
  if (!select) { return { s: false }; }
  return {
    r: arrayFrom(select.children).filter(notNew).map(setId),
    s: true,
  };
}
