import changeGuildLogHREF from '../../chrome/changeGuildLogHREF';
import getValue from '../../system/getValue';

function doIntercept(e, data) {
  if (data.b[2]) changeGuildLogHREF();
}

export default function interceptNotifications() {
  if (getValue('useNewGuildLog')) $.subscribe('notifications.player', doIntercept);
}
