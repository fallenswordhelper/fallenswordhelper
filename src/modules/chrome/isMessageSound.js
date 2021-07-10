import getArrayByTagName from '../common/getArrayByTagName';
import getValue from '../system/getValue';
import includes from '../common/includes';
import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';
import { pCL } from '../support/layout';
import task from '../support/task';

function doMsgSound() {
  const msg = getArrayByTagName('a', pCL).filter(includes('message'));
  if (msg.length) {
    insertHtmlBeforeEnd(document.body,
      `<audio src="${getValue('defaultMessageSound')}" autoplay=true />`);
  }
}

export default function isMessageSound() {
  if (getValue('playNewMessageSound')) {
    task(3, doMsgSound);
  }
}
