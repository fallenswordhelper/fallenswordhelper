import buy from '../app/buffmarket/buy';
import $dataAccess from './$dataAccess';
import aGenericFallback from './fallbacks/aGenericFallback';

function buffMarketBuy(packageId) {
  return aGenericFallback(
    {
      cmd: 'buffmarket',
      subcmd: 'buy',
      id: packageId,
    },
    'Request accepted - buffs have automatically been cast.',
  );
}

export default function daBuffMarketBuy(packageId) {
  return $dataAccess(buy, buffMarketBuy, packageId);
}
