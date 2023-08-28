import moveItem from '../../ajax/moveItem';

export default async function moveItems(folderId, itemsAry) {
  await moveItem(itemsAry, folderId);
  return { r: itemsAry };
}
