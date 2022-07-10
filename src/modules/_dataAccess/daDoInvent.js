import doinvent from '../app/inventing/doinvent';
import $dataAccess from './$dataAccess';
import invent from './fallbacks/invent';

export default function daDoInvent(recipe) {
  return $dataAccess(doinvent, invent, recipe);
}
