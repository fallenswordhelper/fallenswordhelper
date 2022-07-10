import daAjaxSendItemsToRecipient from '../_dataAccess/daAjaxSendItemsToRecipient';
import ajaxReturnCode from '../common/ajaxReturnCode';

export default function ajaxSendItems(invIdAry) {
  return daAjaxSendItemsToRecipient(invIdAry).then(ajaxReturnCode);
}
