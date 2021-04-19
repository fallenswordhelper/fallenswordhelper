import { I as getValue, $ as $dataAccess } from './calfSystem-d5c49dc8.js';
import { s as senditems, a as senditems$1 } from './sendItems-4d537c3d.js';

function sendItemsToRecipient$1(invIdAry) {
  return senditems(getValue('itemRecipient'), invIdAry);
}

function sendItemsToRecipient(invIdAry) {
  return senditems$1(getValue('itemRecipient'), invIdAry);
}

function daAjaxSendItemsToRecipient(invIdAry) {
  return $dataAccess(sendItemsToRecipient$1, sendItemsToRecipient, invIdAry);
}

export { daAjaxSendItemsToRecipient as d };
//# sourceMappingURL=daAjaxSendItemsToRecipient-7e7c1b01.js.map
