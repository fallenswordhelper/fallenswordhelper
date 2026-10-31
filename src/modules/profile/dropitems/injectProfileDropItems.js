import { mount } from 'svelte';
import querySelector from '../../common/querySelector';
import { pcc } from '../../support/layout';
import DropItems from './DropItems.svelte';
import skipDestroyPrompts from './skipDestroyPrompts';

export default function injectProfileDropItems() {
  if (!querySelector('.backpack-manage-container')) return;
  mount(DropItems, { target: pcc() });
  skipDestroyPrompts();
}
