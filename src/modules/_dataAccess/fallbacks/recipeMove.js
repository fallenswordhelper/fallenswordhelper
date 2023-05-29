import aGenericFallback from './aGenericFallback';

export default async function recipeMove(folderId, recipeAry) {
  return aGenericFallback({
    cmd: 'inventing',
    subcmd: 'domoverecipes',
    recipe_selected: recipeAry,
    target_folder_id: folderId,
  }, 'Selected recipes have been moved to the target folder.');
}
