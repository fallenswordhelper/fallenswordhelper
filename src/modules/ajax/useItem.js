import daUseItem from '../_dataAccess/daUseItem';
import ajaxReturnCode from '../common/ajaxReturnCode';
import errorDialog from '../common/errorDialog';

export default async function useItem(backpackInvId) {
  const response = await daUseItem(backpackInvId);
  errorDialog(response);
  return ajaxReturnCode(response);
}
