import dropItem from '../../ajax/dropItem';

export default async function dodropitem(itemsAry) {
  const response = await dropItem(itemsAry);
  const appResponse = { s: response.r === 0 };
  if (appResponse.s) {
    appResponse.r = { items: [], deleted_itesm: itemsAry };
  } else {
    appResponse.e = { message: response.m };
  }
  return appResponse;
}
