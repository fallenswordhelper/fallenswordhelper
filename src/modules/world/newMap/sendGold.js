import addCommas from '../../system/addCommas';
import { defPlayerGold } from '../../support/constants';
import doSendGold from './doSendGold';
import getValue from '../../system/getValue';
import { getSendGoldOnWorld, initSendGoldOnWorld } from './sendGoldPref';

let goldAmount = 0;

function statbarGoldBackground(colour) {
  $('#statbar-gold').css('background-color', colour);
}

function updateSendGoldOnWorld() { // jQuery
  $('#HelperSendTotal').html(addCommas(getValue('currentGoldSentTotal')));
  if (Number(GameData.player().gold) > goldAmount) {
    statbarGoldBackground('red');
  } else {
    statbarGoldBackground('inherit');
  }
}

function extraHtml() {
  return '<dt class="stat-gold-sendTo">Send To:</dt>'
    + `<dd id="HelperSendTo">${getValue('goldRecipient')}</dd>`
    + '<dt class="stat-gold-sendAmt">Amount:</dt>'
    + `<dd id="HelperSendAmt">${addCommas(goldAmount)}</dd>`
    + '<dt class="stat-gold-sendTo">Send?</dt>'
    + '<dd><input id="HelperSendGold" value="Send!" class="custombutton" '
    + 'type="submit"><input type="hidden" id="xc" value=""</dd>'
    + '<dt class="stat-gold-sendTotal">Total Sent:</dt>'
    + `<dd id="HelperSendTotal">${
      addCommas(getValue('currentGoldSentTotal'))}</dd>`;
}

function prepareSendGoldOnWorld() {
  goldAmount = getValue('goldAmount');
  $('#statbar-gold-tooltip-general').append(extraHtml());
  $('#HelperSendGold').on('click', doSendGold);
  updateSendGoldOnWorld();
  $.subscribe(defPlayerGold, updateSendGoldOnWorld);
}

export default function sendGold() { // jQuery
  initSendGoldOnWorld();
  if (getSendGoldOnWorld()) { prepareSendGoldOnWorld(); }
}
