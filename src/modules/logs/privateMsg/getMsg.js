import closestTr from '../../common/closestTr';
import getTextTrim from '../../common/getTextTrim';

export default function getMsg(target) {
  return getTextTrim(closestTr(target).children[3].childNodes[0]);
}
