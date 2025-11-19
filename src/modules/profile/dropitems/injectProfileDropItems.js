import { mount } from "svelte";
import asyncPThree from '../../common/asyncPThree';
import jQueryNotPresent from '../../common/jQueryNotPresent';
import querySelector from "../../common/querySelector";
import getCheckboxes from '../../guild/inventory/storeitems/getCheckboxes';
import injectStoreItems from '../../guild/inventory/storeitems/injectStoreItems';
import { pcc } from "../../support/layout";
import DropItems from "./DropItems.svelte";
import injectMoveItems from './injectMoveItems';
import interceptDestroy from './interceptDestroy';

const p3Functions = [injectMoveItems, injectStoreItems, interceptDestroy];

export default function injectProfileDropItems() {
  if (!querySelector('.backpack-manage-container')) return;
  mount(DropItems, { target: pcc() });
  if (jQueryNotPresent() || !getCheckboxes()) {
    return;
  }
  asyncPThree(p3Functions);
}
