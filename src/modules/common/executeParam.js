export default function executeParam(ary, param) {
  ary.forEach((fn) => fn(param));
}
