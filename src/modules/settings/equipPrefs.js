import escapeHtml from '../system/escapeHtml';
import getValue from '../system/getValue';
import bunchOfSimple from './bunchOfSimple';
import {
  justCheckbox,
  justLabel,
  simpleCheckbox,
} from './simpleCheckbox';

function quickSend() {
  return '<tr>'
    + `<td class="fshRight">${justLabel('showQuickSendLinks')}</td>`
    + '<td>'
    + `${justCheckbox('showQuickSendLinks')}`
    + '&nbsp;&nbsp;Send Items To '
    + `<input name="itemRecipient" value="${getValue('itemRecipient')}">`
    + '</td>'
    + '</tr>';
}

function makeSendClasses() {
  return '<tr>'
    + `<td class="fshNoWrap fshRight">${justLabel('sendClasses')}</td>`
    + '<td>'
    + `<input name="sendClasses" class="fshSettingsText" value="${escapeHtml(getValue('sendClasses'))}">`
    + '</td>'
    + '</tr>';
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
