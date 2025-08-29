import sendEvent from '../analytics/sendEvent';
import getValue from '../system/getValue';
import fshOpen from './fshOpen';

export default function interceptQuickBuff() {
  if (!getValue('resizeQuickBuff')) return;
  window.openWindow = function fshQb(url, title, w, _h, features) {
    sendEvent('chrome', 'interceptQuickBuff');
    fshOpen(url, title, w, _h, features);
  };
}
