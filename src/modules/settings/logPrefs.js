import getValue from '../system/getValue';
import bunchOfSimple from './bunchOfSimple';
import isValueChecked from './isValueChecked';
import { helpLink, simpleCheckbox } from './simpleCheckbox';

function newGuildLogHistory() {
  return `<tr><td class="fshRight">New Guild Log History${
    helpLink(
      'New Guild Log History (pages)',
      'This is the number of pages that the new guild log screen will go back in history.',
    )
  }:</td><td><input name="newGuildLogHistoryPages" class="fshSettingsNumber" type="number" value="${
    getValue('newGuildLogHistoryPages')}"></td></td></tr>`;
}

function newLogMessageSound() {
  return `<tr><td class="fshRight">New Log Message Sound${
    helpLink(
      'New Log Message Sound',
      'The .wav or .ogg file to play when you have unread log messages. '
      + 'This must be a .wav or .ogg file. This option can be turned on/off '
      + 'on the world page. Only works in Firefox 3.5+',
    )
  }:</td><td><input name="defaultMessageSound" class="fshSettingsText" `
    + `value="${getValue('defaultMessageSound')
    }"></td></tr>`;
}

function playSoundOnUnreadLog() {
  return `<tr><td class="fshRight">Play sound on unread log${
    helpLink(
      'Play sound on unread log',
      'Should the above sound play when you have unread log messages? '
      + '(will work on Firefox 3.5+ only)',
    )
  }:</td><td><input name="playNewMessageSound" type="checkbox" `
    + `value="on"${
      isValueChecked('playNewMessageSound')}>`
    + ` Show speaker on world${
      helpLink(
        'Show speaker on world',
        'Should the toggle play sound speaker show on the world map? '
      + '(This icon is next to the Fallensword wiki icon and will only '
      + 'display on Firefox 3.5+)',
      )
    }:<input name="showSpeakerOnWorld" type="checkbox" value="on"${
      isValueChecked('showSpeakerOnWorld')
    }></tr></td>`;
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
