import inventing from './inventing';

export default function domoverecipes(folderId, recipeAry) {
  return inventing({
    subcmd: 'domoverecipes',
    target_folder_id: folderId,
    recipe_selected: recipeAry,
  });
}
