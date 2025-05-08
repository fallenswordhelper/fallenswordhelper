import indexAjaxDoc from '../../ajax/indexAjaxDoc';
import infoBox from '../../common/infoBox';

function formatResult(doc) {
  const info = infoBox(doc);
  if (info.includes('successfully')) return { r: { item: {} }, s: true };
  return { e: { message: info }, s: false };
}

export default async function invent(recipe) {
  const doc = await indexAjaxDoc({
    cmd: 'inventing',
    subcmd: 'doinvent',
    recipe_id: recipe,
  });
  if (!doc) return { s: false };
  return formatResult(doc);
}
