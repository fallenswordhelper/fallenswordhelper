export default function getElementsByClassName(names, element) {
  if (element) { return element.getElementsByClassName(names); }
  return document.getElementsByClassName(names);
}
