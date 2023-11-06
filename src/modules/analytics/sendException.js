import stdout from '../support/stdout';
import getValue from '../system/getValue';

export default function sendException(desc, fatal) {
  if (getValue('betaOptIn')) stdout('sendException', desc); //  sendException
  gtag('event', 'exception', { description: desc, fatal });
}
