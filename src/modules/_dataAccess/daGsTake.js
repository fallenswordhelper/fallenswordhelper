import takeItem from '../ajax/takeItem';
import appTakeitem from '../app/guild/inventory/takeitem';
import $dataAccess from './$dataAccess';

function formatResults(json) {
  if (json.r === 0) {
    return { s: true };
  }
  return { e: { message: json.m }, s: false };
}

async function gsTake(invId) {
  const json = await takeItem(invId);
  return formatResults(json);
}

export default function daGsTake(invId) {
  return $dataAccess(appTakeitem, gsTake, invId);
}
