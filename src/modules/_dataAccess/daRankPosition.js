import indexAjaxData from '../ajax/indexAjaxData';
import position from '../app/guild/ranks/position';
import $dataAccess from './$dataAccess';

async function moveRank(direction, rankId) {
  await indexAjaxData({
    cmd: 'guild',
    subcmd: 'ranks',
    subcmd2: direction,
    rank_id: rankId,
  });
  return { s: true };
}

export default function daRankPosition(direction, rankId) {
  return $dataAccess(position, moveRank, direction, rankId);
}
