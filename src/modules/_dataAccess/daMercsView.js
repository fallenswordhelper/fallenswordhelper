import appMercsView from '../app/guild/mercs/view';
import $dataAccess from './$dataAccess';
import fallbackMercsView from './fallbacks/mercsView';

export default function daMercsView() {
  return $dataAccess(appMercsView, fallbackMercsView);
}
