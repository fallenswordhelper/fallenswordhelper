import getElementById from '../../../common/getElementById';
import MessageQueue from './MessageQueue.svelte';

const startApp = (target) => new MessageQueue({ target });

export default function messageQueue() {
  startApp(getElementById('messageCenter'));
}
