import daRemoveSkill from '../../_dataAccess/daRemoveSkill';
import sendEvent from '../../analytics/sendEvent';
import errorDialog from '../../common/errorDialog';
import getElementById from '../../common/getElementById';
import hideQTip from '../../common/hideQTip';
import onclick from '../../common/onclick';
import skipGamePrompts from '../../common/skipGamePrompts';
import setInnerHtml from '../../dom/setInnerHtml';
import getCustomUrlParameter from '../../system/getCustomUrlParameter';

const deactivatePrompts = [/^Are you sure you wish to remove the .+ skill\?$/];

function debuffSuccess(aLink, json) {
  if (json?.s) {
    setInnerHtml('', aLink.parentNode);
  }
}

async function doDebuff(aLink) {
  sendEvent('profile', 'doDebuff');
  const buffId = getCustomUrlParameter(aLink.href, 'skill_id');
  const json = await daRemoveSkill(buffId);
  errorDialog(json);
  debuffSuccess(aLink, json);
}

function getALink(target) {
  if (target.tagName === 'IMG') {
    hideQTip(target);
    return target.parentNode;
  }
  return target;
}

// The game asks first (data-confirm), then clicks the link again once you
// say OK. Only that second click removes the buff.
const confirmed = (aLink) =>
  !('confirm' in aLink.dataset) ||
  Boolean(window.jQuery?.(aLink).data('fsConfirmed'));

function interceptDebuff(e) {
  if (e.defaultPrevented) return;
  const aLink = getALink(e.target);
  if (aLink.tagName !== 'A' || !confirmed(aLink)) return;
  e.preventDefault();
  void doDebuff(aLink); // skipcq: JS-0098
}

export default function debuff(fastDebuff, disableDeactivatePrompts) {
  if (disableDeactivatePrompts) {
    skipGamePrompts('disableDeactivatePrompts', deactivatePrompts);
  }
  const profileRightColumn = getElementById('profileRightColumn');
  if (fastDebuff && profileRightColumn) {
    onclick(profileRightColumn.lastElementChild, interceptDebuff);
  }
}
