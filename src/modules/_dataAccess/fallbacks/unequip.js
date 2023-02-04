import indexAjaxData from '../../ajax/indexAjaxData';
import infoBoxFrom from '../../common/InfoBoxFrom';

function formatResults(html) {
  const info = infoBoxFrom(html);
  if (!info) { return { s: true }; }
  return { e: { message: info }, s: false };
}

export default async function unequip(item) {
  const data = await indexAjaxData({
    cmd: 'profile',
    subcmd: 'unequipitem',
    inventory_id: item,
  });
  return formatResults(data);
}
