import getElementById from '../common/getElementById';
import getValue from '../system/getValue';
import insertHtmlAfterEnd from '../common/insertHtmlAfterEnd';
import on from '../common/on';
import setValue from '../system/setValue';
import { quickBuffSortCheckbox, quickbuffSortStorageName } from './assets';

const defaultBuffOrder = [];

function sortBuffsHelper(parentElementId) {
  const buffs = document.querySelectorAll(`#${parentElementId} > p`);
  const buffsArray = Array.prototype.slice.call(buffs, 0);
  buffsArray.sort((a, b) => (a.children[0].dataset.name > b.children[0].dataset.name ? 1 : -1));
  const buffBlock = document.querySelector(`#${parentElementId}`);
  for (let i = 0; i < buffs.length; i++) {
    buffBlock.appendChild(buffsArray[i]);
  }
}

function sortBuffs(alphabetically) {
  for (let i = 1; i <= 3; i++) {
    if (alphabetically) {
      sortBuffsHelper(`block${i}`);
    } else {
      const blockId = `block${i}`;
      const buffBlock = document.querySelector(`#${blockId}`);
      for (let j = 0; j < defaultBuffOrder[blockId].length; j++) {
        buffBlock.appendChild(defaultBuffOrder[blockId][j]);
      }
    }
  }
}

function onSortBuffsCheckboxChanged() {
  const checkbox = getElementById('quickbuffSortCheckbox');
  setValue(quickbuffSortStorageName, checkbox.checked);
  sortBuffs(checkbox.checked);
}

export default function quickbuffSort() {
  // store the default order of buffs
  for (let i = 1; i <= 3; i++) {
    const block = `block${i}`;
    defaultBuffOrder[block] = document.querySelectorAll(`#${block} > p`);
  }
  const quickbuffCheckAllCheckbox = getElementById('check-all');
  insertHtmlAfterEnd(quickbuffCheckAllCheckbox, quickBuffSortCheckbox);
  const quickbuffSortCheckbox = getElementById('quickbuffSortCheckbox');
  const qbSortPref = getValue('qbSortBuffsAlphabetically');
  quickbuffSortCheckbox.checked = qbSortPref;
  sortBuffs(qbSortPref);
  on(quickbuffSortCheckbox, 'change', onSortBuffsCheckboxChanged);
}
