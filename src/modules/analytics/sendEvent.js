import devStdOut from '../support/devStdOut';
import { phEvent } from './posthog';

function spaceToUnderscore(maybeStr) {
  return String(maybeStr).replaceAll(' ', '_');
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

const seen = {};

function buildKey(eventType, eventLabel) {
  let key = eventType;
  if (eventLabel) key += `__${spaceToUnderscore(eventLabel)}`;
  return key;
}

export default function sendEvent(eventCategory, eventAction, eventLabel) {
  if (!eventCategory) {
    devStdOut('sendEvent', eventCategory, eventAction, eventLabel);
    return;
  }
  const eventType = buildEvent(eventCategory, eventAction);
  const eventKey = buildKey(eventType, eventLabel);
  if (seen[eventKey]) return;
  seen[eventKey] = true;
  phEvent(eventType, buildProps(eventLabel));
}
