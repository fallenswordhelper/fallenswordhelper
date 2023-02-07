import indexAjaxData from '../../ajax/indexAjaxData';
import infoBoxFrom from '../../common/InfoBoxFrom';

function formatResult(html) {
  const info = infoBoxFrom(html);
  if (info.includes('successfully')) {
    return { r: { item: {} }, s: true };
  }
  return { e: { message: info }, s: false };
}

export default async function invent(recipe) {
  const html = await indexAjaxData({
    cmd: 'inventing',
    subcmd: 'doinvent',
    recipe_id: recipe,
  });
  return formatResult(html);
}
