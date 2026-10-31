let checkboxes = 0;
let haveCheckboxes = 0;

export default function getCheckboxes() {
  if (!haveCheckboxes) {
    checkboxes = document.forms[0]?.elements['storeIndex[]'];
    haveCheckboxes = true;
  }
  return checkboxes;
}
