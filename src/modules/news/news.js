import getValue from '../system/getValue';
import addUfsgLinks from './addUfsgLinks';
import injectHomePageTwoLink from './injectHomePageTwoLink';
import lookForPvPLadder from './lookForPvPLadder';

export default function news() {
  if (getValue('pageTwoLinks')) {
    injectHomePageTwoLink();
  }
  if (getValue('addUfsgLinks')) {
    addUfsgLinks();
  }
  if (getValue('trackLadderReset')) {
    lookForPvPLadder();
  }
}
