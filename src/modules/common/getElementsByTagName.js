export default function getElementsByTagName(tagName, element) {
  if (element) { return element.getElementsByTagName(tagName); }
  return document.getElementsByTagName(tagName);
}
