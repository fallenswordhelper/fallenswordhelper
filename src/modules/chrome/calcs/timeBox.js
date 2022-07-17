import { months } from '../../support/constants';
import { now } from '../../support/now';
import padZ from '../../system/padZ';

function formatShortDate(aDate) {
  return `${padZ(aDate.getHours())}:${
    padZ(aDate.getMinutes())} ${
    aDate.toLocaleString('en', { weekday: 'short' })} ${
    padZ(aDate.getDate())}/${
    months[aDate.getMonth()]}/${
    aDate.getFullYear()}`;
}

export default function timeBox(nextGainTime, hrsToGo) {
  const nextGain = nextGainTime.split(' ').map((p) => p.slice(0, -1));
  if (!nextGain) { return; }
  return `<dd>${formatShortDate(new Date(
    now() + ((hrsToGo * 60 + Number(nextGain[0])) * 60
    + Number(nextGain[1])) * 1000,
  ))}</dd>`;
}
