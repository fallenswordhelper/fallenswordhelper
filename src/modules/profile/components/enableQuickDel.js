import sendEvent from '../../analytics/sendEvent';
import closestTd from '../../common/closestTd';
import hideQTip from '../../common/hideQTip';
import onclick from '../../common/onclick';
import deleteBatch from './deleteBatch';
import getProps from './getProps';

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
