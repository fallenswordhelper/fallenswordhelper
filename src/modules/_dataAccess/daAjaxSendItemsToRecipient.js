import appSendItemsToRecipient from '../app/trade/sendItemsToRecipient';
import getValue from '../system/getValue';
import $dataAccess from './$dataAccess';
import senditems from './fallbacks/sendItems';

function sendItemsToRecipient(invIdAry) {
  return senditems(getValue('itemRecipient'), invIdAry);
}

export default function daAjaxSendItemsToRecipient(invIdAry) {
  return $dataAccess(appSendItemsToRecipient, sendItemsToRecipient, invIdAry);
}
