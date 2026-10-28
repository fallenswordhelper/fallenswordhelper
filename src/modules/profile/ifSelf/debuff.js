import daRemoveSkill from '../../_dataAccess/daRemoveSkill';
import sendEvent from '../../analytics/sendEvent';
import errorDialog from '../../common/errorDialog';
import getElementById from '../../common/getElementById';
import hideQTip from '../../common/hideQTip';
import navigateTo from '../../common/navigateTo';
import onclick from '../../common/onclick';
import partial from '../../common/partial';
import setInnerHtml from '../../dom/setInnerHtml';
import getCustomUrlParameter from '../../system/getCustomUrlParameter';

function debuffSuccess(aLink, json) {
  if (json?.s) {
    setInnerHtml('', aLink.parentNode);
  }
}

async function doDebuff(fastDebuff, aLink) {
  if (fastDebuff) {
    sendEvent('profile', 'doDebuff');
    const buffId = getCustomUrlParameter(aLink.href, 'skill_id');
    const json = await daRemoveSkill(buffId);
    errorDialog(json);
    debuffSuccess(aLink, json);
  } else {
    navigateTo(aLink.href);
  }
}

function getALink(target) {
  let aLink = target;
  if (aLink.tagName === 'IMG') {
    hideQTip(target);
    aLink = aLink.parentNode;
  }
  return aLink;
}

function capturing(e) {
  if (e.eventPhase === 1) {
    e.stopPropagation();
  }
}

function interceptDebuff(fastDebuff, e) {
  if (!e.returnValue) {
    return;
  }
  const aLink = getALink(e.target);
  if (aLink.tagName !== 'A') {
    return;
  }
  capturing(e);
  e.preventDefault();
  doDebuff(fastDebuff, aLink);
}

export default function debuff(fastDebuff, disableDeactivatePrompts) {
  const profileRightColumn = getElementById('profileRightColumn');
  if (profileRightColumn) {
    onclick(
      profileRightColumn.lastElementChild,
      partial(interceptDebuff, fastDebuff),
      disableDeactivatePrompts,
    );
  }
}
