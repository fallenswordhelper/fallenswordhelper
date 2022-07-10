import { lastActivityRE } from '../support/constants';
import { getNowSecs } from '../support/now';
import regExpExec from './regExpExec';

export default function lastActivity(str) {
  const {
    d: day, h: hour, m: min, s: sec,
  } = regExpExec(lastActivityRE, str).groups;
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
