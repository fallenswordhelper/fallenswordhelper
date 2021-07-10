import createDocument from '../../system/createDocument';
import getElementById from '../../common/getElementById';
import getTextTrim from '../../common/getTextTrim';
import indexAjaxData from '../../ajax/indexAjaxData';

// Incomplete
export default async function viewProfile() {
  const html = await indexAjaxData({ cmd: 'profile' });
  const doc = createDocument(html);
  const statVl = getElementById('stat-vl', doc);
  if (!statVl) { return { s: false }; }
  const vl = Number(getTextTrim(statVl));
  return {
    r: { last_activity: 0, virtual_level: vl },
    s: true,
  };
}
