import alert from '../../alert/alert';
import closestTd from '../../common/closestTd';
import createDiv from '../../common/cElement/createDiv';
import hideQTip from '../../common/hideQTip';
import { itemRE } from '../../support/constants';
import onclick from '../../common/onclick';
import setValue from './setValue';

function quickDel(e) {
  if (e.target.tagName !== 'IMG') { return; }
  e.preventDefault();
  // console.log(e);
  const matches = e.target.dataset.tipped.match(itemRE);
  // console.log(matches);
  const itemId = Number(matches[1]);
  alert.set(`quickDel ${itemId}`);
  const thisTd = closestTd(e.target);
  const center = thisTd.children[0];
  hideQTip(e.target);
  center.replaceWith(createDiv({
    className: 'compSumSpin',
    innerHTML: '<span class="fshSpinner fshSpinner12"></span>',
  }));
  setValue(itemId, 'delPending', true);
  setTimeout(() => {
    setValue(itemId, 'delPending', false);
    thisTd.children[0].replaceWith(center);
  }, 2000);
}

export default function enableQuickDel(thisInvTable) {
  thisInvTable.classList.add('fshQuickDel');
  onclick(thisInvTable, quickDel);
  alert.set('enableQuickDel');
}
