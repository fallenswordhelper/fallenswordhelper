import daTradeSendGold from '../../_dataAccess/daTradeSendGold';
import sendEvent from '../../analytics/sendEvent';
import { defFetchPlayerStats } from '../../support/constants';
import getValue from '../../system/getValue';
import setValue from '../../system/setValue';
import { getSendGoldOnWorld } from './sendGoldPref';

function doneSendGold() {
  setValue(
    'currentGoldSentTotal',
    parseInt(getValue('currentGoldSentTotal'), 10) +
      parseInt(getValue('goldAmount'), 10),
  );
  GameData.fetch(defFetchPlayerStats);
}

export default async function doSendGold() {
  // jQuery
  if (!getSendGoldOnWorld()) return;
  sendEvent('NewMap', 'doSendGold');
  const response = await daTradeSendGold(
    $('#HelperSendTo').html(),
    $('#HelperSendAmt').html().replace(/[^\d]/g, ''),
  );
  if (response.s) doneSendGold();
}
