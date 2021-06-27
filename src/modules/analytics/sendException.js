import getValue from '../system/getValue';
import noGa from './noGa';

export default function sendException(desc, fatal) {
  if (getValue('betaOptIn')) { //  sendException
    // eslint-disable-next-line no-console
    console.log('sendException', desc);
  }
  if (noGa()) { return; }
  ga('fshApp.send', 'exception', {
    exDescription: desc,
    exFatal: fatal,
  });
}
