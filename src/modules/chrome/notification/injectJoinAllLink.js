import getElementById from '../../common/getElementById';
import setInnerHtml from '../../dom/setInnerHtml';
import JoinAllLink from './JoinAllLink.svelte';

function mountApp(newGroup) {
  setInnerHtml('', newGroup);
  return new JoinAllLink({
    target: newGroup,
  });
}

export default function injectJoinAllLink() {
  const newGroup = getElementById('notification-guild-group');
  if (newGroup) mountApp(newGroup);
}
