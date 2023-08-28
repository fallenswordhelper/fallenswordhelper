import indexAjaxData from '../../ajax/indexAjaxData';

export default async function moveRank(direction, rankId) {
  await indexAjaxData({
    cmd: 'guild',
    subcmd: 'ranks',
    subcmd2: direction,
    rank_id: rankId,
  });
  return { s: true };
}
