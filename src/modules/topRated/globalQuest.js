import sendEvent from '../analytics/sendEvent';
import formToUrl from '../common/formToUrl';
import getElementsByTagName from '../common/getElementsByTagName';
import on from '../common/on';
import { defTable } from '../support/constants';
import { pcc } from '../support/layout';

function changePage(e) {
  sendEvent('toprated', 'globalQuestAllowBack');
  formToUrl({ target: e.target.form });
}

function globalQuestAllowBack(topTable) {
  const [thisSelect] = getElementsByTagName('select', topTable);
  $(thisSelect).off();
  on(pcc(), 'change', changePage);
}

export default function globalQuest() {
  if (!pcc()) return;
  const tables = getElementsByTagName(defTable, pcc());
  if (tables.length < 4) return;
  globalQuestAllowBack(tables[3]);
}
