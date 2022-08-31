import calf from '../support/calf';
import noGa from './noGa';

export default function sendEvent(eventCategory, eventAction, eventLabel) {
  if (noGa()) { return; }
  ga('fshApp.send', 'event', eventCategory, eventAction, eventLabel);
  // eslint-disable-next-line no-console
  if (calf.userIsDev) console.log('sendEvent', eventCategory, eventAction, eventLabel); // skipcq: JS-0002
}
