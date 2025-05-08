import getElementById from '../../common/getElementById';
import hideElement from '../../common/hideElement';

export default function hideGuildLogMsg() {
  const guildLogNotification = getElementById('notification-guild-log');
  hideElement(guildLogNotification);
}
