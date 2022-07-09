import calf from '../support/calf';
import getArrayByClassName from '../common/getArrayByClassName';
import { getNow } from '../support/now';
import getText from '../common/getText';
import setValue from '../system/setValue';
import {
  defLastComposeCheck,
  defNeedToCompose,
} from '../support/constants';

const timeRE = /ETA:\s*(?<h>\d+)h\s*(?<m>\d+)m\s*(?<s>\d+)s/;

function timeRemaining(el) {
  const timeArr = timeRE.exec(getText(el));
  if (timeArr) {
    const { h, m, s } = timeArr.groups;
    return (h * 3600 + m * 60 + Number(s)) * 1000 + getNow();
  }
  return 0;
}

function setNeed(bool) {
  setValue(defNeedToCompose, bool);
}

export default function parseComposing() {
  if (!calf.enableComposingAlert) { return; }
  const openSlots = getArrayByClassName('composing-potion-time', document);
  const eta = Math.min(...openSlots.map(timeRemaining));
  if (eta === 0) {
    setNeed(true);
  } else {
    setNeed(false);
    setValue(defLastComposeCheck, eta);
  }
}
