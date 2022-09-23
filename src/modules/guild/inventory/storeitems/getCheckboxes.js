import calf from '../../../support/calf';

let checkboxes;
let haveCheckboxes;

export default function getCheckboxes() {
  if (!haveCheckboxes) {
    const cbName = calf.subcmd === 'dropitems' ? 'removeIndex[]' : 'storeIndex[]';
    checkboxes = document.forms[0]?.elements[cbName];
    haveCheckboxes = true;
  }
  return checkboxes;
}
