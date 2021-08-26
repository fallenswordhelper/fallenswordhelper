export default function replaceChild(newChild, oldChild) {
  return oldChild?.parentNode?.replaceChild?.(newChild, oldChild);
}
