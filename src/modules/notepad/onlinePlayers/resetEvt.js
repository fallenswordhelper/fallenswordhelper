import sendEvent from '../../analytics/sendEvent';
import defaults from '../../support/dataObj.json';
import setValue from '../../system/setValue';
import { tableDraw } from './doTable';

export default function resetEvt(context) {
  sendEvent('OnlinePlayers', 'resetEvt');
  setValue('onlinePlayerMinLvl', defaults.onlinePlayerMinLvl);
  setValue('onlinePlayerMaxLvl', defaults.onlinePlayerMaxLvl);
  $('#fshMinLvl', context).val(defaults.onlinePlayerMinLvl);
  $('#fshMaxLvl', context).val(defaults.onlinePlayerMaxLvl);
  tableDraw();
}
