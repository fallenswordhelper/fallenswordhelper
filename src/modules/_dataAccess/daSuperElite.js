import appSe from '../app/superelite';
import $dataAccess from './$dataAccess';
import superelite from './fallbacks/superelite';

export default function daSuperElite() {
  return $dataAccess(appSe, superelite);
}
