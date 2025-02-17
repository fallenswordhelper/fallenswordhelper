import { mount } from 'svelte';
import getElementById from '../../common/getElementById';
import setInnerHtml from '../../dom/setInnerHtml';
import getValue from '../../system/getValue';
import JoinAllLink from './JoinAllLink.svelte';

export default function injectJoinAllLink() {
  if (!getValue('joinAllLink')) return;
  const newGroup = getElementById('notification-guild-group');
  if (newGroup) {
    setInnerHtml('', newGroup);
    mount(JoinAllLink, { target: newGroup });
  }
}
