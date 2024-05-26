import './compactRanks.css';
import sendEvent from '../../analytics/sendEvent';
import createDiv from '../../common/cElement/createDiv';
import closestTable from '../../common/closestTable';
import getElementsByTagName from '../../common/getElementsByTagName';
import insertElement from '../../common/insertElement';
import on from '../../common/on';
import { simpleCheckboxHtml } from '../../settings/simpleCheckbox';
import { defTable } from '../../support/constants';
import { pcc } from '../../support/layout';
import getValue from '../../system/getValue';
import setValue from '../../system/setValue';

const prefCompactRanks = 'compactRanks';
let enableCompactRanks = 0;

function toggleClass() {
  const tables = getElementsByTagName(defTable, pcc());
  const memberList = tables[tables.length - 1];
  memberList.classList.toggle('compact-ranks', enableCompactRanks);
}

function changePref() {
  sendEvent('guild', 'compactRanks');
  enableCompactRanks = !enableCompactRanks;
  setValue(prefCompactRanks, enableCompactRanks);
  toggleClass();
}

function injectPref() {
  const tables = getElementsByTagName(defTable, pcc());
  const memberList = tables[tables.length - 1];
  const prefContainer = insertElement(
    closestTable(memberList.parentNode).parentNode,
    createDiv({
      innerHTML: simpleCheckboxHtml(prefCompactRanks),
      style: { textAlign: 'center' },
    }),
  );
  on(prefContainer, 'change', changePref);
}

export default function compactRanks() {
  if (!pcc()) return;
  injectPref();
  enableCompactRanks = getValue(prefCompactRanks);
  if (enableCompactRanks) toggleClass();
}
