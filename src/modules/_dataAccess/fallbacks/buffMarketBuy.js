import aGenericFallback from './aGenericFallback';

export default function buffMarketBuy(packageId) {
  return aGenericFallback({
    cmd: 'buffmarket',
    subcmd: 'buy',
    id: packageId,
  }, 'Request accepted - buffs have automatically been cast.');
}
