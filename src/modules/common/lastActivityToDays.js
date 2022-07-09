import { getNowSecs } from '../support/now';

export default function lastActivityToDays(lastActivity) {
  return Math.floor(Math.max(0, getNowSecs() - lastActivity) / 86400);
}
