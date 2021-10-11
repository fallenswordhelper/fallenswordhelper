import JoinAllLink from './JoinAllLink.svelte';
import contains from '../../common/contains';
import getArrayByTagName from '../../common/getArrayByTagName';
import getElementById from '../../common/getElementById';
import { pCL } from '../../support/layout';

function mountApp() {
  return new JoinAllLink({ target: getElementById('notifications') });
}

export default function injectJoinAllLink() {
  const newAttackGroup = getArrayByTagName('li', pCL)
    .find(contains('New attack group created.'));
  if (newAttackGroup) { mountApp(); }
}
