import closestTd from '../../common/closestTd';
import querySelectorArray from '../../common/querySelectorArray';
import deleteBatch from './deleteBatch';
import getProps from './getProps';

const prepare = (i) => [closestTd(i), ...getProps(i)];

export default function deleteAllVisible(thisInvTable) {
  deleteBatch(querySelectorArray('img', thisInvTable).map(prepare));
}
