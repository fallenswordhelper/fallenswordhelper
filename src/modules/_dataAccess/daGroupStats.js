import viewStats from '../app/guild/groups/viewStats';
import $dataAccess from './$dataAccess';
import groupStats from './fallbacks/groupStats';

export default function daGroupStats(groupId) {
  return $dataAccess(viewStats, groupStats, groupId);
}
