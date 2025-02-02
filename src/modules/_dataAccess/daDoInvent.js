import indexAjaxDoc from '../ajax/indexAjaxDoc';
import doinvent from '../app/inventing/doinvent';
import infoBox from '../common/infoBox';
import $dataAccess from './$dataAccess';

function formatResult(doc) {
  const info = infoBox(doc);
  if (info.includes('successfully')) return { r: { item: {} }, s: true };
  return { e: { message: info }, s: false };
}

async function invent(recipe) {
  const doc = await indexAjaxDoc({
    cmd: 'inventing',
    subcmd: 'doinvent',
    recipe_id: recipe,
  });
  if (!doc) return { s: false };
  return formatResult(doc);
}

export default function daDoInvent(recipe) {
  return $dataAccess(doinvent, invent, recipe);
}
