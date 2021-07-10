import calf from '../../support/calf';
import jQueryDialog from '../jQueryDialog/jQueryDialog';
import keyHandlerEvent from './keyHandlerEvent';
import { quickWear } from '../pageSwitcher/loader';

export default function fastWearMgr() {
  if (!('dialogIsClosed' in calf) || calf.dialogIsClosed()) {
    keyHandlerEvent('insertQuickWear');
    jQueryDialog(quickWear);
  }
}
