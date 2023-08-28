import indexAjaxDoc from '../../ajax/indexAjaxDoc';
import infoBox from '../../common/infoBox';

export default async function bazaarBuy(item, quantity) {
  const doc = await indexAjaxDoc({
    cmd: 'potionbazaar',
    subcmd: 'buyitem',
    item_id: item,
    quantity,
  });
  const info = infoBox(doc);
  if (info === 'You purchased the item!') return { r: Array(quantity), s: true };
  return { e: { message: info }, s: false };
}
