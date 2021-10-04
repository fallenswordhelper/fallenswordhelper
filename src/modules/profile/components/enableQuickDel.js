import closestTd from '../../common/closestTd';
import deleteBatch from './deleteBatch';
import getProps from './getProps';
import hideQTip from '../../common/hideQTip';
import onclick from '../../common/onclick';
import sendEvent from '../../analytics/sendEvent';

function quickDel(e) {
  if (e.target.tagName !== 'IMG') { return; }
  e.preventDefault();
  sendEvent('components', 'quickDel');
  hideQTip(e.target);
  deleteBatch([[closestTd(e.target), ...getProps(e.target)]]);
}

export default function enableQuickDel(thisInvTable) {
  thisInvTable.classList.add('fshQuickDel');
  onclick(thisInvTable, quickDel);
}
