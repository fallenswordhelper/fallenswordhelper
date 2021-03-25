import $dataAccess from './_dataAccess';
import groupStats from './fallbacks/groupStats';
import groupsViewStats from '../app/guild/groups/viewStats';

export default function daGroupStats(groupId) {
  return $dataAccess(groupsViewStats, groupStats, groupId);
}
