import equipItem from '../ajax/equipItem';
import recallItem from '../ajax/recallItem';
import useItem from '../ajax/useItem';
import errorDialog from '../common/errorDialog';
import partial from '../common/partial';
import backpack from './backpack';
import doAction from './doAction';

function gotBackpack(action, data, bpData) {
  // assuming backpack is successful...
  const lastBackpackItem = bpData.items[bpData.items.length - 1].a;
  if (action === 'wear') {
    return doAction(equipItem, lastBackpackItem, data);
    // Return recall status irrespective of the status of the equipitem
  }
  if (action === 'use') {
    return doAction(useItem, lastBackpackItem, data);
    // Return recall status irrespective of the status of the useitem
  }
}

function recallItemStatus(action, data) {
  if (data.r === 0 && action !== 'recall') {
    return backpack().then(partial(gotBackpack, action, data));
  }
  return data;
}

export default function pipeRecallToQueue(invId, playerId, mode, action) {
  return recallItem(invId, playerId, mode).then(errorDialog)
    .then(partial(recallItemStatus, action));
}
