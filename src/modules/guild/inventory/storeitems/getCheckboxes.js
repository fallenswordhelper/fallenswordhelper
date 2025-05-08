import calf from '../../../support/calf';

let checkboxes = 0;
let haveCheckboxes = 0;

export default function getCheckboxes() {
  if (!haveCheckboxes) {
    const cbName = calf.subcmd === 'dropitems' ? 'removeIndex[]' : 'storeIndex[]';
    checkboxes = document.forms[0]?.elements[cbName];
    haveCheckboxes = true;
  }
  return checkboxes;
}
