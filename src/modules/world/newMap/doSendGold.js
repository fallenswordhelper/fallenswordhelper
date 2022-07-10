import indexAjaxData from '../../ajax/indexAjaxData';
import infoBoxFrom from '../../common/InfoBoxFrom';
import { defFetchPlayerStats } from '../../support/constants';
import getValue from '../../system/getValue';
import setValue from '../../system/setValue';
import { getSendGoldOnWorld } from './sendGoldPref';

function doneSendGold(data) {
  const info = infoBoxFrom(data);
  if (info === 'You successfully sent gold!' || info === '') {
    setValue(
      'currentGoldSentTotal',
      parseInt(getValue('currentGoldSentTotal'), 10) + parseInt(getValue('goldAmount'), 10),
    );
    GameData.fetch(defFetchPlayerStats);
  }
}

export default function doSendGold() { // jQuery
  if (!getSendGoldOnWorld()) { return; }
  indexAjaxData({
    cmd: 'trade',
    subcmd: 'sendgold',
    xc: window.ajaxXC,
    target_username: $('#HelperSendTo').html(),
    gold_amount: $('#HelperSendAmt').html().replace(/[^\d]/g, ''),
  }).then(doneSendGold);
}
