import daUseItem from '../_dataAccess/daUseItem';
import ajaxReturnCode from '../common/ajaxReturnCode';
import errorDialog from '../common/errorDialog';

export default function useItem(backpackInvId) {
  return daUseItem(backpackInvId).then(errorDialog).then(ajaxReturnCode);
}
