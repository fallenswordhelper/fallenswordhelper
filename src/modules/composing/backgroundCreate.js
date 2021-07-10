import { cdn } from '../system/system';
import createPotionFromTemplate from '../ajax/createPotionFromTemplate';
import { defNeedToCompose } from '../support/constants';
import getRandomInt from '../system/getRandomInt';
import partial from '../common/partial';
import { publish } from '../support/pubsub';
import querySelectorAll from '../common/querySelectorAll';
import setInnerHtml from '../dom/setInnerHtml';
import setValue from '../system/setValue';

function randomBackgroundImage() {
  return `url(${cdn}composing/${
    getRandomInt(1, 11)}_${getRandomInt(1, 51)}.png)`;
}

function updateInfoDiv(infoDiv, potName) {
  setInnerHtml('', infoDiv.children[0]);
  infoDiv.children[0].classList.add('fshPot');
  // eslint-disable-next-line no-param-reassign
  infoDiv.children[0].style.backgroundImage = randomBackgroundImage();
  setInnerHtml(`Creating '<span class="fshBold">${potName}</span>' Potion`,
    infoDiv.children[2]);
  setInnerHtml('', infoDiv.children[3]);
}

function amILast() {
  const openTemplates = querySelectorAll(
    '[id|="composing-template"]:not(#composing-template-multi)',
  );
  if (openTemplates.length === 0) {
    setValue(defNeedToCompose, false);
  }
}

function createSuccess(temp) {
  const myParent = temp.parentNode;
  if (!myParent) { return; }
  setInnerHtml('<div class="fshScs">Success</div>', myParent);
  updateInfoDiv(myParent.previousElementSibling.previousElementSibling,
    temp[temp.selectedIndex].text);
  amILast();
}

function potionDone(temp, data) {
  const resultNode = temp.parentNode;
  if (!resultNode || !data) { return; }
  if (data.error) {
    setInnerHtml(`<div class="fshScs">${data.error}</div>`, resultNode);
  } else {
    createSuccess(temp);
  }
}

function createPotion(temp) { // jQuery.min
  createPotionFromTemplate(temp.value).then(partial(potionDone, temp));
}

export default function backgroundCreate(target, temp) {
  // eslint-disable-next-line no-param-reassign
  temp.id = `proc-${temp.id}`;
  setInnerHtml('', target);
  target.classList.add('fshSpinner', 'fshSpinner12', 'fshComposingSpinner');
  createPotion(temp);
  publish('quickcreate');
}
