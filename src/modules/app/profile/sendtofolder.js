import profile from './profile';

export default function sendtofolder(folderId, itemsAry) {
  return profile({
    subcmd: 'sendtofolder',
    folder_id: folderId,
    folderItem: itemsAry,
  });
}
