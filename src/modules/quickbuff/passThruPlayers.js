import csvSplit from '../common/csvSplit';
import getUrlParameter from '../system/getUrlParameter';
import firstPlayerStats from './firstPlayerStats';

let requests = 0;

function processQueue() {
  if (requests.length) {
    window.addPlayers([requests.shift()]);
    setTimeout(processQueue, 200);
  } else {
    setTimeout(firstPlayerStats, 200);
  }
}

export default function passThruPlayers() {
  const passThru = getUrlParameter('players');
  if (passThru) {
    requests = csvSplit(passThru);
    processQueue();
  }
}
