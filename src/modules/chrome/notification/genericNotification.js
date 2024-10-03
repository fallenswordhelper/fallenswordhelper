import sendEvent from '../../analytics/sendEvent';
import createAnchor from '../../common/cElement/createAnchor';
import createLi from '../../common/cElement/createLi';
import getElementById from '../../common/getElementById';
import insertElement from '../../common/insertElement';
import onclick from '../../common/onclick';

export default function genericNotification(eventAction, text, url) {
  const li = createLi({ className: 'notification' });
  const anchor = createAnchor({
    href: url,
    innerHTML: `<span class="notification-icon"></span><p class="notification-content">${text}</p>`,
  });
  onclick(anchor, () => {
    sendEvent('notification', eventAction);
  });
  insertElement(li, anchor);
  insertElement(getElementById('notifications'), li);
}
