import daRemoveSkill from '../../_dataAccess/daRemoveSkill';
import sendEvent from '../../analytics/sendEvent';
import errorDialog from '../../common/errorDialog';
import getElementById from '../../common/getElementById';
import hideQTip from '../../common/hideQTip';
import navigateTo from '../../common/navigateTo';
import onclick from '../../common/onclick';
import partial from '../../common/partial';
import regExpFirstCapture from '../../common/regExpFirstCapture';
import setInnerHtml from '../../dom/setInnerHtml';

function debuffSuccess(aLink, json) {
  if (json && json.s) { setInnerHtml('', aLink.parentNode); }
}

function doDebuff(fastDebuff, aLink) {
  if (fastDebuff) {
    sendEvent('profile', 'doDebuff');
    const buffId = regExpFirstCapture(/d=(?<id>\d{1,3})$/, aLink.href);
    daRemoveSkill(buffId).then(errorDialog).then(partial(debuffSuccess, aLink));
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
  if (!e.returnValue) { return; }
  const aLink = getALink(e.target);
  if (aLink.tagName !== 'A') { return; }
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
