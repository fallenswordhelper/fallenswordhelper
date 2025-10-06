import devStdOut from '../support/devStdOut';
import getCustomUrlParameter from './getCustomUrlParameter';

export default function getUrlParameter(sParam) {
  try {
    const sPageURL = decodeURIComponent(window.location.search);
    return getCustomUrlParameter(sPageURL, sParam);
  } catch (e) {
    devStdOut(e);
    return '';
  }
}
