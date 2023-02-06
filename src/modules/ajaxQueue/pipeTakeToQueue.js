import equipItem from '../ajax/equipItem';
import takeItem from '../ajax/takeItem';
import useItem from '../ajax/useItem';
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

export default async function pipeTakeToQueue(invId, action, prm) {
  // You have to chain them because they could be modifying the backpack
  await prm;
  const json = await takeItem(invId);
  return takeItemStatus(action, json);
}
