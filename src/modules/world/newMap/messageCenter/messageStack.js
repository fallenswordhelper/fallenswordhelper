import getElementById from '../../../common/getElementById';
import MessageCenter from './MessageCenter.svelte';

function startApp(target, props) {
  return new MessageCenter({ target, props });
}
export default function messageStack() {
  const anchor = getElementById('messageCenter');
  startApp(anchor, {});
}
