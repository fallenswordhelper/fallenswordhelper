import $dataAccess from './$dataAccess';
import view from '../app/guild/groups/view';
import viewGroups from './fallbacks/viewGroups';

export default function daViewGroups() {
  return $dataAccess(view, viewGroups);
}
