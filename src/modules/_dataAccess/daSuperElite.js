import $dataAccess from './$dataAccess';
import appSe from '../app/superelite';
import superelite from './fallbacks/superelite';

export default function daSuperElite() {
  return $dataAccess(appSe, superelite);
}
