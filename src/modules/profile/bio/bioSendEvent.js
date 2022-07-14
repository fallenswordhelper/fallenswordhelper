import sendEvent from '../../analytics/sendEvent';
import calf from '../../support/calf';

export default function bioSendEvent(evtMsg) {
  if (calf.subcmd === '-') { sendEvent('profile', evtMsg); }
}
