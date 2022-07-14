import appSendItemsToRecipient from '../app/trade/sendItemsToRecipient';
import $dataAccess from './$dataAccess';
import sendItemsToRecipient from './fallbacks/sendItemsToRecipient';

export default function daAjaxSendItemsToRecipient(invIdAry) {
  return $dataAccess(appSendItemsToRecipient, sendItemsToRecipient, invIdAry);
}
