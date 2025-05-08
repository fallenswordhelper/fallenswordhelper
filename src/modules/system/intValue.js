export default function intValue(theText) {
  if (!theText) { return 0; }
  return Number(theText.replace(/,/g, ''));
}
