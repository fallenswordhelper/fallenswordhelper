import domoverecipes from '../app/inventing/domoverecipes';
import $dataAccess from './$dataAccess';
import recipeMove from './fallbacks/recipeMove';

export default function daRecipeMove(folderId, recipeAry) {
  return $dataAccess(domoverecipes, recipeMove, folderId, recipeAry);
}
