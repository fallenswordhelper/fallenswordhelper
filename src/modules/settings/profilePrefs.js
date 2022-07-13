import getValue from '../system/getValue';
import bunchOfSimple from './bunchOfSimple';
import { justLabel } from './simpleCheckbox';

const part1 = [
  'showQuickButtons',
  'renderSelfBio',
  'renderOtherBios',
  'enableBioCompressor',
];

function buffGreet() {
  return '<tr>'
    + `<td class="fshRight">${justLabel('buyBuffsGreeting')}</td>`
    + '<td>'
    + `<input name="buyBuffsGreeting" class="fshSettingsText" value="${getValue('buyBuffsGreeting')}">`
    + '</td>'
    + '</tr>';
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
  return `<tr><th colspan="2"><b>Profile preferences</b></th></tr>${
    bunchOfSimple(part1)
  }${buffGreet()
  }${bunchOfSimple(part2)}`;
}
