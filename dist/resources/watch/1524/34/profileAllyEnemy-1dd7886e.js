import { E as querySelectorArray, at as contains, s as partial, g as getElementsByTagName, d as defTable, f as insertHtmlBeforeEnd, H as getValue } from './calfSystem-d1de1997.js';

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
  const numberOfContacts = getElementsByTagName(defTable,
    target.nextElementSibling).length - 1;
  insertHtmlBeforeEnd(target, `<span class="fshBlue">&nbsp;${
    numberOfContacts.toString()}${
    contactSlots(numberOfContacts, getValue(totalKey(isAllies)))}</span>`);
}

function profileParseAllyEnemy() {
  // Allies/Enemies count/total function
  const headings = querySelectorArray('#profileLeftColumn strong');
  headings.filter(contains('Allies')).forEach(partial(countContacts, true));
  headings.filter(contains('Enemies')).forEach(partial(countContacts, false));
}

export default profileParseAllyEnemy;
//# sourceMappingURL=profileAllyEnemy-1dd7886e.js.map
