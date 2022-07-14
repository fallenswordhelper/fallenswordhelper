import bunchOfSimple from './bunchOfSimple';
import theLinks from './leftHandLinks.json';
import makeHeaderRow from './makeHeaderRow';

export default function leftHandLinks() {
  return `${makeHeaderRow('Left Hand Menu Additional Links')}`
    + '<tr><th colspan="2">Warning: Changes to the left hand menu have a '
    + 'significant impact on page load performance</th></tr>'
    + `${bunchOfSimple(theLinks)}`;
}
