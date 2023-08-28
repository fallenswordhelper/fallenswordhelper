import takeItem from '../../ajax/takeItem';

function formatResults(json) {
  if (json.r === 0) { return { s: true }; }
  return { e: { message: json.m }, s: false };
}

export default async function gsTake(invId) {
  const json = await takeItem(invId);
  return formatResults(json);
}
