import ranks from './ranks';

export default function position(direction, rankId) {
  return ranks({ subcmd2: direction, rank_id: rankId });
}
