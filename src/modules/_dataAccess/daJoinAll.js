import joinall from '../app/guild/groups/joinall';
import $dataAccess from './$dataAccess';
import groupJoin from './fallbacks/groupJoin';

export default function daJoinAll(group) {
  return $dataAccess(joinall, groupJoin, group);
}
