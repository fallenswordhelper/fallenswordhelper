import $dataAccess from './_dataAccess';
import useItem from './fallbacks/useItem';
import useitem from '../app/profile/useitem';

export default function daUseItem(item) {
  return $dataAccess(useitem, useItem, item);
}
