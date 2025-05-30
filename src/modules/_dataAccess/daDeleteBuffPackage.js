import deletePackage from '../app/buffmarket/deletePackage';
import $dataAccess from './$dataAccess';
import aGenericFallback from './fallbacks/aGenericFallback';

function buffMarketDelete(packageId) {
  return aGenericFallback(
    {
      cmd: 'buffmarket',
      subcmd: 'delete',
      id: packageId,
    },
    'Buff Package deleted!',
  );
}

export default function daDeleteBuffPackage(packageId) {
  return $dataAccess(deletePackage, buffMarketDelete, packageId);
}
