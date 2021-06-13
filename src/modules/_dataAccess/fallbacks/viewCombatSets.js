import arrayFrom from '../../common/arrayFrom';
import createDocument from '../../system/createDocument';
import indexAjaxData from '../../ajax/indexAjaxData';
import querySelector from '../../common/querySelector';

// Incomplete
export default async function viewCombatSets() {
  const html = await indexAjaxData({ cmd: 'profile' });
  const doc = createDocument(html);
  const select = querySelector('select[name="combatSetId"]', doc);
  if (!select) { return { s: false }; }
  return {
    r: arrayFrom(select.children).filter((e, i) => i > 0).map((o) => ({ id: Number(o.value) })),
    s: true,
  };
}
