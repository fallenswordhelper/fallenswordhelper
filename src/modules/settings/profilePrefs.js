import getValue from '../system/getValue';
import bunchOfSimple from './bunchOfSimple';
import makeHeaderRow from './makeHeaderRow';
import makeLabelRow from './makeLabelRow';

const part1 = [
  'showQuickButtons',
  'renderSelfBio',
  'renderOtherBios',
  'enableBioCompressor',
];

function buffGreet() {
  return makeLabelRow(
    'buyBuffsGreeting',
    `<input name="buyBuffsGreeting" class="fshSettingsText" value="${getValue('buyBuffsGreeting')}">`,
  );
}

const part2 = [
  'showStatBonusTotal',
  'ajaxifyProfileSections',
  'statisticsWrap',
  'quickWearLink',
  'nekidButton',
  'selectAllLink',
  'enableQuickDrink',
  'componentWidgets',
  'fastDebuff',
  'disableDeactivatePrompts',
  'injectBuffGuide',
  'showBuffLevel',
  'countAllyEnemy',
  'highlightPvpProtection',
];

export default function profilePrefs() {
  // profile prefs
  return `${makeHeaderRow('Profile preferences')}${
    bunchOfSimple(part1)
  }${buffGreet()
  }${bunchOfSimple(part2)}`;
}
