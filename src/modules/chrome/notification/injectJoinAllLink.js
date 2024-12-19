import getElementById from '../../common/getElementById';
import setInnerHtml from '../../dom/setInnerHtml';
import getValue from '../../system/getValue';
import JoinAllLink from './JoinAllLink.svelte';

function mountApp(newGroup) {
  setInnerHtml('', newGroup);
  return new JoinAllLink({
    target: newGroup,
  });
}

export default function injectJoinAllLink() {
  if (!getValue('joinAllLink')) return;
  const newGroup = getElementById('notification-guild-group');
  if (newGroup) mountApp(newGroup);
}
