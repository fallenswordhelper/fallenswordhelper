export default function callOnce(fn) {
  return function (event) {
    if (fn) fn.call(this, event);
    fn = null;
  };
}
