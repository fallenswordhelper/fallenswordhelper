import createDiv from '../../common/cElement/createDiv';
import { getPcc } from '../../support/layout';
import getValue from '../../system/getValue';
import insertElement from '../../common/insertElement';
import on from '../../common/on';
import querySelector from '../../common/querySelector';
import sendEvent from '../../analytics/sendEvent';
import setValue from '../../system/setValue';
import { simpleCheckboxHtml } from '../../settings/simpleCheckbox';
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
  if (!gs) { return; }
  const prefContainer = insertElement(
    getPcc(),
    createDiv({
      innerHTML: simpleCheckboxHtml(prefEnableStamBars),
      style: { marginLeft: '66%' },
    }),
  );
  on(prefContainer, 'change', changePref);
}

export default function stamBars() {
  injectPref();
  enableStamBars = getValue(prefEnableStamBars);
  if (enableStamBars) { toggleStyle(enableStamBars); }
}
