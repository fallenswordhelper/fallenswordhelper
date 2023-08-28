import indexAjaxDoc from '../../ajax/indexAjaxDoc';
import infoBox from '../../common/infoBox';

export default async function aGenericFallback(opts, successMsg) {
  const doc = await indexAjaxDoc(opts);
  const message = infoBox(doc);
  if (message === successMsg) return { s: true };
  return { s: false, e: { message } };
}
