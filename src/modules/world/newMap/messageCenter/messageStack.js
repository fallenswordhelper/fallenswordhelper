import getElementById from '../../../common/getElementById';
import getValue from '../../../system/getValue';
import MessageCenter from './MessageCenter.svelte';

function startApp(target, props) {
  return new MessageCenter({ target, props });
}
export default function messageStack() {
  if (getValue('messageStack')) {
    const anchor = getElementById('messageCenter');
    startApp(anchor, {});
  }
}
