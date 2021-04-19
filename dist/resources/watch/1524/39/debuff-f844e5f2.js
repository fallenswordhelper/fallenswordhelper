import { bq as profile, z as getElementById, o as onclick, s as partial, B as setInnerHtml, Y as sendEvent, O as navigateTo, aU as hideQTip } from './calfSystem-d5c49dc8.js';
import { e as errorDialog } from './errorDialog-e19553de.js';
import './dialogMsg-a960ad1e.js';

function removeskill(buffId) {
  return profile({
    subcmd: 'removeskill',
    skill_id: buffId,
  });
}

function daRemoveSkill(buffId) {
  return removeskill(buffId);
}

function debuffSuccess(aLink, json) {
  if (json && json.s) { setInnerHtml('', aLink.parentNode); }
}

function doDebuff(fastDebuff, aLink) {
  if (fastDebuff) {
    sendEvent('profile', 'doDebuff');
    const buffId = aLink.href.match(/(\d+)$/)[1];
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

function debuff(fastDebuff, disableDeactivatePrompts) {
  const profileRightColumn = getElementById('profileRightColumn');
  if (profileRightColumn) {
    onclick(profileRightColumn.lastElementChild,
      partial(interceptDebuff, fastDebuff), disableDeactivatePrompts);
  }
}

export default debuff;
//# sourceMappingURL=debuff-f844e5f2.js.map
