import getValue from '../system/getValue';
import bunchOfSimple from './bunchOfSimple';
import makeHeaderRow from './makeHeaderRow';
import makeLabelRow from './makeLabelRow';
import {
  justCheckbox,
  simpleCheckboxHtml,
} from './simpleCheckbox';

function newGuildLogHistory() {
  return makeLabelRow(
    'newGuildLogHistoryPages',
    `<input name="newGuildLogHistoryPages" class="fshSettingsNumber" type="number" value="${
      getValue('newGuildLogHistoryPages')}" min="0">`,
  );
}

function newLogMessageSound() {
  return makeLabelRow(
    'defaultMessageSound',
    `<input name="defaultMessageSound" class="fshSettingsText" value="${getValue('defaultMessageSound')}">`,
  );
}

function playSoundOnUnreadLog() {
  return makeLabelRow(
    'playNewMessageSound',
    `${justCheckbox('playNewMessageSound')} ${simpleCheckboxHtml('showSpeakerOnWorld')}`,
  );
}

export default function logPrefs() {
  // Log screen prefs
  return `${makeHeaderRow('Log screen preferences')}${
    bunchOfSimple([
      'hideNonPlayerGuildLogMessages',
      'useNewGuildLog',
    ])
  }${newGuildLogHistory()
  }${bunchOfSimple([
    'groupCombatItems',
    'enableLogColoring',
  ])
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
