import getElementById from './getElement';
import getText from './getText';

let thePlayerId;

export default function playerId() {
  const holdtext = getElementById('holdtext');
  if (holdtext && !thePlayerId) {
    thePlayerId = Number(
      getText(holdtext)
        .match(/fallensword.com\/\?ref=(\d+)/)[1],
    );
  }
  return thePlayerId;
}
