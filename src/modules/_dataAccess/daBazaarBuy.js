import $dataAccess from './_dataAccess';
import bazaarBuy from './fallbacks/bazaarBuy';
import buyitem from '../app/potionbazaar/buyitem';

export default function daBazaarBuy(item) {
  return $dataAccess(buyitem, bazaarBuy, item);
}
