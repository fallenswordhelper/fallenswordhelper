import './quickBuff.css';
import addBuffLevels from './addBuffLevels';
import doLabels from './doLabels';
import executeAll from '../common/executeAll';
import firstPlayerStats from './firstPlayerStats';
import getElementById from '../common/getElementById';
import getProfile from '../ajax/getProfile';
import getSustain from './getSustain';
import insertHtmlAfterEnd from '../common/insertHtmlAfterEnd';
import jQueryNotPresent from '../common/jQueryNotPresent';
import onclick from '../common/onclick';
import passThruBuffs from './passThruBuffs';
import passThruPlayers from './passThruPlayers';
import quickActivate from './quickActivate';
import { quickBuffHeader } from './assets';
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
