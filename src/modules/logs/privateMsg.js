import addLogColoring from './addLogColoring';
import getUrlParameter from '../system/getUrlParameter';

export default function privateMsg() {
  if (getUrlParameter('type') === '1') {
    addLogColoring('PrivateMsg', 1, 6);
  } else {
    addLogColoring('OutBox', 1, 4);
  }
}
