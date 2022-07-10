import ranks from '../app/guild/ranks/ranks';
import $dataAccess from './$dataAccess';
import ranksView from './fallbacks/ranksView';

export default function daRanksView() {
  return $dataAccess(ranks, ranksView);
}
