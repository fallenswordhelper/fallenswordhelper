export default function setTipped(value, element) {
  if (element instanceof Element) {
    element.dataset.tipped = value;
  }
}
