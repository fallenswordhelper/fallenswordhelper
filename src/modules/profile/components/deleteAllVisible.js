import closestTd from '../../common/closestTd';
import deleteBatch from './deleteBatch';
import getProps from './getProps';
import querySelectorArray from '../../common/querySelectorArray';

const prepare = (i) => [closestTd(i), ...getProps(i)];

export default function deleteAllVisible(thisInvTable) {
  deleteBatch(querySelectorArray('img', thisInvTable).map(prepare));
}
