import toggle from '../app/buffmarket/toggle';
import $dataAccess from './$dataAccess';
import aGenericFallback from './fallbacks/aGenericFallback';

function buffMarketToggle(packageId) {
  return aGenericFallback(
    {
      cmd: 'buffmarket',
      subcmd: 'toggle',
      id: packageId,
    },
    'Buff Package toggled!',
  );
}

export default function daToggleBuffPackage(packageId) {
  return $dataAccess(toggle, buffMarketToggle, packageId);
}
