import $dataAccess from './$dataAccess';
import groupStats from './fallbacks/groupStats';
import viewStats from '../app/guild/groups/viewStats';

export default function daGroupStats(groupId) {
  return $dataAccess(viewStats, groupStats, groupId);
}
