import $dataAccess from './_dataAccess';
import doinvent from '../app/inventing/doinvent';
import invent from './fallbacks/invent';

export default function daDoInvent(recipe) {
  return $dataAccess(doinvent, invent, recipe);
}
