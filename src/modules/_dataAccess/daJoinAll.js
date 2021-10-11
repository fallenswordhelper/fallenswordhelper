import $dataAccess from './$dataAccess';
import groupJoin from './fallbacks/groupJoin';
import joinall from '../app/guild/groups/joinall';

export default function daJoinAll(group) {
  return $dataAccess(joinall, groupJoin, group);
}
