import getValue from '../../system/getValue';
import senditems from './sendItems';

export default function sendItemsToRecipient(invIdAry) {
  return senditems(getValue('itemRecipient'), invIdAry);
}
