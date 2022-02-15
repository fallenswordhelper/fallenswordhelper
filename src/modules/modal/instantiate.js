export default function instantiate(props, thisModal, constructor) {
  if (thisModal) {
    thisModal.$set(props);
  } else {
    return new constructor({ props, target: document.body });
  }
  return thisModal;
}
