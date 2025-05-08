import indexAjaxDoc from '../../ajax/indexAjaxDoc';
import infoBox from '../../common/infoBox';

function formatResults(doc) {
  const info = infoBox(doc);
  if (!info) return { s: true };
  return { e: { message: info }, s: false };
}

export default async function unequip(item) {
  const doc = await indexAjaxDoc({
    cmd: 'profile',
    subcmd: 'unequipitem',
    inventory_id: item,
  });
  if (!doc) return { s: false };
  return formatResults(doc);
}
