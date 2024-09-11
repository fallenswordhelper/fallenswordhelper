import stdout from '../support/stdout';
import { phEvent } from './posthog';

function spaceToUnderscore(str) {
  return str.replaceAll(' ', '_');
}

function buildEvent(eventCategory, eventAction) {
  let phe = spaceToUnderscore(eventCategory);
  if (eventAction) phe += `__${spaceToUnderscore(eventAction)}`;
  return phe;
}

function buildProps(eventLabel) {
  if (eventLabel) return { eventLabel };
  return null;
}

export default function sendEvent(eventCategory, eventAction, eventLabel) {
  if (!eventCategory) {
    if (defineUserIsDev) stdout('sendEvent', eventCategory, eventAction, eventLabel);
    return;
  }
  phEvent(buildEvent(eventCategory, eventAction), buildProps(eventLabel));
}
