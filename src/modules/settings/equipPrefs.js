import escapeHtml from '../system/escapeHtml';
import getValue from '../system/getValue';
import bunchOfSimple from './bunchOfSimple';
import makeHeaderRow from './makeHeaderRow';
import makeLabelRow from './makeLabelRow';
import {
  justCheckbox,
  simpleCheckbox,
} from './simpleCheckbox';

function quickSend() {
  return makeLabelRow(
    'showQuickSendLinks',
    `${justCheckbox('showQuickSendLinks')}&nbsp;&nbsp;Send Items To `
    + `<input name="itemRecipient" value="${getValue('itemRecipient')}">`,
  );
}

function makeSendClasses() {
  return makeLabelRow(
    'sendClasses',
    `<input name="sendClasses" class="fshSettingsText" value="${escapeHtml(getValue('sendClasses'))}">`,
  );
}

export default function equipPrefs() {
  // Equipment screen prefs
  return `${makeHeaderRow('Equipment screen preferences')}`
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
