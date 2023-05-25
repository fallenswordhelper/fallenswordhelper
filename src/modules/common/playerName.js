import getElementById from './getElementById';
import getText from './getText';

let thisPlayerName = null;

export default function playerName() {
  if (!thisPlayerName) {
    const statBarCharacter = getElementById('statbar-character');
    const statBarChar = statBarCharacter && getText(statBarCharacter);
    const winSelfChar = typeof window.self === 'string' && window.self;
    if (statBarChar || winSelfChar) {
      thisPlayerName = statBarChar || winSelfChar;
    }
  }
  return thisPlayerName;
}
