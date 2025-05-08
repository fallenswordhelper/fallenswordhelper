import manage from '../app/buffmarket/manage';
import $dataAccess from './$dataAccess';
import buffMarketManage from './fallbacks/buffMarketManage';

export default function daBuffMarketManage() {
  return $dataAccess(manage, buffMarketManage);
}
