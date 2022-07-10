import buy from '../app/buffmarket/buy';
import $dataAccess from './$dataAccess';
import buffMarketBuy from './fallbacks/buffMarketBuy';

export default function daBuffMarketBuy(packageId) {
  return $dataAccess(buy, buffMarketBuy, packageId);
}
