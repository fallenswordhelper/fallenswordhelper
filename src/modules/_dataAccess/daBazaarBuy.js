import indexAjaxDoc from '../ajax/indexAjaxDoc';
import buyitem from '../app/potionbazaar/buyitem';
import infoBox from '../common/infoBox';
import $dataAccess from './$dataAccess';

async function bazaarBuy(item, quantity) {
  const doc = await indexAjaxDoc({
    cmd: 'potionbazaar',
    subcmd: 'buyitem',
    item_id: item,
    quantity,
  });
  if (!doc) return { s: false };
  const info = infoBox(doc);
  if (info === 'You purchased the item!') {
    return { r: Array(quantity), s: true };
  }
  return { e: { message: info }, s: false };
}

export default function daBazaarBuy(item, quantity) {
  return $dataAccess(buyitem, bazaarBuy, item, quantity);
}
