import getElementById from './getElementById';
import getText from './getText';

let thePlayerId;

export default function playerId() {
  const holdtext = getElementById('holdtext');
  if (holdtext && !thePlayerId) {
    const matches = getText(holdtext).match(/fallensword.com\/\?ref=(\d+)/);
    if (matches) {
      thePlayerId = Number(matches[1]);
    }
  }
  return thePlayerId;
}
