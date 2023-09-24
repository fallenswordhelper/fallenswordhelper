import { composingUrl } from '../../support/constants';
import genericNotification from './genericNotification';

export default function displayComposeMsg() {
  genericNotification('composing', 'Composing to do', composingUrl);
}
