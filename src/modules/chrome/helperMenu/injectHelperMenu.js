import { mount } from 'svelte';
import querySelector from '../../common/querySelector';
import HelperMenu from './HelperMenu.svelte';

function startApp(props, target) {
  return mount(HelperMenu, {
    target: target.parentElement,
    props: { props },
  });
}

export default function injectHelperMenu() {
  const target = querySelector('.mainbody');
  if (target) startApp({}, target);
}
