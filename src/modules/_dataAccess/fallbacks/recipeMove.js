import indexAjaxData from '../../ajax/indexAjaxData';
import infoBoxFrom from '../../common/InfoBoxFrom';

function makeAppResponse(html, expected) {
  const got = infoBoxFrom(html);
  if (got === expected) {
    return { s: true };
  }
  return { s: false, e: { message: got } };
}

export default async function recipeMove(folderId, recipeAry) {
  const html = await indexAjaxData({
    cmd: 'inventing',
    subcmd: 'domoverecipes',
    recipe_selected: recipeAry,
    target_folder_id: folderId,
  });
  return makeAppResponse(html, 'Selected recipes have been moved to the target folder.');
}
