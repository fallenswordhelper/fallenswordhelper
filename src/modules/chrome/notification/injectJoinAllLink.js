import calf from '../../support/calf';
import closest from '../../common/closest';
import contains from '../../common/contains';
import createLi from '../../common/cElement/createLi';
import delay from '../../_dataAccess/delay';
import getArrayByTagName from '../../common/getArrayByTagName';
import getElementById from '../../common/getElementById';
import indexAjaxData from '../../ajax/indexAjaxData';
import insertElementAfter from '../../common/insertElementAfter';
import insertElementAfterBegin from '../../common/insertElementAfterBegin';
import once from '../../common/once';
import { pCL } from '../../support/layout';
import setInnerHtml from '../../dom/setInnerHtml';
import { joinUnderUrl, joinallUrl } from '../../support/constants';

function buildHandler(newAttackGroup) {
  return async function handler(e) {
    // console.log(e);
    e.preventDefault();
    const li = closest('li', e.target);
    setInnerHtml('<span class="notification-icon"></span>'
      + '<span class="notification-content fshSpinner fshRelative"></span>', li);
    if (newAttackGroup) {
      await indexAjaxData({ cmd: 'guild', subcmd: 'groups', subcmd2: 'joinall' });
    } else {
      await delay(1000);
    }
    setInnerHtml(
      '<span class="notification-icon"></span>'
        + '<p class="notification-content" style="line-height: 32px;">Joined.</p>',
      li,
    );
  };
}

function joinAllLink(newAttackGroup) {
  const groupJoinUrl = calf.enableMaxGroupSizeToJoin ? joinUnderUrl : joinallUrl;
  const groupJoinText = calf.enableMaxGroupSizeToJoin ? ` less than size ${
    calf.maxGroupSizeToJoin}` : '';
  const notification = createLi({
    className: 'notification',
    innerHTML: `<a href="${groupJoinUrl}"><span class="notification-icon"></span>`
      + `<p class="notification-content">Join all attack groups${groupJoinText}.</p></a>`,
  });
  once(notification, 'click', buildHandler(newAttackGroup), true);
  if (newAttackGroup) {
    insertElementAfter(notification, newAttackGroup);
  } else {
    insertElementAfterBegin(getElementById('notifications'), notification);
  }
}

export default function injectJoinAllLink() {
  const newAttackGroup = getArrayByTagName('li', pCL)
    .find(contains('New attack group created.'));
  if (newAttackGroup) { joinAllLink(newAttackGroup); }
  if (calf.userIsDev && !newAttackGroup) { joinAllLink(); }
}
