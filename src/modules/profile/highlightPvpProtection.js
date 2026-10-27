import './highlightPvpProtection.css';
import getTextTrim from '../common/getTextTrim';
import hrefIs from '../common/hrefIs';
import querySelectorArray from '../common/querySelectorArray';
import { pointsUrl } from '../support/constants';

export default function highlightPvpProtection() {
  const pvpp = querySelectorArray('#profileLeftColumn a').find(
    hrefIs(pointsUrl),
  );
  if (pvpp && getTextTrim(pvpp.parentNode.nextSibling) !== 'N/A') {
    // Text Node
    pvpp.parentNode.parentNode.classList.add('fshPvpWarn');
  }
}
