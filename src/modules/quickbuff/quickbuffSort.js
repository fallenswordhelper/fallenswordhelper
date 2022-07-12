import getElementById from '../common/getElementById';
import insertHtmlAfterEnd from '../common/insertHtmlAfterEnd';
import on from '../common/on';
import querySelector from '../common/querySelector';
import querySelectorAll from '../common/querySelectorAll';
import querySelectorArray from '../common/querySelectorArray';
import getValue from '../system/getValue';
import setValue from '../system/setValue';
import { quickBuffSortCheckbox, quickbuffSortStorageName } from './assets';

const defaultBuffOrder = [];

function sortBuffsHelper(parentElementId) {
  const buffs = querySelectorArray(`#${parentElementId} > p`);
  buffs.sort((a, b) => (a.children[0].dataset.name > b.children[0].dataset.name ? 1 : -1));
  const buffBlock = querySelector(`#${parentElementId}`);
  for (const value of buffs) {
    buffBlock.appendChild(value);
  }
}

function sortBuffsByDefaultOrder(id) {
  const buffBlock = querySelector(`#block${id}`);
  for (const value of defaultBuffOrder[id]) {
    buffBlock.appendChild(value);
  }
}

function sortBuffs(alphabetically) {
  for (let i = 1; i <= 3; i++) {
    if (alphabetically) {
      sortBuffsHelper(`block${i}`);
    } else {
      sortBuffsByDefaultOrder(i);
    }
  }
}

function onSortBuffsCheckboxChanged(event) {
  setValue(quickbuffSortStorageName, event.target.checked);
  sortBuffs(event.target.checked);
}

function storeDefaultBuffOrder() {
  for (let i = 1; i <= 3; i++) {
    const block = `block${i}`;
    defaultBuffOrder[i] = querySelectorAll(`#${block} > p`);
  }
}

export default function quickbuffSort() {
  storeDefaultBuffOrder();
  const quickbuffCheckAllCheckbox = getElementById('check-all');
  insertHtmlAfterEnd(quickbuffCheckAllCheckbox, quickBuffSortCheckbox);
  const quickbuffSortCheckbox = querySelector('.quickbuffSortCheckbox');
  const qbSortPref = getValue(quickbuffSortStorageName);
  quickbuffSortCheckbox.checked = qbSortPref;
  if (qbSortPref) {
    sortBuffs(qbSortPref);
  }
  on(quickbuffSortCheckbox, 'change', onSortBuffsCheckboxChanged);
}
