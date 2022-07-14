import on from '../../common/on';
import getValue from '../../system/getValue';
import getMsg from './getMsg';
import getQuickMessageDialog from './getQuickMessageDialog';

let enterForSendMessage = null;
let handlerEnabled = 0;
let sendMessage = 0;

function getSendMessage() { // jQuery
  if (!sendMessage) {
    const buttons = $(getQuickMessageDialog()).dialog('option', 'buttons');
    sendMessage = buttons['Send Message'];
  }
  return sendMessage;
}

function getEnterForSendMessage() {
  if (enterForSendMessage === null) {
    enterForSendMessage = getValue('enterForSendMessage');
  }
  return enterForSendMessage;
}

function keypress(evt) {
  if (evt.key === 'Enter' && !evt.shiftKey) {
    evt.preventDefault();
    getSendMessage()();
  }
}

export default function sendOnEnter() {
  if (getEnterForSendMessage() && !handlerEnabled) {
    on(getMsg(), 'keypress', keypress);
    handlerEnabled = true;
  }
}
