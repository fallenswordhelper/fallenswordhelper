import './addChatTextArea.css';
import arrayFrom from '../common/arrayFrom';
import createTextArea from '../common/cElement/createTextArea';
import clickThis from '../common/clickThis';
import closestTable from '../common/closestTable';
import contains from '../common/contains';
import getArrayByClassName from '../common/getArrayByClassName';
import insertElement from '../common/insertElement';
import on from '../common/on';
import partial from '../common/partial';
import { pcc } from '../support/layout';
import getValue from '../system/getValue';

function removeCrlf(fshTxt) {
  // eslint-disable-next-line no-param-reassign
  fshTxt.value = fshTxt.value
    .replace(/\r\n|\n|\r/g, ' ')
    .replace(/'/g, '’')
    // https://stackoverflow.com/a/27449493/1274806
    .replace(/(?<a>^|\s)(?<b>")/g, '$1“') // replace quotes that start a line or follow spaces
    .replace(/"/g, '”') // replace quotes that start a line or follow spaces
    .replace('<', '＜'); // open angle bracket - sohail94
}

const formAttr = (el) => { el.setAttribute('form', 'dochat'); };

function setDoChat(theForm) {
  // eslint-disable-next-line no-param-reassign
  theForm.id = 'dochat';
  arrayFrom(theForm.elements).forEach(formAttr);
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
    className: 'fshChatTextArea',
    maxLength: 512,
    name: 'msg',
    required: true,
  });
  formAttr(fshTxt);
  return fshTxt;
}

const dont = () => !pcc()
  || getArrayByClassName('header', pcc()).filter(contains('Posted\xa0By')).length !== 1
  || !getValue('enhanceChatTextEntry');

export default function addChatTextArea() {
  if (dont()) { return; }
  const theForm = document.forms[0];
  setDoChat(theForm);
  rearrangeTable(theForm.elements);
  const fshTxt = makeTextArea();
  on(fshTxt, 'keypress', partial(keypress, theForm.elements[5]));
  theForm.elements[4].replaceWith(fshTxt);
  on(theForm, 'submit', partial(removeCrlf, fshTxt));
}
