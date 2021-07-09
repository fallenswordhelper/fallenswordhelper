import $dataAccess from './$dataAccess';
import appSendItemsToRecipient from '../app/trade/sendItemsToRecipient';
import sendItemsToRecipient from './fallbacks/sendItemsToRecipient';

export default function daAjaxSendItemsToRecipient(invIdAry) {
  return $dataAccess(appSendItemsToRecipient, sendItemsToRecipient, invIdAry);
}
