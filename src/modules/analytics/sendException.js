import stdout from '../support/stdout';
import getValue from '../system/getValue';
// import noGa from './noGa';

export default function sendException(desc, fatal) {
  if (getValue('betaOptIn')) stdout('sendException', desc); //  sendException
  // if (noGa()) return;
  // ga('fshApp.send', 'exception', {
  //   exDescription: desc,
  //   exFatal: fatal,
  // });
  gtag('event', 'exception', { description: desc, fatal });
}
