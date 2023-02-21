import daStoreItems from '../_dataAccess/daStoreItems';
import ajaxReturnCode from '../common/ajaxReturnCode';
import errorDialog from '../common/errorDialog';

export default async function storeItems(invIdAry) {
  const response = await daStoreItems(invIdAry);
  errorDialog(response);
  return ajaxReturnCode(response);
}
