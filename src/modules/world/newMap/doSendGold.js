import indexAjaxDoc from '../../ajax/indexAjaxDoc';
import infoBox from '../../common/infoBox';
import { defFetchPlayerStats } from '../../support/constants';
import getValue from '../../system/getValue';
import setValue from '../../system/setValue';
import { getSendGoldOnWorld } from './sendGoldPref';

function doneSendGold(doc) {
  const info = infoBox(doc);
  if (info === 'You successfully sent gold!' || info === '') {
    setValue(
      'currentGoldSentTotal',
      parseInt(getValue('currentGoldSentTotal'), 10) + parseInt(getValue('goldAmount'), 10),
    );
    GameData.fetch(defFetchPlayerStats);
  }
}

export default async function doSendGold() { // jQuery
  if (!getSendGoldOnWorld()) return;
  const doc = await indexAjaxDoc({
    cmd: 'trade',
    subcmd: 'sendgold',
    xc: window.ajaxXC,
    target_username: $('#HelperSendTo').html(),
    gold_amount: $('#HelperSendAmt').html().replace(/[^\d]/g, ''),
  });
  doneSendGold(doc);
}
