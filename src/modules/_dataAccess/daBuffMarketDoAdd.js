import doAdd from '../app/buffmarket/doAdd';
import $dataAccess from './$dataAccess';
import aGenericFallback from './fallbacks/aGenericFallback';

function doAddFallback(buffPkg) {
  return aGenericFallback(
    {
      cmd: 'buffmarket',
      subcmd: 'doadd',
      ...buffPkg,
    },
    'Buff Package added!',
  );
}

export default function daBuffMarketDoAdd(buffPkg) {
  return $dataAccess(doAdd, doAddFallback, buffPkg);
}
