import getElement from '../common/getElement';
import getText from '../common/getText';
import makeTimer from '../system/makeTimer';
import numberIsNaN from '../common/numberIsNaN';
import setText from '../dom/setText';
import splitTime from '../common/splitTime';

export default function combatCountdown() {
  const re = /(\S+ cannot be attacked again for another )(((\d{1,2}) minute\(s\)) and )?((\d{1,2}) second\(s\))/;

  const infoMsg = getElement('info-msg');

  const text = getText(infoMsg);
	if (text === undefined) { return; }
  const match = text.match(re);
  if (!match) { return; }
  const prefix = match[1];
  const minutes = numberIsNaN(parseInt(match[4], 10)) ? 0 : parseInt(match[4], 10);
  const seconds = parseInt(match[6], 10);

  const t0 = document.timeline.currentTime;
  const endTime = t0 + (60 * minutes + seconds) * 1000;


  const timer = makeTimer(
    () => {
      const tf = document.timeline.currentTime;
      const delta = Math.max(endTime - tf, 0);

      const time = splitTime(Math.floor(delta / 1000));

      let timeString = prefix;
      if (time[1] > 0) {
        timeString += `${time[1]} hours, `;
      }
      if (time[2] > 0) {
        timeString += `${time[2]} minutes, `;
      }
      timeString += `${time[3]} seconds`;

      setText(timeString, infoMsg);

      if (tf > endTime) { timer.abort(); }
    },
    1000,
  );
}
