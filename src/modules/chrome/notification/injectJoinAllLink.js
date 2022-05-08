import JoinAllLink from './JoinAllLink.svelte';
import getElementById from '../../common/getElementById';

function mountApp(newGroup) {
  return new JoinAllLink({
    anchor: newGroup.nextElementSibling,
    target: newGroup.parentNode,
  });
}

export default function injectJoinAllLink() {
  const newGroup = getElementById('notification-guild-group');
  if (newGroup) { mountApp(newGroup); }
}
