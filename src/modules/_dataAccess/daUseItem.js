import useitem from '../app/profile/useitem';
import $dataAccess from './$dataAccess';
import useItem from './fallbacks/useItem';

export default function daUseItem(item) {
  return $dataAccess(useitem, useItem, item);
}
