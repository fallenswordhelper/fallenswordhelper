import sendEvent from '../analytics/sendEvent';
import getPlayerId from './getPlayerId';
import hasClass from './hasClass';
import openQuickBuffById from './openQuickBuffById';

const isBuffLink = (target) => hasClass('fshBl', target)
  && target.previousElementSibling;

export default function doBuffLinkClick(e) {
  if (isBuffLink(e.target)) {
    sendEvent('common', 'doBuffLinkClick');
    openQuickBuffById(getPlayerId(e.target.previousElementSibling.href));
  }
}
