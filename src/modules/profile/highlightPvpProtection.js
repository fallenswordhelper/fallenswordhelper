import './highlightPvpProtection.css';
import getTextTrim from '../common/getTextTrim';
import { pointsUrl } from '../support/constants';
import querySelector from '../common/querySelector';

export default function highlightPvpProtection() {
  const pvpp = querySelector(`#profileLeftColumn a[href="${pointsUrl}"]`);
  if (pvpp && getTextTrim(pvpp.parentNode.nextSibling) !== 'N/A') { // Text Node
    pvpp.parentNode.parentNode.classList.add('fshPvpWarn');
  }
}
