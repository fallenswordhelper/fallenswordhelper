import Honeybadger from '@honeybadger-io/js';
import stdout from '../support/stdout';
import getValue from '../system/getValue';

export default function sendException(desc) {
  if (getValue('betaOptIn')) stdout('sendException', desc); //  sendException
  Honeybadger.notify(desc);
}
