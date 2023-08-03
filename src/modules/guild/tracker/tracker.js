import './tracker.css';
import sendEvent from '../../analytics/sendEvent';
import guildTracker from '../../chrome/pageSwitcher/loader/guildTracker';
import createButton from '../../common/cElement/createButton';
import createDiv from '../../common/cElement/createDiv';
import insertElement from '../../common/insertElement';
import on from '../../common/on';
import onclick from '../../common/onclick';
import querySelector from '../../common/querySelector';
import { simpleCheckboxHtml } from '../../settings/simpleCheckbox';
import { defEnableGuildActivityTracker } from '../../support/constants';
import setValue from '../../system/setValue';

function togglePref(evt) {
  if (evt.target.id === defEnableGuildActivityTracker) {
    sendEvent('guildTracker', 'togglePref');
    setValue(defEnableGuildActivityTracker, evt.target.checked);
  }
}

function showTracker() {
  sendEvent('guildTracker', 'showTracker');
  guildTracker();
}

export default function tracker() {
  const gs = querySelector('#pCC img.guild_openGuildStore');
  if (!gs) { return; }
  const td = gs.parentNode;
  td.classList.add('fshRelative');
  const myDiv = createDiv({
    className: 'fsh-tracker',
    innerHTML: `${simpleCheckboxHtml(defEnableGuildActivityTracker)}&nbsp;`,
  });
  on(myDiv, 'change', togglePref);
  const myBtn = createButton({
    textContent: 'Show',
    type: 'button',
  });
  onclick(myBtn, showTracker);
  insertElement(myDiv, myBtn);
  insertElement(td, myDiv);
}
