import calf from '../../support/calf';
import { insertQuickWear } from '../pageSwitcher/loader';
import jQueryDialog from '../jQueryDialog/jQueryDialog';
import keyHandlerEvent from './keyHandlerEvent';

export default function fastWearMgr() {
  if (!('dialogIsClosed' in calf) || calf.dialogIsClosed()) {
    keyHandlerEvent('insertQuickWear');
    jQueryDialog(insertQuickWear);
  }
}
