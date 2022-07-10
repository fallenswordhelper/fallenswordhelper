import getArrayByTagName from '../common/getArrayByTagName';
import includes from '../common/includes';
import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';
import { getPcl } from '../support/layout';
import task from '../support/task';
import getValue from '../system/getValue';

function doMsgSound() {
  const msg = getArrayByTagName('a', getPcl()).filter(includes('message'));
  if (msg.length) {
    insertHtmlBeforeEnd(
      document.body,
      `<audio src="${getValue('defaultMessageSound')}" autoplay=true />`,
    );
  }
}

export default function isMessageSound() {
  if (getValue('playNewMessageSound')) {
    task(3, doMsgSound);
  }
}
