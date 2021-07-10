import getArrayByTagName from '../../common/getArrayByTagName';
import getElementById from '../../common/getElementById';

export default function getFolderImgs(doc) {
  const el = getElementById('pCC', doc).children[0].rows[4].cells[0].children[0];
  return getArrayByTagName('img', el);
}
