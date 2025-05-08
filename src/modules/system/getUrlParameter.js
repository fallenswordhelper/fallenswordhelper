import getCustomUrlParameter from './getCustomUrlParameter';

export default function getUrlParameter(sParam) {
  const sPageURL = decodeURIComponent(window.location.search);
  return getCustomUrlParameter(sPageURL, sParam);
}
