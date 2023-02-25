import indexAjaxData from '../../ajax/indexAjaxData';
import htmlResult from './htmlResult';

export default async function senditems(user, invIdAry) {
  const data = await indexAjaxData({
    cmd: 'trade',
    subcmd: 'senditems',
    xc: window.ajaxXC,
    target_username: user,
    sendItemList: invIdAry,
  });
  return htmlResult(data);
}
