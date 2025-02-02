import indexAjaxDoc from '../ajax/indexAjaxDoc';
import unequipitem from '../app/profile/unequipitem';
import infoBox from '../common/infoBox';
import $dataAccess from './$dataAccess';

function formatResults(doc) {
  const info = infoBox(doc);
  if (!info) return { s: true };
  return { e: { message: info }, s: false };
}

async function unequip(item) {
  const doc = await indexAjaxDoc({
    cmd: 'profile',
    subcmd: 'unequipitem',
    inventory_id: item,
  });
  if (!doc) return { s: false };
  return formatResults(doc);
}

export default function daUnequipItem(item) {
  return $dataAccess(unequipitem, unequip, item);
}
