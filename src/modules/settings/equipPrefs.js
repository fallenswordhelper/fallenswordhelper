import escapeHtml from '../system/escapeHtml';
import getValue from '../system/getValue';
import bunchOfSimple from './bunchOfSimple';
import isValueChecked from './isValueChecked';
import networkIcon from './networkIcon';
import { helpLink, simpleCheckbox } from './simpleCheckbox';

function quickSend() {
  return `<tr><td class="fshRight">${networkIcon}Show Quick Send Item${
    helpLink(
      'Show Quick Send on Manage Backpack',
      'This will show a link beside each item which gives the option to '
      + 'quick send the item to this person',
    )
  }:</td><td><input name="showQuickSendLinks" type="checkbox" `
    + `value="on"${
      isValueChecked('showQuickSendLinks')}>`
    + '&nbsp;&nbsp;Send Items To '
    + `<input name="itemRecipient" value="${
      getValue('itemRecipient')}">`;
}

function makeSendClasses() {
  return `<tr><td class="fshNoWrap fshRight">Quick Select all of type in Send Screen${
    helpLink(
      'Quick Select all of type in Send Screen',
      'This allows you to customize what quick links you would like '
      + 'displayed in your send item screen.<br>Use the format '
      + '[&quot;name&quot;,&quot;itemid&quot;],[&quot;othername&quot;,'
      + '&quot;itemid2&quot;].<br>WARNING: NO REFUNDS ON ERROR',
    )
  }:</td><td><input name="sendClasses" class="fshSettingsText" value="${
    escapeHtml(getValue('sendClasses'))}">`;
}

export default function equipPrefs() {
  // Equipment screen prefs
  return '<tr><th colspan="2"><b>Equipment screen preferences</b></th></tr>'
    + `${bunchOfSimple([
      'showExtraLinks',
      'enableItemColoring',
      'checkAllOfType',
      'enableFolderFilter',
    ])}${
      quickSend()}${
      simpleCheckbox('showQuickDropLinks')}${
      makeSendClasses()}`;
}
