import './messaging.css';
import hasClass from '../../common/hasClass';
import jQueryNotPresent from '../../common/jQueryNotPresent';
import fallback from '../../system/fallback';
import doValidateTip from './doValidateTip';
import getMsg from './getMsg';
import getQuickMessageDialog from './getQuickMessageDialog';
import sendOnEnter from './sendOnEnter';
import showMsgTemplate from './showMsgTemplate';
import { setName } from './targetPlayer';

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
