import indexAjaxData from '../../ajax/indexAjaxData';
import arrayFrom from '../../common/arrayFrom';
import querySelector from '../../common/querySelector';
import createDocument from '../../system/createDocument';

const notNew = (_e, i) => i > 0;
const setId = (o) => ({ id: Number(o.value) });

// Incomplete
export default async function viewCombatSets() {
  const html = await indexAjaxData({ cmd: 'profile' });
  const doc = createDocument(html);
  const select = querySelector('select[name="combatSetId"]', doc);
  if (!select) { return { s: false }; }
  return {
    r: arrayFrom(select.children).filter(notNew).map(setId),
    s: true,
  };
}
