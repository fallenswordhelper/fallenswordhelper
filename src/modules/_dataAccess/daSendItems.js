import $dataAccess from './_dataAccess';
import appSendItems from '../app/trade/senditems';
import senditems from './fallbacks/sendItems';

export default function daSendItems(user, invIdAry) {
  return $dataAccess(appSendItems, senditems, user, invIdAry);
}
