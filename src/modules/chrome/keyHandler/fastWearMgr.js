import calf from '../../support/calf';
import jQueryDialog from '../jQueryDialog/jQueryDialog';
import quickwear from '../pageSwitcher/loader/quickwear';
import keyHandlerEvent from './keyHandlerEvent';

export default function fastWearMgr() {
  if (!('dialogIsClosed' in calf) || calf.dialogIsClosed()) {
    keyHandlerEvent('insertQuickWear');
    jQueryDialog(quickwear);
  }
}
