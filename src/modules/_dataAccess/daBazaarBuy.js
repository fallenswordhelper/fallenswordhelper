import buyitem from '../app/potionbazaar/buyitem';
import $dataAccess from './$dataAccess';
import aGenericFallback from './fallbacks/aGenericFallback';

function bazaarBuy(item, quantity) {
  return aGenericFallback({
    cmd: 'potionbazaar',
    subcmd: 'buyitem',
    item_id: item,
    quantity,
  },'You purchased the item!');
}

export default function daBazaarBuy(item, quantity) {
  return $dataAccess(buyitem, bazaarBuy, item, quantity);
}
