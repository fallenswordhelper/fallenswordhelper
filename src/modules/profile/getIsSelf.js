import playerName from '../common/playerName';
import getPlayerName from './getPlayerName';

let haveSelf;
let isSelf;

export default function getIsSelf() {
  if (!haveSelf) {
    isSelf = getPlayerName() === playerName();
    haveSelf = true;
  }
  return isSelf;
}
