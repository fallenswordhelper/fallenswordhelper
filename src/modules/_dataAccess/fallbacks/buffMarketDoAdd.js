import aGenericFallback from './aGenericFallback';

export default function buffMarketDoAdd(buffPackage) {
  return aGenericFallback({
    cmd: 'buffmarket',
    subcmd: 'doadd',
    ...buffPackage,
  }, 'Buff Package updated!');
}
