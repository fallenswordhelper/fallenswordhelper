import playerName from '../common/playerName';
import getPlayerName from './getPlayerName';

let isSelf = null;

export default function getIsSelf() {
  if (isSelf === null) isSelf = getPlayerName() === playerName();
  return isSelf;
}
