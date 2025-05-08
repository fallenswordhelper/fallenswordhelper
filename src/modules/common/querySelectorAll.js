export default function querySelectorAll(selector, scope) {
  if (scope) { return scope.querySelectorAll(selector); }
  return document.querySelectorAll(selector);
}
