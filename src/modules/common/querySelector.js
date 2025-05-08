export default function querySelector(selector, scope) {
  if (scope) {
    return scope.querySelector(selector);
  }
  return document.querySelector(selector);
}
