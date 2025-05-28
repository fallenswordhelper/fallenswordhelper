import querySelector from '../common/querySelector';
import getCustomUrlParameter from '../system/getCustomUrlParameter';

export default function getCurrentFolderId() {
  const currentFolderHref = querySelector('#pCC img[src*="/folder_on."]')
    .parentNode.href;
  return getCustomUrlParameter(currentFolderHref, 'folder_id');
}
