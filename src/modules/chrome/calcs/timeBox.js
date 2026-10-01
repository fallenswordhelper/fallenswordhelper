import { months } from '../../support/constants';
import { now } from '../../support/now';
import padZ from '../../system/padZ';

// game time is UTC, so label local times to avoid confusion
const timeZoneName = (aDate) =>
  new Intl.DateTimeFormat(undefined, { timeZoneName: 'short' })
    .formatToParts(aDate)
    .find((p) => p.type === 'timeZoneName')?.value ?? '';

function formatShortDate(aDate) {
  return `${padZ(aDate.getHours())}:${padZ(
    aDate.getMinutes(),
  )} ${aDate.toLocaleString('en', { weekday: 'short' })} ${padZ(
    aDate.getDate(),
  )}/${months[aDate.getMonth()]}/${aDate.getFullYear()}`;
}

export default function timeBox(dtClass, label, nextGainTime, hrsToGo) {
  const nextGain = nextGainTime?.split(' ').map((p) => p.slice(0, -1));
  if (!nextGain) {
    return '';
  }
  const aDate = new Date(
    now() +
      ((hrsToGo * 60 + Number(nextGain[0])) * 60 + Number(nextGain[1])) * 1000,
  );
  return `<dt class="${dtClass}">${label} (${timeZoneName(
    aDate,
  )})</dt><dd>${formatShortDate(aDate)}</dd>`;
}
