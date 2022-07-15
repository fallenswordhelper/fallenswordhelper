import getArrayByTagName from '../common/getArrayByTagName';
import includes from '../common/includes';
import { getPcl } from '../support/layout';
import task from '../support/task';
import getValue from '../system/getValue';

function doMsgSound() {
  const msg = getArrayByTagName('a', getPcl()).filter(includes('message'));
  if (msg.length) {
    const sound = new Audio(getValue('defaultMessageSound'));
    sound.play();
  }
}

export default function isMessageSound() {
  if (getValue('playNewMessageSound')) {
    task(3, doMsgSound);
  }
}
