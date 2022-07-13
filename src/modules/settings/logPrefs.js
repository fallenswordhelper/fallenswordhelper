import getValue from '../system/getValue';
import bunchOfSimple from './bunchOfSimple';
import {
  justCheckbox,
  justLabel,
  simpleCheckbox,
  simpleCheckboxHtml,
} from './simpleCheckbox';

function newGuildLogHistory() {
  return '<tr>'
    + `<td class="fshRight">${justLabel('newGuildLogHistoryPages')}</td>`
    + '<td>'
    + `<input name="newGuildLogHistoryPages" class="fshSettingsNumber" type="number" value="${getValue('newGuildLogHistoryPages')}">`
    + '</td>'
    + '</tr>';
}

function newLogMessageSound() {
  return '<tr>'
    + `<td class="fshRight">${justLabel('defaultMessageSound')}</td>`
    + '<td>'
    + `<input name="defaultMessageSound" class="fshSettingsText" value="${getValue('defaultMessageSound')}">`
    + '</td>'
    + '</tr>';
}

function playSoundOnUnreadLog() {
  return '<tr>'
    + `<td class="fshRight">${justLabel('playNewMessageSound')}</td>`
    + '<td>'
    + `${justCheckbox('playNewMessageSound')}`
    + ` ${simpleCheckboxHtml('showSpeakerOnWorld')}`
    + '</td>'
    + '</tr>';
}

export default function logPrefs() {
  // Log screen prefs
  return `<tr><th colspan="2"><b>Log screen preferences</b></th></tr>${
    bunchOfSimple([
      'hideNonPlayerGuildLogMessages',
      'useNewGuildLog',
    ])
  }${newGuildLogHistory()
  }${simpleCheckbox('enableLogColoring')
  }${newLogMessageSound()
  }${playSoundOnUnreadLog()
  }${bunchOfSimple([
    'enableChatParsing',
    'keepBuffLog',
    'addAttackLinkToLog',
    'colorPlayerNames',
    'addIgnoreLink',
    'changeButtonLabels',
    'privateMsgButtons',
    'enhanceChatTextEntry',
    'wrapGuildChat',
  ])}`;
}
