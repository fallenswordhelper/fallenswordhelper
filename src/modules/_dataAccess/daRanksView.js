import $dataAccess from './$dataAccess';
import ranks from '../app/guild/ranks/ranks';
import ranksView from './fallbacks/ranksView';

export default function daRanksView() {
  return $dataAccess(ranks, ranksView);
}
