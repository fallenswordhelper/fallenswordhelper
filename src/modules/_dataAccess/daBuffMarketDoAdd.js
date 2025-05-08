import doadd from '../app/buffmarket/doadd';
import $dataAccess from './$dataAccess';
import buffMarketDoAdd from './fallbacks/buffMarketDoAdd';

export default function daBuffMarketManage(buffPackage) {
  return $dataAccess(doadd, buffMarketDoAdd, buffPackage);
}
