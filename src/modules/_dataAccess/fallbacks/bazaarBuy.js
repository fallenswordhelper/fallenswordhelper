import indexAjaxData from '../../ajax/indexAjaxData';
import infoBoxFrom from '../../common/InfoBoxFrom';

export default async function bazaarBuy(item, quantity) {
  const html = await indexAjaxData({
    cmd: 'potionbazaar',
    subcmd: 'buyitem',
    item_id: item,
    quantity,
  });
  const info = infoBoxFrom(html);
  if (info === 'You purchased the item!') { return { r: Array(quantity), s: true }; }
  return { e: { message: info }, s: false };
}
