import asyncPThree from '../../common/asyncPThree';
import jQueryNotPresent from '../../common/jQueryNotPresent';
import getCheckboxes from '../../guild/inventory/storeitems/getCheckboxes';
import injectStoreItems from '../../guild/inventory/storeitems/injectStoreItems';
import injectMoveItems from './injectMoveItems';
import interceptDestroy from './interceptDestroy';

const p3Functions = [
  injectMoveItems,
  injectStoreItems,
  interceptDestroy,
];

export default function injectProfileDropItems() {
  if (jQueryNotPresent() || !getCheckboxes()) { return; }
  asyncPThree(p3Functions);
}
