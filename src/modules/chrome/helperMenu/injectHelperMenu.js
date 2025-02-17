import { mount } from 'svelte';
import querySelector from '../../common/querySelector';
import HelperMenu from './HelperMenu.svelte';

export default function injectHelperMenu() {
  const target = querySelector('.mainbody');
  if (target) mount(HelperMenu, { target: target.parentElement });
}
