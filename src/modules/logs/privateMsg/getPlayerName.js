import closestTr from '../../common/closestTr';
import getText from '../../common/getText';

export default function getPlayerName(target) {
  return getText(closestTr(target).children[2].children[0]);
}
