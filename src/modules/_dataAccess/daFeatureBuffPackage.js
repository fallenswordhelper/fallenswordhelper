import feature from '../app/buffmarket/feature';
import $dataAccess from './$dataAccess';
import aGenericFallback from './fallbacks/aGenericFallback';

function buffMarketFeature(packageId) {
  return aGenericFallback(
    {
      cmd: 'buffmarket',
      subcmd: 'feature',
      id: packageId,
    },
    'Buff Package featured for 24 hours!',
  );
}

export default function daFeatureBuffPackage(packageId) {
  return $dataAccess(feature, buffMarketFeature, packageId);
}
