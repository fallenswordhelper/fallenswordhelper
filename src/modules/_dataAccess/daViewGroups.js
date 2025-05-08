import view from '../app/guild/groups/view';
import $dataAccess from './$dataAccess';
import viewGroups from './fallbacks/viewGroups';

export default function daViewGroups() {
  return $dataAccess(view, viewGroups);
}
