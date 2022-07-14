import daStoreItems from '../_dataAccess/daStoreItems';
import ajaxReturnCode from '../common/ajaxReturnCode';
import errorDialog from '../common/errorDialog';

export default function storeItems(invIdAry) {
  return daStoreItems(invIdAry).then(errorDialog).then(ajaxReturnCode);
}
