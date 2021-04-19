import arrayFrom from '../common/arrayFrom';
import clickThis from '../common/clickThis';
import closestTable from '../common/closestTable';
import contains from '../common/contains';
import createTextArea from '../common/cElement/createTextArea';
import getArrayByClassName from '../common/getArrayByClassName';
import getValue from '../system/getValue';
import insertElement from '../common/insertElement';
import on from '../common/on';
import { pCC } from '../support/layout';
import partial from '../common/partial';

function removeCrlf(fshTxt) {
  // eslint-disable-next-line no-param-reassign
  fshTxt.value = fshTxt.value.replace(/\r\n|\n|\r/g, ' ');
}

function setDoChat(el) {
  el.setAttribute('form', 'dochat');
}

function rearrangeTable(elements) {
  const theTable = closestTable(elements[5]);
  theTable.rows[0].cells[0].remove();
  insertElement(theTable.insertRow(-1).insertCell(-1), elements[6]);
  theTable.rows[0].cells[0].rowSpan = 2;
}

function keypress(sendBtn, evt) {
  if (evt.key === 'Enter' && !evt.shiftKey) {
    evt.preventDefault();
    clickThis(sendBtn);
  }
}

function makeTextArea() {
  const fshTxt = createTextArea({
    cols: 72,
    maxLength: 512,
    name: 'msg',
    required: true,
    rows: 2,
  });
  setDoChat(fshTxt);
  return fshTxt;
}

const dont = () => !pCC
  || getArrayByClassName('header', pCC).filter(contains('Posted\xa0By')).length !== 1
  || !getValue('enhanceChatTextEntry');

export default function addChatTextArea() {
  if (dont()) { return; }
  const theForm = document.forms[0];
  theForm.id = 'dochat';
  arrayFrom(theForm.elements).forEach(setDoChat);
  rearrangeTable(theForm.elements);
  const fshTxt = makeTextArea();
  on(fshTxt, 'keypress', partial(keypress, theForm.elements[5]));
  theForm.elements[4].replaceWith(fshTxt);
  on(theForm, 'submit', partial(removeCrlf, fshTxt));
}
