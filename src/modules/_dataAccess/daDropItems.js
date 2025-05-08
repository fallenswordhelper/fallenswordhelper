import dropItem from '../ajax/dropItem';
import appDrop from '../app/profile/dodropitems';
import $dataAccess from './$dataAccess';

async function dodropitem(itemsAry) {
  const response = await dropItem(itemsAry);
  const appResponse = { s: response.r === 0 };
  if (appResponse.s) {
    appResponse.r = { items: [], deleted_items: itemsAry };
  } else {
    appResponse.e = { message: response.m };
  }
  return appResponse;
}

export default function daDropItems(itemsAry) {
  return $dataAccess(appDrop, dodropitem, itemsAry);
}
