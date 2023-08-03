import isNull from '../common/isNull';
import playerName from '../common/playerName';
import getPlayerName from './getPlayerName';

let isSelf = null;

export default function getIsSelf() {
  if (isNull(isSelf)) isSelf = getPlayerName() === playerName();
  return isSelf;
}
