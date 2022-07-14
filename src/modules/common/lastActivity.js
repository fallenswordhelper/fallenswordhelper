import { lastActivityRE } from '../support/constants';
import { getNowSecs } from '../support/now';
import regExpGroups from './regExpGroups';

export default function lastActivity(str) {
  const {
    d: day, h: hour, m: min, s: sec,
  } = regExpGroups(lastActivityRE, str);
  const days = Number(day);
  const hours = Number(hour) + days * 24;
  const mins = Number(min) + hours * 60;
  const secs = Number(sec) + mins * 60;
  const timestamp = getNowSecs() - secs;
  return {
    day,
    days,
    hour,
    hours,
    min,
    mins,
    sec,
    secs,
    timestamp,
  };
}
