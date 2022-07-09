import calf from '../support/calf';
import daComposing from '../_dataAccess/daComposing';
import displayComposeMsg from './displayComposeMsg';
import { getNow } from '../support/now';
import getValue from '../system/getValue';
import jQueryPresent from '../common/jQueryPresent';
import setValue from '../system/setValue';
import {
  defLastComposeCheck,
  defNeedToCompose,
} from '../support/constants';

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
    setValue(defLastComposeCheck, getNow() + minTimeInSecs * 1000);
  } else {
    displayAlert();
  }
}

function parseComposingApp(result) {
  if (result.potions.length !== result.max_potions) {
    displayAlert();
  } else {
    potsBrewing(result.potions);
  }
}

function checkAppResponse(json) {
  if (json.s) { parseComposingApp(json.r); }
}

function checkLastCompose() { // jQuery.min
  const lastComposeCheck = getValue(defLastComposeCheck);
  if (lastComposeCheck && getNow() < lastComposeCheck) { return; }
  daComposing().then(checkAppResponse);
}

function composeAlert() {
  if (getValue(defNeedToCompose)) {
    displayComposeMsg();
  } else {
    checkLastCompose();
  }
}

export default function injectComposeAlert() {
  if (calf.cmd !== 'composing' && jQueryPresent()) { composeAlert(); }
}
