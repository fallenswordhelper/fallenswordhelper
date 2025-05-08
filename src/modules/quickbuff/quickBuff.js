import './quickBuff.css';
import getProfile from '../ajax/getProfile';
import executeAll from '../common/executeAll';
import getElementById from '../common/getElementById';
import insertHtmlAfterEnd from '../common/insertHtmlAfterEnd';
import jQueryNotPresent from '../common/jQueryNotPresent';
import onclick from '../common/onclick';
import playerName from '../common/playerName';
import stdout from '../support/stdout';
import { addBuffLevels } from './addBuffLevels';
import { quickBuffHeader } from './assets';
import doLabels from './doLabels';
import firstPlayerStats from './firstPlayerStats';
import getSustain from './getSustain';
import passThruBuffs from './passThruBuffs';
import passThruPlayers from './passThruPlayers';
import quickActivate from './quickActivate';
import quickbuffSort from './quickbuffSort';

function setupEventHandlers() {
  onclick(getElementById('helperQBheader'), quickActivate);
  onclick(getElementById('players'), addBuffLevels);
}

function devCheck() {
  if (defineUserIsDev) stdout('playerName', playerName());
}

export default async function quickBuff() {
  if (jQueryNotPresent()) return;
  const quickbuffDiv = getElementById('quickbuff');
  if (!quickbuffDiv) return;
  const responseText = getProfile(playerName());
  insertHtmlAfterEnd(quickbuffDiv.children[0], quickBuffHeader);
  executeAll([
    doLabels,
    passThruBuffs,
    passThruPlayers,
    setupEventHandlers,
    firstPlayerStats,
    quickbuffSort,
    devCheck,
  ]);
  getSustain(await responseText);
}
