import stdout from '../support/stdout';
import getCustomUrlParameter from './getCustomUrlParameter';

export default function getUrlParameter(sParam) {
  try {
    const sPageURL = decodeURIComponent(window.location.search);
    return getCustomUrlParameter(sPageURL, sParam);
  } catch (e) {
    stdout(e);
    return '';
  }
}
