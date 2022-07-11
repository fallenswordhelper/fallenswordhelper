import getElementById from './getElementById';
import getText from './getText';
import regExpFirstCapture from './regExpFirstCapture';

let thePlayerId;

export default function playerId() {
  const holdtext = getElementById('holdtext');
  if (holdtext && !thePlayerId) {
    const matches = regExpFirstCapture(/fallensword.com\/\?ref=(\d+)/, getText(holdtext));
    if (matches) {
      thePlayerId = Number(matches);
    }
  }
  return thePlayerId;
}
