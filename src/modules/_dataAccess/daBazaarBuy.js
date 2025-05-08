import buyitem from '../app/potionbazaar/buyitem';
import $dataAccess from './$dataAccess';
import bazaarBuy from './fallbacks/bazaarBuy';

export default function daBazaarBuy(item, quantity) {
  return $dataAccess(buyitem, bazaarBuy, item, quantity);
}
