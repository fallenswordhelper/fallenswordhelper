import lookForMultiplierCount from './lookForMultiplierCount';
import lookForSendRequest from './lookForSendRequest';

export default function scavenging() {
  lookForSendRequest();
  lookForMultiplierCount();
}
