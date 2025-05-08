import getElementById from './getElementById';
import getText from './getText';
import regExpFirstCapture from './regExpFirstCapture';

let thePlayerId = null;

export default function playerId() {
  const holdtext = getElementById('holdtext');
  if (holdtext && !thePlayerId) {
    const matches = regExpFirstCapture(/fallensword.com\/\?ref=(?<id>\d+)/, getText(holdtext));
    if (matches) {
      thePlayerId = Number(matches);
    }
  }
  return thePlayerId;
}
