import moveItem from '../ajax/moveItem';
import sendtofolder from '../app/profile/sendtofolder';
import $dataAccess from './$dataAccess';

async function moveItems(folderId, itemsAry) {
  await moveItem(itemsAry, folderId);
  return { r: itemsAry };
}

export default function daSendToFolder(folderId, itemsAry) {
  return $dataAccess(sendtofolder, moveItems, folderId, itemsAry);
}
