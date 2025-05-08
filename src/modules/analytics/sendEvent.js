import stdout from '../support/stdout';
import noGa from './noGa';

export default function sendEvent(eventCategory, eventAction, eventLabel) {
  if (noGa()) { return; }
  ga('fshApp.send', 'event', eventCategory, eventAction, eventLabel);
  if (defineUserIsDev) stdout('sendEvent', eventCategory, eventAction, eventLabel);
}
