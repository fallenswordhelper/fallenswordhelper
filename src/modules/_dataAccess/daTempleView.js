import indexAjaxDoc from '../ajax/indexAjaxDoc';
import view from '../app/temple/view';
import parseTemplePage from '../common/parseTemplePage';
import $dataAccess from './$dataAccess';

async function templeView() {
  const doc = await indexAjaxDoc({ cmd: 'temple' });
  return parseTemplePage(doc);
}

export default function daTempleView() {
  return $dataAccess(view, templeView);
}
