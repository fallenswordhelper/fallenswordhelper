import sendtofolder from '../app/profile/sendtofolder';
import $dataAccess from './$dataAccess';
import moveItems from './fallbacks/moveItems';

export default function daSendToFolder(folderId, itemsAry) {
  return $dataAccess(sendtofolder, moveItems, folderId, itemsAry);
}
