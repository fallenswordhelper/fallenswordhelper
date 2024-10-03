import sendEvent from '../../analytics/sendEvent';
import createDiv from '../../common/cElement/createDiv';
import closestTable from '../../common/closestTable';
import getElementsByTagName from '../../common/getElementsByTagName';
import insertElement from '../../common/insertElement';
import on from '../../common/on';
import querySelector from '../../common/querySelector';
import { simpleCheckboxHtml } from '../../settings/simpleCheckbox';
import { defTable } from '../../support/constants';
import { pcc } from '../../support/layout';
import getValue from '../../system/getValue';
import setValue from '../../system/setValue';
import toggleStyle from './toggleStyle';

const prefEnableStamBars = 'enableStamBars';
let enableStamBars = 0;

function changePref() {
  enableStamBars = !enableStamBars;
  setValue(prefEnableStamBars, enableStamBars);
  toggleStyle(enableStamBars);
  sendEvent('guildManage', 'StamBars');
}

function injectPref() {
  const gs = querySelector('#pCC img.guild_openGuildStore');
  if (!gs) {
    return;
  }
  const tables = getElementsByTagName(defTable, pcc());
  const memberList = tables[tables.length - 1];
  const prefContainer = insertElement(
    closestTable(memberList.parentNode).parentNode,
    createDiv({
      innerHTML: simpleCheckboxHtml(prefEnableStamBars),
      style: { marginBottom: '5px', textAlign: 'center' },
    }),
  );
  on(prefContainer, 'change', changePref);
}

export default function stamBars() {
  injectPref();
  enableStamBars = getValue(prefEnableStamBars);
  if (enableStamBars) {
    toggleStyle(enableStamBars);
  }
}
