import querySelectorArray from '../../common/querySelectorArray';

export default function getFolderImgs(doc) {
  return querySelectorArray('#pCC img[src*="/folder"]', doc);
}
