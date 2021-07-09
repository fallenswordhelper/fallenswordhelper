import $dataAccess from './$dataAccess';
import groupsView from '../app/guild/groups/view';
import viewGroups from './fallbacks/viewGroups';

export default function daViewGroups() {
  return $dataAccess(groupsView, viewGroups);
}
