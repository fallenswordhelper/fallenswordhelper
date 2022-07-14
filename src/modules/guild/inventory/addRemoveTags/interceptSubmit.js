import daTagItems from '../../../_dataAccess/daTagItems';
import dynamicAlert from '../../../alert/dynamicAlert';
import sendEvent from '../../../analytics/sendEvent';
import chunk from '../../../common/chunk';
import on from '../../../common/on';
import partial from '../../../common/partial';
import querySelector from '../../../common/querySelector';
import querySelectorArray from '../../../common/querySelectorArray';
import removeRow from '../../../profile/dropitems/removeRow';

const getCheckedItems = () => querySelectorArray('[name="tagIndex[]"]:checked');
const actionType = () => querySelector('[name="subcmd2"]').value;

async function tagChunk(action, items) {
  const json = await daTagItems(action, items.map((i) => i.value));
  if (json.s) {
    items.forEach(removeRow);
  } else {
    dynamicAlert(json.e.message);
  }
}

function submitHandler(e) {
  e.preventDefault();
  chunk(25, getCheckedItems()).forEach(partial(tagChunk, actionType()));
  sendEvent('addRemoveTags', 'Tag by AJAX');
}

export default function interceptSubmit() {
  on(document.forms[0], 'submit', submitHandler);
}
