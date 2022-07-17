import { nowSecs } from '../support/now';

export default function lastActivityToDays(lastActivity) {
  return Math.floor(Math.max(0, nowSecs() - lastActivity) / 86400);
}
