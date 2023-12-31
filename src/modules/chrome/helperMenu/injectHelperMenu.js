import querySelector from '../../common/querySelector';
import HelperMenu from './HelperMenu.svelte';

function startApp(props, target) {
  return new HelperMenu({
    target: target.parentElement,
    props: { props },
  });
}

export default function injectHelperMenu() {
  const target = querySelector('.mainbody');
  startApp({}, target);
}
