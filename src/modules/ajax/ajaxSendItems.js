import daAjaxSendItemsToRecipient from '../_dataAccess/daAjaxSendItemsToRecipient';
import ajaxReturnCode from '../common/ajaxReturnCode';

export default async function ajaxSendItems(invIdAry) {
  const json = await daAjaxSendItemsToRecipient(invIdAry);
  return ajaxReturnCode(json);
}
