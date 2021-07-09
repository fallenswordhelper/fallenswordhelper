import $dataAccess from './$dataAccess';
import moveRank from './fallbacks/moveRank';
import position from '../app/guild/ranks/position';

export default function daRankPosition(direction, rankId) {
  return $dataAccess(position, moveRank, direction, rankId);
}
