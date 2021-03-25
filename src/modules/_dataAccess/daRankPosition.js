import $dataAccess from './_dataAccess';
import moveRank from './fallbacks/moveRank';
import rankPosition from '../app/guild/ranks/position';

export default function daRankPosition(direction, rankId) {
  return $dataAccess(rankPosition, moveRank, direction, rankId);
}
