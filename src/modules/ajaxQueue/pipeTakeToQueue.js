import equipItem from '../ajax/equipItem';
import takeItem from '../ajax/takeItem';
import useItem from '../ajax/useItem';
import partial from '../common/partial';
import doAction from './doAction';

function additionalAction(action, data) {
  if (action === 'wear') {
    return doAction(equipItem, data.b, data);
    // Return takeitem status irrespective of the status of the equipitem
  }
  if (action === 'use') {
    return doAction(useItem, data.b, data);
    // Return takeitem status irrespective of the status of the useitem
  }
}

function takeItemStatus(action, data) {
  if (data.r === 0 && action !== 'take') {
    return additionalAction(action, data);
  }
  return data;
}

export default function pipeTakeToQueue(invId, action) {
  return takeItem(invId).then(partial(takeItemStatus, action));
}
