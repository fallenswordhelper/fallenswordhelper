import contains from '../../common/contains';
import getElementsByTagName from '../../common/getElementsByTagName';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import partial from '../../common/partial';
import querySelectorArray from '../../common/querySelectorArray';
import { defTable } from '../../support/constants';
import getValue from '../../system/getValue';

function totalKey(isAllies) {
  if (isAllies) { return 'alliestotal'; }
  return 'enemiestotal';
}

function contactSlots(numberOfContacts, contactsTotal) {
  if (contactsTotal && contactsTotal >= numberOfContacts) {
    return `/${contactsTotal}`;
  }
  return '';
}

function countContacts(isAllies, el) {
  const target = el.parentNode;
  const numberOfContacts = getElementsByTagName(defTable, target.nextElementSibling).length - 1;
  insertHtmlBeforeEnd(target, `<span class="fshBlue">&nbsp;${
    numberOfContacts.toString()}${
    contactSlots(numberOfContacts, getValue(totalKey(isAllies)))}</span>`);
}

export default function profileAllyEnemy() {
  // Allies/Enemies count/total function
  const headings = querySelectorArray('#profileLeftColumn strong');
  headings.filter(contains('Allies')).forEach(partial(countContacts, true));
  headings.filter(contains('Enemies')).forEach(partial(countContacts, false));
}
