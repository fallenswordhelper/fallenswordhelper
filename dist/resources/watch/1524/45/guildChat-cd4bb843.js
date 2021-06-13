import { p as pCC, aH as contains, I as getValue, k as on, s as partial, ag as arrayFrom, i as insertElement, R as clickThis, E as querySelector, S as getUrlParameter } from './calfSystem-02fd040d.js';
import { c as closestTable } from './closestTable-73233069.js';
import { c as createTextArea } from './createTextArea-b26d25db.js';
import { g as getArrayByClassName } from './getArrayByClassName-bfd9e53d.js';
import { a as addLogColoring } from './addLogColoring-20f6cd22.js';
import './closest-8e46d454.js';
import './createStyle-a3fa6839.js';
import './dataRows-17b071b0.js';
import './doBuffLinkClick-c58696d9.js';
import './openQuickBuffByName-2e9d4b7d.js';
import './fshOpen-d0a5bbc1.js';
import './parseDateAsTimestamp-b803bda9.js';

function removeCrlf(fshTxt) {
  // eslint-disable-next-line no-param-reassign
  fshTxt.value = fshTxt.value.replace(/\r\n|\n|\r/g, ' ');
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
    cols: 72,
    maxLength: 512,
    name: 'msg',
    required: true,
    rows: 2,
  });
  formAttr(fshTxt);
  return fshTxt;
}

const dont = () => !pCC
  || getArrayByClassName('header', pCC).filter(contains('Posted\xa0By')).length !== 1
  || !getValue('enhanceChatTextEntry');

function addChatTextArea() {
  if (dont()) { return; }
  const theForm = document.forms[0];
  setDoChat(theForm);
  rearrangeTable(theForm.elements);
  const fshTxt = makeTextArea();
  on(fshTxt, 'keypress', partial(keypress, theForm.elements[5]));
  theForm.elements[4].replaceWith(fshTxt);
  on(theForm, 'submit', partial(removeCrlf, fshTxt));
}

var css = ".fshGc {\n  table-layout: fixed;\n  overflow-wrap: break-word;\n}\n.fshGc td:nth-child(1) {width: 120px;}\n.fshGc td:nth-child(2) {width: 100px;}\n.fshGc td:nth-child(3) {width: 418px;}\n";
var modules_ecc4a754 = {};

function guildChatStyling() {
  if (!getValue('wrapGuildChat')) { return; }
  const chatTable = querySelector('#pCC table table table table');
  if (!chatTable) { return; }
  chatTable.classList.add('fshGc');
}

function guildChat() {
  guildChatStyling();
  addChatTextArea();
  const chatType = getUrlParameter('chat_type');
  if (chatType && chatType === '1') {
    addLogColoring('Leader', 0, 3);
  } else {
    addLogColoring('Chat', 0, 3);
  }
}

export default guildChat;
//# sourceMappingURL=guildChat-cd4bb843.js.map
