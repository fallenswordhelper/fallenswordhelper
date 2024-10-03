import sendEvent from '../analytics/sendEvent';
import getElementById from '../common/getElementById';
import on from '../common/on';
import partial from '../common/partial';
import setInnerHtml from '../dom/setInnerHtml';

let textArea = 0;
let shoutboxPreview = 0;

function updateShoutboxPreview(maxcharacters) {
  sendEvent('Shoutbox Preview', maxcharacters === 150 ? 'shoutbox' : 'fsbox');
  let textContent = textArea.value;
  let chars = textContent.length;
  if (chars > maxcharacters) {
    textContent = textContent.substring(0, maxcharacters);
    textArea.value = textContent;
    chars = maxcharacters;
  }
  if (!shoutboxPreview) {
    shoutboxPreview = textArea.parentNode.parentNode.parentNode.parentNode
      .insertRow()
      .insertCell();
  }
  setInnerHtml(
    '<table class="sbpTbl"><tbody><tr>' +
      `<td class="sbpHdr">Preview (${chars}/${
        maxcharacters
      } characters)</td></tr><tr><td class="sbpMsg"><span>${
        textContent
      }</span></td></tr></tbody></table>`,
    shoutboxPreview,
  );
}

export default function injectShoutboxWidgets(maxcharacters) {
  textArea = getElementById('textInputBox');
  on(textArea, 'keyup', partial(updateShoutboxPreview, maxcharacters));
}
