import sendEvent from '../analytics/sendEvent';
import fshOpen from './fshOpen';

export default function interceptQuickBuff() {
  // codebeat:disable[ARITY]
  window.openWindow = function fshQb(url, title, w, _h, features) {
    sendEvent('chrome', 'interceptQuickBuff');
    fshOpen(url, title, w, _h, features);
  };
  // codebeat:enable[ARITY]
}
