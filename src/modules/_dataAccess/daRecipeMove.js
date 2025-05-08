import domoverecipes from '../app/inventing/domoverecipes';
import $dataAccess from './$dataAccess';
import aGenericFallback from './fallbacks/aGenericFallback';

function recipeMove(folderId, recipeAry) {
  return aGenericFallback(
    {
      cmd: 'inventing',
      subcmd: 'domoverecipes',
      recipe_selected: recipeAry,
      target_folder_id: folderId,
    },
    'Selected recipes have been moved to the target folder.',
  );
}

export default function daRecipeMove(folderId, recipeAry) {
  return $dataAccess(domoverecipes, recipeMove, folderId, recipeAry);
}
