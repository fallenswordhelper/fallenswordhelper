import dynamicAlert from '../alert/dynamicAlert';
import getArrayByTagName from '../common/getArrayByTagName';
import includes from '../common/includes';
import { pcl } from '../support/layout';
import task from '../support/task';
import getValue from '../system/getValue';

async function msgSound() {
  const sound = new Audio(getValue('defaultMessageSound'));
  try {
    sound.play();
  } catch (err) {
    dynamicAlert('Message Sound Not Allowed');
  }
}

function doMsgSound() {
  const msg = getArrayByTagName('a', pcl()).filter(includes('message'));
  if (msg.length) msgSound();
}

export default function isMessageSound() {
  if (getValue('playNewMessageSound')) task(3, doMsgSound);
}
