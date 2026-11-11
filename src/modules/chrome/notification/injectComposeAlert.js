import composingView from '../../_dataAccess/fallbacks/composingView';
import jQueryPresent from '../../common/jQueryPresent';
import calf from '../../support/calf';
import { defLastComposeCheck, defNeedToCompose } from '../../support/constants';
import { now } from '../../support/now';
import getValue from '../../system/getValue';
import setValue from '../../system/setValue';
import displayComposeMsg from './displayComposeMsg';

function getTime(pot) {
  return pot.time_remaining;
}

function displayAlert() {
  displayComposeMsg();
  setValue(defNeedToCompose, true);
}

function potsBrewing(potions) {
  const minTimeInSecs = Math.min.apply(null, potions.map(getTime));
  if (minTimeInSecs > 0) {
    setValue(defNeedToCompose, false);
    setValue(defLastComposeCheck, now() + minTimeInSecs * 1000);
  } else {
    displayAlert();
  }
}

function parseComposingSlots({ max_potions: maxPotions, potions }) {
  if (potions.length !== maxPotions) {
    displayAlert();
  } else {
    potsBrewing(potions);
  }
}

async function checkLastCompose() {
  const lastComposeCheck = getValue(defLastComposeCheck);
  if (lastComposeCheck && now() < lastComposeCheck) return;
  const json = await composingView();
  if (json.s) parseComposingSlots(json.r);
}

function composeAlert() {
  if (getValue(defNeedToCompose)) {
    displayComposeMsg();
  } else {
    checkLastCompose();
  }
}

export default function injectComposeAlert() {
  if (
    calf.enableComposingAlert &&
    calf.cmd !== 'composing' &&
    jQueryPresent()
  ) {
    composeAlert();
  }
}
