import clickThis from '../common/clickThis';
import getElementById from '../common/getElementById';
import getElementsByTagName from '../common/getElementsByTagName';

function waitForPlayer(firstPlayer, retries) {
  return !firstPlayer && retries;
}

function haveTargets(retries) {
  const firstPlayer = getElementsByTagName('h1', getElementById('players'))[0];
  if (waitForPlayer(firstPlayer, retries)) {
    setTimeout(haveTargets, 100, retries - 1);
    return;
  }
  if (firstPlayer) { clickThis(firstPlayer); }
}

export default function firstPlayerStats() {
  const targets = getElementById('targetPlayers').value;
  if (targets) { haveTargets(9); }
}
