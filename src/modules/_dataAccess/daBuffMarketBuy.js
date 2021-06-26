import $dataAccess from './_dataAccess';
import buffMarketBuy from './fallbacks/buffMarketBuy';
import buy from '../app/buffmarket/buy';

export default function daBuffMarketBuy(packageId) {
  return $dataAccess(buy, buffMarketBuy, packageId);
}
