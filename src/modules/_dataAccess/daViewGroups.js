import $dataAccess from './_dataAccess';
import groupsView from '../app/guild/groups/view';
import viewGroups from './fallbacks/viewGroups';

export default function daViewGroups() {
  return $dataAccess(groupsView, viewGroups);
}
