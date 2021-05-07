import { t as createDocument, H as getTextTrim, u as indexAjaxData, x as callApp, q as extend, $ as $dataAccess, aB as composingUrl, ac as insertHtmlAfterBegin, z as getElementById, c as calf, j as jQueryPresent, Y as setValue, aD as defNeedToCompose, aF as defLastComposeCheck, a7 as now, I as getValue } from './calfSystem-476ab75d.js';
import { g as getArrayByClassName } from './getArrayByClassName-4f67343e.js';

function formatTime(e) {
  const thisTime = e.match(/ETA: (\d+)h (\d+)m (\d+)s/);
  return {
    time_remaining: Number(thisTime[1]) * 60 * 60
    + Number(thisTime[2]) * 60
    + Number(thisTime[3]),
  };
}

function parseReport(html) {
  const doc = createDocument(html);
  const slots = getArrayByClassName('composing-potion', doc);
  if (slots.length === 0) { return { s: false }; }
  const maxPotions = slots.length;
  const potions = getArrayByClassName('composing-potion-time', doc)
    .map(getTextTrim)
    .filter((e) => e.endsWith('s'))
    .map(formatTime);
  return { r: { max_potions: maxPotions, potions }, s: true };
}

// Incomplete
function composing$1() {
  return indexAjaxData({ cmd: 'composing' }).then(parseReport);
}

function composing(data) {
  return callApp(extend({ cmd: 'composing' }, data));
}

function composingView() {
  return composing({ subcmd: 'view' });
}

function daComposing() {
  return $dataAccess(composingView, composing$1);
}

const composeMsg = `<li class="notification"><a href="${composingUrl}"><span`
  + ' class="notification-icon"></span><p class="notification-content">'
  + 'Composing to do</p></a></li>';

function displayComposeMsg() {
  insertHtmlAfterBegin(getElementById('notifications'), composeMsg);
}

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
    setValue(defLastComposeCheck, now + minTimeInSecs * 1000);
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
  if (lastComposeCheck && now < lastComposeCheck) { return; }
  daComposing().then(checkAppResponse);
}

function composeAlert() {
  if (getValue(defNeedToCompose)) {
    displayComposeMsg();
  } else {
    checkLastCompose();
  }
}

function injectComposeAlert() {
  if (calf.cmd !== 'composing' && jQueryPresent()) { composeAlert(); }
}

export default injectComposeAlert;
//# sourceMappingURL=injectComposeAlert-c03fb8b8.js.map
