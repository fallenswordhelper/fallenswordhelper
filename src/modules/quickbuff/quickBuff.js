import './quickBuff.css';
import getProfile from '../ajax/getProfile';
import executeAll from '../common/executeAll';
import getElementById from '../common/getElementById';
import insertHtmlAfterEnd from '../common/insertHtmlAfterEnd';
import jQueryNotPresent from '../common/jQueryNotPresent';
import onclick from '../common/onclick';
import addBuffLevels from './addBuffLevels';
import { quickBuffHeader } from './assets';
import doLabels from './doLabels';
import firstPlayerStats from './firstPlayerStats';
import getSustain from './getSustain';
import passThruBuffs from './passThruBuffs';
import passThruPlayers from './passThruPlayers';
import quickActivate from './quickActivate';
import quickbuffSort from './sortBuffs';

function setupEventHandlers() {
  onclick(getElementById('helperQBheader'), quickActivate);
  onclick(getElementById('players'), addBuffLevels);
}

export default function quickBuff() { // jQuery.min
  if (jQueryNotPresent()) { return; }
  const quickbuffDiv = getElementById('quickbuff');
  if (!quickbuffDiv) { return; }
  getProfile(window.self).then(getSustain);
  insertHtmlAfterEnd(quickbuffDiv.children[0], quickBuffHeader);
  executeAll([
    doLabels,
    passThruBuffs,
    passThruPlayers,
    setupEventHandlers,
    firstPlayerStats,
    quickbuffSort,
  ]);
}
