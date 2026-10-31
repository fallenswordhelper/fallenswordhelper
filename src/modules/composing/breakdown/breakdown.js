import createDiv from '../../common/cElement/createDiv';
import getElementById from '../../common/getElementById';
import insertElement from '../../common/insertElement';
import jQueryNotPresent from '../../common/jQueryNotPresent';
import perfFilter from '../../common/perfFilter';
import skipGamePrompts from '../../common/skipGamePrompts';
import prefCheckbox from '../../settings/prefCheckbox';
import { pcc } from '../../support/layout';

const pref = 'disableBreakdownPrompts';

const breakdownPrompts = [
  /^Are you sure you wish to break down the selected items\?$/,
];

function prefBox() {
  const box = createDiv({ className: 'fshCenter' });
  insertElement(box, prefCheckbox(pref));
  insertElement(pcc(), box);
}

export default function breakdown() {
  if (jQueryNotPresent()) return;
  if (!getElementById('breakdown-selected-items')) return;
  perfFilter('composing');
  skipGamePrompts(pref, breakdownPrompts);
  prefBox();
}
