import calf from '../../support/calf';
import getArrayByClassName from '../../common/getArrayByClassName';
import getElementById from '../../common/getElementById';
import getElementsByClassName from '../../common/getElementsByClassName';
import getTextTrim from '../../common/getTextTrim';
import hasClass from '../../common/hasClass';
import hideElement from '../../common/hideElement';
import hideNodeList from './hideNodeList';
import jQueryNotPresent from '../../common/jQueryNotPresent';
import onclick from '../../common/onclick';
import openQuickBuffByName from '../../common/openQuickBuffByName';
import partial from '../../common/partial';
import selfIdIs from '../../common/selfIdIs';

function toggleBuffSelected(on, off, evt) {
  evt.preventDefault();
  evt.target.classList.toggle(on);
  evt.target.classList.toggle(off);
}

function selectedBuff(parent, on) {
  const buffBalls = getArrayByClassName(on, parent);
  const sendstring = buffBalls.map((el) => getTextTrim(el.nextElementSibling));
  openQuickBuffByName(sendstring.join());
}

function eventsToHandle([parent, checkOn, checkOff, quickBuff]) {
  return [
    [partial(hasClass, checkOn), partial(toggleBuffSelected, checkOn, checkOff)],
    [partial(hasClass, checkOff), partial(toggleBuffSelected, checkOn, checkOff)],
    [selfIdIs(quickBuff), partial(selectedBuff, parent, checkOn)],
  ];
}

function handleEvent(evtAry, evt) {
  const hdl = evtAry.find((el) => el[0](evt.target));
  if (hdl) { return hdl[1](evt); }
}

function eventHandler([parent, checkOn, checkOff, quickBuff]) {
  return partial(handleEvent, eventsToHandle([parent, checkOn, checkOff, quickBuff]));
}

function doFixBuffSelected([parent, type, checkOn, quickBuff]) { // jQuery
  if (jQueryNotPresent) { return; }
  const checkOff = `${type}-buff-check-off`;
  $(`.${checkOn}`).off('click');
  $(`.${checkOff}`).off('click');
  $(`#${quickBuff}`).off('click');
  onclick(parent.parentNode, eventHandler([parent, checkOn, checkOff, quickBuff]));
}

export default function doHideBuffSelected(parent, type) {
  const checkOn = `${type}-buff-check-on`;
  const quickBuff = `${type}-quick-buff`;
  if (calf.hideBuffSelected) {
    hideNodeList(getElementsByClassName(checkOn, parent));
    hideElement(getElementById(quickBuff));
  } else if (calf.fixBuffSelected) {
    doFixBuffSelected([parent, type, checkOn, quickBuff]);
  }
}
