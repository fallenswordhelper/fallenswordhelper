import { nowSecs, oneDayAgo } from '../support/now';
import getValue from '../system/getValue';
import setValue from '../system/setValue';
import { phEvent } from './posthog';

export default function screenview(funcName) {
  const eventType = `screenview__${funcName}`;
  const lastScreenView = getValue(eventType);
  if (Number.isFinite(lastScreenView) && lastScreenView > oneDayAgo()) return;
  phEvent(eventType);
  setValue(eventType, nowSecs());
}
