import position from '../app/guild/ranks/position';
import $dataAccess from './$dataAccess';
import moveRank from './fallbacks/moveRank';

export default function daRankPosition(direction, rankId) {
  return $dataAccess(position, moveRank, direction, rankId);
}
