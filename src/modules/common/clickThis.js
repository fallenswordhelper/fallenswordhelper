export default function clickThis(el) {
  if (el instanceof Element) {
    el.click();
  }
}
