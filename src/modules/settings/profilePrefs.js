import getValue from '../system/getValue';
import bunchOfSimple from './bunchOfSimple';
import { helpLink } from './simpleCheckbox';

const part1 = [
  'showQuickButtons',
  'renderSelfBio',
  'renderOtherBios',
  'enableBioCompressor',
];

function buffGreet() {
  return `<tr><td class="fshRight">Buy Buffs Greeting${
    helpLink(
      'Buy Buffs Greeting',
      'This is the default text to open a message with when asking to '
      + 'buy buffs. You can use {playername} to insert the target players '
      + 'name. You can also use {buffs} to insert the list of buffs. You '
      + 'can use {cost} to insert the total cost of the buffs.',
    )
  }:</td><td><input name="buyBuffsGreeting" class="fshSettingsText" `
    + `value="${getValue('buyBuffsGreeting')}"></td></tr>`;
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
