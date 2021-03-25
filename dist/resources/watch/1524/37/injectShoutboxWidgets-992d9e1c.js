import { z as getElementById, k as on, s as partial, B as setInnerHtml } from './calfSystem-6840a38e.js';

let textArea;
let shoutboxPreview;

function updateShoutboxPreview(maxcharacters) {
  let textContent = textArea.value;
  let chars = textContent.length;
  if (chars > maxcharacters) {
    textContent = textContent.substring(0, maxcharacters);
    textArea.value = textContent;
    chars = maxcharacters;
  }
  if (!shoutboxPreview) {
    shoutboxPreview = textArea.parentNode.parentNode.parentNode.parentNode
      .insertRow().insertCell();
  }
  setInnerHtml('<table class="sbpTbl"><tbody><tr>'
    + `<td class="sbpHdr">Preview (${chars}/${
      maxcharacters} characters)</td></tr><tr><td class="sbpMsg"><span>${
      textContent}</span></td></tr></tbody></table>`, shoutboxPreview);
}

function injectShoutboxWidgets(maxcharacters) {
  textArea = getElementById('textInputBox');
  on(textArea, 'keyup', partial(updateShoutboxPreview, maxcharacters));
}

export { injectShoutboxWidgets as i };
//# sourceMappingURL=injectShoutboxWidgets-992d9e1c.js.map
