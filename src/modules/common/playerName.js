import getElementById from './getElementById';
import getText from './getText';

let thisPlayerName = null;

function getStatBarCharacter() {
  const statBarCharacter = getElementById('statbar-character');
  return statBarCharacter && getText(statBarCharacter);
}

const getWindowSelf = () => typeof window.self === 'string' && window.self;
const getCharacter = () => getStatBarCharacter() || getWindowSelf();

export default function playerName() {
  if (!thisPlayerName) {
    const selfChar = getCharacter();
    if (selfChar) thisPlayerName = selfChar;
  }
  return thisPlayerName;
}
