import sendEvent from '../../analytics/sendEvent';

export default function keyHandlerEvent(func) {
  sendEvent('keyHandler', func);
}
