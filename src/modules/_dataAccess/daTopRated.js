import $dataAccess from './$dataAccess';
import appTopRated from '../app/toprated';
import toprated from './fallbacks/toprated';

export default function daTopRated(subcmd) {
  return $dataAccess(toprated, appTopRated, subcmd);
}
