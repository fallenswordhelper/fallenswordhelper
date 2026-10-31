import './skipDestroyPrompts.css';
import getElementById from '../../common/getElementById';
import insertElementAfter from '../../common/insertElementAfter';
import skipGamePrompts from '../../common/skipGamePrompts';
import prefCheckbox from '../../settings/prefCheckbox';

const pref = 'disableDestroyPrompts';

const destroyPrompts = [
  /^Are you absolutely sure you wish to destroy the selected items\?$/,
  /^Are you sure you want to destroy (this item|all items of this type)\?$/,
];

export default function skipDestroyPrompts() {
  skipGamePrompts(pref, destroyPrompts);
  const dropButton = getElementById('drop-selected-items');
  if (!dropButton) return;
  const checkbox = prefCheckbox(pref);
  checkbox.classList.add('fshDestroyPref');
  insertElementAfter(checkbox, dropButton);
}
