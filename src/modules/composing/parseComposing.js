import getArrayByClassName from '../common/getArrayByClassName';
import getText from '../common/getText';
import regExpGroups from '../common/regExpGroups';
import calf from '../support/calf';
import {
  defLastComposeCheck,
  defNeedToCompose,
  etaRe,
} from '../support/constants';
import { getNow } from '../support/now';
import setValue from '../system/setValue';

function timeRemaining(el) {
  const timeGroup = regExpGroups(etaRe, getText(el));
  if (timeGroup) {
    const { h, m, s } = timeGroup;
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
