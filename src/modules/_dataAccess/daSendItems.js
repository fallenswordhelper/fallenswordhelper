import appSendItems from '../app/trade/senditems';
import $dataAccess from './$dataAccess';
import senditems from './fallbacks/sendItems';

export default function daSendItems(user, invIdAry) {
  return $dataAccess(appSendItems, senditems, user, invIdAry);
}
