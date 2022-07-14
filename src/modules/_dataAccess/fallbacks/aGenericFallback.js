import indexAjaxData from '../../ajax/indexAjaxData';
import infoBoxFrom from '../../common/InfoBoxFrom';

export default async function aGenericFallback(opts, successMsg) {
  const buffHtml = await indexAjaxData(opts);
  const message = infoBoxFrom(buffHtml);
  if (message === successMsg) return { s: true };
  return { s: false, e: { message } };
}
