import './messaging.css';
import doValidateTip from './doValidateTip';
import fallback from '../../system/fallback';
import getMsg from './getMsg';
import getQuickMessageDialog from './getQuickMessageDialog';
import hasClass from '../../common/hasClass';
import jQueryNotPresent from '../../common/jQueryNotPresent';
import sendOnEnter from './sendOnEnter';
import { setName } from './targetPlayer';
import showMsgTemplate from './showMsgTemplate';

function setMsg(msg) {
  const dialogMsg = getMsg();
  dialogMsg.value = fallback(msg, '');
  dialogMsg.disabled = false;
}

function openQuickMsgDialog(name, msg, tip) { // jQuery
  const quickMsgDialog = getQuickMessageDialog();
  if (hasClass('ui-dialog-content', quickMsgDialog)) {
    setName(name);
    setMsg(msg);
    doValidateTip(tip);
    showMsgTemplate();
    sendOnEnter();
    $(quickMsgDialog).dialog('open');
  }
}

export default function messaging() {
  if (jQueryNotPresent()) { return; }
  window.openQuickMsgDialog = openQuickMsgDialog;
}
