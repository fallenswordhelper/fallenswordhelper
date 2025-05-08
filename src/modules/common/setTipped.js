export default function setTipped(value, element) {
  if (element instanceof Element) {
    // eslint-disable-next-line no-param-reassign
    element.dataset.tipped = value;
  }
}
