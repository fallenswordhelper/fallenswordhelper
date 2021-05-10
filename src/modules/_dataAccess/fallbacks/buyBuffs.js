import createDocument from '../../system/createDocument';
import indexAjaxData from '../../ajax/indexAjaxData';
import querySelector from '../../common/querySelector';

export default async function buyBuffs(packageId) {
  const buffHTML = await indexAjaxData({
    cmd: 'buffmarket',
    subcmd: 'buy',
    id: packageId,
  });
  const buffPage = createDocument(buffHTML);
  const message = querySelector('#info-msg', buffPage).innerHTML;
  if (message === 'Request accepted - buffs have automatically been cast.') {
    return { s: true };
  }
  if (message === undefined) {
    return message;
  }
  return { s: false, e: { message } };
}
