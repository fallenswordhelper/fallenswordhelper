import getElement from '../common/getElement';
import getText from '../common/getText';
import getValue from '../system/getValue';
import makeTimer from '../system/makeTimer';
import setText from '../dom/setText';
import splitTime from '../common/splitTime';

function makeTimeString(millis) {
  const time = splitTime(Math.floor(millis / 1000));
  let timeString = '';
  if (time[1] > 0) {
    timeString += `${time[1]} hours, `;
  }
  if (time[2] > 0) {
    timeString += `${time[2]} minutes, `;
  }
  timeString += `${time[3]} seconds`;
  return timeString;
}

function startTimer(endTime, prefix, infoMsg) {
  const timer = makeTimer(
    () => {
      const ct = document.timeline.currentTime;
      const delta = Math.max(endTime - ct, 0);

      const timeString = prefix + makeTimeString(delta);
      setText(timeString, infoMsg);

      if (ct > endTime) {
        timer.abort();
        if (getValue('playNewMessageSound')) {
          // eslint-disable-next-line no-undef
          new Audio(getValue('defaultMessageSound')).play();
        }
      }
    },
    1000,
  );
  return timer;
}

export default function combatCountdown() {
  const re = /(\S+ cannot be attacked again for another )(((\d{1,2}) minute\(s\)) and )?((\d{1,2}) second\(s\))/;

  const infoMsg = getElement('info-msg');

  const text = getText(infoMsg);
  const match = text !== undefined ? text.match(re) : false;
  if (!match) { return; }

  const prefix = match[1];
  const minutes = match[4] === undefined ? 0 : parseInt(match[4], 10);
  const seconds = parseInt(match[6], 10);

  const startTime = document.timeline.currentTime;
  const endTime = startTime + (60 * minutes + seconds) * 1000;

  startTimer(endTime, prefix, infoMsg);
}
